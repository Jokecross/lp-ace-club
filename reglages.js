/* ============================================================
   RÉGLAGES — ACE Club. Tout ce qui reste à brancher est ici.
   Lu par index.html (la page) et merci.html (la confirmation).
   ============================================================ */

/* Enregistrement des leads : table `leads` du projet Supabase du CRM.
   La clé anon est PUBLIQUE par conception (RLS : insertion seule).
   Jamais la clé service_role ici. Vide = le formulaire n'envoie rien
   et le dit. [À FOURNIR : projet Supabase du CRM ACE Club] */
var SUPABASE_URL      = 'https://bkxuhkxcdeaqanugugpa.supabase.co';
var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJreHVoa3hjZGVhcWFudWd1Z3BhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTUzODgwMjksImV4cCI6MjExMDk2NDAyOX0.OnYg_t-V8Kdwq7npHG2C_aewMIywVHkFCb_MDMJc6pI';

/* Chaque lead part avec cette source. */
var SOURCE = 'ace-club';

/* Colonnes en plus du schéma des templates (à créer d'abord dans la base).
   COLONNES_SUIVI : ref + UTM dans leurs colonnes (sinon dans page_url).
   COLONNE_SITUATION : « Ta situation aujourd'hui » dans la colonne situation. */
var COLONNES_SUIVI    = true;    // la base du CRM ACE Club a les colonnes ref + utm_*
var COLONNE_SITUATION = true;   // la base du CRM ACE Club a la colonne situation

/* Le créateur : s'affiche en haut de page et dans « Qui est … ».
   [À FOURNIR : prénom, nom, photo carrée 256 × 256 en WebP] */
var CREATEUR = { prenom: '', nom: '', photo: '' };

/* La vidéo d'ouverture, 16:9, chargée au clic. Remplir UN des trois :
   identifiant YouTube, identifiant Vimeo (chiffres), ou chemin d'un MP4.
   `affiche` : image d'attente WebP/AVIF 1600 × 900.
   [À FOURNIR : la vidéo et son image d'attente] */
var VIDEO = { youtube: '', vimeo: '', fichier: '', affiche: '' };

/* Pixels : vides = rien n'est chargé.
   Meta : PageView, puis Lead à l'envoi du formulaire.
   [À FOURNIR : ID du pixel Meta d'ACE Club] */
var PIXELS = { meta: '', tiktok: '' };

/* Pages légales. */
var LIENS = { mentions: 'legal.html#mentions', cgv: 'legal.html#cgv', confidentialite: 'legal.html#confidentialite' };

/* Horaires d'appel des setters, heure de Paris. null = « dans les
   10 minutes » à toute heure. jours : 0 = dimanche … 6 = samedi.
   Ex. { jours: [1,2,3,4,5,6], debut: 9, fin: 21 }
   [À FOURNIR : horaires des setters] */
var HORAIRES = null;

/* Hors horaires : « On t'appelle dès … » (null si on est dans les horaires). */
function messageHorsHoraires(){
  if (!HORAIRES) return null;
  var parties = new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', weekday: 'short', hour: 'numeric', hourCycle: 'h23' }).formatToParts(new Date());
  var JOURS = { 'dim.': 0, 'lun.': 1, 'mar.': 2, 'mer.': 3, 'jeu.': 4, 'ven.': 5, 'sam.': 6 };
  var jour = 0, heure = 0;
  parties.forEach(function(p){
    if (p.type === 'weekday') jour = JOURS[p.value];
    if (p.type === 'hour') heure = parseInt(p.value, 10);
  });
  if (HORAIRES.jours.indexOf(jour) !== -1 && heure >= HORAIRES.debut && heure < HORAIRES.fin) return null;
  var NOMS = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
  if (HORAIRES.jours.indexOf(jour) !== -1 && heure < HORAIRES.debut) return 'On t’appelle dès ' + HORAIRES.debut + ' h.';
  for (var i = 1; i <= 7; i++){
    var j = (jour + i) % 7;
    if (HORAIRES.jours.indexOf(j) !== -1) return 'On t’appelle dès ' + (i === 1 ? 'demain' : NOMS[j]) + ', ' + HORAIRES.debut + ' h.';
  }
  return null;
}
