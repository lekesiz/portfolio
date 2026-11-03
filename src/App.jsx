import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from 'lucide-react'
import { translations } from '@/lib/translations'
import profileImage from './assets/mikail_lekesiz.png'
import './App.css'

const LANGS = ['tr', 'en', 'fr', 'de', 'es']
const PAGE_IDS = ['home', 'about', 'services', 'projects', 'contact']
const projectCategories = [['product'], ['product', 'ai'], ['ai'], ['ai', 'automation'], ['ai'], ['automation']]
const projectGlyphs = ['NI', 'R', 'AI', 'AO', 'CC', 'GS']

const META = Object.fromEntries(LANGS.map((lang) => [lang, translations[lang].meta]))

const ECOSYSTEM_PROJECTS = [
  { key: 'kyze', short: 'KYZE', url: 'https://kyze.mikail.net/', color: '#0B4F5C', name: { tr: 'Kurumsal Yapay Zekâ Programı', en: 'Corporate AI Programme', fr: 'Programme d’IA en entreprise', de: 'Programm für KI im Unternehmen', es: 'Programa de IA para empresas' }, facts: { tr: '18 modül · 47 saat · 76 şablon', en: '18 modules · 47 hours · 76 templates', fr: '18 modules · 47 heures · 76 modèles', de: '18 Module · 47 Stunden · 76 Vorlagen', es: '18 módulos · 47 horas · 76 plantillas' } },
  { key: 'gw', short: 'Workspace', url: 'https://googleworkspace.mikail.net/', color: '#1F4AA8', name: { tr: 'Google Workspace Saha Kılavuzu', en: 'Google Workspace Field Guide', fr: 'Google Workspace — Guide de terrain', de: 'Google Workspace Praxisleitfaden', es: 'Google Workspace — Guía de campo' }, facts: { tr: '15 modül · 37 saat · 7 öğrenme yolu', en: '15 modules · 37 hours · 7 learning paths', fr: '15 modules · 37 heures · 7 parcours', de: '15 Module · 37 Stunden · 7 Lernpfade', es: '15 módulos · 37 horas · 7 itinerarios' } },
  { key: 'yzhatti', short: 'YZ İş Hattı', url: 'https://yzhatti.mikail.net/', color: '#2A2560', name: { tr: 'YZ İş Hattı', en: 'YZ İş Hattı — AI work scenarios', fr: 'YZ İş Hattı — scénarios de travail avec l’IA', de: 'YZ İş Hattı — KI-Arbeitsszenarien', es: 'YZ İş Hattı — escenarios de trabajo con IA' }, facts: { tr: '100 senaryo · 10 bölüm · 204 kaynak', en: '100 scenarios · 10 chapters · 204 sources', fr: '100 scénarios · 10 chapitres · 204 sources', de: '100 Szenarien · 10 Kapitel · 204 Quellen', es: '100 escenarios · 10 capítulos · 204 fuentes' } },
  { key: 'kalibre', short: 'Kalibre', url: 'https://kalibre.mikail.net/', color: '#C2412D', name: { tr: 'Kalibre', en: 'Calibre', fr: 'Calibre', de: 'Kalibre', es: 'Kalibre' }, facts: { tr: '43 meslek · 8 aile · 1.290 soru', en: '43 professions · 8 families · 1,290 questions', fr: '43 métiers · 8 familles · 1 290 questions', de: '43 Berufe · 8 Familien · 1.290 Fragen', es: '43 profesiones · 8 familias · 1290 preguntas' } },
  { key: 'pusula', short: 'Pusula', url: 'https://pusula.mikail.net/', color: '#1F5A4E', name: { tr: 'Pusula AI', en: 'Pusula AI — your AI compass', fr: 'Pusula AI — votre boussole IA', de: 'Pusula AI — Ihr KI-Kompass', es: 'Pusula AI — su brújula de IA' }, facts: { tr: '8 alan · 24 ifade · pilot sürüm', en: '8 areas · 24 statements · pilot', fr: '8 domaines · 24 affirmations · pilote', de: '8 Bereiche · 24 Aussagen · Pilot', es: '8 áreas · 24 afirmaciones · piloto' } },
  { key: 'ses', short: 'Ses', url: 'https://ses.mikail.net/', color: '#2F7F6A', name: { tr: 'Ses', en: 'Ses — just talk', fr: 'Ses — parlez, simplement', de: 'Ses — einfach sprechen', es: 'Ses — solo habla' }, facts: { tr: '5 konuşma dili · kayıt yok', en: '5 spoken languages · no recording', fr: '5 langues parlées · aucun enregistrement', de: '5 Sprachen · keine Aufzeichnung', es: '5 idiomas · sin grabación' } },
  { key: 'yz', short: 'YZ Radar', url: 'https://yz.mikail.net/', color: '#0E7490', name: { tr: 'YZ Radar', en: 'YZ Radar — daily AI top 10', fr: 'YZ Radar — le top 10 quotidien de l’IA', de: 'YZ Radar — tägliche KI-Top-10', es: 'YZ Radar — el top 10 diario de la IA' }, facts: { tr: 'Günlük · TOP 10 · 10 YZ ailesi', en: 'Daily · top 10 · 10 AI families', fr: 'Quotidien · top 10 · 10 familles d’IA', de: 'Täglich · Top 10 · 10 KI-Familien', es: 'Diario · top 10 · 10 familias de IA' } },
  { key: 'makaleradar', short: 'Makale Radarı', url: 'https://makaleradar.mikail.net/', color: '#D63A10', name: { tr: 'Makale Radarı — laboratuvardan ürüne', en: 'Paper Radar — from the lab to products', fr: 'Radar des articles — du laboratoire aux produits', de: 'Paper-Radar — vom Labor zum Produkt', es: 'Radar de Artículos — del laboratorio al producto' }, facts: { tr: 'Haftalık · 43 makale · 3 okuma düzeyi', en: 'Weekly · 43 papers · 3 reading levels', fr: 'Hebdomadaire · 43 articles · 3 niveaux de lecture', de: 'Wöchentlich · 43 Paper · 3 Lesestufen', es: 'Semanal · 43 artículos · 3 niveles de lectura' } },
  { key: 'airadar', short: 'AI·Radar', url: 'https://airadar.mikail.net/', color: '#3F6B5C', name: { tr: 'AI·Radar — Toplumsal Teknoloji Radarı', en: 'AI·Radar — Social Technology Radar', fr: 'AI·Radar — Radar des technologies et de la société', de: 'AI·Radar — Radar für Technik und Gesellschaft', es: 'AI·Radar — Radar de tecnología y sociedad' }, facts: { tr: 'Sayı 01 · 74 kayıt · 104 kaynak', en: 'Issue 01 · 74 records · 104 sources', fr: 'Numéro 01 · 74 fiches · 104 sources', de: 'Ausgabe 01 · 74 Einträge · 104 Quellen', es: 'Número 01 · 74 registros · 104 fuentes' } },
  { key: 'skillatlas', short: 'Skill Atlas', url: 'https://skillatlas.mikail.net/', color: '#C2410C', name: { tr: 'Skill Atlas', en: 'Skill Atlas', fr: 'Skill Atlas', de: 'Skill Atlas', es: 'Skill Atlas' }, facts: { tr: 'Haftalık · 80 sıralı araç · 115 repo', en: 'Weekly · 80 ranked tools · 115 repos', fr: 'Hebdo · 80 outils classés · 115 dépôts', de: 'Wöchentlich · 80 Tools · 115 Repos', es: 'Semanal · 80 herramientas · 115 repos' } },
]

