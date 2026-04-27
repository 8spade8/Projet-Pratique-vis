# Rapport de projet — Visualisation D3.js

## 1. Choix des données

- **Sources** :
  - `data/co2.csv` : concentration annuelle de CO2 utilisée pour le graphique temporel.
  - `data/gistemp.csv` : anomalie de température globale annuelle utilisée pour l'évolution du soleil.
  - `data/country_temperature_anomaly.csv` : anomalies annuelles par pays depuis Our World in Data, indicateur *Annual temperature anomalies*.
  - `data/world-countries.geojson` : géométries pays Natural Earth 1:110m avec codes ISO3.
- **Justification** : le projet combine un signal global lisible (CO2 + anomalie de température) avec une carte pays par pays. Cela montre que le changement climatique est sévère à la fois dans la tendance mondiale et dans sa distribution géographique.
- **Format** : CSV pour les séries temporelles et GeoJSON pour la carte choroplèthe.

## 2. Conception

- **Type de visualisation** : récit interactif (*scrollytelling*) avec un soleil organique animé, un graphique CO2, une chronologie et une carte choroplèthe.
- **Justification du choix** : le soleil qui grossit donne une métaphore visuelle immédiate de la montée de température. Le graphique CO2 donne la preuve quantitative, tandis que la carte permet de comparer les pays et les régions dans chaque période.
- **Wireframe décisionnel** :
  1. Introduction plein écran : gravité du changement climatique.
  2. Chapitres temporels : 1900-1950, 1950-1980, 1980-2010, 2010-2024.
  3. Interaction principale : clic sur le soleil pour ouvrir les statistiques cartographiques.
  4. Panneau carte : filtre par période, carte des pays, moyenne régionale et pays les plus chauds.

## 3. Développement

- **Difficultés rencontrées** : joindre les données climatiques par codes ISO3, conserver l'esthétique du soleil, rendre le clic utilisable sur mobile et éviter que le panneau carte soit visuellement pollué par le texte d'arrière-plan.
- **Solutions adoptées** : jointure D3 par code pays, `d3.geoNaturalEarth1()` pour la projection, `d3.scaleSequential(d3.interpolateViridis)` pour la couleur, transitions `duration(750)` sur la carte, et couche de narration avec `pointer-events: none` pour laisser le soleil cliquable.

## 4. Tests

- **Navigateurs testés** : Chromium headless via Playwright, en bureau 1440x900 et mobile 390x844.
- **Résultats** : aucune erreur console. La carte ouvre correctement au clic sur le soleil, 176 formes pays sont dessinées, 168 pays reçoivent des valeurs climatiques, et le sélecteur de période met à jour la carte.
- **Problèmes de compatibilité** : les fichiers CSV/GeoJSON doivent être servis via HTTP local (`python -m http.server`) car `d3.csv()` et `d3.json()` utilisent `fetch`.

## 5. Décisions de design UX

- **Accessibilité** : couleurs Viridis perceptibles, textes contrastés, labels de période, bouton de fermeture avec `aria-label`, SVG responsive avec `viewBox`.
- **Couleurs** : bleu froid vers orange chaud pour le soleil, Viridis pour la carte afin de garder une échelle lisible.
- **Interactivité** : tooltips sur le graphique et les pays, filtres CO2/température, filtre de période sur la carte, transitions fluides de 750 ms.
