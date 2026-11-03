/*! ml-ecosystem-bar v1.1 · Mikail Lekesiz ecosystem strip · https://mikail.net/ */
(() => {
  if (customElements.get('ml-ecosystem-bar')) return;
  const P = [{"key": "kyze", "group": "learn", "url": "https://kyze.mikail.net/", "short": "KYZE", "color": "#0B4F5C", "name": {"tr": "Kurumsal Yapay Zekâ Programı", "en": "Corporate AI Programme", "fr": "Programme d’IA en entreprise", "de": "Programm für KI im Unternehmen", "es": "Programa de IA para empresas"}, "facts": {"tr": "18 modül · 47 saat · 76 şablon", "en": "18 modules · 47 hours · 76 templates", "fr": "18 modules · 47 heures · 76 modèles", "de": "18 Module · 47 Stunden · 76 Vorlagen", "es": "18 módulos · 47 horas · 76 plantillas"}}, {"key": "gw", "group": "learn", "url": "https://googleworkspace.mikail.net/", "short": "Workspace", "color": "#1F4AA8", "name": {"tr": "Google Workspace Saha Kılavuzu", "en": "Google Workspace Field Guide", "fr": "Google Workspace — Guide de terrain", "de": "Google Workspace Praxisleitfaden", "es": "Google Workspace — Guía de campo"}, "facts": {"tr": "15 modül · 37 saat · 7 öğrenme yolu", "en": "15 modules · 37 hours · 7 learning paths", "fr": "15 modules · 37 heures · 7 parcours", "de": "15 Module · 37 Stunden · 7 Lernpfade", "es": "15 módulos · 37 horas · 7 itinerarios"}}, {"key": "yzhatti", "group": "learn", "url": "https://yzhatti.mikail.net/", "short": "YZ İş Hattı", "color": "#2A2560", "name": {"tr": "YZ İş Hattı", "en": "YZ İş Hattı — AI work scenarios", "fr": "YZ İş Hattı — scénarios de travail avec l’IA", "de": "YZ İş Hattı — KI-Arbeitsszenarien", "es": "YZ İş Hattı — escenarios de trabajo con IA"}, "facts": {"tr": "100 senaryo · 10 bölüm · 204 kaynak", "en": "100 scenarios · 10 chapters · 204 sources", "fr": "100 scénarios · 10 chapitres · 204 sources", "de": "100 Szenarien · 10 Kapitel · 204 Quellen", "es": "100 escenarios · 10 capítulos · 204 fuentes"}}, {"key": "kalibre", "group": "measure", "url": "https://kalibre.mikail.net/", "short": "Kalibre", "color": "#C2412D", "name": {"tr": "Kalibre", "en": "Calibre", "fr": "Calibre", "de": "Kalibre", "es": "Kalibre"}, "facts": {"tr": "43 meslek · 8 aile · 1.290 soru", "en": "43 professions · 8 families · 1,290 questions", "fr": "43 métiers · 8 familles · 1 290 questions", "de": "43 Berufe · 8 Familien · 1.290 Fragen", "es": "43 profesiones · 8 familias · 1290 preguntas"}}, {"key": "pusula", "group": "measure", "url": "https://pusula.mikail.net/", "short": "Pusula", "color": "#1F5A4E", "name": {"tr": "Pusula AI", "en": "Pusula AI — your AI compass", "fr": "Pusula AI — votre boussole IA", "de": "Pusula AI — Ihr KI-Kompass", "es": "Pusula AI — su brújula de IA"}, "facts": {"tr": "8 alan · 24 ifade · pilot sürüm", "en": "8 areas · 24 statements · pilot", "fr": "8 domaines · 24 affirmations · pilote", "de": "8 Bereiche · 24 Aussagen · Pilot", "es": "8 áreas · 24 afirmaciones · piloto"}}, {"key": "ses", "group": "measure", "url": "https://ses.mikail.net/", "short": "Ses", "color": "#2F7F6A", "name": {"tr": "Ses", "en": "Ses — just talk", "fr": "Ses — parlez, simplement", "de": "Ses — einfach sprechen", "es": "Ses — solo habla"}, "facts": {"tr": "5 konuşma dili · kayıt yok", "en": "5 spoken languages · no recording", "fr": "5 langues parlées · aucun enregistrement", "de": "5 Sprachen · keine Aufzeichnung", "es": "5 idiomas · sin grabación"}}, {"key": "yz", "group": "watch", "url": "https://yz.mikail.net/", "short": "YZ Radar", "color": "#0E7490", "name": {"tr": "YZ Radar", "en": "YZ Radar — daily AI top 10", "fr": "YZ Radar — le top 10 quotidien de l’IA", "de": "YZ Radar — tägliche KI-Top-10", "es": "YZ Radar — el top 10 diario de la IA"}, "facts": {"tr": "Günlük · TOP 10 · 10 YZ ailesi", "en": "Daily · top 10 · 10 AI families", "fr": "Quotidien · top 10 · 10 familles d’IA", "de": "Täglich · Top 10 · 10 KI-Familien", "es": "Diario · top 10 · 10 familias de IA"}}, {"key": "makaleradar", "group": "watch", "url": "https://makaleradar.mikail.net/", "short": "Makale Radarı", "color": "#D63A10", "name": {"tr": "Makale Radarı — laboratuvardan ürüne", "en": "Paper Radar — from the lab to products", "fr": "Radar des articles — du laboratoire aux produits", "de": "Paper-Radar — vom Labor zum Produkt", "es": "Radar de Artículos — del laboratorio al producto"}, "facts": {"tr": "Haftalık · 43 makale · 3 okuma düzeyi", "en": "Weekly · 43 papers · 3 reading levels", "fr": "Hebdomadaire · 43 articles · 3 niveaux de lecture", "de": "Wöchentlich · 43 Paper · 3 Lesestufen", "es": "Semanal · 43 artículos · 3 niveles de lectura"}}, {"key": "airadar", "group": "watch", "url": "https://airadar.mikail.net/", "short": "AI·Radar", "color": "#3F6B5C", "name": {"tr": "AI·Radar — Toplumsal Teknoloji Radarı", "en": "AI·Radar — Social Technology Radar", "fr": "AI·Radar — Radar des technologies et de la société", "de": "AI·Radar — Radar für Technik und Gesellschaft", "es": "AI·Radar — Radar de tecnología y sociedad"}, "facts": {"tr": "Sayı 01 · 74 kayıt · 104 kaynak", "en": "Issue 01 · 74 records · 104 sources", "fr": "Numéro 01 · 74 fiches · 104 sources", "de": "Ausgabe 01 · 74 Einträge · 104 Quellen", "es": "Número 01 · 74 registros · 104 fuentes"}}, {"key": "skillatlas", "group": "watch", "url": "https://skillatlas.mikail.net/", "short": "Skill Atlas", "color": "#C2410C", "name": {"tr": "Skill Atlas", "en": "Skill Atlas", "fr": "Skill Atlas", "de": "Skill Atlas", "es": "Skill Atlas"}, "facts": {"tr": "Haftalık · 80 sıralı araç · 115 repo", "en": "Weekly · 80 ranked tools · 115 repos", "fr": "Hebdo · 80 outils classés · 115 dépôts", "de": "Wöchentlich · 80 Tools · 115 Repos", "es": "Semanal · 80 herramientas · 115 repos"}}];
  const L = {"home": {"tr": "https://mikail.net/", "en": "https://mikail.net/en/", "fr": "https://mikail.net/fr/", "de": "https://mikail.net/de/", "es": "https://mikail.net/es/"}, "label": {"tr": "Mikail Lekesiz ekosistemi", "en": "Mikail Lekesiz ecosystem", "fr": "Écosystème Mikail Lekesiz", "de": "Mikail-Lekesiz-Ökosystem", "es": "Ecosistema Mikail Lekesiz"}, "projects": {"tr": "10 proje", "en": "10 projects", "fr": "10 projets", "de": "10 Projekte", "es": "10 proyectos"}, "by": {"tr": "Bir Mikail Lekesiz projesi", "en": "A Mikail Lekesiz project", "fr": "Un projet de Mikail Lekesiz", "de": "Ein Projekt von Mikail Lekesiz", "es": "Un proyecto de Mikail Lekesiz"}, "groups": {"learn": {"tr": "Öğren", "en": "Learn", "fr": "Apprendre", "de": "Lernen", "es": "Aprender"}, "measure": {"tr": "Ölç ve dene", "en": "Measure & try", "fr": "Mesurer et essayer", "de": "Messen & ausprobieren", "es": "Medir y probar"}, "watch": {"tr": "İzle", "en": "Watch", "fr": "Observer", "de": "Beobachten", "es": "Observar"}}, "here": {"tr": "buradasınız", "en": "you are here", "fr": "vous êtes ici", "de": "Sie sind hier", "es": "está aquí"}};
  const LANGS = ['tr', 'en', 'fr', 'de', 'es'];
  const pick = (o, l) => (o && (o[l] || o.en || o.tr)) || '';
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]));
  const CSS = `:host{all:initial;display:block;position:relative;z-index:2147483000;font:500 11.5px/1 "IBM Plex Mono",ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;letter-spacing:.06em;color:#ECE7DC;background:#111317;-webkit-font-smoothing:antialiased}
*{box-sizing:border-box}a{color:inherit;text-decoration:none}
.bar{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px;padding:0 clamp(12px,3vw,32px);border-bottom:1px solid #2A2E36}
.home{display:inline-flex;align-items:center;gap:9px;text-transform:uppercase;white-space:nowrap}
.home svg{flex:none}.home b{font-weight:500;color:#fff}.home span{color:#B9B3A7}
.home:hover b,.home:focus-visible b{color:#F07A5A}
details{position:relative}summary{list-style:none;cursor:pointer;display:inline-flex;align-items:center;gap:8px;padding:8px 10px;border:1px solid #3A3F48;text-transform:uppercase;white-space:nowrap;user-select:none}
summary::-webkit-details-marker{display:none}summary:hover,details[open] summary{border-color:#F07A5A;color:#fff}
summary i{display:inline-block;width:7px;height:7px;border-right:1.5px solid currentColor;border-bottom:1.5px solid currentColor;transform:translateY(-2px) rotate(45deg);transition:transform .15s}
details[open] summary i{transform:translateY(1px) rotate(-135deg)}
.panel{position:absolute;right:0;top:calc(100% + 6px);width:min(92vw,560px);max-height:min(78vh,620px);overflow:auto;background:#15171B;border:1px solid #3A3F48;box-shadow:0 18px 40px rgba(0,0,0,.45);padding:14px 16px 10px;display:grid;gap:12px}
.g h3{margin:0 0 6px;font:500 10.5px/1 inherit;font-family:inherit;color:#F07A5A;text-transform:uppercase;letter-spacing:.14em}
.g ul{margin:0;padding:0;list-style:none;display:grid;gap:2px}
.g a{display:grid;grid-template-columns:10px 1fr;gap:4px 10px;align-items:start;padding:8px 8px;border-radius:2px}
.g a:hover,.g a:focus-visible{background:#1F232A}
.g a[aria-current]{background:#1F232A;outline:1px dashed #3A3F48}
.dot{width:8px;height:8px;border-radius:50%;margin-top:3px;box-shadow:0 0 0 1.5px rgba(236,231,220,.55),0 0 0 4px rgba(255,255,255,.05)}
.nm{font:500 13.5px/1.25 "IBM Plex Sans",system-ui,sans-serif;letter-spacing:0;color:#fff}
.nm em{font-style:normal;color:#B9B3A7;font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:10.5px;letter-spacing:.06em;margin-left:6px;text-transform:uppercase}
.ft{grid-column:2;color:#9A958B;font-size:10.5px;letter-spacing:.03em;line-height:1.35}
.foot{display:flex;justify-content:space-between;gap:10px;border-top:1px solid #2A2E36;padding-top:10px;color:#9A958B;text-transform:uppercase;font-size:10.5px}
.foot a:hover{color:#F07A5A}
a:focus-visible,summary:focus-visible{outline:2px solid #F07A5A;outline-offset:2px}
@media (max-width:560px){.home span{display:none}.panel{position:fixed;left:8px;right:8px;width:auto;top:40px}}
@media print{:host{display:none}}`;
  const MARK = '<svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true"><rect x="2" y="2" width="44" height="44" fill="none" stroke="#ECE7DC" stroke-width="3"/><path d="M12 35V14l12 14 12-14v21" fill="none" stroke="#ECE7DC" stroke-width="4"/><path d="M12 40h10" stroke="#F07A5A" stroke-width="4"/></svg>';
  class Bar extends HTMLElement {
    static get observedAttributes() { return ['lang', 'current']; }
    connectedCallback() {
      if (!this.shadowRoot) this.attachShadow({mode: 'open'});
      this.render();
      if (!this._mo) {
        this._mo = new MutationObserver(() => this.render());
        this._mo.observe(document.documentElement, {attributes: true, attributeFilter: ['lang']});
      }
      if (!this._key) {
        this._key = (e) => { if (e.key === 'Escape') { const d = this.shadowRoot.querySelector('details'); if (d && d.open) { d.open = false; d.querySelector('summary').focus(); } } };
        this._out = (e) => { const d = this.shadowRoot.querySelector('details'); if (d && d.open && !e.composedPath().includes(this)) d.open = false; };
        document.addEventListener('keydown', this._key);
        document.addEventListener('click', this._out);
      }
    }
    disconnectedCallback() { if (this._mo) this._mo.disconnect(); document.removeEventListener('keydown', this._key); document.removeEventListener('click', this._out); this._mo = this._key = this._out = null; }
    attributeChangedCallback() { if (this.shadowRoot) this.render(); }
    get lang2() {
      const raw = (this.getAttribute('lang') || document.documentElement.lang || 'tr').slice(0, 2).toLowerCase();
      return LANGS.includes(raw) ? raw : 'en';
    }
    render() {
      const l = this.lang2, raw = (this.getAttribute('current') || '').toLowerCase();
      const ALIAS = {yzradar: 'yz', workspace: 'gw', googleworkspace: 'gw', 'google-workspace': 'gw'};
      const host = (location.hostname || '').replace(/^www\./, '');
      const cur = ALIAS[raw] || raw || ((P.find((p) => new URL(p.url).hostname === host) || {}).key || '');
      const groups = ['learn', 'measure', 'watch'].map((g) => {
        const items = P.filter((p) => p.group === g).map((p) => {
          const here = p.key === cur;
          return `<li><a href="${p.url}"${here ? ' aria-current="page"' : ''} hreflang="${l}"><span class="dot" style="background:${p.color}"></span><span class="nm">${esc(p.short)}${here ? `<em>· ${esc(pick(L.here, l))}</em>` : ''}</span><span class="ft">${esc(pick(p.name, l))} — ${esc(pick(p.facts, l))}</span></a></li>`;
        }).join('');
        return `<div class="g"><h3>${esc(pick(L.groups[g], l))}</h3><ul>${items}</ul></div>`;
      }).join('');
      this.shadowRoot.innerHTML = `<style>${CSS}</style><nav class="bar" aria-label="${esc(pick(L.label, l))}"><a class="home" href="${pick(L.home, l)}">${MARK}<b>mikail.net</b><span>· ${esc(pick(L.by, l))}</span></a><details><summary aria-haspopup="true">${esc(pick(L.projects, l))}<i aria-hidden="true"></i></summary><div class="panel" role="group" aria-label="${esc(pick(L.label, l))}">${groups}<div class="foot"><a href="${pick(L.home, l)}">mikail.net ↗</a><span>TR · EN · FR · DE · ES</span></div></div></details></nav>`;
    }
  }
  customElements.define('ml-ecosystem-bar', Bar);
})();