function App() {
  const [language, setLanguage] = useState(() => {
    const queryLang = new URLSearchParams(window.location.search).get('lang')
    if (LANGS.includes(queryLang)) return queryLang
    try {
      const savedLanguage = localStorage.getItem('ml-language')
      return LANGS.includes(savedLanguage) ? savedLanguage : 'tr'
    } catch {
      return 'tr'
    }
  })
  const [page, setPage] = useState(() => {
    const hash = window.location.hash.replace('#', '')
    return PAGE_IDS.includes(hash) ? hash : 'home'
  })
  const [menuOpen, setMenuOpen] = useState(false)
  const [projectFilter, setProjectFilter] = useState('all')
  const t = translations[language].ui

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      setPage(PAGE_IDS.includes(hash) ? hash : 'home')
      setMenuOpen(false)
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('ml-language', language)
    } catch {
      // The URL remains the source of truth when storage is unavailable.
    }
    const meta = META[language]
    const languageUrl = `https://lekesiz.org/?lang=${language}`
    document.documentElement.lang = language
    document.title = meta.title
    document.querySelector('meta[name="title"]')?.setAttribute('content', meta.title)
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', meta.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', meta.description)
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', meta.locale)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', meta.title)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', meta.description)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', languageUrl)
    document.querySelector('meta[name="twitter:url"]')?.setAttribute('content', languageUrl)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', languageUrl)
    const structuredData = document.querySelector('#identity-jsonld')
    if (structuredData) structuredData.textContent = JSON.stringify(buildIdentityData(meta, languageUrl))
  }, [language])

  const navItems = useMemo(() => PAGE_IDS.map((id) => ({ id, label: t.nav[id] })), [t])
  const visibleProjects = t.projects
    .map((project, index) => ({ project, index }))
    .filter(({ index }) => projectFilter === 'all' || projectCategories[index]?.includes(projectFilter))

  const changeLanguage = (nextLanguage) => {
    const url = new URL(window.location.href)
    url.searchParams.set('lang', nextLanguage)
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)
    setLanguage(nextLanguage)
  }

  const go = (id) => {
    if (window.location.hash === `#${id}`) {
      setPage(id)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.location.hash = id
    }
    setMenuOpen(false)
  }

  const submitMail = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = form.get('subject') || 'Portfolio contact'
    const body = `${t.name}: ${form.get('name')}\n${t.email}: ${form.get('email')}\n\n${form.get('message')}`
    window.location.href = `mailto:contact@netzinformatique.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const projectCard = (project, index) => {
    const href = project.link || project.github
    const external = href.startsWith('http')
    return (
      <article className="notebook-card project-card" key={project.name}>
        <a className={`project-visual project-visual-${index % 4}`} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} aria-label={`${project.name} — ${t.live}`}>
          <span>{projectGlyphs[index] || 'ML'}</span>
          <ArrowRight size={22} aria-hidden="true" />
        </a>
        <div className="project-body">
          <p className="card-label">{project.tech[0]}</p>
          <h3>{project.name}</h3>
          <p className="card-description">{project.description}</p>
          <div className="chips" aria-label={`${project.name} technologies`}>
            {project.tech.map((tech) => <span className="chip" key={tech}>{tech}</span>)}
          </div>
          <div className="project-links">
            {project.link && <a href={project.link} target={project.link.startsWith('http') ? '_blank' : undefined} rel={project.link.startsWith('http') ? 'noreferrer' : undefined}><ExternalLink size={15} aria-hidden="true" />{t.live}</a>}
            {project.github && <a href={project.github} target="_blank" rel="noreferrer"><Github size={15} aria-hidden="true" />{t.code}</a>}
          </div>
        </div>
      </article>
    )
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">{t.skip}</a>
      <header className="site-header">
        <div className="wrap header-bar">
          <a className="brand" href="#home" onClick={(event) => { event.preventDefault(); go('home') }} aria-label={`${t.nav.home} — Mikail Lekesiz`}>
            <span className="brand-mark" aria-hidden="true">ML</span>
            <span className="brand-name">Mikail <span className="brand-muted">Lekesiz</span></span>
          </a>
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label={t.nav.home}>
            {navItems.map(({ id, label }) => <a key={id} href={`#${id}`} className={page === id ? 'active' : ''} aria-current={page === id ? 'page' : undefined} onClick={(event) => { event.preventDefault(); go(id) }}>{label}</a>)}
          </nav>
          <div className="header-tools">
            <div className="language-switch" aria-label={t.language}>
              {LANGS.map((lang) => <button key={lang} type="button" className={language === lang ? 'active' : ''} aria-pressed={language === lang} onClick={() => changeLanguage(lang)}>{lang.toUpperCase()}</button>)}
            </div>
            <button className="icon-button menu-button" type="button" aria-label={menuOpen ? t.close : t.menu} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
          </div>
        </div>
      </header>

      <main id="main-content">
        {page === 'home' && (
          <div className="page page-home">
            <section className="hero">
              <div className="wrap hero-grid">
                <div className="hero-copy">
                  <p className="eyebrow">{t.heroEyebrow}</p>
                  <p className="hero-kicker">{t.heroKicker}</p>
                  <h1>{t.heroTitle}</h1>
                  <p className="lead">{t.heroLead}</p>
                  <p className="hero-detail">{t.heroDetail}</p>
                  <div className="button-row">
                    <button className="button button-primary" type="button" onClick={() => go('contact')}>{t.contactCta}<ArrowRight size={17} aria-hidden="true" /></button>
                    <button className="button button-ghost" type="button" onClick={() => go('projects')}>{t.projectsCta}</button>
                  </div>
                  <div className="hero-links">
                    <a href="https://mikail.net/" target="_blank" rel="noreferrer">{t.hubShort} ↗</a>
                    <a href="https://github.com/lekesiz" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} aria-hidden="true" />GitHub</a>
                    <a href="https://www.linkedin.com/in/mikail-lekesiz/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} aria-hidden="true" />LinkedIn</a>
                  </div>
                </div>
                <div className="portrait-wrap">
                  <div className="portrait-frame"><img src={profileImage} alt={t.portraitAlt} width="740" height="994" fetchPriority="high" /></div>
                  <p className="portrait-caption"><span className="status-dot" aria-hidden="true" />{t.portraitCaption}</p>
                </div>
              </div>
            </section>

            <section className="stats-band" aria-label={t.statsNote}>
              <div className="wrap"><ul className="stats">{t.stats.map(([value, label]) => <li className="stat" key={label}><span>{value}</span><p>{label}</p></li>)}</ul><p className="stats-note">{t.statsNote}</p></div>
            </section>

            <section className="section section-paper">
              <div className="wrap"><SectionHeading eyebrow={t.servicesEyebrow} title={t.servicesTitle} lead={t.servicesLead} /><div className="services-grid">{t.services.map((service) => <ServiceCard key={service.title} service={service} action={t.learnMore} onAction={() => go('services')} />)}</div></div>
            </section>

            <section className="section section-soft">
              <div className="wrap"><SectionHeading eyebrow={t.selection} title={t.recentProjects} /><div className="projects-grid">{t.projects.slice(0, 3).map(projectCard)}</div><div className="section-action"><button className="button button-ghost" type="button" onClick={() => go('projects')}>{t.allProjects}<ArrowRight size={17} aria-hidden="true" /></button></div></div>
            </section>

            <section className="section section-ink"><div className="wrap"><blockquote className="quote">“{t.quote}”<cite>{t.quoteBy}</cite></blockquote></div></section>
            <section className="section section-paper"><div className="wrap"><Ecosystem t={t} language={language} /></div></section>
            <section className="section section-soft"><div className="wrap"><CallToAction copy={t} onClick={() => go('contact')} /></div></section>
          </div>
        )}

        {page === 'about' && <div className="page"><section className="section page-intro section-paper"><div className="wrap"><SectionHeading eyebrow={t.aboutEyebrow} title={t.aboutTitle} lead={t.aboutLead} level="h1" /><div className="about-layout"><div className="prose-stack">{t.aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="about-portrait"><img src={profileImage} alt={t.portraitAlt} width="740" height="994" /></div></div><div className="fact-grid">{t.facts.map(([label, value]) => <div className="fact" key={`${label}-${value}`}><span>{label}</span><strong>{value}</strong></div>)}</div></div></section><section className="section section-soft"><div className="wrap"><SectionHeading eyebrow={t.principlesTitle} title={t.principlesTitle} /><div className="principles-grid">{t.principles.map(([title, description], index) => <article className="notebook-line" key={title}><span className="line-number">0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section></div>}

        {page === 'services' && <div className="page"><section className="section page-intro section-paper"><div className="wrap"><SectionHeading eyebrow={t.servicesPageEyebrow} title={t.servicesPageTitle} lead={t.servicesLead} level="h1" /><div className="services-grid services-grid-large">{t.services.map((service) => <ServiceCard key={service.title} service={service} />)}</div></div></section><section className="section section-ink"><div className="wrap"><SectionHeading eyebrow={t.processEyebrow} title={t.processTitle} tone="dark" /><div className="process-grid">{t.process.map(([number, title, description]) => <article className="process-step" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section><section className="section section-paper"><div className="wrap narrow"><SectionHeading eyebrow={t.faqEyebrow} title={t.faqTitle} />{t.faq.map(([question, answer], index) => <details className="faq" key={question} open={index === 0}><summary>{question}<ChevronDown size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section><section className="section section-soft"><div className="wrap"><CallToAction copy={t} onClick={() => go('contact')} /></div></section></div>}

        {page === 'projects' && <div className="page"><section className="section page-intro section-paper"><div className="wrap"><SectionHeading eyebrow={t.projectsEyebrow} title={t.projectsTitle} lead={t.projectsLead} level="h1" /><div className="filters" role="group" aria-label={t.projectsEyebrow}>{Object.entries(t.filters).map(([key, label]) => <button type="button" key={key} className={projectFilter === key ? 'active' : ''} aria-pressed={projectFilter === key} onClick={() => setProjectFilter(key)}>{label}</button>)}</div><div className="projects-grid projects-grid-all">{visibleProjects.map(({ project, index }) => projectCard(project, index))}</div></div></section><section className="section section-soft"><div className="wrap"><Ecosystem t={t} language={language} /></div></section></div>}

        {page === 'contact' && <div className="page"><section className="section page-intro section-paper"><div className="wrap"><SectionHeading eyebrow={t.contactEyebrow} title={t.contactTitle} lead={t.contactLead} level="h1" /><div className="contact-layout"><form className="contact-form notebook-card" onSubmit={submitMail}><div className="form-row"><Field label={t.name} name="name" autoComplete="name" required /><Field label={t.email} name="email" type="email" autoComplete="email" required /></div><Field label={t.subject} name="subject" required /><label className="field"><span>{t.message}</span><textarea name="message" rows="7" required /></label><button className="button button-primary" type="submit"><Mail size={17} aria-hidden="true" />{t.send}</button><p className="form-note">{t.formNote}</p></form><aside className="contact-aside"><ContactBlock title="NETZ INFORMATIQUE" email="contact@netzinformatique.fr" href="https://www.netzinformatique.fr/contact" /><ContactBlock title="Reflektif" email="direction@reflektif.net" href="https://reflektif.net/legal" /><div className="social-block"><p className="eyebrow">{t.networks}</p><a href="https://github.com/lekesiz" target="_blank" rel="noreferrer"><Github size={17} aria-hidden="true" />GitHub</a><a href="https://www.linkedin.com/in/mikail-lekesiz/" target="_blank" rel="noreferrer"><Linkedin size={17} aria-hidden="true" />LinkedIn</a><a href="https://mikail.net/contact/" target="_blank" rel="noreferrer"><ExternalLink size={17} aria-hidden="true" />mikail.net/contact</a></div></aside></div></div></section></div>}
      </main>

      <footer className="site-footer"><div className="wrap footer-grid"><div className="footer-brand"><a className="brand" href="#home" onClick={(event) => { event.preventDefault(); go('home') }}><span className="brand-mark" aria-hidden="true">ML</span><span className="brand-name">Mikail <span className="brand-muted">Lekesiz</span></span></a><p>{t.footerText}</p><a className="hub-link" href="https://mikail.net/" target="_blank" rel="noreferrer">{t.hubShort} ↗</a></div><div><h2 className="footer-heading">{t.footerLinks}</h2>{navItems.map(({ id, label }) => <a key={id} href={`#${id}`} onClick={(event) => { event.preventDefault(); go(id) }}>{label}</a>)}<a href="/ai-professionals/">{t.projects[2].name}</a></div><div><h2 className="footer-heading">{t.organization}</h2><a href="https://www.netzinformatique.fr/" target="_blank" rel="noreferrer">NETZ INFORMATIQUE</a><a href="https://reflektif.net/" target="_blank" rel="noreferrer">Reflektif</a><a href="https://github.com/lekesiz" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/mikail-lekesiz/" target="_blank" rel="noreferrer">LinkedIn</a></div></div><div className="wrap footer-legal"><span>© {new Date().getFullYear()} Mikail Lekesiz. {t.rights}</span><span>TR · EN · FR · DE · ES</span></div></footer>
    </div>
  )
}

function SectionHeading({ eyebrow, title, lead, level = 'h2', tone = 'light' }) {
  const Heading = level
  return <div className={`section-heading ${tone === 'dark' ? 'section-heading-dark' : ''}`}><p className="eyebrow">{eyebrow}</p><Heading>{title}</Heading>{lead && <p className="lead">{lead}</p>}</div>
}

function ServiceCard({ service, action, onAction }) {
  return <article className="notebook-card service-card"><p className="card-label">{service.tag}</p><h3>{service.title}</h3><p className="card-description">{service.description}</p><ul className="check-list">{service.bullets.map((bullet) => <li key={bullet}><Check size={15} aria-hidden="true" />{bullet}</li>)}</ul>{action && <button className="text-link" type="button" onClick={onAction}>{action}<ArrowRight size={15} aria-hidden="true" /></button>}</article>
}

function Ecosystem({ t, language }) {
  return <div className="ecosystem"><SectionHeading eyebrow={t.ecosystemEyebrow} title={t.ecosystemTitle} lead={t.ecosystemLead} /><div className="ecosystem-grid">{ECOSYSTEM_PROJECTS.map((project) => <a className="ecosystem-item" href={project.url} target="_blank" rel="noreferrer" key={project.key}><span className="ecosystem-dot" style={{ backgroundColor: project.color }} aria-hidden="true" /><span className="ecosystem-copy"><strong>{project.short}</strong><span>{project.name[language]}</span><small>{project.facts[language]}</small></span><ArrowRight size={17} aria-hidden="true" /></a>)}</div><a className="hub-link ecosystem-link" href="https://mikail.net/" target="_blank" rel="noreferrer">{t.ecosystemCta} ↗</a></div>
}

function CallToAction({ copy, onClick }) {
  return <div className="cta-line"><div><p className="eyebrow">{copy.contactEyebrow}</p><h2>{copy.ctaTitle}</h2><p>{copy.ctaText}</p></div><button className="button button-primary" type="button" onClick={onClick}>{copy.ctaButton}<ArrowRight size={17} aria-hidden="true" /></button></div>
}

function Field({ label, name, type = 'text', autoComplete, required }) {
  return <label className="field"><span>{label}</span><input name={name} type={type} autoComplete={autoComplete} required={required} /></label>
}

function ContactBlock({ title, email, href }) {
  return <section className="contact-block"><h2>{title}</h2><a href={`mailto:${email}`}><Mail size={17} aria-hidden="true" />{email}</a><a href={href} target="_blank" rel="noreferrer"><ExternalLink size={17} aria-hidden="true" />{href.replace(/^https?:\/\//, '').replace(/\/$/, '')}</a></section>
}

function buildIdentityData(meta, languageUrl) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://mikail.net/#mikail',
        name: 'Mikail Lekesiz',
        url: 'https://mikail.net/',
        jobTitle: 'Yapay zekâ ve dijital dönüşüm eğitmeni',
        description: meta.description,
        sameAs: ['https://lekesiz.org/', 'https://github.com/lekesiz', 'https://www.linkedin.com/in/mikail-lekesiz/'],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://lekesiz.org/#website',
        url: languageUrl,
        name: meta.title,
        description: meta.description,
        inLanguage: languageUrl.split('lang=')[1] || 'tr',
        author: { '@id': 'https://mikail.net/#mikail' },
        publisher: { '@id': 'https://mikail.net/#mikail' },
      },
    ],
  }
}

export default App
