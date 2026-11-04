/*
 * Langue du site (français / anglais)
 *  - choix mémorisé par le bouton FR / EN, ou lien direct avec ?lang=en
 *  - le contenu anglais (content-en.js) est fusionné sur le contenu français
 *  - DICT traduit les textes de l'interface (menus, boutons, titres…)
 */
(function () {
  "use strict";
  const q = new URLSearchParams(location.search);
  let lang = q.get("lang");
  try {
    if (lang) localStorage.setItem("lang", lang);
    else lang = localStorage.getItem("lang");
  } catch (e) {}
  lang = lang === "en" ? "en" : "fr";
  window.LANG = lang;
  document.documentElement.lang = lang;

  // Fusion : les réalisations par « id », les documents par « url », le reste par position
  function merge(fr, en) {
    if (en === undefined || en === null) return fr;
    if (Array.isArray(fr) && Array.isArray(en)) {
      const objs = fr.length && fr[0] && typeof fr[0] === "object";
      if (!objs) return en;
      if (fr[0].id !== undefined) return fr.map((it) => merge(it, en.find((e) => e && e.id === it.id)));
      if (fr[0].url !== undefined && en.some((e) => e && e.url !== undefined)) return fr.map((it) => merge(it, en.find((e) => e && e.url === it.url)));
      return fr.map((it, i) => merge(it, en[i]));
    }
    if (fr && typeof fr === "object" && typeof en === "object") {
      const o = { ...fr };
      for (const k in en) o[k] = merge(fr[k], en[k]);
      return o;
    }
    return en;
  }
  if (lang === "en" && window.PORTFOLIO && window.PORTFOLIO_EN) window.PORTFOLIO = merge(window.PORTFOLIO, window.PORTFOLIO_EN);

  const DICT = {
    // Navigation et éléments communs
    "Aller au contenu": "Skip to content",
    "Ouvrir le menu": "Open menu",
    "Fermer le menu": "Close menu",
    "Navigation principale": "Main navigation",
    "À propos": "About",
    "Compétences": "Skills",
    "Réalisations": "Projects",
    "Veille": "Tech watch",
    "Parcours": "Background",
    "Changer de thème": "Switch theme",
    "Police adaptée à la dyslexie (OpenDyslexic)": "Dyslexia-friendly font (OpenDyslexic)",
    "Activer la police OpenDyslexic, adaptée à la dyslexie": "Turn on OpenDyslexic, a dyslexia-friendly font",
    "Désactiver la police OpenDyslexic": "Turn off OpenDyslexic",
    "Retour en haut ↑": "Back to top ↑",
    // Accueil
    "Voir mes réalisations": "See my projects",
    "Télécharger mon CV": "Download my CV",
    "Me contacter": "Contact me",
    "↖ bouge la souris · clique pour une onde": "↖ move your mouse · click for a wave",
    "Réalisations professionnelles": "Professional projects",
    "Filtrer les réalisations": "Filter projects",
    "Toutes": "All",
    "Voir la fiche →": "View details →",
    "Voir la démo ↗": "Live demo ↗",
    "Code source ↗": "Source code ↗",
    "Compétences du référentiel": "Framework skills",
    "▶ vidéo": "▶ video",
    "Tableau de synthèse — épreuve E5": "Summary table — E5 exam",
    "Compétences du référentiel BTS SIO mobilisées par chaque réalisation.": "BTS SIO framework skills used in each project.",
    "Tableau de synthèse": "Summary table",
    "Réalisation": "Project",
    "Période": "Period",
    "oui": "yes",
    "Réalisations en cours de formation": "Projects completed during coursework",
    "Réalisations en milieu professionnel en cours de première année": "Projects in a professional setting — first year",
    "Réalisations en milieu professionnel en cours de seconde année": "Projects in a professional setting — second year",
    "Documents de l'épreuve": "Exam documents",
    "Veille technologique": "Technology watch",
    "Sujet de veille": "Watch topic",
    "Outils et sources": "Tools and sources",
    "Articles récents": "Recent articles",
    "Formation": "Education",
    "Expérience": "Experience",
    "Une opportunité, une question ou simplement envie d'échanger ? Écris-moi, je réponds rapidement.":
      "An opportunity, a question, or just want to talk? Write to me — I reply quickly.",
    "Envoyer un e-mail": "Send an email",
    "Copier l'adresse": "Copy address",
    "Adresse copiée ✓": "Address copied ✓",
    "Lecteur vidéo": "Video player",
    "Fermer la vidéo": "Close video",
    "Vidéo YouTube": "YouTube video",
    // Fiche de réalisation
    "← Toutes les réalisations": "← All projects",
    "Aperçu du document": "Document preview",
    "Fermer": "Close",
    "Réalisation introuvable": "Project not found",
    "Cette fiche n'existe pas ou a été renommée.": "This page doesn't exist or has been renamed.",
    "Voir toutes les réalisations": "See all projects",
    "Contexte": "Context",
    "Objectifs": "Objectives",
    "Environnement technique": "Technical environment",
    "Mise en œuvre": "Implementation",
    "Résultats et tests": "Results and tests",
    "Documents et productions": "Documents and deliverables",
    "Les documents de cette réalisation (procédures, schémas, captures, configurations) seront bientôt disponibles.":
      "Documents for this project (procedures, diagrams, screenshots, configurations) will be available soon.",
    "Aperçu": "Preview",
    "Télécharger": "Download",
    "Ouvrir ↗": "Open ↗",
    "LIEN": "LINK",
    "Compétences mobilisées": "Skills used",
    "À renseigner.": "To be completed.",
    "Autres réalisations": "Other projects",
    "← Précédente": "← Previous",
    "Suivante →": "Next →",
    // Rapport de stage
    "Rapport de stage — Hoppen": "Internship report — Hoppen",
    "← Retour au parcours": "← Back to background",
    "Rapport de stage": "Internship report",
    "Stagiaire": "Intern",
    "Tuteur entreprise": "Company supervisor",
    "Imprimer / enregistrer en PDF": "Print / save as PDF",
    "Sommaire": "Contents",
    "Version publiée en ligne : les noms des membres de l'équipe et certaines informations internes à l'entreprise ont été retirés. La version complète est remise au jury.":
      "Online version: team members' names and some internal company information have been removed. The full version is given to the exam board. This report is written in French.",
  };

  // T("texte français") ou T("texte français", "English text")
  window.T = (fr, en) => (lang === "en" ? en || DICT[fr] || fr : fr);

  // Traduit les textes et attributs d'une partie de la page (sauf [data-i18n-skip])
  window.translateDOM = (root) => {
    if (lang !== "en" || !root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const n of nodes) {
      const el = n.parentElement;
      if (!el || el.closest("[data-i18n-skip], script, style")) continue;
      const s = n.nodeValue.trim();
      if (s && DICT[s]) n.nodeValue = n.nodeValue.replace(s, DICT[s]);
    }
    root.querySelectorAll("[aria-label], [title], [alt]").forEach((el) => {
      if (el.closest("[data-i18n-skip]")) return;
      for (const a of ["aria-label", "title", "alt"]) {
        const v = (el.getAttribute(a) || "").trim();
        if (v && DICT[v]) el.setAttribute(a, DICT[v]);
      }
    });
    if (DICT[document.title]) document.title = DICT[document.title];
  };
})();
