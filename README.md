# Porte_folio_v2

Portfolio personnel statique (HTML / CSS / JavaScript, sans dépendance ni build).

## Modifier le contenu

Tout le texte est dans **`content.js`** : profil, à propos, compétences, projets,
parcours, certifications et contact. Remplace les valeurs entre `[ ]`.

- Photo, CV et captures de projets → dépose-les dans `assets/` puis indique leur chemin
  (ex. `"assets/CV.pdf"`).
- Pour masquer une section optionnelle (ex. certifications), mets une liste vide `[]`.
- Les filtres de projets apparaissent automatiquement à partir de 4 projets.

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
