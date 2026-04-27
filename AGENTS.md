# D3.js Interactive Visualization Project

## Project Overview
This is an academic data visualization project built with **D3.js v7** and vanilla HTML/CSS/JS.
The goal is to produce one or more interactive data visualizations in standalone HTML pages.

## Tech Stack
- **D3.js v7** (CDN) — primary visualization library
- **Vanilla HTML5 / CSS3 / ES6+** — no build tools, no frameworks
- **JSON or CSV** — data format for all datasets

## MCP Tools Available — Use Them Proactively
- **GitHub MCP**: Search for D3.js example repos, open-source datasets, and reference implementations
- **Exa MCP**: Semantic search for finding datasets (WHO, World Bank, Our World in Data, data.gouv.fr, etc.) and D3 tutorials
- **Context7 MCP**: Always query for D3.js v7 API documentation before writing any D3 code
- **Memory MCP**: Store key decisions (dataset chosen, chart type, color palette, scale types) so they persist across sessions

## Coding Standards
- All visualizations must be **self-contained single HTML files** (inline JS and CSS)
- Use `const svg = d3.select("#chart")` pattern — never use deprecated D3 v4/v5 syntax
- Always use `d3.csv()` or `d3.json()` for data loading, with proper error handling via `.catch()`
- Scales: use `d3.scaleLinear`, `d3.scaleBand`, `d3.scaleTime`, `d3.scaleOrdinal` appropriately
- Axes: always label axes, include units, use `d3.axisBottom` / `d3.axisLeft`
- Color: use `d3.schemeTableau10` or `d3.interpolateViridis` for accessibility

## Required Interactivity Features (Academic Requirement)
Every visualization MUST include:
1. **Tooltips** — on mouseover show exact values using a `div.tooltip` absolutely positioned
2. **Filters or dropdowns** — allow the user to switch between categories, years, or regions
3. **Transitions/animations** — use `selection.transition().duration(750)` for smooth updates
4. **Responsive design** — use `viewBox` and `preserveAspectRatio` for responsive SVG

## File Structure
project/
├── index.html          # Main visualization page
├── data/
│   └── dataset.csv     # Or .json
├── css/
│   └── style.css       # Optional external styles
└── report/
└── report.md       # Development report (French)
## Workflow for Each Task
1. **Before writing any D3 code**: Query Context7 for the relevant D3 v7 API
2. **Before choosing a dataset**: Use Exa to find 2-3 candidate sources, pick the richest one
3. **After each major feature**: Save key decisions to Memory MCP
4. **For code review**: Check GitHub for similar D3 implementations to compare approach

## Report Requirements (in French)
The `report/report.md` must document:
- Choix des données : source, justification, format
- Conception : wireframe décisionnel, choix de type de graphique
- Développement : difficultés rencontrées, solutions adoptées
- Tests : navigateurs testés, problèmes de compatibilité
- Décisions de design UX : accessibilité, couleurs, interactivité

## Dataset Suggestions (if not yet chosen)
Use Exa MCP to find data on one of these topics:
- 🌍 Climate: CO₂ emissions by country (Our World in Data)
- 🏥 Health: Global vaccination rates (WHO)
- 💰 Economy: GDP per capita over time (World Bank)
- 🎓 Education: Literacy rates by region (UNESCO)

## Academic Evaluation Criteria (remind Codex during reviews)
- Visual clarity and aesthetic quality
- Interactive feature richness
- Correct data integration and representation  
- UX intuitiveness and accessibility

## Do Not
- Do NOT use React, Vue, or any frontend framework
- Do NOT use D3 v4 or v5 API syntax (no `.enter().append()` without `join()`)
- Do NOT hardcode data into JS — always load from a file
- Do NOT skip error handling on data fetch