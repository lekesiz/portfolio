import { useEffect, useMemo, useState } from 'react'
import { useTheme } from 'next-themes'
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CloudCog,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  ShieldCheck,
  Sparkles,
  Sun,
  X,
} from 'lucide-react'
import { translations } from '@/lib/translations'
import profileImage from './assets/mikail_lekesiz.png'
import './App.css'

const PAGE_IDS = ['home', 'about', 'services', 'projects', 'contact']

const ui = {
  fr: {
    nav: { home: 'Accueil', about: 'À propos', services: 'Services', projects: 'Projets', contact: 'Contact' },
    language: 'Langue',
    theme: 'Changer de thème',
    menu: 'Ouvrir le menu',
    close: 'Fermer le menu',
    heroEyebrow: 'IA · logiciel sécurisé · formation',
    heroTitle: "De l’idée à la mise en service, avec méthode.",
    heroLead: "J’aide les organisations à transformer des besoins complexes en solutions numériques utiles, sûres et transmissibles.",
    contactCta: 'Parlons de votre projet',
    projectsCta: 'Voir les réalisations',
    portraitAlt: 'Portrait de Mikail Lekesiz',
    portraitCaption: 'Mikail Lekesiz · Haguenau / İstanbul',
    stats: [
      ['25+', 'années de pratique numérique'],
      ['3', 'pays d’intervention'],
      ['7', 'projets sélectionnés'],
      ['3', 'langues de travail'],
    ],
    expertiseEyebrow: "Domaines d’intervention",
    expertiseTitle: 'Trois façons de créer de la valeur',
    expertiseLead: 'Conseil, réalisation et transmission réunis dans une démarche claire, mesurable et centrée sur les usages.',
    expertise: [
      ['01 — Conseil', 'Cadrer une transformation', 'Clarifier le besoin, les risques, les priorités et la trajectoire avant d’investir.', ['Diagnostic de l’existant', 'Recommandations priorisées', 'Feuille de route actionnable']],
      ['02 — Réalisation', 'Concevoir des solutions fiables', 'Passer de l’intention à un produit déployable, sécurisé et maintenable.', ['Architecture et prototypage', 'Développement et automatisation', 'Mise en service et suivi']],
      ['03 — Formation', 'Rendre les équipes autonomes', 'Transformer la technologie en compétences concrètes grâce à une pédagogie de terrain.', ['Cas pratiques adaptés', 'Supports réutilisables', 'Mesure des acquis']],
    ],
    learnMore: 'Découvrir les services',
    selection: 'Sélection',
    recentProjects: 'Projets récents',
    allProjects: 'Tous les projets',
    statement: 'La technologie n’a de valeur que lorsqu’elle devient compréhensible, maîtrisable et réellement utile aux personnes qui l’emploient.',
    statementBy: 'Mikail Lekesiz — formateur, conseiller et responsable technique',
    ctaTitle: 'Un projet, une formation ou une transformation à cadrer ?',
    ctaText: 'Présentez-moi votre contexte. Je vous répondrai avec une première lecture concrète et sans jargon inutile.',
    ctaButton: 'Écrire un message',
    aboutEyebrow: 'Profil',
    aboutLead: 'Formateur et conseiller en intelligence artificielle, logiciels sécurisés et sensibilisation cyber.',
    facts: [
      ['Responsabilité', 'Président · Netz Informatique'],
      ['Implantation', 'France · Türkiye · Allemagne'],
      ['Formation', 'Université de Strasbourg'],
      ['Approche', 'Technique · pédagogie · gouvernance'],
    ],
    journey: 'Parcours professionnel',
    education: 'Formation',
    certifications: 'Certifications',
    skillTitle: 'Expertise technique',
    servicesEyebrow: 'Services',
    servicesLead: 'Des interventions modulaires pour décider, construire, sécuriser et transmettre.',
    processEyebrow: 'Méthode',
    processTitle: 'Comment se déroule une mission',
    process: [
      ['Étape 1', 'Écoute et cadrage', 'Objectifs, contexte, contraintes et critères de réussite sont explicités.'],
      ['Étape 2', 'Architecture', 'Une solution proportionnée est conçue avec des choix traçables.'],
      ['Étape 3', 'Réalisation', 'Les livrables avancent par étapes courtes, testées et validées.'],
      ['Étape 4', 'Transfert', 'Documentation, formation et suivi sécurisent l’autonomie dans la durée.'],
    ],
    faqEyebrow: 'Questions fréquentes',
    faqTitle: 'Bon à savoir',
    faq: [
      ['Travaillez-vous à distance ?', 'Oui. Les missions peuvent être menées à distance ou sur site en France, en Türkiye et selon le contexte en Allemagne.'],
      ['À qui s’adressent vos services ?', 'Aux PME, associations, organismes de formation, équipes projet et structures qui veulent adopter l’IA et le numérique de façon maîtrisée.'],
      ['Comment démarre une collaboration ?', 'Par un échange de cadrage afin de comprendre le besoin, vérifier l’adéquation et définir la prochaine étape utile.'],
      ['Intervenez-vous aussi en formation ?', 'Oui. Les formations sont construites autour de cas d’usage concrets, d’exercices et d’objectifs mesurables.'],
    ],
    projectsEyebrow: 'Réalisations',
    projectsLead: 'Produits, plateformes et automatisations conçus pour produire un impact concret.',
    filters: { all: 'Tous', product: 'Produits', ai: 'IA', automation: 'Automatisation' },
    live: 'Voir le site',
    code: 'Voir le code',
    contactEyebrow: 'Contact',
    contactLead: 'Décrivez le contexte, l’objectif et l’échéance : je vous répondrai avec une première orientation.',
    name: 'Nom et prénom',
    email: 'Adresse e-mail',
    subject: 'Sujet',
    message: 'Votre message',
    send: 'Préparer le message',
    formNote: 'Le bouton ouvre votre messagerie avec les informations saisies. Aucune donnée n’est stockée sur ce site.',
    france: 'France',
    turkey: 'Türkiye',
    availability: 'Zone d’intervention',
    networks: 'Réseaux',
    footerText: 'IA, logiciel sécurisé et transmission des compétences.',
    rights: 'Tous droits réservés.',
  },
  en: {
    nav: { home: 'Home', about: 'About', services: 'Services', projects: 'Projects', contact: 'Contact' },
    language: 'Language',
    theme: 'Change theme',
    menu: 'Open menu',
    close: 'Close menu',
    heroEyebrow: 'AI · secure software · training',
    heroTitle: 'From idea to production, with method.',
    heroLead: 'I help organisations turn complex needs into useful, secure and transferable digital solutions.',
    contactCta: 'Discuss your project',
    projectsCta: 'View selected work',
    portraitAlt: 'Portrait of Mikail Lekesiz',
    portraitCaption: 'Mikail Lekesiz · Haguenau / Istanbul',
    stats: [
      ['25+', 'years in digital practice'],
      ['3', 'countries served'],
      ['7', 'selected projects'],
      ['3', 'working languages'],
    ],
    expertiseEyebrow: 'Areas of expertise',
    expertiseTitle: 'Three ways to create value',
    expertiseLead: 'Advisory, delivery and knowledge transfer brought together in a clear, measurable, user-centred approach.',
    expertise: [
      ['01 — Advisory', 'Frame a transformation', 'Clarify needs, risks, priorities and the delivery path before investing.', ['Current-state assessment', 'Prioritised recommendations', 'Actionable roadmap']],
      ['02 — Delivery', 'Build reliable solutions', 'Turn intent into a deployable, secure and maintainable product.', ['Architecture and prototyping', 'Development and automation', 'Launch and follow-up']],
      ['03 — Training', 'Make teams autonomous', 'Turn technology into practical skills through hands-on learning.', ['Tailored use cases', 'Reusable resources', 'Measurable outcomes']],
    ],
    learnMore: 'Explore services',
    selection: 'Selected work',
    recentProjects: 'Recent projects',
    allProjects: 'All projects',
    statement: 'Technology creates value only when it becomes understandable, controllable and genuinely useful to the people who rely on it.',
    statementBy: 'Mikail Lekesiz — trainer, advisor and technical lead',
    ctaTitle: 'A project, a training programme or a transformation to frame?',
    ctaText: 'Share your context. I will reply with an initial, practical perspective without unnecessary jargon.',
    ctaButton: 'Write a message',
    aboutEyebrow: 'Profile',
    aboutLead: 'Trainer and advisor in artificial intelligence, secure software and cyber awareness.',
    facts: [
      ['Responsibility', 'President · Netz Informatique'],
      ['Presence', 'France · Türkiye · Germany'],
      ['Education', 'University of Strasbourg'],
      ['Approach', 'Technology · teaching · governance'],
    ],
    journey: 'Professional experience',
    education: 'Education',
    certifications: 'Certifications',
    skillTitle: 'Technical expertise',
    servicesEyebrow: 'Services',
    servicesLead: 'Modular engagements to decide, build, secure and transfer knowledge.',
    processEyebrow: 'Method',
    processTitle: 'How an engagement works',
    process: [
      ['Step 1', 'Listen and frame', 'Objectives, context, constraints and success criteria are made explicit.'],
      ['Step 2', 'Architecture', 'A proportionate solution is designed with traceable decisions.'],
      ['Step 3', 'Delivery', 'Deliverables progress through short, tested and validated stages.'],
      ['Step 4', 'Transfer', 'Documentation, training and follow-up secure long-term autonomy.'],
    ],
    faqEyebrow: 'Frequently asked questions',
    faqTitle: 'Good to know',
    faq: [
      ['Do you work remotely?', 'Yes. Engagements can be delivered remotely or on site in France, Türkiye and, depending on the context, Germany.'],
      ['Who are your services for?', 'SMEs, associations, training organisations and project teams seeking a controlled adoption of AI and digital tools.'],
      ['How does a collaboration begin?', 'With a discovery call to understand the need, verify fit and define the most useful next step.'],
      ['Do you also provide training?', 'Yes. Training is built around concrete use cases, hands-on exercises and measurable objectives.'],
    ],
    projectsEyebrow: 'Work',
    projectsLead: 'Products, platforms and automations designed to produce tangible impact.',
    filters: { all: 'All', product: 'Products', ai: 'AI', automation: 'Automation' },
    live: 'Visit site',
    code: 'View code',
    contactEyebrow: 'Contact',
    contactLead: 'Share the context, goal and timeline; I will reply with an initial direction.',
    name: 'Full name',
    email: 'Email address',
    subject: 'Subject',
    message: 'Your message',
    send: 'Prepare message',
    formNote: 'The button opens your email application with the information entered. No data is stored on this website.',
    france: 'France',
    turkey: 'Türkiye',
    availability: 'Service area',
    networks: 'Networks',
    footerText: 'AI, secure software and knowledge transfer.',
    rights: 'All rights reserved.',
  },
  tr: {
    nav: { home: 'Ana Sayfa', about: 'Hakkımda', services: 'Hizmetler', projects: 'Projeler', contact: 'İletişim' },
    language: 'Dil',
    theme: 'Temayı değiştir',
    menu: 'Menüyü aç',
    close: 'Menüyü kapat',
    heroEyebrow: 'YZ · güvenli yazılım · eğitim',
    heroTitle: 'Fikirden canlı kullanıma, sistemli bir yaklaşımla.',
    heroLead: 'Kurumların karmaşık ihtiyaçlarını faydalı, güvenli ve aktarılabilir dijital çözümlere dönüştürmelerine yardımcı oluyorum.',
    contactCta: 'Projenizi konuşalım',
    projectsCta: 'Çalışmaları incele',
    portraitAlt: 'Mikail Lekesiz portresi',
    portraitCaption: 'Mikail Lekesiz · Haguenau / İstanbul',
    stats: [
      ['25+', 'yıllık dijital deneyim'],
      ['3', 'ülkede çalışma'],
      ['7', 'seçilmiş proje'],
      ['3', 'çalışma dili'],
    ],
    expertiseEyebrow: 'Uzmanlık alanları',
    expertiseTitle: 'Değer üretmenin üç yolu',
    expertiseLead: 'Danışmanlık, uygulama ve bilgi aktarımını net, ölçülebilir ve insan odaklı bir yaklaşımla birleştiriyorum.',
    expertise: [
      ['01 — Danışmanlık', 'Dönüşümü doğru çerçevelemek', 'Yatırım öncesinde ihtiyacı, riskleri, öncelikleri ve yol haritasını netleştirmek.', ['Mevcut durum analizi', 'Öncelikli öneriler', 'Uygulanabilir yol haritası']],
      ['02 — Uygulama', 'Güvenilir çözümler geliştirmek', 'Niyeti canlıya alınabilir, güvenli ve sürdürülebilir bir ürüne dönüştürmek.', ['Mimari ve prototipleme', 'Geliştirme ve otomasyon', 'Canlıya alma ve takip']],
      ['03 — Eğitim', 'Ekipleri bağımsızlaştırmak', 'Saha odaklı öğrenmeyle teknolojiyi uygulanabilir beceriye dönüştürmek.', ['Uyarlanmış kullanım senaryoları', 'Yeniden kullanılabilir içerik', 'Ölçülebilir kazanımlar']],
    ],
    learnMore: 'Hizmetleri keşfet',
    selection: 'Seçki',
    recentProjects: 'Son projeler',
    allProjects: 'Tüm projeler',
    statement: 'Teknoloji; onu kullanan insanlar için anlaşılır, denetlenebilir ve gerçekten faydalı hâle geldiğinde değer üretir.',
    statementBy: 'Mikail Lekesiz — eğitmen, danışman ve teknik lider',
    ctaTitle: 'Çerçevelenecek bir proje, eğitim veya dönüşüm mü var?',
    ctaText: 'Bağlamı paylaşın. Gereksiz jargon olmadan somut bir ilk değerlendirmeyle dönüş yapayım.',
    ctaButton: 'Mesaj yaz',
    aboutEyebrow: 'Profil',
    aboutLead: 'Yapay zekâ, güvenli yazılım ve siber farkındalık alanlarında eğitmen ve danışman.',
    facts: [
      ['Sorumluluk', 'Başkan · Netz Informatique'],
      ['Çalışma alanı', 'Fransa · Türkiye · Almanya'],
      ['Eğitim', 'Strasbourg Üniversitesi'],
      ['Yaklaşım', 'Teknik · eğitim · yönetişim'],
    ],
    journey: 'Profesyonel deneyim',
    education: 'Eğitim',
    certifications: 'Sertifikalar',
    skillTitle: 'Teknik uzmanlık',
    servicesEyebrow: 'Hizmetler',
    servicesLead: 'Karar vermek, geliştirmek, güvenli hâle getirmek ve bilgi aktarmak için modüler hizmetler.',
    processEyebrow: 'Yöntem',
    processTitle: 'Bir çalışma nasıl ilerler?',
    process: [
      ['Adım 1', 'Dinleme ve çerçeveleme', 'Hedefler, bağlam, kısıtlar ve başarı ölçütleri netleştirilir.'],
      ['Adım 2', 'Mimari', 'İzlenebilir kararlarla ihtiyaca uygun bir çözüm tasarlanır.'],
      ['Adım 3', 'Uygulama', 'Çıktılar kısa, test edilmiş ve onaylanmış aşamalarla geliştirilir.'],
      ['Adım 4', 'Bilgi aktarımı', 'Dokümantasyon, eğitim ve takip ile uzun vadeli bağımsızlık sağlanır.'],
    ],
    faqEyebrow: 'Sık sorulan sorular',
    faqTitle: 'Bilmekte fayda var',
    faq: [
      ['Uzaktan çalışıyor musunuz?', 'Evet. Çalışmalar uzaktan veya Fransa, Türkiye ve bağlama göre Almanya’da yerinde yürütülebilir.'],
      ['Hizmetleriniz kimlere yöneliktir?', 'Yapay zekâ ve dijital araçları kontrollü biçimde benimsemek isteyen KOBİ, dernek, eğitim kurumu ve proje ekiplerine.'],
      ['Bir iş birliği nasıl başlar?', 'İhtiyacı anlamak, uyumu doğrulamak ve en faydalı sonraki adımı belirlemek için kısa bir ön görüşmeyle.'],
      ['Eğitim hizmeti de veriyor musunuz?', 'Evet. Eğitimler somut kullanım senaryoları, uygulamalar ve ölçülebilir hedefler etrafında hazırlanır.'],
    ],
    projectsEyebrow: 'Çalışmalar',
    projectsLead: 'Somut etki üretmek üzere geliştirilen ürünler, platformlar ve otomasyonlar.',
    filters: { all: 'Tümü', product: 'Ürünler', ai: 'Yapay zekâ', automation: 'Otomasyon' },
    live: 'Siteyi aç',
    code: 'Kodu incele',
    contactEyebrow: 'İletişim',
    contactLead: 'Bağlamı, hedefi ve zamanı paylaşın; ilk yönlendirmeyle dönüş yapayım.',
    name: 'Ad ve soyad',
    email: 'E-posta adresi',
    subject: 'Konu',
    message: 'Mesajınız',
    send: 'Mesajı hazırla',
    formNote: 'Buton, girdiğiniz bilgilerle e-posta uygulamanızı açar. Bu sitede hiçbir veri saklanmaz.',
    france: 'Fransa',
    turkey: 'Türkiye',
    availability: 'Çalışma bölgesi',
    networks: 'Sosyal ağlar',
    footerText: 'Yapay zekâ, güvenli yazılım ve bilgi aktarımı.',
    rights: 'Tüm hakları saklıdır.',
  },
}

