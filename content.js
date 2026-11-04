/*
 * ============================================================
 *  CONTENU DU PORTFOLIO — c'est le SEUL fichier à modifier.
 * ============================================================
 *  Les valeurs entre « [ ] » restent à compléter.
 *  Pour retirer une section optionnelle, vide sa liste : [].
 */
window.PORTFOLIO = {
  profil: {
    prenom: "Shoghi",
    nom: "Sheida",
    titre: "Technicien systèmes et réseaux — BTS SIO SISR en alternance",
    titresAnimes: [
      "Technicien systèmes & réseaux",
      "En alternance à Saint-Malo Agglomération",
      "Étudiant BTS SIO option SISR",
      "Certifié Cisco",
    ],
    accroche:
      "Curieux, rigoureux et passionné par l'univers IT, je me reconvertis vers les systèmes et réseaux après dix ans de régie technique dans le spectacle vivant. En BTS SIO SISR à My Digital School (Rennes), en alternance à Saint-Malo Agglomération.",
    localisation: "Ille-et-Vilaine (35)",
    disponibilite: "En alternance — Saint-Malo Agglomération",
    photo: "assets/photo.jpg",
    cv: "", // ex. "assets/CV.pdf" (laisser vide pour masquer le bouton)
    videoFond: "", // ex. "assets/fond.mp4" — sinon animation de particules
  },

  apropos: [
    "Pendant dix ans, j'ai été régisseur son, vidéo et plateau dans le spectacle vivant et l'événementiel, notamment à l'ADAC Dôme Théâtre d'Albertville. J'y ai découvert les réseaux en configurant des systèmes audio sur IP (Dante) : c'est ce qui m'a donné envie d'en faire mon métier.",
    "J'ai donc entrepris une reconversion : je prépare aujourd'hui un BTS SIO option SISR (Solutions d'Infrastructure, Systèmes et Réseaux) à My Digital School, en alternance au sein de Saint-Malo Agglomération. J'y développe mes compétences en administration systèmes, réseaux et cybersécurité.",
    "En dehors de l'informatique : basse, didgeridoo et guimbarde, escalade (bloc) et cirque aérien.",
  ],

  chiffres: [
    { valeur: "10 ans", label: "de régie technique dans le spectacle" },
    { valeur: "2", label: "certifications Cisco" },
    { valeur: "SISR", label: "BTS SIO en alternance" },
  ],

  competences: [
    {
      categorie: "Réseau",
      items: ["Cisco Packet Tracer", "LAN", "Routage", "Adressage IP", "VLAN", "Wireshark", "Client-serveur", "Dante (audio sur IP)"],
    },
    {
      categorie: "Systèmes",
      items: ["Linux (Debian / Ubuntu)", "Windows Server", "Active Directory", "Utilisateurs & droits", "Services réseau", "GLPI"],
    },
    {
      categorie: "Cybersécurité",
      items: ["Sécurité des systèmes et réseaux", "Pare-feu", "Sauvegardes", "Bonnes pratiques mots de passe", "Menaces & vulnérabilités"],
    },
    {
      categorie: "Développement web",
      items: ["HTML", "CSS", "JavaScript", "WordPress", "VS Code"],
    },
    {
      categorie: "Transversales",
      items: ["Travail en équipe", "Autonomie", "Curiosité", "Veille technologique"],
    },
    {
      categorie: "Habilitations",
      items: ["SST", "Électrique BR / H1V", "Travail en hauteur", "SIAP"],
    },
  ],

  /*
   * Les 6 compétences du bloc 1 du référentiel BTS SIO (épreuve E5),
   * reprises du tableau de synthèse officiel. Les réalisations y font
   * référence par leur numéro (1 à 6).
   */
  referentiel: [
    {
      nom: "Gérer le patrimoine informatique",
      details: [
        "Recenser et identifier les ressources numériques",
        "Exploiter des référentiels, normes et standards adoptés par le prestataire informatique",
        "Mettre en place et vérifier les niveaux d'habilitation associés à un service",
        "Vérifier les conditions de la continuité d'un service informatique",
        "Gérer des sauvegardes",
        "Vérifier le respect des règles d'utilisation des ressources numériques",
      ],
    },
    {
      nom: "Répondre aux incidents et aux demandes d'assistance et d'évolution",
      details: [
        "Collecter, suivre et orienter des demandes",
        "Traiter des demandes concernant les services réseau et système, applicatifs",
        "Traiter des demandes concernant les applications",
      ],
    },
    {
      nom: "Développer la présence en ligne de l'organisation",
      details: [
        "Participer à la valorisation de l'image de l'organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques",
        "Référencer les services en ligne de l'organisation et mesurer leur visibilité",
        "Participer à l'évolution d'un site Web exploitant les données de l'organisation",
      ],
    },
    {
      nom: "Travailler en mode projet",
      details: [
        "Analyser les objectifs et les modalités d'organisation d'un projet",
        "Planifier les activités",
        "Évaluer les indicateurs de suivi d'un projet et analyser les écarts",
      ],
    },
    {
      nom: "Mettre à disposition des utilisateurs un service informatique",
      details: [
        "Réaliser les tests d'intégration et d'acceptation d'un service",
        "Déployer un service",
        "Accompagner les utilisateurs dans la mise en place d'un service",
      ],
    },
    {
      nom: "Organiser son développement professionnel",
      details: [
        "Mettre en place son environnement d'apprentissage personnel",
        "Mettre en œuvre des outils et stratégies de veille informationnelle",
        "Gérer son identité professionnelle",
        "Développer son projet professionnel",
      ],
    },
  ],

  /*
   * RÉALISATIONS PROFESSIONNELLES (épreuve E5)
   * Chaque réalisation a sa propre fiche détaillée : realisation.html?id=<id>
   *
   *  id         : identifiant court, sans espace ni accent (sert aussi de nom de dossier : docs/<id>/)
   *  contexte   : "formation", "alternance-1" (1re année) ou "alternance-2" (2e année)
   *  periode    : format du tableau E5 « JJ/MM/AA au JJ/MM/AA »
   *  competences: numéros du référentiel (1 à 6) mobilisés
   *  fiche      : le contenu détaillé affiché sur la fiche
   *  documents  : tes artefacts. Dépose-les dans docs/<id>/ puis liste-les :
   *               { label: "Procédure d'installation", url: "docs/glpi/procedure.pdf" }
   *               Les PDF et images s'affichent directement sur la fiche.
   *  video      : "docs/<id>/demo.mp4" (aperçu au survol) ou lien YouTube
   */
  projets: [
    {
      id: "glpi",
      titre: "Mise en place d'une solution de gestion des tickets GLPI",
      contexte: "formation",
      periode: "[JJ/MM/AA au JJ/MM/AA]",
      description:
        "Installation et configuration de GLPI pour centraliser l'inventaire du parc et le suivi des demandes d'assistance des utilisateurs.",
      tags: ["GLPI", "Linux", "Helpdesk"],
      competences: [1, 2, 5],
      fiche: {
        contexte: "[Contexte : pour quelle organisation (réelle ou fictive) et quel besoin ?]",
        objectifs: ["Centraliser les demandes d'assistance", "Inventorier le parc informatique", "[Autre objectif]"],
        environnement: ["GLPI", "[Système — ex. Debian 12]", "[Serveur web / BDD — ex. Apache, MariaDB]"],
        etapes: ["[Étape 1 — ex. Installation du serveur]", "[Étape 2 — ex. Installation et configuration de GLPI]", "[Étape 3 — ex. Création des profils et des catégories de tickets]"],
        resultats: "[Ce qui fonctionne à la fin, les tests réalisés, ce que tu améliorerais.]",
      },
      documents: [],
      lien: "",
      code: "",
      image: "",
      video: "",
    },
    {
      id: "lan-vlan",
      titre: "Conception d'un réseau LAN segmenté (VLAN)",
      contexte: "formation",
      periode: "[JJ/MM/AA au JJ/MM/AA]",
      description:
        "Maquette sous Cisco Packet Tracer : plan d'adressage IP, création de VLAN, routage inter-VLAN, puis vérification des flux avec Wireshark.",
      tags: ["Cisco", "VLAN", "Routage", "Wireshark"],
      competences: [1, 5],
      fiche: {
        contexte: "[Contexte et besoin de segmentation.]",
        objectifs: ["Segmenter le réseau par service", "Mettre en place le routage inter-VLAN", "[Autre objectif]"],
        environnement: ["Cisco Packet Tracer", "Wireshark", "[Matériel simulé — ex. switch 2960, routeur 1941]"],
        etapes: ["[Étape 1 — ex. Plan d'adressage]", "[Étape 2 — ex. Création des VLAN et des ports trunk]", "[Étape 3 — ex. Routage inter-VLAN et tests]"],
        resultats: "[Tests de connectivité (ping, captures), résultats obtenus.]",
      },
      documents: [],
      lien: "",
      code: "",
      image: "",
      video: "",
    },
    {
      id: "active-directory",
      titre: "Administration Windows Server et Active Directory",
      contexte: "formation",
      periode: "[JJ/MM/AA au JJ/MM/AA]",
      description:
        "Création d'un domaine Active Directory, gestion des utilisateurs, des groupes et des droits d'accès, mise à disposition de services réseau.",
      tags: ["Windows Server", "Active Directory"],
      competences: [1, 5],
      fiche: {
        contexte: "[Contexte.]",
        objectifs: ["Centraliser la gestion des comptes", "Gérer les droits d'accès par groupes", "[Autre objectif]"],
        environnement: ["Windows Server [version]", "Active Directory", "[DNS, DHCP…]"],
        etapes: ["[Étape 1]", "[Étape 2]", "[Étape 3]"],
        resultats: "[Résultats et tests.]",
      },
      documents: [],
      lien: "",
      code: "",
      image: "",
      video: "",
    },
    {
      id: "wordpress",
      titre: "Site WordPress : développement local et migration",
      contexte: "formation",
      periode: "[JJ/MM/AA au JJ/MM/AA]",
      description: "Création d'un site WordPress dans un environnement local, puis migration vers un serveur d'hébergement.",
      tags: ["WordPress", "Web"],
      competences: [3, 5],
      fiche: {
        contexte: "[Contexte.]",
        objectifs: ["[Objectif]"],
        environnement: ["WordPress", "[Environnement local — ex. XAMPP / Local]", "[Hébergeur]"],
        etapes: ["[Étape 1]", "[Étape 2]", "[Étape 3]"],
        resultats: "[Résultats.]",
      },
      documents: [],
      lien: "",
      code: "",
      image: "",
      video: "",
    },
    {
      id: "portfolio",
      titre: "Portfolio professionnel",
      contexte: "formation",
      periode: "[JJ/MM/AA au JJ/MM/AA]",
      description:
        "Conception de ce portfolio en HTML, CSS et JavaScript, publié sur GitHub Pages, pour présenter mon parcours, mes réalisations et ma veille.",
      tags: ["HTML", "CSS", "JavaScript", "GitHub"],
      competences: [3, 6],
      fiche: {
        contexte: "Le portfolio est un attendu de l'épreuve E5 du BTS SIO : il retrace mon parcours de professionnalisation et donne accès à mes réalisations.",
        objectifs: ["Présenter mon parcours et mes réalisations", "Gérer mon identité professionnelle en ligne", "Rendre mes documents accessibles au jury"],
        environnement: ["HTML", "CSS", "JavaScript", "Git / GitHub", "GitHub Pages"],
        etapes: ["Conception de la structure et de la charte graphique", "Développement des pages et des fiches de réalisation", "Publication et mise à jour via GitHub Pages"],
        resultats: "Site responsive, accessible et en ligne, mis à jour au fil de la formation.",
      },
      documents: [],
      lien: "",
      code: "https://github.com/ShSh-Cyb/Porte_folio_v2",
      image: "",
      video: "",
    },
    {
      id: "alternance-1",
      titre: "[Réalisation en alternance — titre à compléter]",
      contexte: "alternance-1",
      periode: "[JJ/MM/AA au JJ/MM/AA]",
      description: "[Contexte à Saint-Malo Agglomération, ce que tu as fait, le résultat pour les utilisateurs.]",
      tags: ["[Techno]"],
      competences: [],
      fiche: {
        contexte: "[Le service, le besoin exprimé, les contraintes.]",
        objectifs: ["[Objectif]"],
        environnement: ["[Outil / système]"],
        etapes: ["[Étape 1]", "[Étape 2]"],
        resultats: "[Résultat pour les utilisateurs.]",
      },
      documents: [],
      lien: "",
      code: "",
      image: "",
      video: "",
    },
  ],

  /*
   * DOCUMENTS DE L'ÉPREUVE (affichés seulement s'ils ont une url)
   * Attention : ces documents seront publics si le site est en ligne.
   */
  documentsE5: [
    { label: "Tableau de synthèse E5", url: "" }, // ex. "docs/tableau-synthese-E5.pdf"
    { label: "Certificat de travail / attestation d'alternance", url: "" },
    { label: "CV", url: "" },
  ],

  /* VEILLE TECHNOLOGIQUE (compétence « Organiser son développement professionnel ») */
  veille: {
    sujet: "Évolutions des réseaux et de la cybersécurité",
    description:
      "[Pourquoi ce sujet, quelle problématique tu suis, ce que tu en as retenu. Le jury te posera des questions dessus.]",
    outils: ["[Outil — ex. Feedly]", "[Outil — ex. Google Alertes]", "[Source — ex. CERT-FR]"],
    articles: [
      // { titre: "Titre de l'article", source: "Site", date: "MM/AAAA", url: "https://…" },
    ],
  },

  parcours: [
    {
      type: "experience",
      periode: "[Début] — aujourd'hui",
      titre: "Alternance — Technicien systèmes et réseaux",
      lieu: "Saint-Malo Agglomération",
      details: "[Tes missions principales en alternance.]",
    },
    {
      type: "formation",
      periode: "Sept. 2025 — aujourd'hui",
      titre: "BTS SIO option SISR",
      lieu: "My Digital School — Rennes",
      details: "Solutions d'Infrastructure, Systèmes et Réseaux, en alternance.",
    },
    {
      type: "experience",
      periode: "2020 — 2025",
      titre: "Régisseur son et vidéo",
      lieu: "ADAC Dôme Théâtre — Albertville (73)",
      details: "Régie son et vidéo des spectacles, configuration de réseaux audio Dante.",
    },
    {
      type: "experience",
      periode: "2019",
      titre: "Technicien son",
      lieu: "AMS Invisia — événementiel",
      details: "",
    },
    {
      type: "experience",
      periode: "2018",
      titre: "Technicien plateau",
      lieu: "GDS Prod — La Garenne-Colombes (92)",
      details: "",
    },
    {
      type: "experience",
      periode: "2016 — 2018",
      titre: "AVS (accompagnant de vie scolaire)",
      lieu: "Lycée Raoul Vadepied",
      details: "",
    },
    {
      type: "experience",
      periode: "2015 — 2020",
      titre: "Régisseur général",
      lieu: "Association « Nomadsland »",
      details: "",
    },
    {
      type: "formation",
      periode: "2015",
      titre: "Titre professionnel niveau III — Régisseur son du spectacle vivant et de l'événementiel",
      lieu: "ITEMM — Le Mans (72)",
      details: "",
    },
    {
      type: "formation",
      periode: "2013",
      titre: "Faculté de musique et musicologie",
      lieu: "Université Rennes 2",
      details: "Atelier pratique de jazz.",
    },
    {
      type: "formation",
      periode: "2012",
      titre: "Baccalauréat scientifique",
      lieu: "Lycée Marguerite de Navarre — Alençon (61)",
      details: "Option facultative théâtre.",
    },
  ],

  certifications: [
    { nom: "Networking Basics", organisme: "Cisco Networking Academy", annee: "", lien: "" },
    { nom: "[2e certification Cisco — nom à compléter]", organisme: "Cisco Networking Academy", annee: "", lien: "" },
  ],

  contact: {
    email: "shoghijean@gmail.com",
    github: "https://github.com/ShSh-Cyb",
    linkedin: "", // ex. "https://www.linkedin.com/in/ton-profil"
    autre: { label: "", url: "" },
  },
};
