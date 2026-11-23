# Page de vente — ACE Club, premier site en 10 jours

Un seul objectif : le formulaire (section 8). Un setter rappelle dans les 10 minutes,
puis ouvre l'espace membre. Même logique que la page Sirius, DA d'ACE Club.

```
index.html     la page (10 sections, formulaire en section 8)
merci.html     confirmation « Bien reçu. » (message hors horaires)
legal.html     mentions, CGV, confidentialité (à compléter)
reglages.js    tout ce qui reste à brancher (Supabase, pixel, vidéo, créateur, horaires)
ace.css        charte : variables --color-accent, --font-display, --font-ui
fonts/         Archivo (titres, élargie 112 %) et Inter, en local
img/           logo, favicon, partage.png (Open Graph 1200 × 630)
captures/      captures 390 et 1440 (hors site)
```

En local : `python3 -m http.server 8231`, puis http://localhost:8231.
Liens courts `/nom` seulement sur Vercel (en local : `?ref=nom`).

Charte : fond #07090F, cartes #0E121C, texte #F2F4F8 / #C9D1E3 / #98A2B6,
accent unique #7C9CFF (bleu du logo), texte sur accent #07090F. Motif : les barres
du « E » du logo, penchées à -12° (boutons, aplats, marques de section).