const serviceIcons = [CloudCog, Code2, Sparkles, ShieldCheck, BriefcaseBusiness, GraduationCap]
const skillGroups = {
  languages: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'C#', 'Java'],
  frontend: ['React', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
  backend: ['Node.js', 'Express', 'Laravel', 'Symfony', 'ASP.NET'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server', 'Oracle'],
  devops: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Azure', 'Google Cloud'],
  tools: ['Git', 'GitHub', 'Jira', 'Confluence', 'Figma'],
}

const projectCategories = [
  ['product'],
  ['product', 'ai'],
  ['ai', 'automation'],
  ['product'],
  ['ai'],
  ['ai', 'automation'],
  ['automation'],
]

const projectGlyphs = ['NI', 'R', 'AI', 'BC', 'C', 'N', 'W']

function App() {
  const [language, setLanguage] = useState(() => {
    const queryLang = new URLSearchParams(window.location.search).get('lang')
    if (['fr', 'en', 'tr'].includes(queryLang)) return queryLang
    try {
      const savedLanguage = localStorage.getItem('ml-language')
      return ['fr', 'en', 'tr'].includes(savedLanguage) ? savedLanguage : 'fr'
    } catch {
      return 'fr'
    }
  })
  const [page, setPage] = useState(() => {
    const hash = window.location.hash.replace('#', '')
    return PAGE_IDS.includes(hash) ? hash : 'home'
  })
  const [menuOpen, setMenuOpen] = useState(false)
  const [projectFilter, setProjectFilter] = useState('all')
  const { resolvedTheme, setTheme } = useTheme()

  const t = translations[language]
  const copy = ui[language]

  const navItems = useMemo(() => PAGE_IDS.map((id) => ({ id, label: copy.nav[id] })), [copy])

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
      // The site remains fully functional when storage is unavailable.
    }
    document.documentElement.lang = language
    const titles = {
      fr: 'Mikail Lekesiz | IA, logiciel sécurisé et formation',
      en: 'Mikail Lekesiz | AI, Secure Software & Training',
      tr: 'Mikail Lekesiz | Yapay Zekâ, Güvenli Yazılım ve Eğitim',
    }
    document.title = titles[language]
  }, [language])

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
    const body = `${copy.name}: ${form.get('name')}\n${copy.email}: ${form.get('email')}\n\n${form.get('message')}`
    window.location.href = `mailto:mikail@lekesiz.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const projectCard = (project, index) => {
    const href = project.link || project.github
    return (
      <article className="card project-card" key={project.name}>
        <a className={`project-visual project-visual-${index % 4}`} href={href} target="_blank" rel="noreferrer" aria-label={project.name}>
          <span>{projectGlyphs[index] || 'ML'}</span>
          <ArrowRight size={22} aria-hidden="true" />
        </a>
        <div className="project-body">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="chips">
            {project.tech.map((tech) => <span className="chip" key={tech}>{tech}</span>)}
          </div>
          <div className="project-links">
            {project.link && <a href={project.link} target="_blank" rel="noreferrer"><ExternalLink size={16} />{copy.live}</a>}
            {project.github && <a href={project.github} target="_blank" rel="noreferrer"><Github size={16} />{copy.code}</a>}
          </div>
        </div>
      </article>
    )
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="wrap header-bar">
          <button className="brand" type="button" onClick={() => go('home')} aria-label={copy.nav.home}>
            <span className="brand-mark">ML</span>
            <span>Mikail <span className="brand-muted">Lekesiz</span></span>
          </button>

          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
            {navItems.map(({ id, label }) => (
              <button key={id} type="button" className={page === id ? 'active' : ''} onClick={() => go(id)}>{label}</button>
            ))}
          </nav>

          <div className="header-tools">
            <div className="language-switch" aria-label={copy.language}>
              {['fr', 'en', 'tr'].map((lang) => (
                <button key={lang} type="button" className={language === lang ? 'active' : ''} onClick={() => setLanguage(lang)}>{lang.toUpperCase()}</button>
              ))}
            </div>
            <button className="icon-button" type="button" aria-label={copy.theme} onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
              {resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="icon-button menu-button" type="button" aria-label={menuOpen ? copy.close : copy.menu} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        {page === 'home' && (
          <div className="page page-home">
            <section className="hero">
              <div className="wrap hero-grid">
                <div className="hero-copy">
                  <p className="eyebrow">{copy.heroEyebrow}</p>
                  <p className="hero-kicker">{t.hero.greeting} <strong>Mikail Lekesiz</strong></p>
                  <h1>{copy.heroTitle}</h1>
                  <p className="lead">{copy.heroLead}</p>
                  <p className="hero-detail">{t.hero.description}</p>
                  <div className="button-row">
                    <button className="button button-primary" type="button" onClick={() => go('contact')}>{copy.contactCta}<ArrowRight size={18} /></button>
                    <button className="button button-ghost" type="button" onClick={() => go('projects')}>{copy.projectsCta}</button>
                  </div>
                  <div className="hero-socials" aria-label="Social profiles">
                    <a href="https://github.com/lekesiz" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a>
                    <a href="https://www.linkedin.com/in/mikail-lekesiz/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
                    <a href="mailto:mikail@lekesiz.fr" aria-label="Email"><Mail size={19} /></a>
                  </div>
                </div>
                <div className="portrait-wrap">
                  <div className="portrait-frame">
                    <img src={profileImage} alt={copy.portraitAlt} width="740" height="994" fetchPriority="high" />
                  </div>
                  <div className="portrait-caption"><span className="status-dot" />{copy.portraitCaption}</div>
                </div>
              </div>
            </section>

            <section className="band compact">
              <div className="wrap">
                <ul className="stats">
                  {copy.stats.map(([value, label]) => <li className="stat" key={label}><span>{value}</span><p>{label}</p></li>)}
                </ul>
              </div>
            </section>

            <section className="band alternate">
              <div className="wrap">
                <SectionHeading eyebrow={copy.expertiseEyebrow} title={copy.expertiseTitle} lead={copy.expertiseLead} />
                <div className="grid-3">
                  {copy.expertise.map(([tag, title, description, bullets]) => (
                    <article className="card" key={title}>
                      <span className="tag">{tag}</span>
                      <h3>{title}</h3>
                      <p>{description}</p>
                      <ul className="check-list">{bullets.map((bullet) => <li key={bullet}><Check size={15} />{bullet}</li>)}</ul>
                      <button className="text-link" type="button" onClick={() => go('services')}>{copy.learnMore}<ArrowRight size={16} /></button>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="band">
              <div className="wrap">
                <SectionHeading eyebrow={copy.selection} title={copy.recentProjects} />
                <div className="grid-3">{t.projects.list.slice(0, 3).map(projectCard)}</div>
                <div className="button-row"><button className="button button-ghost" type="button" onClick={() => go('projects')}>{copy.allProjects}<ArrowRight size={18} /></button></div>
              </div>
            </section>

            <section className="band alternate">
              <div className="wrap"><blockquote className="quote">“{copy.statement}”<cite>{copy.statementBy}</cite></blockquote></div>
            </section>

            <section className="band">
              <div className="wrap"><CallToAction copy={copy} go={go} /></div>
            </section>
          </div>
        )}

        {page === 'about' && (
          <div className="page">
            <section className="band page-intro">
              <div className="wrap">
                <SectionHeading eyebrow={copy.aboutEyebrow} title="Mikail Lekesiz" lead={copy.aboutLead} level="h1" />
                <div className="about-grid">
                  <div className="prose-stack"><p>{t.about.content}</p><p>{t.about.content2}</p><p>{t.about.content3}</p></div>
                  <div className="about-portrait"><img src={profileImage} alt={copy.portraitAlt} width="740" height="994" /></div>
                </div>
                <div className="fact-grid">{copy.facts.map(([key, value]) => <div className="fact" key={key}><span>{key}</span><strong>{value}</strong></div>)}</div>
              </div>
            </section>

            <section className="band alternate">
              <div className="wrap"><SectionHeading eyebrow={copy.journey} title={t.experience.title} /><Timeline items={t.experience.jobs.map((job) => ({ when: job.period, title: job.title, where: `${job.company} · ${job.location}`, description: job.description }))} /></div>
            </section>

            <section className="band">
              <div className="wrap split-grid">
                <div>
                  <SectionHeading eyebrow={copy.education} title={t.education.title} />
                  <Timeline items={t.education.list.map((item) => ({ when: item.period, title: item.degree, where: item.school, description: item.description }))} />
                </div>
                <div>
                  <SectionHeading eyebrow={copy.certifications} title={t.certifications.title} />
                  <div className="cert-list">{t.certifications.list.map((cert) => <article key={cert.name}><span>{cert.date}</span><h3>{cert.name}</h3><p>{cert.issuer}</p><small>{cert.id}</small></article>)}</div>
                </div>
              </div>
            </section>

            <section className="band alternate">
              <div className="wrap">
                <SectionHeading eyebrow={copy.skillTitle} title={t.skills.title} lead={t.skills.subtitle} />
                <div className="skills-grid">{Object.entries(skillGroups).map(([key, list]) => <article className="skill-group" key={key}><h3>{t.skills[key]}</h3><div className="chips">{list.map((skill) => <span className="chip" key={skill}>{skill}</span>)}</div></article>)}</div>
              </div>
            </section>
          </div>
        )}

        {page === 'services' && (
          <div className="page">
            <section className="band page-intro">
              <div className="wrap">
                <SectionHeading eyebrow={copy.servicesEyebrow} title={t.services.title} lead={copy.servicesLead} level="h1" />
                <div className="grid-3 services-grid">
                  {t.services.list.map((service, index) => {
                    const Icon = serviceIcons[index]
                    const bullets = copy.expertise[index % 3][3]
                    return <article className="card service-card" key={service.title}><div className="service-icon"><Icon size={23} /></div><span className="tag">0{index + 1}</span><h3>{service.title}</h3><p>{service.description}</p><ul className="check-list">{bullets.map((bullet) => <li key={bullet}><Check size={15} />{bullet}</li>)}</ul></article>
                  })}
                </div>
              </div>
            </section>

            <section className="band alternate">
              <div className="wrap"><SectionHeading eyebrow={copy.processEyebrow} title={copy.processTitle} /><div className="steps">{copy.process.map(([number, title, description]) => <article className="step" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div>
            </section>

            <section className="band">
              <div className="wrap narrow"><SectionHeading eyebrow={copy.faqEyebrow} title={copy.faqTitle} />{copy.faq.map(([question, answer], index) => <details className="faq" key={question} open={index === 0}><summary>{question}<ChevronDown size={19} /></summary><p>{answer}</p></details>)}</div>
            </section>
            <section className="band compact"><div className="wrap"><CallToAction copy={copy} go={go} /></div></section>
          </div>
        )}

        {page === 'projects' && (
          <div className="page">
            <section className="band page-intro">
              <div className="wrap">
                <SectionHeading eyebrow={copy.projectsEyebrow} title={t.projects.title} lead={copy.projectsLead} level="h1" />
                <div className="filters">{Object.entries(copy.filters).map(([key, label]) => <button type="button" key={key} className={projectFilter === key ? 'active' : ''} onClick={() => setProjectFilter(key)}>{label}</button>)}</div>
                <div className="grid-3 projects-grid">{t.projects.list.map((project, index) => ({ project, index })).filter(({ index }) => projectFilter === 'all' || projectCategories[index]?.includes(projectFilter)).map(({ project, index }) => projectCard(project, index))}</div>
              </div>
            </section>
          </div>
        )}

        {page === 'contact' && (
          <div className="page">
            <section className="band page-intro">
              <div className="wrap">
                <SectionHeading eyebrow={copy.contactEyebrow} title={t.contact.title} lead={copy.contactLead} level="h1" />
                <div className="contact-grid">
                  <form className="contact-form" onSubmit={submitMail}>
                    <div className="form-row"><Field label={copy.name} name="name" autoComplete="name" required /><Field label={copy.email} name="email" type="email" autoComplete="email" required /></div>
                    <Field label={copy.subject} name="subject" required />
                    <label className="field"><span>{copy.message}</span><textarea name="message" rows="7" required /></label>
                    <button className="button button-primary" type="submit"><Mail size={18} />{copy.send}</button>
                    <p className="form-note">{copy.formNote}</p>
                  </form>
                  <aside className="contact-aside">
                    <ContactBlock title={copy.france} email="mikail@lekesiz.fr" phone="+33 6 63 90 75 27" place="Haguenau / Strasbourg, France" />
                    <ContactBlock title={copy.turkey} email="mikail@lekesiz.org" phone="+90 507 43 43 253" place="İstanbul / Tekirdağ, Türkiye" />
                    <div className="contact-socials"><span>{copy.networks}</span><a href="https://github.com/lekesiz" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/mikail-lekesiz/" target="_blank" rel="noreferrer">LinkedIn</a></div>
                  </aside>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div><button className="brand" type="button" onClick={() => go('home')}><span className="brand-mark">ML</span><span>Mikail <span className="brand-muted">Lekesiz</span></span></button><p>{copy.footerText}</p></div>
          <div><h4>Navigation</h4>{navItems.map(({ id, label }) => <button key={id} type="button" onClick={() => go(id)}>{label}</button>)}</div>
          <div><h4>{copy.contactEyebrow}</h4><a href="mailto:mikail@lekesiz.fr">mikail@lekesiz.fr</a><a href="https://github.com/lekesiz" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/mikail-lekesiz/" target="_blank" rel="noreferrer">LinkedIn</a></div>
        </div>
        <div className="wrap footer-legal"><span>© {new Date().getFullYear()} Mikail Lekesiz. {copy.rights}</span><span>France · Türkiye · Deutschland</span></div>
      </footer>
    </div>
  )
}

function SectionHeading({ eyebrow, title, lead, level = 'h2' }) {
  const Heading = level
  return <div className="section-heading">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<Heading>{title}</Heading>{lead && <p className="lead">{lead}</p>}</div>
}

function Timeline({ items }) {
  return <div className="timeline">{items.map((item) => <article className="timeline-item" key={`${item.when}-${item.title}`}><span className="timeline-when">{item.when}</span><h3>{item.title}</h3><p className="timeline-where">{item.where}</p>{item.description && <p>{item.description}</p>}</article>)}</div>
}

function CallToAction({ copy, go }) {
  return <div className="cta-band"><div><h2>{copy.ctaTitle}</h2><p>{copy.ctaText}</p></div><button className="button" type="button" onClick={() => go('contact')}>{copy.ctaButton}<ArrowRight size={18} /></button></div>
}

function Field({ label, name, type = 'text', autoComplete, required }) {
  return <label className="field"><span>{label}</span><input name={name} type={type} autoComplete={autoComplete} required={required} /></label>
}

function ContactBlock({ title, email, phone, place }) {
  return <section className="contact-block"><h3>{title}</h3><a href={`mailto:${email}`}><Mail size={18} />{email}</a><a href={`tel:${phone.replace(/\s/g, '')}`}><Phone size={18} />{phone}</a><p><MapPin size={18} />{place}</p></section>
}

export default App
