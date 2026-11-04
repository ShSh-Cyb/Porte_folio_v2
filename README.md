# Porte_folio_v2

Portfolio personnel statique (HTML / CSS / JavaScript, sans dépendance ni build).

Portfolio de **Shoghi Sheida** — BTS SIO option SISR (My Digital School, Rennes),
en alternance à Saint-Malo Agglomération. Il sert de support à l'**épreuve E5**.

## Structure

| Fichier | Rôle |
|---------|------|
| `content.js` | **Tout le contenu** en français, et l'apparence (couleurs, fond, portrait, police) |
| `content-en.js` | Traduction anglaise du contenu (seulement les textes) |
| `i18n.js` | Choix de la langue et traduction de l'interface |
| `index.html` / `script.js` | Page d'accueil |
| `realisation.html` / `realisation.js` | Fiche détaillée d'une réalisation (`realisation.html?id=glpi`) |
| `common.js`, `style.css` | Code et styles partagés |
| `docs/<id>/` | Documents et productions de chaque réalisation — voir [`docs/README.md`](docs/README.md) |
| `assets/` | Photo, CV, images |

## Ce que contient le site (attendus E5)

- Parcours de professionnalisation (formations + expériences)
- Réalisations professionnelles, en formation et en alternance, chacune avec sa fiche :
  contexte, objectifs, environnement technique, mise en œuvre, résultats, compétences, documents
- Tableau de synthèse généré automatiquement (cohérent avec les réalisations)
- Veille technologique
- Liens vers les documents de l'épreuve (tableau de synthèse, attestation, CV)

## Modifier le contenu

Tout le texte est dans **`content.js`** : profil, à propos, compétences, réalisations,
veille, parcours, certifications et contact. Les valeurs entre `[ ]` restent à compléter.

- Photo, CV et captures de projets → dépose-les dans `assets/` puis indique leur chemin
  (ex. `"assets/CV.pdf"`).
- Pour masquer une section optionnelle (ex. certifications), mets une liste vide `[]`.
- Les filtres de projets apparaissent automatiquement à partir de 4 projets.

## Vidéos et animations

- **Vidéo de démo d'un projet** : dans `content.js`, renseigne `video` sur le projet :
  - un fichier `"assets/demo.mp4"` → aperçu muet au survol (ou au défilement sur mobile),
    et lecteur plein écran au clic ;
  - ou un lien YouTube (`https://youtu.be/...`) → miniature automatique + lecteur intégré.
  Conseil : MP4 (H.264) de 10 à 30 s, 720p, moins de 10 Mo. `image` sert d'affiche.
- **Fond de l'accueil** : animation de particules interactive (suit la souris, un clic crée
  une onde). Pour la remplacer par une vidéo, renseigne `profil.videoFond`.
- **Titre animé** : liste `profil.titresAnimes`, affichée en « machine à écrire ».
- Toutes les animations sont coupées si l'utilisateur a activé « réduire les animations ».

## Version anglaise

Bouton **EN / FR** dans le menu, ou lien direct : `https://shsh-cyb.github.io/Porte_folio_v2/?lang=en`.
Quand tu modifies un texte dans `content.js`, pense à mettre à jour sa traduction dans `content-en.js`
(sinon le texte français s'affiche dans la version anglaise). Le rapport de stage reste en français.

## Voir le site en local

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Mettre en ligne (GitHub Pages)

Settings → Pages → *Deploy from a branch* → `main` / `root`.
Le site sera disponible sur `https://<utilisateur>.github.io/Porte_folio_v2/`.

## Fonctionnalités

- Thème clair / sombre (suit le système, mémorisé)
- Responsive avec menu mobile
- Lien actif dans la navigation, animations au défilement (désactivées si « réduire les animations »)
- Filtrage des projets par technologie
- Bouton « copier l'adresse e-mail »
- Accessibilité : lien d'évitement, focus visible, attributs ARIA
