/*
 * ============================================================
 *  CONTENU DU PORTFOLIO — c'est le SEUL fichier à modifier.
 * ============================================================
 *  Remplace les valeurs entre « [ ] » par tes vraies infos.
 *  Pour retirer une section, vide simplement sa liste : [].
 */
window.PORTFOLIO = {
  profil: {
    prenom: "[Prénom]",
    nom: "[Nom]",
    titre: "[Ton titre — ex. Étudiant en cybersécurité]",
    accroche:
      "[Une phrase qui résume qui tu es et ce que tu cherches — ex. Je recherche une alternance en sécurité offensive à partir de septembre.]",
    localisation: "[Ville, Pays]",
    disponibilite: "[ex. Disponible pour une alternance — sept. 2027]",
    photo: "", // ex. "assets/photo.jpg" (laisser vide pour afficher les initiales)
    cv: "", // ex. "assets/CV.pdf" (laisser vide pour masquer le bouton)
  },

  apropos: [
    "[Paragraphe 1 — ton parcours en quelques lignes : formation actuelle, comment tu es arrivé(e) dans ce domaine.]",
    "[Paragraphe 2 — ce qui te motive, tes centres d'intérêt techniques, ce que tu veux faire ensuite.]",
  ],

  chiffres: [
    { valeur: "[X]", label: "projets réalisés" },
    { valeur: "[X]", label: "années d'études" },
    { valeur: "[X]", label: "certifications" },
  ],

  competences: [
    { categorie: "[Catégorie 1 — ex. Langages]", items: ["[Compétence]", "[Compétence]", "[Compétence]"] },
    { categorie: "[Catégorie 2 — ex. Systèmes & réseaux]", items: ["[Compétence]", "[Compétence]", "[Compétence]"] },
    { categorie: "[Catégorie 3 — ex. Outils]", items: ["[Compétence]", "[Compétence]", "[Compétence]"] },
    { categorie: "[Catégorie 4 — ex. Soft skills]", items: ["[Compétence]", "[Compétence]", "[Compétence]"] },
  ],

  projets: [
    {
      titre: "[Nom du projet 1]",
      description:
        "[2-3 phrases : le problème, ce que tu as fait, le résultat. Un chiffre concret rend le projet plus crédible.]",
      tags: ["[Techno]", "[Techno]"],
      lien: "", // démo en ligne
      code: "", // lien GitHub
      image: "", // ex. "assets/projet1.png"
    },
    {
      titre: "[Nom du projet 2]",
      description: "[Description du projet.]",
      tags: ["[Techno]", "[Techno]"],
      lien: "",
      code: "",
      image: "",
    },
    {
      titre: "[Nom du projet 3]",
      description: "[Description du projet.]",
      tags: ["[Techno]", "[Techno]"],
      lien: "",
      code: "",
      image: "",
    },
  ],

  parcours: [
    {
      type: "experience", // "experience" ou "formation"
      periode: "[2025 — aujourd'hui]",
      titre: "[Poste / Diplôme]",
      lieu: "[Entreprise / École]",
      details: "[Missions principales ou spécialisation.]",
    },
    {
      type: "formation",
      periode: "[2023 — 2025]",
      titre: "[Diplôme]",
      lieu: "[École]",
      details: "[Spécialité, mention, projets marquants.]",
    },
  ],

  certifications: [
    { nom: "[Certification]", organisme: "[Organisme]", annee: "[Année]", lien: "" },
  ],

  contact: {
    email: "[ton.email@exemple.com]",
    github: "https://github.com/ShSh-Cyb",
    linkedin: "", // ex. "https://www.linkedin.com/in/ton-profil"
    autre: { label: "", url: "" }, // ex. TryHackMe, Root-Me, blog…
  },
};
