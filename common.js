/* Code partagé par toutes les pages : thème, menu mobile, ombre de la barre de navigation. */
(function () {
  "use strict";
  const $ = (s) => document.querySelector(s);
  const T = window.T || ((s) => s);

  /* ---------- Traduction des textes fixes de la page ---------- */
  if (window.translateDOM) window.translateDOM(document.body);

  /* ---------- Bouton de langue FR / EN ---------- */
  const langBtn = $("#langBtn");
  if (langBtn) {
    const en = window.LANG === "en";
    langBtn.textContent = en ? "FR" : "EN";
    langBtn.title = en ? "Version française" : "English version";
    langBtn.setAttribute("aria-label", langBtn.title);
    langBtn.setAttribute("lang", en ? "fr" : "en");
    langBtn.addEventListener("click", () => {
      try { localStorage.setItem("lang", en ? "fr" : "en"); } catch (e) {}
      const u = new URL(location.href);
      u.searchParams.delete("lang");
      if (!en) u.searchParams.set("lang", "en"); // garde le choix même sans stockage local
      location.href = u.toString();
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

  /* ---------- Police adaptée à la dyslexie (bouton « Aa ») ---------- */
  const dysBtn = $("#dysBtn");
  if (dysBtn) {
    const sync = () => {
      const on = root.dataset.dys === "1";
      dysBtn.setAttribute("aria-pressed", on);
      dysBtn.setAttribute("aria-label", T(on ? "Désactiver la police OpenDyslexic" : "Activer la police OpenDyslexic, adaptée à la dyslexie"));
    };
    dysBtn.addEventListener("click", () => {
      if (root.dataset.dys === "1") delete root.dataset.dys;
      else root.dataset.dys = "1";
      try { localStorage.setItem("dys", root.dataset.dys === "1" ? "1" : "0"); } catch (e) {}
      sync();
    });
    sync();
  }

  /* ---------- Menu mobile ---------- */
  const toggle = $("#navToggle");
  const links = $("#navLinks");
  const setMenu = (open) => {
    links.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", T(open ? "Fermer le menu" : "Ouvrir le menu"));
  };
  toggle.addEventListener("click", () => setMenu(!links.classList.contains("open")));
  links.addEventListener("click", (e) => e.target.tagName === "A" && setMenu(false));
  document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));

  /* ---------- Nav : ombre au scroll ---------- */
  const nav = $(".nav");
  addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 8), { passive: true });

})();
