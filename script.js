(function () {
  "use strict";
  const D = window.PORTFOLIO;
  const $ = (s) => document.querySelector(s);

  // Échappe le texte injecté (évite les problèmes avec <, &, etc.)
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const safeUrl = (u) => (/^(https?:|mailto:|\.?\/|assets\/|[\w-]+\.(pdf|png|jpe?g|webp|svg|gif|mp4|webm)$)/i.test(u || "") ? u : "");
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
  if (p.photo) {
    avatar.innerHTML = `<img src="${esc(p.photo)}" alt="Photo de ${esc(nomComplet)}" />`;
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
  const projets = $("#projects");
  projets.innerHTML = D.projets
    .map((pr) => {
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
        safeUrl(pr.lien) && `<a href="${esc(pr.lien)}" target="_blank" rel="noopener">Voir la démo ↗</a>`,
        safeUrl(pr.code) && `<a href="${esc(pr.code)}" target="_blank" rel="noopener">Code source ↗</a>`,
      ].filter(Boolean).join("");
      return `<article class="project" data-tags="${esc(pr.tags.join("|"))}">
        ${img}
        <div class="project__body">
          <h3>${esc(pr.titre)}</h3>
          <p>${esc(pr.description)}</p>
          ${chips(pr.tags)}
          ${links ? `<div class="project__links">${links}</div>` : ""}
        </div>
      </article>`;
    })
    .join("");

  const allTags = [...new Set(D.projets.flatMap((pr) => pr.tags))];
  const filters = $("#filters");
  if (allTags.length > 1 && D.projets.length > 3) {
    filters.innerHTML = ["Tous", ...allTags]
      .map((t, i) => `<button class="filter" type="button" aria-pressed="${i === 0}" data-tag="${i === 0 ? "" : esc(t)}">${esc(t)}</button>`)
      .join("");
    filters.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter");
      if (!btn) return;
      filters.querySelectorAll(".filter").forEach((b) => b.setAttribute("aria-pressed", b === btn));
      const tag = btn.dataset.tag;
      projets.querySelectorAll(".project").forEach((card) => {
        card.hidden = tag && !card.dataset.tags.split("|").includes(tag);
      });
    });
  } else {
    filters.hidden = true;
  }

  /* ---------- Parcours ---------- */
  $("#timeline").innerHTML = D.parcours
    .map(
      (it) => `<li class="tl-item tl-item--${it.type === "formation" ? "formation" : "experience"}">
        <div class="tl-meta"><span class="tl-badge">${it.type === "formation" ? "Formation" : "Expérience"}</span><span>${esc(it.periode)}</span></div>
        <h3>${esc(it.titre)}</h3>
        <p class="tl-lieu">${esc(it.lieu)}</p>
        <p>${esc(it.details)}</p>
      </li>`
    )
    .join("");

  if (D.certifications.length) {
    $("#certs").innerHTML = D.certifications
      .map((c) => {
        const nom = safeUrl(c.lien) ? `<a href="${esc(c.lien)}" target="_blank" rel="noopener">${esc(c.nom)}</a>` : esc(c.nom);
        return `<li class="cert"><strong>${nom}</strong><span>${esc(c.organisme)} · ${esc(c.annee)}</span></li>`;
      })
      .join("");
  } else {
    $("#certsWrap").hidden = true;
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
    initParticles($("#heroCanvas"));
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

  /* ---------- Thème clair / sombre ---------- */
  const root = document.documentElement;
  $("#themeBtn").addEventListener("click", () => {
    const current = root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  /* ---------- Menu mobile ---------- */
  const toggle = $("#navToggle");
  const links = $("#navLinks");
  const setMenu = (open) => {
    links.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
  };
  toggle.addEventListener("click", () => setMenu(!links.classList.contains("open")));
  links.addEventListener("click", (e) => e.target.tagName === "A" && setMenu(false));
  document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));

  /* ---------- Nav : ombre au scroll + lien actif ---------- */
  const nav = $(".nav");
  addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 8), { passive: true });

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
