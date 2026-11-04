# Documents et productions des réalisations

Chaque réalisation a son dossier : `docs/<id>/` (l'`id` est défini dans `content.js`).

## Ajouter un document

1. Dépose le fichier dans le dossier de la réalisation, ex. `docs/glpi/procedure-installation.pdf`
2. Déclare-le dans `content.js`, dans `documents` de la réalisation :

```js
documents: [
  { label: "Procédure d'installation", url: "docs/glpi/procedure-installation.pdf", description: "Installation pas à pas sur Debian 12" },
  { label: "Capture : tableau de bord", url: "docs/glpi/dashboard.png" },
  { label: "Maquette Packet Tracer", url: "docs/lan-vlan/maquette.pkt" },
],
```

- **Aperçu direct sur la fiche** : PDF, images (PNG, JPG, WEBP, GIF, SVG), TXT, MD.
- **Téléchargement** : tous les autres formats (`.pkt`, `.zip`, `.conf`, `.sh`, `.ps1`, `.docx`…).
- **Vidéo de démo** : `video: "docs/glpi/demo.mp4"` (MP4 720p, moins de 10 Mo) ou un lien YouTube.

Nomme les fichiers sans espace ni accent (`procedure-installation.pdf`).
Taille maximale d'un fichier sur GitHub : 100 Mo (vise moins de 10 Mo).

## Ce qu'il est utile de joindre (E5)

| Type | Exemples |
|------|----------|
| Procédures | installation, configuration, mode opératoire utilisateur |
| Schémas | schéma réseau, plan d'adressage IP, architecture |
| Preuves de fonctionnement | captures d'écran, tests (ping, captures Wireshark), cahier de recette |
| Configurations | fichiers de conf, scripts, export de maquette Packet Tracer (`.pkt`) |
| Suivi | ticket GLPI, planning, compte rendu |

⚠️ **Avant de publier**, retire des documents d'alternance toute donnée sensible de
Saint-Malo Agglomération (adresses IP réelles, noms d'utilisateurs, mots de passe, noms de serveurs internes)
et demande l'accord de ton tuteur. Le site est public.
