export const translations = {
  fr: {
    hero: {
      greeting: "Bonjour, je suis",
      description: "Entrepreneur technologique et formateur en entreprise, je conçois des parcours appliqués en intelligence artificielle, développement logiciel et transformation numérique pour les organisations.",
    },
    about: {
      content: "Je suis entrepreneur technologique et formateur en entreprise. Je conçois des parcours appliqués en intelligence artificielle, développement logiciel et transformation numérique, à partir des besoins réels des organisations.",
      content2: "Je suis président de NETZ INFORMATIQUE, société française créée en 2016. La notice légale publique de Reflektif Bilişim A.Ş. m’identifie comme président du conseil d’administration et responsable technique.",
      content3: "Ma méthode associe analyse des besoins, objectifs d’apprentissage mesurables, ateliers pratiques, études de cas et évaluation par projet. J’aborde l’IA générative avec des règles explicites de confidentialité, de vérification, de supervision humaine et de gestion des risques.",
    },
    services: {
      title: "Interventions",
      list: [
        { title: "Formation à l’IA appliquée", description: "Parcours et ateliers adaptés au niveau des équipes, aux cas d’usage et aux données manipulées." },
        { title: "Développement logiciel", description: "Prototypage, architecture et développement d’applications avec des choix documentés et maintenables." },
        { title: "Usage sûr de l’IA", description: "Confidentialité, vérification des sorties, supervision humaine et identification des risques organisationnels." },
        { title: "Transformation numérique", description: "Diagnostic, priorisation et feuille de route reliant les outils aux objectifs opérationnels." },
        { title: "DevOps & Cloud", description: "Ateliers et accompagnement sur l’automatisation, le déploiement, l’observabilité et la continuité de service." },
        { title: "Ingénierie pédagogique", description: "Analyse des besoins, objectifs mesurables, cas pratiques, projets et dispositif d’évaluation." },
      ],
    },
    skills: {
      title: "Domaines techniques",
      subtitle: "Technologies utilisées selon le besoin, le contexte et le niveau de maturité du projet.",
      languages: "Langages",
      frontend: "Frontend",
      backend: "Backend",
      databases: "Données",
      devops: "DevOps & Cloud",
      tools: "Outils",
    },
    experience: {
      title: "Rôles et parcours",
      jobs: [
        {
          title: "Président",
          company: "NETZ INFORMATIQUE",
          period: "Société créée en 2016 · fonction actuelle",
          location: "Haguenau, France",
          description: "Pilotage d’une société française active dans les services informatiques et la formation professionnelle. L’identité légale et le statut de l’entreprise sont vérifiables dans les registres publics français.",
        },
        {
          title: "Président du conseil d’administration & Responsable technique",
          company: "Reflektif Bilişim A.Ş.",
          period: "Fonction publiée en 2026 · actuelle",
          location: "Türkiye",
          description: "Rôle formulé conformément à la notice légale publique de Reflektif. Contribution à une plateforme d’orientation professionnelle et d’évaluation des compétences assistée par l’IA.",
        },
        {
          title: "Parcours technologique international",
          company: "Expériences présentées dans le CV",
          period: "Depuis 2000 · déclaration de parcours",
          location: "France · Türkiye · Allemagne",
          description: "Le CV présente des responsabilités en développement logiciel, systèmes, cloud et opérations IT. Les justificatifs détaillés peuvent être fournis dans un cadre professionnel approprié.",
        },
      ],
    },
    education: {
      title: "Formation déclarée",
      list: [
        {
          degree: "Licence Professionnelle — LP DWCA",
          school: "Université de Strasbourg",
          period: "2025–2026",
          description: "Diplôme mentionné dans le CV 2026. Justificatif disponible sur demande dans un processus professionnel approprié.",
        },
        {
          degree: "Gestion de l’information — diplôme de premier cycle",
          school: "Anadolu Üniversitesi",
          period: "2006–2008",
          description: "Diplôme mentionné dans le CV 2026. Justificatif disponible sur demande dans un processus professionnel approprié.",
        },
      ],
    },
    certifications: {
      title: "Qualifications sélectionnées",
      list: [
        {
          name: "ChatGPT + Zapier: Automate Email Replies with AI",
          issuer: "Vanderbilt University · Coursera",
          date: "16 déc. 2024",
          id: "Attestation publique vérifiable",
        },
        {
          name: "CCE — Exercer la mission de formateur en entreprise",
          issuer: "CCI France · CCI Alsace Eurométropole",
          date: "Document 2021 · référentiel historique RS5365",
          id: "Justificatif disponible sur demande",
        },
      ],
    },
    projects: {
      title: "Travaux sélectionnés",
      list: [
        {
          name: "NETZ INFORMATIQUE",
          description: "Site de la société française créée en 2016 et active dans les services informatiques et la formation professionnelle. Qualiopi concerne l’organisme et le périmètre publié du certificat.",
          tech: ["Services IT", "Formation", "France"],
          link: "https://www.netzinformatique.fr/",
        },
        {
          name: "Reflektif",
          description: "Plateforme d’orientation professionnelle et d’évaluation des compétences assistée par l’IA. La notice légale publique identifie Mikail Lekesiz comme président du conseil d’administration et responsable technique.",
          tech: ["EdTech", "IA", "Évaluation"],
          link: "https://reflektif.net/",
        },
        {
          name: "AI Orchestrator",
          description: "Dépôt public explorant l’orchestration de plusieurs modèles d’IA et l’automatisation de flux de travail. Travail technique ouvert, sans promesse de statut de production.",
          tech: ["Python", "LLM", "API"],
          github: "https://github.com/lekesiz/ai_orchestrator",
        },
        {
          name: "Claude Chat App",
          description: "Prototype public d’interface conversationnelle utilisant une API de modèle de langage. Le dépôt est présenté comme expérimentation technique.",
          tech: ["JavaScript", "AI API", "React"],
          github: "https://github.com/lekesiz/claude-chat-app",
        },
        {
          name: "AI News Scraper",
          description: "Outil public de collecte et de traitement de contenus sur l’intelligence artificielle, présenté comme travail technique ouvert.",
          tech: ["Python", "Collecte", "Analyse"],
          github: "https://github.com/lekesiz/ai_news_scraper",
        },
        {
          name: "Wedof Sync Google Sheets",
          description: "Automatisation publique de synchronisation de données Wedof vers Google Sheets, avec un objectif de réduction des tâches répétitives.",
          tech: ["Python", "Google API", "Automatisation"],
          github: "https://github.com/lekesiz/wedof-sync-google-sheets",
        },
      ],
    },
    contact: { title: "Échange professionnel" },
  },

  en: {
    hero: {
      greeting: "Hello, I’m",
      description: "I am a technology entrepreneur and corporate trainer designing applied learning in artificial intelligence, software development and digital transformation for organisations.",
    },
    about: {
      content: "I am a technology entrepreneur and corporate trainer. I design applied learning in artificial intelligence, software development and digital transformation around the real needs of organisations.",
      content2: "I am President of NETZ INFORMATIQUE, a French company created in 2016. Reflektif Bilişim A.Ş.’s public legal notice identifies me as Board Chair and Technical Manager.",
      content3: "My method combines needs analysis, measurable learning outcomes, hands-on workshops, case studies and project-based assessment. I frame generative AI through confidentiality, verification, human oversight and organisational risk.",
    },
    services: {
      title: "Engagements",
      list: [
        { title: "Applied AI training", description: "Learning programmes and workshops adapted to team maturity, use cases and the data being handled." },
        { title: "Software development", description: "Prototyping, architecture and application development with documented, maintainable decisions." },
        { title: "Safer AI use", description: "Confidentiality, output verification, human oversight and organisational risk identification." },
        { title: "Digital transformation", description: "Assessment, prioritisation and roadmaps connecting technology choices to operational outcomes." },
        { title: "DevOps & Cloud", description: "Training and support in automation, delivery, observability and service continuity." },
        { title: "Learning design", description: "Needs analysis, measurable objectives, practical cases, projects and assessment design." },
      ],
    },
    skills: {
      title: "Technical areas",
      subtitle: "Technologies selected according to the need, context and maturity of each engagement.",
      languages: "Languages",
      frontend: "Frontend",
      backend: "Backend",
      databases: "Data",
      devops: "DevOps & Cloud",
      tools: "Tools",
    },
    experience: {
      title: "Roles and career",
      jobs: [
        {
          title: "President",
          company: "NETZ INFORMATIQUE",
          period: "Company created in 2016 · current role",
          location: "Haguenau, France",
          description: "Leadership of a French company active in IT services and professional training. Its legal identity and current status are available in France’s public business registers.",
        },
        {
          title: "Board Chair & Technical Manager",
          company: "Reflektif Bilişim A.Ş.",
          period: "Role published in 2026 · current",
          location: "Türkiye",
          description: "Role stated in Reflektif’s public legal notice. Contributing to an AI-supported career-guidance and competency-assessment platform.",
        },
        {
          title: "International technology career",
          company: "Experience stated in the CV",
          period: "Since 2000 · career statement",
          location: "France · Türkiye · Germany",
          description: "The CV describes responsibilities across software development, systems, cloud and IT operations. Supporting records can be provided in an appropriate professional process.",
        },
      ],
    },
    education: {
      title: "Stated education",
      list: [
        {
          degree: "Professional Bachelor — LP DWCA",
          school: "University of Strasbourg",
          period: "2025–2026",
          description: "Qualification listed in the 2026 CV. Supporting record available on request in an appropriate professional process.",
        },
        {
          degree: "Information Management — associate degree",
          school: "Anadolu University",
          period: "2006–2008",
          description: "Qualification listed in the 2026 CV. Supporting record available on request in an appropriate professional process.",
        },
      ],
    },
    certifications: {
      title: "Selected qualifications",
      list: [
        {
          name: "ChatGPT + Zapier: Automate Email Replies with AI",
          issuer: "Vanderbilt University · Coursera",
          date: "16 Dec 2024",
          id: "Publicly verifiable record",
        },
        {
          name: "CCE — Corporate Trainer Mission",
          issuer: "CCI France · CCI Alsace Eurométropole",
          date: "2021 document · historical RS5365 framework",
          id: "Supporting record available on request",
        },
      ],
    },
    projects: {
      title: "Selected work",
      list: [
        {
          name: "NETZ INFORMATIQUE",
          description: "Website of the French company created in 2016 and active in IT services and professional training. Qualiopi applies to the organisation and the certificate’s published scope.",
          tech: ["IT Services", "Training", "France"],
          link: "https://www.netzinformatique.fr/",
        },
        {
          name: "Reflektif",
          description: "AI-supported career-guidance and competency-assessment platform. Its public legal notice identifies Mikail Lekesiz as Board Chair and Technical Manager.",
          tech: ["EdTech", "AI", "Assessment"],
          link: "https://reflektif.net/",
        },
        {
          name: "AI Orchestrator",
          description: "Public repository exploring multi-model AI orchestration and workflow automation. Presented as open technical work without claiming production-service status.",
          tech: ["Python", "LLM", "API"],
          github: "https://github.com/lekesiz/ai_orchestrator",
        },
        {
          name: "Claude Chat App",
          description: "Public prototype of a conversational interface using a language-model API. The repository is presented as a technical experiment.",
          tech: ["JavaScript", "AI API", "React"],
          github: "https://github.com/lekesiz/claude-chat-app",
        },
        {
          name: "AI News Scraper",
          description: "Public tool for collecting and processing artificial-intelligence content, presented as open technical work.",
          tech: ["Python", "Collection", "Analysis"],
          github: "https://github.com/lekesiz/ai_news_scraper",
        },
        {
          name: "Wedof Sync Google Sheets",
          description: "Public automation for synchronising Wedof data to Google Sheets, designed to reduce repetitive operational work.",
          tech: ["Python", "Google API", "Automation"],
          github: "https://github.com/lekesiz/wedof-sync-google-sheets",
        },
      ],
    },
    contact: { title: "Professional enquiry" },
  },

  tr: {
    hero: {
      greeting: "Merhaba, ben",
      description: "Teknoloji girişimcisi ve kurumsal eğitmen olarak yapay zekâ, yazılım geliştirme ve dijital dönüşüm alanlarında kurumlara yönelik uygulamalı öğrenme programları tasarlıyorum.",
    },
    about: {
      content: "Teknoloji girişimcisi ve kurumsal eğitmenim. Yapay zekâ, yazılım geliştirme ve dijital dönüşüm alanlarında kurumların gerçek ihtiyaçlarına göre uygulamalı öğrenme programları tasarlıyorum.",
      content2: "2016’da kurulmuş Fransız şirketi NETZ INFORMATIQUE’in başkanıyım. Reflektif Bilişim A.Ş.’nin kamuya açık hukukî bildiriminde Yönetim Kurulu Başkanı ve Teknik Sorumlu olarak yer alıyorum.",
      content3: "Çalışma yöntemim; ihtiyaç analizi, ölçülebilir öğrenme hedefleri, uygulamalı atölyeler, vaka çalışmaları ve proje temelli değerlendirmeyi birleştirir. Üretken yapay zekâyı veri gizliliği, doğrulama, insan denetimi ve kurumsal riskler çerçevesinde ele alırım.",
    },
    services: {
      title: "Çalışma alanları",
      list: [
        { title: "Uygulamalı yapay zekâ eğitimi", description: "Ekip düzeyi, kullanım senaryoları ve işlenen veri türüne göre uyarlanan öğrenme programları ve atölyeler." },
        { title: "Yazılım geliştirme", description: "Belgelenebilir ve sürdürülebilir tercihlerle prototipleme, mimari ve uygulama geliştirme." },
        { title: "Güvenli yapay zekâ kullanımı", description: "Veri gizliliği, çıktı doğrulama, insan denetimi ve kurumsal risklerin belirlenmesi." },
        { title: "Dijital dönüşüm", description: "Teknoloji tercihlerini operasyonel hedeflerle bağlayan mevcut durum analizi, önceliklendirme ve yol haritası." },
        { title: "DevOps ve bulut", description: "Otomasyon, dağıtım, gözlemlenebilirlik ve hizmet sürekliliği üzerine eğitim ve teknik destek." },
        { title: "Eğitim tasarımı", description: "İhtiyaç analizi, ölçülebilir hedefler, uygulamalı vakalar, proje ve değerlendirme tasarımı." },
      ],
    },
    skills: {
      title: "Teknik çalışma alanları",
      subtitle: "Her çalışmanın ihtiyacına, bağlamına ve olgunluk düzeyine göre seçilen teknolojiler.",
      languages: "Diller",
      frontend: "Frontend",
      backend: "Backend",
      databases: "Veri",
      devops: "DevOps ve Bulut",
      tools: "Araçlar",
    },
    experience: {
      title: "Görevler ve kariyer",
      jobs: [
        {
          title: "Başkan",
          company: "NETZ INFORMATIQUE",
          period: "Şirket 2016’da kuruldu · güncel görev",
          location: "Haguenau, Fransa",
          description: "BT hizmetleri ve mesleki eğitim alanlarında çalışan Fransız şirketinin yönetimi. Şirketin hukukî kimliği ve güncel durumu Fransa’nın resmî işletme kayıtlarından doğrulanabilir.",
        },
        {
          title: "Yönetim Kurulu Başkanı & Teknik Sorumlu",
          company: "Reflektif Bilişim A.Ş.",
          period: "2026’da yayımlanan görev · güncel",
          location: "Türkiye",
          description: "Görev, Reflektif’in kamuya açık hukukî bildirimindeki ifadeye göre sunulmaktadır. Yapay zekâ destekli kariyer yönlendirme ve yetkinlik değerlendirme platformuna teknik katkı.",
        },
        {
          title: "Uluslararası teknoloji kariyeri",
          company: "CV’de sunulan deneyimler",
          period: "2000’den beri · kariyer beyanı",
          location: "Fransa · Türkiye · Almanya",
          description: "CV; yazılım geliştirme, sistemler, bulut ve BT operasyonları alanlarında sorumluluklar içerir. Ayrıntılı dayanak belgeler uygun profesyonel süreçte paylaşılabilir.",
        },
      ],
    },
    education: {
      title: "CV’de belirtilen eğitim",
      list: [
        {
          degree: "Licence Professionnelle — LP DWCA",
          school: "Strasbourg Üniversitesi",
          period: "2025–2026",
          description: "2026 CV’sinde belirtilen diploma. Dayanak belge, uygun profesyonel süreçte talep üzerine paylaşılabilir.",
        },
        {
          degree: "Bilgi Yönetimi — ön lisans",
          school: "Anadolu Üniversitesi",
          period: "2006–2008",
          description: "2026 CV’sinde belirtilen diploma. Dayanak belge, uygun profesyonel süreçte talep üzerine paylaşılabilir.",
        },
      ],
    },
    certifications: {
      title: "Seçili yeterlilikler",
      list: [
        {
          name: "ChatGPT + Zapier: Automate Email Replies with AI",
          issuer: "Vanderbilt University · Coursera",
          date: "16 Aralık 2024",
          id: "Kamuya açık doğrulanabilir kayıt",
        },
        {
          name: "CCE — İşletmede eğitmenlik görevi",
          issuer: "CCI France · CCI Alsace Eurométropole",
          date: "2021 belgesi · tarihsel RS5365 çerçevesi",
          id: "Dayanak belge talep üzerine paylaşılır",
        },
      ],
    },
    projects: {
      title: "Seçili çalışmalar",
      list: [
        {
          name: "NETZ INFORMATIQUE",
          description: "2016’da kurulmuş, BT hizmetleri ve mesleki eğitim alanlarında çalışan Fransız şirketinin sitesi. Qualiopi, kurum ve yayımlanan sertifika kapsamına ilişkindir.",
          tech: ["BT Hizmetleri", "Eğitim", "Fransa"],
          link: "https://www.netzinformatique.fr/",
        },
        {
          name: "Reflektif",
          description: "Yapay zekâ destekli kariyer yönlendirme ve yetkinlik değerlendirme platformu. Kamuya açık hukukî bildirim, Mikail Lekesiz’i Yönetim Kurulu Başkanı ve Teknik Sorumlu olarak belirtir.",
          tech: ["Eğitim Teknolojisi", "Yapay Zekâ", "Değerlendirme"],
          link: "https://reflektif.net/",
        },
        {
          name: "AI Orchestrator",
          description: "Birden çok yapay zekâ modelinin orkestrasyonu ve iş akışı otomasyonunu araştıran açık kaynak deposu. Üretim hizmeti iddiası olmadan açık teknik çalışma olarak sunulur.",
          tech: ["Python", "LLM", "API"],
          github: "https://github.com/lekesiz/ai_orchestrator",
        },
        {
          name: "Claude Chat App",
          description: "Dil modeli API’si kullanan konuşma arayüzü prototipi. Depo, açık teknik deney olarak sunulur.",
          tech: ["JavaScript", "AI API", "React"],
          github: "https://github.com/lekesiz/claude-chat-app",
        },
        {
          name: "AI News Scraper",
          description: "Yapay zekâ içeriklerini toplama ve işleme için geliştirilen, açık teknik çalışma olarak sunulan araç.",
          tech: ["Python", "Veri Toplama", "Analiz"],
          github: "https://github.com/lekesiz/ai_news_scraper",
        },
        {
          name: "Wedof Sync Google Sheets",
          description: "Tekrarlanan operasyonel işleri azaltmak amacıyla Wedof verilerini Google Sheets’e eşitleyen açık otomasyon çalışması.",
          tech: ["Python", "Google API", "Otomasyon"],
          github: "https://github.com/lekesiz/wedof-sync-google-sheets",
        },
      ],
    },
    contact: { title: "Profesyonel iletişim" },
  },
}
