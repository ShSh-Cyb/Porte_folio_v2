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
      "Administrateur systèmes et réseaux en alternance",
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
    "Pendant dix ans, j'ai été régisseur son, vidéo et plateau dans le spectacle vivant et l'événementiel, notamment au Dôme Théâtre d'Albertville. J'y ai découvert les réseaux en configurant des systèmes audio sur IP (Dante) : c'est ce qui m'a donné envie d'en faire mon métier.",
    "J'ai donc entrepris une reconversion : je prépare aujourd'hui un BTS SIO option SISR (Solutions d'Infrastructure, Systèmes et Réseaux) à My Digital School. Après un stage de technicien DSI chez Hoppen, je suis en alternance comme administrateur systèmes et réseaux à Saint-Malo Agglomération. J'y développe mes compétences en administration systèmes, réseaux et cybersécurité.",
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
      items: ["Linux (Debian / Ubuntu)", "Windows Server", "Active Directory", "Windows 11", "BitLocker", "PowerShell", "Winget", "Ventoy", "ChromeOS Flex", "Utilisateurs & droits", "GLPI"],
    },
    {
      categorie: "Cybersécurité",
      items: ["OpenVPN", "Certificats", "Chiffrement BitLocker", "Sécurité des systèmes et réseaux", "Pare-feu", "Sauvegardes", "Menaces & vulnérabilités"],
    },
    {
      categorie: "Support & outils",
      items: ["Jira (ticketing)", "TeamViewer", "ManageEngine Endpoint Central", "Rédaction de procédures"],
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
   *  contexte   : "formation", "pro-1" (milieu professionnel 1re année — stage Hoppen)
   *               ou "pro-2" (milieu professionnel 2e année — alternance Saint-Malo Agglomération)
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
      id: "migration-windows-11",
      titre: "Migration du parc de postes de Windows 10 vers Windows 11",
      contexte: "pro-1",
      periode: "29/06/26 au 31/08/26",
      description:
        "Rédaction d'une procédure interne de migration et suivi poste par poste via une checklist Jira en onze étapes, en amont de la fin du support de Windows 10.",
      tags: ["Windows 11", "BitLocker", "Winget", "Jira"],
      competences: [1, 4, 5],
      fiche: {
        contexte:
          "Stage de technicien DSI chez Hoppen (Rennes), entreprise spécialisée dans les solutions digitales pour les établissements de santé. La fin du support de Windows 10 imposait de migrer les postes de travail. Pour que l'opération soit identique sur tout le parc, il fallait une procédure standardisée et un suivi précis de l'avancement.",
        objectifs: [
          "Migrer les postes vers Windows 11 sans perte de données",
          "Standardiser l'opération avec une procédure reproductible",
          "Suivre l'avancement poste par poste",
        ],
        environnement: ["Windows 10 / 11", "PC Health Check", "BitLocker", "Winget", "Jira"],
        etapes: [
          "Vérification de la compatibilité matérielle (processeur, RAM, TPM 2.0, Secure Boot)",
          "Création d'un compte local dédié à l'installation, indépendant du compte de l'utilisateur",
          "Sauvegarde des données utilisateur, point de restauration et contrôle de l'espace disque",
          "Suspension puis réactivation de BitLocker, avec sauvegarde de la clé de récupération",
          "Mise à jour de Windows et des logiciels via Winget, puis mise à niveau",
          "Vérifications post-migration (pilotes, imprimantes, VPN, logiciels métier) et nettoyage de disque",
          "Formalisation de la procédure en checklist Jira à onze étapes",
        ],
        resultats:
          "Migrations sécurisées : aucune perte de données et chiffrement toujours actif en fin de procédure. La checklist Jira donne une vision claire de l'avancement et facilite la reprise en cas d'interruption.",
      },
      documents: [],
      lien: "",
      code: "",
      image: "",
      video: "",
    },
    {
      id: "deploiement-ventoy",
      titre: "Automatisation du déploiement des postes Windows 11 (PowerShell, clé Ventoy)",
      contexte: "pro-1",
      periode: "29/06/26 au 31/08/26",
      description:
        "Conception d'un script PowerShell de post-installation embarqué sur la clé Ventoy : installation des logiciels et agents, nettoyage des applications, profils « site » et « siège ».",
      tags: ["PowerShell", "Ventoy", "Winget", "Automatisation"],
      competences: [1, 5],
      fiche: {
        contexte:
          "Stage de technicien DSI chez Hoppen (Rennes), entreprise spécialisée dans les solutions digitales pour les établissements de santé. L'installation des nouveaux postes demandait de nombreuses opérations manuelles après Windows. L'objectif était de les automatiser de façon fiable et reproductible.",
        objectifs: [
          "Automatiser la configuration post-installation des postes",
          "Garantir une configuration identique et conforme sur tout le parc",
          "Pouvoir rejouer le script sur un poste déjà en service",
        ],
        environnement: ["PowerShell", "Ventoy", "autounattend.xml", "Winget", "Agent GLPI", "ManageEngine Endpoint Central"],
        etapes: [
          "Architecture en deux niveaux : un script « bootstrap » dans autounattend.xml qui localise la clé par son étiquette de volume, puis un script principal identique sur toutes les clés",
          "Installation de Chrome, Firefox, de l'agent GLPI et de l'agent Endpoint Central via Winget ou en mode silencieux",
          "Suppression des applications préinstallées non désirées, y compris dans le paquet provisionné pour les futurs comptes",
          "Application d'un profil de déploiement « site » ou « siège »",
          "Script rejouable, journalisation de chaque étape et pop-up récapitulatif en fin d'exécution",
          "Choix, avec le maître de stage, de confier TeamViewer à Endpoint Central pour respecter la charte de l'entreprise",
        ],
        resultats:
          "Déploiement automatisé et rejouable. Plusieurs problèmes diagnostiqués et corrigés : blocage silencieux de Winget en mode non surveillé, échec global dû au partage d'un même processus PowerShell (script principal isolé dans un processus séparé), indisponibilité temporaire de Winget au premier démarrage (détection avec attente bornée), curseur de volume bloqué après l'installation des pilotes.",
      },
      documents: [],
      lien: "",
      code: "",
      image: "",
      video: "",
    },
    {
      id: "openvpn",
      titre: "Sécurisation des accès distants avec OpenVPN",
      contexte: "pro-1",
      periode: "29/06/26 au 31/08/26",
      description:
        "Participation au déploiement d'une surcouche de mot de passe sur les certificats OpenVPN, pour mettre fin au partage de sessions VPN restées ouvertes.",
      tags: ["OpenVPN", "Certificats", "Sécurité"],
      competences: [1, 5],
      fiche: {
        contexte:
          "Stage de technicien DSI chez Hoppen (Rennes), entreprise spécialisée dans les solutions digitales pour les établissements de santé. Le mot de passe réseau, complexe, était souvent enregistré dans OpenVPN GUI : des sessions restaient ouvertes et plusieurs personnes finissaient par partager un même accès. La solution retenue : un mot de passe propre au certificat, que l'application ne peut pas mémoriser.",
        objectifs: [
          "Supprimer le partage d'accès VPN entre utilisateurs",
          "Imposer une saisie à chaque connexion sans compliquer l'usage",
          "Documenter la procédure",
        ],
        environnement: ["OpenVPN", "Certificats .p12", "Profils .ovpn", "PowerShell / OpenSSL"],
        etapes: [
          "Identification nominative des utilisateurs avec les responsables d'équipe (un certificat par personne)",
          "Re-chiffrement des certificats réalisé par le maître de stage (droits d'accès requis)",
          "Déploiement des certificats sur les postes et adaptation des profils .ovpn",
          "Vérification de la connexion pour chaque utilisateur",
          "Mise au propre de la documentation de la procédure",
        ],
        resultats:
          "Accès distants sécurisés et nominatifs. Cette mission m'a montré qu'un problème de sécurité recouvre souvent un enjeu d'usage, et qu'un déploiement se prépare avec les équipes utilisatrices.",
      },
      documents: [],
      lien: "",
      code: "",
      image: "",
      video: "",
    },
    {
      id: "diagnostic-certificat",
      titre: "Diagnostic d'un incident de certificat bloquant plusieurs services",
      contexte: "pro-1",
      periode: "29/06/26 au 31/08/26",
      description:
        "Traitement d'un ticket : erreurs de certificat sur Jira et l'outil de gestion des temps, et perte de remontée de l'agent Endpoint Central sur les postes d'un site distant.",
      tags: ["Diagnostic", "Certificats", "Jira", "Support"],
      competences: [2],
      fiche: {
        contexte:
          "Stage de technicien DSI chez Hoppen (Rennes), entreprise spécialisée dans les solutions digitales pour les établissements de santé. Des utilisateurs d'un site distant ne pouvaient plus accéder à Jira ni à l'outil de gestion des temps : les navigateurs signalaient un certificat non valide.",
        objectifs: [
          "Identifier l'origine de l'incident",
          "Rétablir l'accès aux outils en attendant une correction durable",
        ],
        environnement: ["Microsoft Edge", "Jira", "ManageEngine Endpoint Central"],
        etapes: [
          "Reproduction du problème sur un second poste",
          "Constat d'une perte de remontée de l'agent Endpoint Central sur les deux machines",
          "Hypothèse d'une interception réseau en amont, plutôt que d'un problème de poste",
          "Mise en place d'un contournement isolé : profil Edge séparé, limité aux sites de confiance nécessaires",
          "Documentation du compromis de sécurité associé",
        ],
        resultats:
          "Accès rétabli sans toucher à la session habituelle de l'utilisateur, qui reste protégée normalement. Un exemple concret d'arbitrage entre continuité de service et sécurité.",
      },
      documents: [],
      lien: "",
      code: "",
      image: "",
      video: "",
    },
    {
      id: "recuperation-acces",
      titre: "Procédure de récupération d'accès à un poste verrouillé",
      contexte: "pro-1",
      periode: "29/06/26 au 31/08/26",
      description:
        "Recherche, test et documentation d'une méthode pour réinitialiser le mot de passe administrateur local d'un poste Windows, à l'usage de l'équipe DSI.",
      tags: ["Windows", "WinPE", "Documentation"],
      competences: [1, 2],
      fiche: {
        contexte:
          "Stage de technicien DSI chez Hoppen (Rennes), entreprise spécialisée dans les solutions digitales pour les établissements de santé. Défi proposé par le responsable IT : trouver et documenter une méthode pour retrouver l'accès à un poste dont le mot de passe administrateur local avait été perdu.",
        objectifs: [
          "Retrouver l'accès à un poste sans le réinstaller",
          "Fournir une procédure fiable et réutilisable par l'équipe",
        ],
        environnement: ["Windows", "WinPE", "Clé USB d'installation", "BitLocker"],
        etapes: [
          "Recherche et test d'une méthode de récupération depuis l'environnement d'installation Windows (WinPE)",
          "Réinitialisation du mot de passe du compte local concerné",
          "Restauration immédiate de la configuration d'origine du poste",
          "Rédaction de la documentation technique, avec le périmètre et les limites de la méthode",
        ],
        resultats:
          "Procédure documentée et transmise à l'équipe. Limites précisées : elle ne concerne que les comptes locaux (ni compte Microsoft, ni domaine Active Directory) et nécessite la clé de récupération si BitLocker est actif.",
      },
      documents: [],
      lien: "",
      code: "",
      image: "",
      video: "",
    },
    {
      id: "support-parc",
      titre: "Support à distance, gestion de parc et reconditionnement",
      contexte: "pro-1",
      periode: "29/06/26 au 31/08/26",
      description:
        "Prise en main à distance, mise en conformité et enrôlement des postes, suivi des tickets Jira, inventaire GLPI et reconditionnement des postes anciens sous ChromeOS Flex.",
      tags: ["TeamViewer", "Endpoint Central", "GLPI", "ChromeOS Flex"],
      competences: [1, 2],
      fiche: {
        contexte:
          "Stage de technicien DSI chez Hoppen (Rennes), entreprise spécialisée dans les solutions digitales pour les établissements de santé. Au quotidien, la DSI assure le support des utilisateurs internes et la gestion du parc informatique.",
        objectifs: [
          "Assister les utilisateurs à distance",
          "Maintenir des postes conformes aux normes de la DSI",
          "Donner une seconde vie aux postes non éligibles à Windows 11",
        ],
        environnement: ["TeamViewer", "ManageEngine Endpoint Central", "Jira", "GLPI", "ChromeOS Flex"],
        etapes: [
          "Prise en main à distance via TeamViewer et vérification de la conformité des postes",
          "Enrôlement des postes dans Endpoint Central pour une gestion centralisée",
          "Création, qualification et suivi de tickets dans Jira",
          "Inventaire matériel et logiciel du parc dans GLPI",
          "Démontage et diagnostic de postes (bureau, mini PC, portables)",
          "Installation de ChromeOS Flex sur les postes trop anciens pour Windows 11",
        ],
        resultats:
          "Postes reconditionnés plutôt que réformés. Point d'attention relevé : ChromeOS Flex introduit une gestion hybride du parc, avec une console d'administration distincte des outils Windows de la DSI.",
      },
      documents: [],
      lien: "",
      code: "",
      image: "",
      video: "",
    },
    {
      id: "saint-malo-agglo",
      titre: "[Réalisation en alternance — titre à compléter]",
      contexte: "pro-2",
      periode: "[JJ/MM/AA au JJ/MM/AA]",
      description: "[Contexte à Saint-Malo Agglomération, ce que tu as fait, le résultat pour les utilisateurs.]",
      tags: ["[Techno]"],
      competences: [],
      fiche: {
        contexte: "Alternance d'administrateur systèmes et réseaux à Saint-Malo Agglomération (EPCI). [Le service, le besoin exprimé, les contraintes.]",
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

  // Page « Rapport de stage » (version publique, anonymisée) — liée au stage Hoppen
  rapportStage: { label: "Lire le rapport de stage", url: "rapport-stage.html" },

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
      periode: "Sept. 2026 — aujourd'hui",
      titre: "Administrateur systèmes et réseaux — alternance",
      lieu: "Saint-Malo Agglomération (EPCI) — Saint-Malo",
      details: "[Tes missions principales en alternance.]",
    },
    {
      type: "experience",
      periode: "29 juin — 31 août 2026 (1 mois réparti)",
      titre: "Technicien DSI — stage",
      lieu: "Hoppen — Rennes",
      details: "Migration du parc vers Windows 11, automatisation du déploiement des postes (PowerShell), sécurisation des accès VPN, support à distance et ticketing Jira, inventaire GLPI.",
      lien: { label: "Lire le rapport de stage →", url: "rapport-stage.html" },
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
      periode: "Août 2020 — juil. 2025",
      titre: "Régisseur son et vidéo (CDI)",
      lieu: "Le Dôme Théâtre — Albertville (73)",
      details: "Régie son et vidéo des spectacles, configuration de réseaux audio Dante.",
    },
    {
      type: "experience",
      periode: "Sept. 2019 — juil. 2020",
      titre: "Technicien son (intermittent du spectacle)",
      lieu: "Association Au bout du plongeoir — Thorigné-Fouillard (35)",
      details: "",
    },
    {
      type: "experience",
      periode: "Oct. — déc. 2019",
      titre: "Régisseur son (intermittent du spectacle)",
      lieu: "Spectaculaires, Allumeurs d'images — Saint-Thurial (35)",
      details: "",
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
    linkedin: "https://www.linkedin.com/in/shoghi-sheida-4a9099235",
    autre: { label: "", url: "" },
  },
};
