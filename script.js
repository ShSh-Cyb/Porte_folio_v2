(function () {
  "use strict";
  const D = window.PORTFOLIO;
  const $ = (s) => document.querySelector(s);

  // Échappe le texte injecté (évite les problèmes avec <, &, etc.)
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const safeUrl = (u) => (/^(https?:|mailto:|\.?\/|assets\/|docs\/|[\w-]+\.html(\?|#|$)|[\w-]+\.(pdf|png|jpe?g|webp|svg|gif|mp4|webm)$)/i.test(u || "") ? u : "");
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const youtubeId = (u) => {
    const m = String(u || "").match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
    return m ? m[1] : "";
  };
  const playIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
  const chips = (list) => `<ul class="chips">${list.map((t) => `<li class="chip">${esc(t)}</li>`).join("")}</ul>`;

  const p = D.profil;
  const nomComplet = `${p.prenom} ${p.nom}`.trim();

  /* ---------- Hero ---------- */
  document.title = `${nomComplet} — ${p.titre}`;
  $("#heroNom").textContent = nomComplet;
  $("#heroAccroche").textContent = p.accroche;
  $("#heroDispo").textContent = p.disponibilite;
  if (!p.disponibilite) $("#heroDispo").hidden = true;
  if (p.cv) Object.assign($("#heroCv"), { href: p.cv, hidden: false });

  const avatar = $("#avatar");
  const avStyle = document.documentElement.dataset.avatar;
  const avSrc = ["illustration", "pochoir", "crayon"].includes(avStyle) ? `assets/avatar-${avStyle}.png` : p.photo;
  if (avSrc) {
    avatar.innerHTML = `<img src="${esc(avSrc)}" alt="${avSrc === p.photo ? "Photo" : "Portrait dessiné"} de ${esc(nomComplet)}" />`;
  } else {
    const ini = (p.prenom.replace(/\W/g, "")[0] || "") + (p.nom.replace(/\W/g, "")[0] || "");
    avatar.textContent = ini.toUpperCase() || "</>";
  }

  /* ---------- À propos ---------- */
  $("#aboutText").innerHTML = D.apropos.map((t) => `<p>${esc(t)}</p>`).join("");
  $("#stats").innerHTML = D.chiffres
    .map((c) => `<li><strong>${esc(c.valeur)}</strong><span>${esc(c.label)}</span></li>`)
    .join("");

  /* ---------- Compétences ---------- */
  $("#skills").innerHTML = D.competences
    .map((c) => `<article class="skill-card"><h3>${esc(c.categorie)}</h3>${chips(c.items)}</article>`)
    .join("");

  /* ---------- Projets + filtres ---------- */
  const ref = D.referentiel || [];
  const ctxLabel = (c) =>
    ({ formation: "Formation", "pro-1": "Stage — 1re année", "pro-2": "Alternance — 2e année" })[c] || c;
  const projets = $("#projects");
  projets.innerHTML = D.projets
    .map((pr) => {
      const fiche = pr.id ? `realisation.html?id=${encodeURIComponent(pr.id)}` : "";
      const yt = youtubeId(pr.video);
      const vid = !yt && safeUrl(pr.video);
      const poster = safeUrl(pr.image) || (yt ? `https://i.ytimg.com/vi/${yt}/hqdefault.jpg` : "");
      const play = `<button class="play-btn" type="button" data-video="${esc(pr.video)}" aria-label="Lire la vidéo : ${esc(pr.titre)}">${playIcon}</button>`;
      let media;
      if (vid) {
        media = `<video src="${esc(pr.video)}" ${poster ? `poster="${esc(poster)}"` : ""} muted loop playsinline preload="metadata" aria-hidden="true"></video>
          <span class="media-badge">▶ vidéo</span>${play}`;
      } else if (yt) {
        media = `<img src="${esc(poster)}" alt="Aperçu de ${esc(pr.titre)}" loading="lazy" onerror="this.remove()" /><span class="media-badge">YouTube</span>${play}`;
      } else if (poster) {
        media = `<img src="${esc(poster)}" alt="Aperçu de ${esc(pr.titre)}" loading="lazy" />`;
      } else {
        media = `<div class="project__placeholder"><span>${esc(pr.tags[0] || "projet")}</span></div>`;
      }
      const img = `<div class="project__media">${media}</div>`;
      const links = [
        fiche && `<a href="${fiche}">Voir la fiche →</a>`,
        safeUrl(pr.lien) && `<a href="${esc(pr.lien)}" target="_blank" rel="noopener">Voir la démo ↗</a>`,
        safeUrl(pr.code) && `<a href="${esc(pr.code)}" target="_blank" rel="noopener">Code source ↗</a>`,
      ].filter(Boolean).join("");
      const comps = (pr.competences || [])
        .map((n) => `<li title="${esc((ref[n - 1] || {}).nom || "")}">C${n}</li>`)
        .join("");
      const nDocs = (pr.documents || []).filter((d) => safeUrl(d.url)).length;
      return `<article class="project" data-ctx="${esc(pr.contexte || "")}">
        ${img}
        <div class="project__body">
          <div class="project__meta">
            ${pr.contexte ? `<span class="ctx ctx--${pr.contexte !== "formation" ? "pro" : "form"}">${esc(ctxLabel(pr.contexte))}</span>` : ""}
            ${pr.periode ? `<span class="mono">${esc(pr.periode)}</span>` : ""}
          </div>
          <h3>${fiche ? `<a class="project__title" href="${fiche}">${esc(pr.titre)}</a>` : esc(pr.titre)}</h3>
          <p>${esc(pr.description)}</p>
          ${chips(pr.tags)}
          ${comps ? `<ul class="comps" aria-label="Compétences du référentiel">${comps}</ul>` : ""}
          ${nDocs ? `<p class="docs-count">📎 ${nDocs} document${nDocs > 1 ? "s" : ""} joint${nDocs > 1 ? "s" : ""}</p>` : ""}
          ${links ? `<div class="project__links">${links}</div>` : ""}
        </div>
      </article>`;
    })
    .join("");

  const ctxs = [...new Set(D.projets.map((pr) => pr.contexte).filter(Boolean))];
  const filters = $("#filters");
  if (ctxs.length > 1) {
    filters.innerHTML = [["", "Toutes"], ...ctxs.map((c) => [c, ctxLabel(c)])]
      .map(([v, l], i) => `<button class="filter" type="button" aria-pressed="${i === 0}" data-tag="${esc(v)}">${esc(l)}</button>`)
      .join("");
    filters.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter");
      if (!btn) return;
      filters.querySelectorAll(".filter").forEach((b) => b.setAttribute("aria-pressed", b === btn));
      const tag = btn.dataset.tag;
      projets.querySelectorAll(".project").forEach((card) => {
        card.hidden = tag && card.dataset.ctx !== tag;
      });
    });
  } else {
    filters.hidden = true;
  }

  /* ---------- Tableau de synthèse E5 ---------- */
  if (ref.length && D.projets.length) {
    const head = `<thead><tr><th scope="col">Réalisation</th><th scope="col">Période</th>${ref
      .map((r, i) => `<th scope="col" title="${esc(r.nom)}"><span class="mono">C${i + 1}</span><small>${esc(r.nom)}</small></th>`)
      .join("")}</tr></thead>`;
    const groups = ["formation", "pro-1", "pro-2"];
    const titles = {
      formation: "Réalisations en cours de formation",
      "pro-1": "Réalisations en milieu professionnel en cours de première année",
      "pro-2": "Réalisations en milieu professionnel en cours de seconde année",
    };
    const body = groups
      .map((g) => {
        const rows = D.projets.filter((pr) => (pr.contexte || "formation") === g);
        if (!rows.length) return "";
        return `<tr class="grp"><th colspan="${ref.length + 2}" scope="rowgroup">${titles[g]}</th></tr>${rows
          .map(
            (pr) => `<tr><th scope="row">${pr.id ? `<a href="realisation.html?id=${encodeURIComponent(pr.id)}">${esc(pr.titre)}</a>` : esc(pr.titre)}</th><td class="mono">${esc(pr.periode || "")}</td>${ref
              .map((r, i) => ((pr.competences || []).includes(i + 1) ? `<td class="yes"><span aria-hidden="true">✓</span><span class="sr-only">oui</span></td>` : "<td></td>"))
              .join("")}</tr>`
          )
          .join("")}`;
      })
      .join("");
    $("#synthese").innerHTML = head + `<tbody>${body}</tbody>`;
  } else {
    $("#syntheseWrap").hidden = true;
  }

  /* ---------- Veille technologique ---------- */
  const vl = D.veille;
  if (vl && vl.sujet) {
    const arts = (vl.articles || [])
      .map(
        (a) => `<li class="article">
          ${safeUrl(a.url) ? `<a href="${esc(a.url)}" target="_blank" rel="noopener">${esc(a.titre)} ↗</a>` : `<strong>${esc(a.titre)}</strong>`}
          <span class="mono">${esc([a.source, a.date].filter(Boolean).join(" · "))}</span>
        </li>`
      )
      .join("");
    $("#veilleBox").innerHTML = `
      <div class="veille__intro">
        <p class="eyebrow mono">Sujet de veille</p>
        <h3>${esc(vl.sujet)}</h3>
        <p>${esc(vl.description)}</p>
      </div>
      <div class="veille__side">
        <h4>Outils et sources</h4>
        ${chips(vl.outils || [])}
      </div>
      ${arts ? `<div class="veille__articles"><h4>Articles récents</h4><ul>${arts}</ul></div>` : ""}`;
  } else {
    $("#veille").hidden = true;
    const a = document.querySelector('.nav__links a[href="#veille"]');
    if (a) a.hidden = true;
  }

  /* ---------- Parcours ---------- */
  $("#timeline").innerHTML = D.parcours
    .map(
      (it) => `<li class="tl-item tl-item--${it.type === "formation" ? "formation" : "experience"}">
        <div class="tl-meta"><span class="tl-badge">${it.type === "formation" ? "Formation" : "Expérience"}</span><span>${esc(it.periode)}</span></div>
        <h3>${esc(it.titre)}</h3>
        <p class="tl-lieu">${esc(it.lieu)}</p>
        ${it.details ? `<p>${esc(it.details)}</p>` : ""}
        ${it.lien && safeUrl(it.lien.url) ? `<p class="tl-link"><a href="${esc(it.lien.url)}">${esc(it.lien.label)}</a></p>` : ""}
      </li>`
    )
    .join("");

  if (D.certifications.length) {
    $("#certs").innerHTML = D.certifications
      .map((c) => {
        const nom = safeUrl(c.lien) ? `<a href="${esc(c.lien)}" target="_blank" rel="noopener">${esc(c.nom)}</a>` : esc(c.nom);
        return `<li class="cert"><strong>${nom}</strong><span>${esc([c.organisme, c.annee].filter(Boolean).join(" · "))}</span></li>`;
      })
      .join("");
  } else {
    $("#certsWrap").hidden = true;
  }

  /* ---------- Documents de l'épreuve ---------- */
  const docsE5 = (D.documentsE5 || []).filter((d) => safeUrl(d.url));
  if (docsE5.length) {
    $("#docsE5").innerHTML = docsE5
      .map((d) => `<li><a class="btn btn--ghost" href="${esc(d.url)}" target="_blank" rel="noopener">📄 ${esc(d.label)}</a></li>`)
      .join("");
  } else {
    $("#docsE5Wrap").hidden = true;
  }

  /* ---------- Contact ---------- */
  const ct = D.contact;
  $("#emailLink").href = `mailto:${ct.email}`;
  $("#copyEmail").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(ct.email);
      $("#copied").textContent = "Adresse copiée ✓";
    } catch (e) {
      $("#copied").textContent = ct.email;
    }
    setTimeout(() => ($("#copied").textContent = ""), 2500);
  });

  const icons = {
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8 0 3.2.8.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.5V9h3.6v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"/></svg>',
    link: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.6 13.4a1 1 0 0 1 0-1.4l3.5-3.5a1 1 0 1 1 1.4 1.4L12 13.4a1 1 0 0 1-1.4 0zM8.5 19.8a4.3 4.3 0 0 1-3-7.3l2.1-2.1a1 1 0 0 1 1.4 1.4L6.9 14a2.3 2.3 0 0 0 3.2 3.2l2.1-2.1a1 1 0 1 1 1.4 1.4l-2.1 2.1a4.3 4.3 0 0 1-3 1.2zm7.9-6.5a1 1 0 0 1-.7-1.7l2.1-2.1A2.3 2.3 0 0 0 14.6 6.3L12.5 8.4a1 1 0 0 1-1.4-1.4l2.1-2.1a4.3 4.3 0 0 1 6.1 6.1l-2.1 2.1a1 1 0 0 1-.8.2z"/></svg>',
  };
  const socials = [
    ct.github && { url: ct.github, label: "GitHub", icon: icons.github },
    ct.linkedin && { url: ct.linkedin, label: "LinkedIn", icon: icons.linkedin },
    ct.autre && ct.autre.url && { url: ct.autre.url, label: ct.autre.label || "Lien", icon: icons.link },
  ].filter((s) => s && safeUrl(s.url));
  $("#socials").innerHTML = socials
    .map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${s.icon}${esc(s.label)}</a></li>`)
    .join("");

  $("#footerTxt").textContent = `© ${new Date().getFullYear()} ${nomComplet}`;

  /* ---------- Délai d'apparition en cascade ---------- */
  document.querySelectorAll(".projects, .skills, .timeline").forEach((list) =>
    [...list.children].forEach((el, i) => el.style.setProperty("--i", i))
  );

  /* ---------- Titre « machine à écrire » ---------- */
  const titres = (p.titresAnimes || []).filter(Boolean);
  const typed = $("#typed");
  if (!titres.length) {
    typed.textContent = $("#heroTitre").textContent = p.titre;
  } else if (reduceMotion) {
    typed.textContent = titres[0];
    $("#heroTitre").textContent = titres.join(" · ");
  } else {
    $("#heroTitre").textContent = titres.join(" · ");
    let ti = 0, ci = 0, del = false;
    const tick = () => {
      const word = titres[ti];
      ci += del ? -1 : 1;
      typed.textContent = word.slice(0, ci);
      let wait = del ? 35 : 70;
      if (!del && ci === word.length) { del = true; wait = 1800; }
      else if (del && ci === 0) { del = false; ti = (ti + 1) % titres.length; wait = 350; }
      setTimeout(tick, wait);
    };
    tick();
  }

  /* ---------- Fond de l'accueil : vidéo ou particules interactives ---------- */
  const heroVideo = $("#heroVideo");
  if (safeUrl(p.videoFond)) {
    heroVideo.src = p.videoFond;
    heroVideo.hidden = false;
    $("#heroCanvas").hidden = true;
    $("#heroHint").hidden = true;
    if (reduceMotion) heroVideo.removeAttribute("autoplay"), heroVideo.pause();
  } else {
    const fond = document.documentElement.dataset.fond;
    const cv = $("#heroCanvas");
    if (fond !== "particules") $("#heroHint").hidden = true;
    if (fond === "particules") initParticles(cv);
    else if (fond === "reseau") runCanvas(cv, networkScene());
    else if (fond === "ondes") runCanvas(cv, wavesScene());
    else cv.hidden = true; // grille, degrade, aucun : fonds en CSS
  }

  /* Boucle d'animation commune : taille, pause hors écran, couleur du thème */
  function runCanvas(canvas, scene) {
    const ctx = canvas.getContext("2d");
    let w = 0, h = 0, color = "#60a5fa", running = false, onScreen = true, last = 0, t = 0;
    const readColor = () => (color = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || color);
    const draw = (dt) => scene.frame(ctx, w, h, dt, t, color);
    function resize() {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      scene.setup(w, h);
      draw(0);
    }
    function loop(ts) {
      if (!running) return;
      const dt = last ? Math.min(50, ts - last) : 16;
      last = ts; t += dt;
      draw(dt);
      requestAnimationFrame(loop);
    }
    const setRunning = () => {
      const should = !reduceMotion && onScreen && !document.hidden;
      if (should && !running) { running = true; last = 0; requestAnimationFrame(loop); }
      else if (!should) running = false;
    };
    new IntersectionObserver(([en]) => { onScreen = en.isIntersecting; setRunning(); }).observe(canvas);
    document.addEventListener("visibilitychange", setRunning);
    new MutationObserver(() => { readColor(); draw(0); }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme", "data-palette"] });
    matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => { readColor(); draw(0); });
    let rt;
    addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(resize, 150); });
    readColor(); resize(); setRunning();
  }

  /* Fond « réseau » : topologie fixe, des paquets circulent lentement entre les nœuds */
  function networkScene() {
    let nodes = [], edges = [], packets = [];
    return {
      setup(w, h) {
        const step = Math.max(110, Math.min(w, h) / 4.5);
        nodes = [];
        for (let y = step / 2; y < h; y += step)
          for (let x = step / 2; x < w; x += step)
            if (Math.random() < 0.72)
              nodes.push({ x: x + (Math.random() - 0.5) * step * 0.6, y: y + (Math.random() - 0.5) * step * 0.6, hub: Math.random() < 0.12, glow: 0 });
        edges = [];
        nodes.forEach((a, i) => {
          nodes
            .map((b, j) => [j, Math.hypot(a.x - b.x, a.y - b.y)])
            .filter(([j]) => j > i)
            .sort((p, q) => p[1] - q[1])
            .slice(0, 2)
            .forEach(([j, d]) => d < step * 1.7 && edges.push({ a: i, b: j, d }));
        });
        packets = [];
      },
      frame(ctx, w, h, dt, t, color) {
        ctx.clearRect(0, 0, w, h);
        ctx.strokeStyle = ctx.fillStyle = color;
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.16;
        ctx.beginPath();
        for (const e of edges) { ctx.moveTo(nodes[e.a].x, nodes[e.a].y); ctx.lineTo(nodes[e.b].x, nodes[e.b].y); }
        ctx.stroke();
        if (edges.length && packets.length < Math.max(3, edges.length / 8) && Math.random() < dt / 260) {
          const e = edges[(Math.random() * edges.length) | 0];
          packets.push({ e, p: 0, fwd: Math.random() < 0.5 });
        }
        for (let i = packets.length - 1; i >= 0; i--) {
          const k = packets[i], A = nodes[k.fwd ? k.e.a : k.e.b], B = nodes[k.fwd ? k.e.b : k.e.a];
          k.p += (dt * 0.07) / k.e.d;
          if (k.p >= 1) { B.glow = 1; packets.splice(i, 1); continue; }
          const x = A.x + (B.x - A.x) * k.p, y = A.y + (B.y - A.y) * k.p;
          ctx.globalAlpha = 0.9;
          ctx.beginPath(); ctx.arc(x, y, 2.2, 0, Math.PI * 2); ctx.fill();
          ctx.globalAlpha = 0.15;
          ctx.beginPath(); ctx.arc(x, y, 7, 0, Math.PI * 2); ctx.fill();
        }
        for (const n of nodes) {
          n.glow = Math.max(0, n.glow - dt / 900);
          ctx.globalAlpha = 0.35 + n.glow * 0.6;
          ctx.beginPath(); ctx.arc(n.x, n.y, n.hub ? 3.4 : 2, 0, Math.PI * 2); ctx.fill();
          if (n.hub) { ctx.globalAlpha = 0.25; ctx.beginPath(); ctx.arc(n.x, n.y, 7, 0, Math.PI * 2); ctx.stroke(); }
        }
        ctx.globalAlpha = 1;
      },
    };
  }

  /* Fond « ondes » : formes d'onde sonores qui ondulent lentement (clin d'œil à la régie son) */
  function wavesScene() {
    return {
      setup() {},
      frame(ctx, w, h, dt, t, color) {
        ctx.clearRect(0, 0, w, h);
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;
        for (let k = 0; k < 4; k++) {
          const amp = h * (0.05 + k * 0.022), f = 0.0042 + k * 0.0011, ph = t * 0.00035 * (k + 1), y0 = h * (0.62 + k * 0.045);
          ctx.globalAlpha = 0.1 + k * 0.06;
          ctx.beginPath();
          for (let x = 0; x <= w; x += 4) {
            const env = Math.sin((x / w) * Math.PI);
            const y = y0 + (Math.sin(x * f + ph) + 0.35 * Math.sin(x * f * 2.4 - ph * 1.6)) * amp * env;
            x ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
          }
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      },
    };
  }

  function initParticles(canvas) {
    const ctx = canvas.getContext("2d");
    const LINK = 120, MOUSE_R = 170, MAX = 140;
    let w = 0, h = 0, pts = [], color = "#3ddc97", running = false, onScreen = true;
    const mouse = { x: -1e4, y: -1e4 };
    const waves = [];

    const readColor = () => (color = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || color);
    const spawn = (x, y) => ({
      x: x ?? Math.random() * w, y: y ?? Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5, r: Math.random() * 1.6 + 0.8,
    });
    function resize() {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(110, (w * h) / 11000));
      pts = Array.from({ length: n }, () => spawn());
      draw();
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = ctx.strokeStyle = color;
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j], dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
          if (d2 < LINK * LINK) {
            ctx.globalAlpha = (1 - Math.sqrt(d2) / LINK) * 0.35;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        const mx = a.x - mouse.x, my = a.y - mouse.y, md = Math.hypot(mx, my);
        if (md < MOUSE_R) {
          ctx.globalAlpha = (1 - md / MOUSE_R) * 0.7;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
        ctx.globalAlpha = 0.8;
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
      }
      for (const wv of waves) {
        ctx.globalAlpha = Math.max(0, 1 - wv.r / 260) * 0.6;
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(wv.x, wv.y, wv.r, 0, Math.PI * 2); ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }
    function update() {
      for (const a of pts) {
        const dx = mouse.x - a.x, dy = mouse.y - a.y, d = Math.hypot(dx, dy);
        if (d < MOUSE_R && d > 1) { a.vx += (dx / d) * 0.02; a.vy += (dy / d) * 0.02; } // attirées par la souris
        a.vx += (Math.random() - 0.5) * 0.03; a.vy += (Math.random() - 0.5) * 0.03;
        a.vx *= 0.985; a.vy *= 0.985;
        const sp = Math.hypot(a.vx, a.vy);
        if (sp > 2.5) { a.vx *= 2.5 / sp; a.vy *= 2.5 / sp; }
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > w) { a.vx *= -1; a.x = Math.min(Math.max(a.x, 0), w); }
        if (a.y < 0 || a.y > h) { a.vy *= -1; a.y = Math.min(Math.max(a.y, 0), h); }
      }
      for (let i = waves.length - 1; i >= 0; i--) if ((waves[i].r += 6) > 260) waves.splice(i, 1);
    }
    function loop() {
      if (!running) return;
      update(); draw();
      requestAnimationFrame(loop);
    }
    const setRunning = () => {
      const should = !reduceMotion && onScreen && !document.hidden;
      if (should && !running) { running = true; requestAnimationFrame(loop); }
      else if (!should) running = false;
    };

    const wrap = canvas.parentElement;
    wrap.addEventListener("pointermove", (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
      if (reduceMotion) draw();
    });
    wrap.addEventListener("pointerleave", () => { mouse.x = mouse.y = -1e4; if (reduceMotion) draw(); });
    wrap.addEventListener("click", (e) => {
      if (e.target.closest("a, button")) return;
      const r = canvas.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      // Onde de choc : repousse les particules et en ajoute quelques-unes
      for (const a of pts) {
        const dx = a.x - x, dy = a.y - y, d = Math.hypot(dx, dy) || 1;
        if (d < 220) { const f = (1 - d / 220) * 6; a.vx += (dx / d) * f; a.vy += (dy / d) * f; }
      }
      for (let k = 0; k < 5 && pts.length < MAX; k++) {
        const q = spawn(x, y), ang = Math.random() * Math.PI * 2;
        q.vx = Math.cos(ang) * 2; q.vy = Math.sin(ang) * 2; pts.push(q);
      }
      waves.push({ x, y, r: 0 });
      if (reduceMotion) draw();
    });

    new IntersectionObserver(([en]) => { onScreen = en.isIntersecting; setRunning(); }).observe(canvas);
    document.addEventListener("visibilitychange", setRunning);
    new MutationObserver(() => { readColor(); draw(); }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => { readColor(); draw(); });
    let rt;
    addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(resize, 150); });
    readColor(); resize(); setRunning();
  }

  /* ---------- Vidéos des projets : aperçu + lecteur ---------- */
  const cards = [...projets.querySelectorAll(".project")];
  cards.forEach((card) => {
    const v = card.querySelector(".project__media video");
    if (!v || reduceMotion) return;
    if (finePointer) {
      card.addEventListener("mouseenter", () => v.play().catch(() => {}));
      card.addEventListener("mouseleave", () => { v.pause(); v.currentTime = 0; });
    }
  });
  if (!finePointer && !reduceMotion) {
    // Sur mobile : l'aperçu se lance quand la carte est bien visible
    const vio = new IntersectionObserver(
      (entries) => entries.forEach((en) => (en.isIntersecting ? en.target.play().catch(() => {}) : en.target.pause())),
      { threshold: 0.6 }
    );
    projets.querySelectorAll(".project__media video").forEach((v) => vio.observe(v));
  }

  const modal = $("#videoModal");
  const modalBody = $("#modalBody");
  const closeModal = () => modal.open && modal.close();
  projets.addEventListener("click", (e) => {
    const btn = e.target.closest(".play-btn");
    if (!btn) return;
    const src = btn.dataset.video, yt = youtubeId(src);
    modalBody.innerHTML = yt
      ? `<iframe src="https://www.youtube-nocookie.com/embed/${yt}?autoplay=1&rel=0" title="Vidéo YouTube" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`
      : `<video src="${esc(src)}" controls autoplay playsinline></video>`;
    modal.showModal();
  });
  $("#modalClose").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => e.target === modal && closeModal()); // clic hors de la vidéo
  modal.addEventListener("close", () => (modalBody.innerHTML = "")); // arrête la lecture

  /* ---------- Cartes qui s'inclinent sous la souris ---------- */
  if (finePointer && !reduceMotion) {
    cards.forEach((card) => {
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        card.classList.add("tilting");
        card.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 8}deg) rotateY(${(x - 0.5) * 8}deg) translateY(-3px)`;
        card.style.setProperty("--mx", `${x * 100}%`);
        card.style.setProperty("--my", `${y * 100}%`);
      });
      card.addEventListener("pointerleave", () => {
        card.classList.remove("tilting");
        card.style.transform = "";
      });
    });
  }

  const links = $("#navLinks");
  const navLinks = [...links.querySelectorAll("a")];
  const spy = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (en.isIntersecting)
          navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${en.target.id}`));
      }),
    { rootMargin: "-45% 0px -50% 0px" }
  );
  document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));

  /* ---------- Apparition au scroll ---------- */
  const reveal = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("visible");
          reveal.unobserve(en.target);
        }
      }),
    { threshold: 0.1 }
  );
  document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));
})();
