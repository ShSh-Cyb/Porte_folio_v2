/* Fiche détaillée d'une réalisation : realisation.html?id=<id> */
(function () {
  "use strict";
  const D = window.PORTFOLIO;
  const $ = (s) => document.querySelector(s);
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const safeUrl = (u) => (/^(https?:|\.?\/|assets\/|docs\/)/i.test(u || "") ? u : "");
  const ext = (u) => (String(u).split(/[?#]/)[0].match(/\.(\w+)$/) || [, ""])[1].toLowerCase();
  const youtubeId = (u) => {
    const m = String(u || "").match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
    return m ? m[1] : "";
  };
  const chips = (list) => `<ul class="chips">${list.map((t) => `<li class="chip">${esc(t)}</li>`).join("")}</ul>`;
  const ctxLabel = (c) =>
    ({ formation: "Réalisation en cours de formation", "pro-1": "Stage — 1re année", "pro-2": "Alternance — 2e année" })[c] || c;

  const nomComplet = `${D.profil.prenom} ${D.profil.nom}`.trim();
  $("#footerTxt").textContent = `© ${new Date().getFullYear()} ${nomComplet}`;

  const id = new URLSearchParams(location.search).get("id");
  const list = D.projets.filter((p) => p.id);
  const idx = list.findIndex((p) => p.id === id);
  const box = $("#fiche");

  if (idx === -1) {
    document.title = `Réalisation introuvable — ${nomComplet}`;
    box.innerHTML = `<div class="fiche__empty"><h1>Réalisation introuvable</h1><p>Cette fiche n'existe pas ou a été renommée.</p><a class="btn btn--primary" href="index.html#projets">Voir toutes les réalisations</a></div>`;
    return;
  }

  const pr = list[idx];
  const f = pr.fiche || {};
  const ref = D.referentiel || [];
  document.title = `${pr.titre} — ${nomComplet}`;

  /* ---------- Média ---------- */
  const yt = youtubeId(pr.video);
  let media = "";
  if (yt) {
    media = `<div class="fiche__media"><iframe src="https://www.youtube-nocookie.com/embed/${yt}?rel=0" title="Vidéo : ${esc(pr.titre)}" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe></div>`;
  } else if (safeUrl(pr.video)) {
    media = `<div class="fiche__media"><video src="${esc(pr.video)}" ${safeUrl(pr.image) ? `poster="${esc(pr.image)}"` : ""} controls playsinline preload="metadata"></video></div>`;
  } else if (safeUrl(pr.image)) {
    media = `<div class="fiche__media"><img src="${esc(pr.image)}" alt="Aperçu de ${esc(pr.titre)}" /></div>`;
  }

  /* ---------- Sections ---------- */
  const section = (title, html) => (html ? `<section class="fiche__block"><h2>${title}</h2>${html}</section>` : "");
  const ul = (arr, cls = "") => (arr && arr.length ? `<ul class="${cls}">${arr.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : "");
  const ol = (arr) => (arr && arr.length ? `<ol class="steps">${arr.map((x) => `<li>${esc(x)}</li>`).join("")}</ol>` : "");

  /* ---------- Documents / artefacts ---------- */
  const docs = (pr.documents || []).filter((d) => safeUrl(d.url));
  const icon = (e) => ({ pdf: "📄", png: "🖼️", jpg: "🖼️", jpeg: "🖼️", webp: "🖼️", gif: "🖼️", svg: "🖼️", mp4: "🎬", webm: "🎬", pkt: "🌐", zip: "🗜️", txt: "📝", md: "📝", conf: "⚙️", cfg: "⚙️", sh: "⚙️", ps1: "⚙️", docx: "📝", xlsx: "📊" })[e] || "📎";
  const previewable = (e) => ["pdf", "png", "jpg", "jpeg", "webp", "gif", "svg", "txt", "md"].includes(e);
  const docsHtml = docs.length
    ? `<ul class="artefacts">${docs
        .map((d, i) => {
          const e = ext(d.url);
          return `<li class="artefact">
            <span class="artefact__icon" aria-hidden="true">${icon(e)}</span>
            <span class="artefact__info"><strong>${esc(d.label)}</strong>${d.description ? `<small>${esc(d.description)}</small>` : ""}<small class="mono">${esc(e.toUpperCase() || "LIEN")}</small></span>
            <span class="artefact__actions">
              ${previewable(e) ? `<button class="btn btn--ghost" type="button" data-doc="${i}">Aperçu</button>` : ""}
              <a class="btn btn--ghost" href="${esc(d.url)}" target="_blank" rel="noopener" ${/^https?:/.test(d.url) ? "" : "download"}>${/^https?:/.test(d.url) ? "Ouvrir ↗" : "Télécharger"}</a>
            </span>
          </li>`;
        })
        .join("")}</ul>`
    : `<p class="muted">Les documents de cette réalisation (procédures, schémas, captures, configurations) seront bientôt disponibles.</p>`;

  /* ---------- Compétences ---------- */
  const comps = (pr.competences || [])
    .filter((n) => ref[n - 1])
    .map(
      (n) => `<li><details><summary><span class="mono">C${n}</span> ${esc(ref[n - 1].nom)}</summary>${ul(ref[n - 1].details)}</details></li>`
    )
    .join("");

  const prev = list[(idx - 1 + list.length) % list.length];
  const next = list[(idx + 1) % list.length];
  const links = [
    safeUrl(pr.lien) && `<a class="btn btn--ghost" href="${esc(pr.lien)}" target="_blank" rel="noopener">Voir la démo ↗</a>`,
    safeUrl(pr.code) && `<a class="btn btn--ghost" href="${esc(pr.code)}" target="_blank" rel="noopener">Code source ↗</a>`,
  ].filter(Boolean).join("");

  box.innerHTML = `
    <header class="fiche__head">
      <div class="project__meta">
        ${pr.contexte ? `<span class="ctx ctx--${pr.contexte !== "formation" ? "pro" : "form"}">${esc(ctxLabel(pr.contexte))}</span>` : ""}
        ${pr.periode ? `<span class="mono">${esc(pr.periode)}</span>` : ""}
      </div>
      <h1>${esc(pr.titre)}</h1>
      <p class="fiche__lead">${esc(pr.description)}</p>
      ${chips(pr.tags || [])}
    </header>
    ${media}
    <div class="fiche__grid">
      <div class="fiche__main">
        ${section("Contexte", f.contexte ? `<p>${esc(f.contexte)}</p>` : "")}
        ${section("Objectifs", ul(f.objectifs, "bullets"))}
        ${section("Environnement technique", f.environnement && f.environnement.length ? chips(f.environnement) : "")}
        ${section("Mise en œuvre", ol(f.etapes))}
        ${section("Résultats et tests", f.resultats ? `<p>${esc(f.resultats)}</p>` : "")}
        <section class="fiche__block" id="documents"><h2>Documents et productions <span class="count">${docs.length}</span></h2>${docsHtml}</section>
      </div>
      <aside class="fiche__side">
        <div class="side-card">
          <h2>Compétences mobilisées</h2>
          ${comps ? `<ul class="comp-list">${comps}</ul>` : `<p class="muted">À renseigner.</p>`}
        </div>
        ${links ? `<div class="side-card side-card--links">${links}</div>` : ""}
      </aside>
    </div>
    <nav class="fiche__pager" aria-label="Autres réalisations">
      <a href="realisation.html?id=${encodeURIComponent(prev.id)}"><small>← Précédente</small>${esc(prev.titre)}</a>
      <a href="realisation.html?id=${encodeURIComponent(next.id)}"><small>Suivante →</small>${esc(next.titre)}</a>
    </nav>`;

  /* ---------- Aperçu des documents ---------- */
  const modal = $("#docModal");
  const body = $("#docBody");
  box.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-doc]");
    if (!btn) return;
    const d = docs[+btn.dataset.doc];
    const e2 = ext(d.url);
    body.innerHTML =
      e2 === "pdf" || e2 === "txt" || e2 === "md"
        ? `<iframe src="${esc(d.url)}" title="${esc(d.label)}"></iframe>`
        : `<img src="${esc(d.url)}" alt="${esc(d.label)}" />`;
    modal.showModal();
  });
  $("#docClose").addEventListener("click", () => modal.close());
  modal.addEventListener("click", (e) => e.target === modal && modal.close());
  modal.addEventListener("close", () => (body.innerHTML = ""));
})();
