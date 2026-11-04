/*
 * ============================================================
 *  ENGLISH VERSION — translations of content.js
 * ============================================================
 *  Only the text is here. Everything else (links, documents, dates,
 *  appearance, contact…) is taken from content.js automatically.
 *  - Réalisations ("projets") are matched by their "id".
 *  - "parcours" and "certifications" are matched by position (same order as content.js).
 *  - A document label is translated by giving the same "url" in "documents".
 *  Anything missing here falls back to the French text.
 */
window.PORTFOLIO_EN = {
  profil: {
    titre: "Systems & Network Technician — Work-study IT student",
    titresAnimes: [
      "Systems & Network Technician",
      "Work-study Systems & Network Administrator",
      "BTS SIO student — Infrastructure option",
      "Cisco certified",
    ],
    accroche:
      "Curious, rigorous and passionate about IT, I am switching careers to systems and networks after ten years as a technical stage manager in live performance. I am studying for a BTS SIO (SISR option) at My Digital School in Rennes, on a work-study contract at Saint-Malo Agglomération.",
    localisation: "Brittany, France",
    disponibilite: "Work-study — Saint-Malo Agglomération",
  },

  apropos: [
    "For ten years I worked as a sound, video and stage technician in live performance and events, most recently at Le Dôme Théâtre in Albertville. That is where I discovered networking, by setting up audio-over-IP systems (Dante) — and it made me want to turn it into my job.",
    "So I changed careers: I am now preparing a BTS SIO with the SISR option (a French two-year higher diploma in IT services, specialising in infrastructure, systems and networks) at My Digital School. After an internship as an IT support technician at Hoppen, I am now a work-study systems and network administrator at Saint-Malo Agglomération, where I keep developing my skills in system administration, networking and cybersecurity.",
    "Outside IT: bass guitar, didgeridoo and jaw harp, bouldering and aerial circus.",
  ],

  chiffres: [
    { valeur: "10 yrs", label: "as a live-performance technician" },
    { valeur: "2", label: "Cisco certifications" },
    { valeur: "SISR", label: "BTS SIO, work-study" },
  ],

  competences: [
    { categorie: "Networking", items: ["Cisco Packet Tracer", "LAN", "Routing", "IP addressing", "VLAN", "Wireshark", "Client-server", "Dante (audio over IP)"] },
    { categorie: "Systems", items: ["Linux (Debian / Ubuntu)", "Windows Server", "Active Directory", "Windows 11", "BitLocker", "PowerShell", "Winget", "Ventoy", "ChromeOS Flex", "Users & permissions", "GLPI"] },
    { categorie: "Cybersecurity", items: ["OpenVPN", "Certificates", "BitLocker encryption", "System & network security", "Firewalls", "Backups", "Threats & vulnerabilities"] },
    { categorie: "Support & tools", items: ["Jira (ticketing)", "TeamViewer", "ManageEngine Endpoint Central", "Writing procedures"] },
    { categorie: "Web development", items: ["HTML", "CSS", "JavaScript", "WordPress", "VS Code"] },
    { categorie: "Soft skills", items: ["Teamwork", "Autonomy", "Curiosity", "Technology watch"] },
    { categorie: "Certifications & clearances", items: ["First aid at work (SST)", "Electrical clearance BR / H1V", "Working at height", "Fire safety (SIAP)"] },
  ],

  referentiel: [
    {
      nom: "Manage IT assets",
      details: [
        "List and identify digital resources",
        "Apply the frameworks, norms and standards adopted by the IT provider",
        "Set up and check the access levels associated with a service",
        "Check the conditions for IT service continuity",
        "Manage backups",
        "Check that the rules for using digital resources are respected",
      ],
    },
    {
      nom: "Respond to incidents and to support and change requests",
      details: [
        "Collect, track and route requests",
        "Handle requests about network, system and application services",
        "Handle requests about applications",
      ],
    },
    {
      nom: "Develop the organisation's online presence",
      details: [
        "Help promote the organisation's image on digital media, taking legal and economic issues into account",
        "List the organisation's online services and measure their visibility",
        "Help develop a website that uses the organisation's data",
      ],
    },
    {
      nom: "Work in project mode",
      details: [
        "Analyse a project's objectives and organisation",
        "Plan activities",
        "Assess project tracking indicators and analyse deviations",
      ],
    },
    {
      nom: "Provide users with an IT service",
      details: [
        "Carry out integration and acceptance tests for a service",
        "Deploy a service",
        "Support users when a service is introduced",
      ],
    },
    {
      nom: "Organise one's professional development",
      details: [
        "Set up a personal learning environment",
        "Use tools and strategies for technology watch",
        "Manage one's professional identity",
        "Develop one's career plan",
      ],
    },
  ],

  projets: [
    {
      id: "glpi",
      titre: "Setting up a GLPI ticketing solution",
      periode: "[DD/MM/YY to DD/MM/YY]",
      description: "Installed and configured GLPI to centralise the IT asset inventory and the tracking of user support requests.",
      fiche: {
        contexte: "[Context: for which organisation (real or fictional) and what need?]",
        objectifs: ["Centralise support requests", "Inventory IT assets", "[Other objective]"],
        environnement: ["GLPI", "[System — e.g. Debian 12]", "[Web server / database — e.g. Apache, MariaDB]"],
        etapes: ["[Step 1 — e.g. Server installation]", "[Step 2 — e.g. GLPI installation and configuration]", "[Step 3 — e.g. Creating profiles and ticket categories]"],
        resultats: "[What works at the end, tests carried out, what you would improve.]",
      },
    },
    {
      id: "lan-vlan",
      titre: "Designing a segmented LAN (VLANs)",
      periode: "[DD/MM/YY to DD/MM/YY]",
      description: "Cisco Packet Tracer lab: IP addressing plan, VLAN creation, inter-VLAN routing, then traffic checks with Wireshark.",
      tags: ["Cisco", "VLAN", "Routing", "Wireshark"],
      fiche: {
        contexte: "[Context and need for segmentation.]",
        objectifs: ["Segment the network by department", "Set up inter-VLAN routing", "[Other objective]"],
        environnement: ["Cisco Packet Tracer", "Wireshark", "[Simulated hardware — e.g. 2960 switch, 1941 router]"],
        etapes: ["[Step 1 — e.g. Addressing plan]", "[Step 2 — e.g. Creating VLANs and trunk ports]", "[Step 3 — e.g. Inter-VLAN routing and tests]"],
        resultats: "[Connectivity tests (ping, captures), results obtained.]",
      },
    },
    {
      id: "active-directory",
      titre: "Windows Server and Active Directory administration",
      periode: "[DD/MM/YY to DD/MM/YY]",
      description: "Created an Active Directory domain, managed users, groups and access rights, and provided network services.",
      fiche: {
        contexte: "[Context.]",
        objectifs: ["Centralise account management", "Manage access rights through groups", "[Other objective]"],
        environnement: ["Windows Server [version]", "Active Directory", "[DNS, DHCP…]"],
        etapes: ["[Step 1]", "[Step 2]", "[Step 3]"],
        resultats: "[Results and tests.]",
      },
    },
    {
      id: "wordpress",
      titre: "WordPress website: local development and migration",
      periode: "[DD/MM/YY to DD/MM/YY]",
      description: "Built a WordPress website in a local environment, then migrated it to a hosting server.",
      fiche: {
        contexte: "[Context.]",
        objectifs: ["[Objective]"],
        environnement: ["WordPress", "[Local environment — e.g. XAMPP / Local]", "[Hosting provider]"],
        etapes: ["[Step 1]", "[Step 2]", "[Step 3]"],
        resultats: "[Results.]",
      },
    },
    {
      id: "portfolio",
      titre: "Professional portfolio",
      periode: "[DD/MM/YY to DD/MM/YY]",
      description: "Designed this portfolio in HTML, CSS and JavaScript, published on GitHub Pages, to present my background, my projects and my technology watch.",
      fiche: {
        contexte: "The portfolio is a requirement of the BTS SIO E5 exam: it traces my professional development and gives access to my projects.",
        objectifs: ["Present my background and my projects", "Manage my professional identity online", "Make my documents available to the exam board"],
        environnement: ["HTML", "CSS", "JavaScript", "Git / GitHub", "GitHub Pages"],
        etapes: ["Designing the structure and visual identity", "Building the pages and project sheets", "Publishing and updating through GitHub Pages"],
        resultats: "A responsive, accessible website, online and updated throughout the course.",
      },
    },
    {
      id: "migration-windows-11",
      titre: "Migrating the workstation fleet from Windows 10 to Windows 11",
      periode: "29/06/26 to 31/07/26",
      description: "Wrote an internal migration procedure and tracked each workstation with an eleven-step Jira checklist, ahead of the end of Windows 10 support.",
      fiche: {
        contexte:
          "Internship as an IT support technician at Hoppen (Rennes), a company that builds digital solutions for healthcare facilities. With Windows 10 reaching end of support, the workstations had to be migrated. To make the operation identical across the fleet, a standardised procedure and precise progress tracking were needed.",
        objectifs: ["Migrate workstations to Windows 11 with no data loss", "Standardise the operation with a repeatable procedure", "Track progress workstation by workstation"],
        environnement: ["Windows 10 / 11", "PC Health Check", "BitLocker", "Winget", "Jira"],
        etapes: [
          "Checking hardware compatibility (CPU, RAM, TPM 2.0, Secure Boot)",
          "Creating a dedicated local installation account, separate from the user's account",
          "Backing up user data, creating a restore point and checking disk space",
          "Suspending then re-enabling BitLocker, with the recovery key saved",
          "Updating Windows and software with Winget, then upgrading",
          "Post-migration checks (drivers, printers, VPN, business software) and disk clean-up",
          "Turning the procedure into an eleven-step Jira checklist",
        ],
        resultats:
          "Safe migrations: no data loss and encryption still active at the end of the procedure. The Jira checklist gives a clear view of progress and makes it easy to resume after an interruption.",
      },
    },
    {
      id: "deploiement-ventoy",
      titre: "Automating Windows 11 workstation deployment (PowerShell, Ventoy USB key)",
      periode: "29/06/26 to 31/07/26",
      description: "Designed a post-installation PowerShell script embedded on the Ventoy USB key: software and agent installation, app clean-up, “site” and “head office” profiles.",
      tags: ["PowerShell", "Ventoy", "Winget", "Automation"],
      fiche: {
        contexte:
          "Internship as an IT support technician at Hoppen (Rennes), a company that builds digital solutions for healthcare facilities. Setting up new workstations required many manual steps after Windows was installed. The goal was to automate them reliably and repeatably.",
        objectifs: ["Automate workstation post-installation setup", "Guarantee an identical, compliant configuration across the fleet", "Be able to re-run the script on a workstation already in use"],
        environnement: ["PowerShell", "Ventoy", "autounattend.xml", "Winget", "GLPI agent", "ManageEngine Endpoint Central"],
        etapes: [
          "Two-level architecture: a “bootstrap” script in autounattend.xml that finds the key by its volume label, then a main script identical on every key",
          "Installing Chrome, Firefox, the GLPI agent and the Endpoint Central agent with Winget or silently",
          "Removing unwanted pre-installed apps, including from the provisioned package for future accounts",
          "Applying a “site” or “head office” deployment profile",
          "Re-runnable script, with every step logged and a summary pop-up at the end",
          "Decision, with my internship supervisor, to deploy TeamViewer through Endpoint Central to respect the company's branding",
        ],
        resultats:
          "Automated, re-runnable deployment. Several issues diagnosed and fixed: Winget silently blocking in unattended mode, a global failure caused by sharing one PowerShell process (main script isolated in a separate process), Winget temporarily unavailable at first boot (detection with a bounded wait), and a volume slider stuck after driver installation.",
      },
    },
    {
      id: "openvpn",
      titre: "Securing remote access with OpenVPN",
      periode: "29/06/26 to 31/07/26",
      description: "Helped deploy an extra password layer on OpenVPN certificates, to stop VPN sessions being left open and shared.",
      tags: ["OpenVPN", "Certificates", "Security"],
      fiche: {
        contexte:
          "Internship as an IT support technician at Hoppen (Rennes), a company that builds digital solutions for healthcare facilities. The complex network password was often saved in OpenVPN GUI: sessions stayed open and several people ended up sharing the same access. The chosen solution was a certificate password that the application cannot remember.",
        objectifs: ["Stop VPN access being shared between users", "Require input at every connection without making daily use harder", "Document the procedure"],
        environnement: ["OpenVPN", ".p12 certificates", ".ovpn profiles", "PowerShell / OpenSSL"],
        etapes: [
          "Identifying each user by name with the team leaders (one certificate per person)",
          "Certificate re-encryption carried out by my internship supervisor (access rights required)",
          "Deploying the certificates on workstations and adapting the .ovpn profiles",
          "Checking the connection for each user",
          "Cleaning up and formatting the procedure documentation",
        ],
        resultats:
          "Secure, individual remote access. This task taught me that a security problem is often a matter of user behaviour too, and that a deployment has to be prepared together with the user teams.",
      },
    },
    {
      id: "diagnostic-certificat",
      titre: "Troubleshooting a certificate incident blocking several services",
      periode: "29/06/26 to 31/07/26",
      description: "Handled a ticket: certificate errors on Jira and the time-tracking tool, and the Endpoint Central agent no longer reporting from a remote site's workstations.",
      tags: ["Troubleshooting", "Certificates", "Jira", "Support"],
      fiche: {
        contexte:
          "Internship as an IT support technician at Hoppen (Rennes), a company that builds digital solutions for healthcare facilities. Users at a remote site could no longer access Jira or the time-tracking tool: browsers reported an invalid certificate.",
        objectifs: ["Identify the cause of the incident", "Restore access to the tools until a lasting fix"],
        environnement: ["Microsoft Edge", "Jira", "ManageEngine Endpoint Central"],
        etapes: [
          "Reproducing the problem on a second workstation",
          "Noticing that the Endpoint Central agent had stopped reporting on both machines",
          "Hypothesis of upstream network interception rather than a workstation issue",
          "Setting up an isolated workaround: a separate Edge profile limited to the trusted sites needed",
          "Documenting the security trade-off involved",
        ],
        resultats:
          "Access restored without touching the user's usual browser session, which stays normally protected. A concrete example of balancing service continuity and security.",
      },
    },
    {
      id: "recuperation-acces",
      titre: "Procedure to recover access to a locked workstation",
      periode: "29/06/26 to 31/07/26",
      description: "Researched, tested and documented a method to reset the local administrator password of a Windows workstation, for the IT team.",
      fiche: {
        contexte:
          "Internship as an IT support technician at Hoppen (Rennes), a company that builds digital solutions for healthcare facilities. A challenge set by the IT manager: find and document a way to regain access to a workstation whose local administrator password had been lost.",
        objectifs: ["Regain access to a workstation without reinstalling it", "Provide a reliable procedure the team can reuse"],
        environnement: ["Windows", "WinPE", "Installation USB key", "BitLocker"],
        etapes: [
          "Researching and testing a recovery method from the Windows installation environment (WinPE)",
          "Resetting the password of the local account concerned",
          "Immediately restoring the workstation's original configuration",
          "Writing the technical documentation, including the method's scope and limits",
        ],
        resultats:
          "Procedure documented and handed over to the team. Limits stated: it only applies to local accounts (not Microsoft accounts or Active Directory domain accounts) and requires the recovery key if BitLocker is enabled.",
      },
    },
    {
      id: "support-parc",
      titre: "Remote support, asset management and refurbishing",
      periode: "29/06/26 to 31/07/26",
      description: "Remote control, compliance checks and enrolment of workstations, Jira ticket tracking, GLPI inventory, and refurbishing old workstations with ChromeOS Flex.",
      fiche: {
        contexte:
          "Internship as an IT support technician at Hoppen (Rennes), a company that builds digital solutions for healthcare facilities. Day to day, the IT department supports internal users and manages the IT fleet.",
        objectifs: ["Help users remotely", "Keep workstations compliant with IT standards", "Give a second life to workstations not eligible for Windows 11"],
        environnement: ["TeamViewer", "ManageEngine Endpoint Central", "Jira", "GLPI", "ChromeOS Flex"],
        etapes: [
          "Remote control with TeamViewer and workstation compliance checks",
          "Enrolling workstations in Endpoint Central for centralised management",
          "Creating, qualifying and following up tickets in Jira",
          "Hardware and software inventory of the fleet in GLPI",
          "Taking apart and diagnosing workstations (desktops, mini PCs, laptops)",
          "Installing ChromeOS Flex on workstations too old for Windows 11",
        ],
        resultats:
          "Workstations refurbished rather than scrapped. A point I raised: ChromeOS Flex creates a hybrid fleet, with an admin console separate from the IT department's Windows tools.",
      },
    },
    {
      id: "saint-malo-agglo",
      titre: "[Work-study project — title to be completed]",
      periode: "[DD/MM/YY to DD/MM/YY]",
      description: "[Context at Saint-Malo Agglomération, what you did, the result for users.]",
      fiche: {
        contexte: "Work-study position as a systems and network administrator at Saint-Malo Agglomération (an inter-municipal authority). [The department, the need, the constraints.]",
        objectifs: ["[Objective]"],
        environnement: ["[Tool / system]"],
        etapes: ["[Step 1]", "[Step 2]"],
        resultats: "[Result for users.]",
      },
    },
  ],

  rapportStage: { label: "Read the internship report (in French)" },

  documentsE5: [
    { label: "E5 summary table" },
    { label: "Employment certificate / work-study certificate" },
    { label: "CV" },
  ],

  veille: {
    sujet: "Trends in networking and cybersecurity",
    description: "[Why this topic, what issue you follow, what you have learnt from it. The exam board will ask about it.]",
    outils: ["[Tool — e.g. Feedly]", "[Tool — e.g. Google Alerts]", "[Source — e.g. CERT-FR]"],
  },

  parcours: [
    { periode: "Sept. 2026 — present", titre: "Systems & Network Administrator — work-study", lieu: "Saint-Malo Agglomération (inter-municipal authority) — Saint-Malo", details: "[Your main work-study tasks.]" },
    {
      periode: "29 June — 31 July 2026",
      titre: "IT Support Technician — internship",
      lieu: "Hoppen — Rennes",
      details: "Windows 11 fleet migration, automated workstation deployment (PowerShell), securing VPN access, remote support and Jira ticketing, GLPI inventory.",
      lien: { label: "Read the internship report (in French) →" },
    },
    { periode: "Sept. 2025 — present", titre: "BTS SIO — SISR option", lieu: "My Digital School — Rennes", details: "French two-year higher diploma in IT services, specialising in infrastructure, systems and networks. Work-study programme." },
    { periode: "Aug. 2020 — July 2025", titre: "Sound & Video Technician (permanent contract)", lieu: "Le Dôme Théâtre — Albertville", details: "Sound and video operation for shows, Dante audio network configuration." },
    { periode: "Sept. 2019 — July 2020", titre: "Sound Technician (freelance, performing arts)", lieu: "Au bout du plongeoir (non-profit) — Thorigné-Fouillard" },
    { periode: "Oct. — Dec. 2019", titre: "Sound Engineer (freelance, performing arts)", lieu: "Spectaculaires, Allumeurs d'images — Saint-Thurial" },
    { titre: "Sound Technician", lieu: "AMS Invisia — events" },
    { titre: "Stage Technician", lieu: "GDS Prod — La Garenne-Colombes" },
    { titre: "Teaching Assistant for pupils with disabilities (AVS)", lieu: "Lycée Raoul Vadepied (secondary school)" },
    { titre: "Technical Manager", lieu: "« Nomadsland » (non-profit)" },
    { titre: "Professional certificate (level 5) — Sound Engineer for live performance and events", lieu: "ITEMM — Le Mans" },
    { titre: "Music and musicology studies", lieu: "Université Rennes 2", details: "Jazz practice workshop." },
    { titre: "French baccalaureate — science track", lieu: "Lycée Marguerite de Navarre — Alençon", details: "Optional drama course." },
  ],

  certifications: [
    {},
    { nom: "[2nd Cisco certification — name to be completed]" },
  ],
};
