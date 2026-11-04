(function () {
  "use strict";
  const D = window.PORTFOLIO;
  const $ = (s) => document.querySelector(s);

  // Échappe le texte injecté (évite les problèmes avec <, &, etc.)
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const safeUrl = (u) => (/^(https?:|mailto:|\.?\/|assets\/|[\w-]+\.(pdf|png|jpe?g|webp|svg)$)/i.test(u || "") ? u : "");
  const chips = (list) => `<ul class="chips">${list.map((t) => `<li class="chip">${esc(t)}</li>`).join("")}</ul>`;

  const p = D.profil;
  const nomComplet = `${p.prenom} ${p.nom}`.trim();

  /* ---------- Hero ---------- */
  document.title = `${nomComplet} — ${p.titre}`;
  $("#heroNom").textContent = nomComplet;
  $("#heroTitre").textContent = p.titre;
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
      const img = safeUrl(pr.image)
        ? `<img class="project__img" src="${esc(pr.image)}" alt="Aperçu de ${esc(pr.titre)}" loading="lazy" />`
        : `<div class="project__img project__img--placeholder">${esc(pr.tags[0] || "projet")}</div>`;
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
