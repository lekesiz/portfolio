import { motion } from 'framer-motion'
import {
  Briefcase, GraduationCap, Award, Rocket, Code, Users,
  TrendingUp, MapPin, Calendar, Globe
} from 'lucide-react'

/**
 * Interactive Timeline Component
 * Shows professional journey with key milestones
 */

const timelineEvents = [
  {
    id: 1,
    year: '2016 – Présent',
    title: 'Fondateur & Directeur Technique',
    organization: 'Netz Informatique',
    location: 'Haguenau, Grand Est, France',
    type: 'career',
    icon: Rocket,
    description: 'Direction de la transformation digitale et de l\'innovation technologique avec une approche centrée sur l\'humain. Développement de solutions IT & IA sur mesure pour particuliers et entreprises.',
    highlights: [
      'Solutions IT & IA personnalisées pour 30+ clients',
      'Formation professionnelle certifiée QUALIOPI',
      'Co-fondateur de Reflektif.net (Turquie)',
      'Systèmes durables et évolutifs centrés sur l\'humain',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    year: '2025',
    title: 'LP DWCA — Licence Professionnelle',
    organization: 'Université de Strasbourg',
    location: 'Strasbourg, France',
    type: 'education',
    icon: GraduationCap,
    description: 'Licence Professionnelle Développeur Web et Conception d\'Applications — Formation avancée en développement web moderne et architecture d\'applications.',
    highlights: [
      'Développement web moderne (React, Node.js)',
      'Architecture d\'applications scalables',
      'Méthodes agiles et DevOps',
      'Projets professionnels en entreprise',
    ],
    color: 'from-red-500 to-pink-500',
  },
  {
    id: 3,
    year: '2024',
    title: 'ChatGPT + Zapier: Automate Email Replies with AI',
    organization: 'Vanderbilt University',
    type: 'certification',
    icon: Award,
    description: 'Certification en automatisation des processus métier avec l\'IA — intégration de ChatGPT et Zapier pour des workflows intelligents.',
    highlights: [
      'Automatisation IA des réponses email',
      'Intégration ChatGPT & Zapier',
      'Workflows intelligents no-code',
      'ID: CX6R05UJ6FBQ',
    ],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 4,
    year: '2024',
    title: 'Introduction to Google Workspace Administration',
    organization: 'Google Cloud',
    type: 'certification',
    icon: Award,
    description: 'Certification Google Cloud en administration de Google Workspace — gestion des environnements de travail collaboratifs en entreprise.',
    highlights: [
      'Administration Google Workspace',
      'Gestion des utilisateurs et groupes',
      'Sécurité et conformité',
      'ID: CEOF4A1GG3ND',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 5,
    year: '2021 – 2026',
    title: 'Certificat de Compétences en Entreprise',
    organization: 'CCI France',
    type: 'certification',
    icon: Award,
    description: 'Certification professionnelle CCI France validant les compétences entrepreneuriales et de gestion d\'entreprise.',
    highlights: [
      'Gestion et stratégie d\'entreprise',
      'Compétences entrepreneuriales validées',
      'Réseau professionnel CCI',
      'ID: 2021-0011724-5',
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 6,
    year: '2014',
    title: 'Spécialiste Architecture Systèmes',
    organization: 'IBM',
    location: 'Paris, Île-de-France, France',
    type: 'career',
    icon: Code,
    description: 'Architecture de systèmes d\'entreprise complexes et conception de solutions scalables. Collaboration avec des équipes pluridisciplinaires pour traduire les besoins métier en architectures techniques robustes.',
    highlights: [
      'Architecture de systèmes d\'entreprise complexes',
      'Conception de solutions scalables',
      'Collaboration pluridisciplinaire',
      'Intégration de systèmes à grande échelle',
    ],
    color: 'from-blue-600 to-blue-800',
  },
  {
    id: 7,
    year: '2014',
    title: 'Certificat Java & Oracle',
    organization: 'Sakarya Üniversitesi UZEM',
    type: 'education',
    icon: GraduationCap,
    description: 'Formation intensive en programmation Java et gestion de bases de données Oracle — maîtrise des fondamentaux du développement orienté objet.',
    highlights: [
      'Programmation Java avancée',
      'Gestion de bases de données Oracle',
      'Développement orienté objet',
      'Applications d\'entreprise',
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 8,
    year: '2013',
    title: 'Certificat C#, ASP.NET & SQL Server',
    organization: 'Sakarya Üniversitesi UZEM',
    type: 'education',
    icon: GraduationCap,
    description: 'Développement de logiciels en C# et création de sites web dynamiques avec ASP.NET — expertise en développement .NET et gestion de données.',
    highlights: [
      'Développement C# & .NET',
      'Applications web ASP.NET',
      'Gestion SQL Server',
      'Architecture MVC',
    ],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 9,
    year: '2010 – 2014',
    title: 'Spécialiste Architecture Cloud',
    organization: 'Microsoft',
    location: 'Paris, Île-de-France, France',
    type: 'career',
    icon: Briefcase,
    description: 'Conception et mise en œuvre de solutions cloud innovantes et d\'architectures système performantes. Accompagnement des clients dans leur migration vers le cloud avec une approche pédagogique et collaborative.',
    highlights: [
      'Solutions cloud Azure innovantes',
      'Architectures système haute performance',
      'Migration cloud avec approche pédagogique',
      'Expertise Microsoft 365 & Azure',
    ],
    color: 'from-blue-400 to-blue-600',
  },
  {
    id: 10,
    year: '2008',
    title: 'Information Management',
    organization: 'Anadolu Üniversitesi',
    type: 'education',
    icon: GraduationCap,
    description: 'Formation en gestion de l\'information — fondements de la gestion des données, des systèmes d\'information et de la communication digitale.',
    highlights: [
      'Gestion des systèmes d\'information',
      'Communication digitale',
      'Fondements de la data management',
      'ID: 2008-15959',
    ],
    color: 'from-gray-500 to-slate-600',
  },
]

export function Timeline({ t }) {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          {t?.timeline?.title || 'Mon Parcours'}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          {t?.timeline?.subtitle || 'De Microsoft à IBM, de la fondation de Netz Informatique à Reflektif.net — un parcours guidé par la passion de la technologie et l\'amour de l\'humain.'}
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800" />

        {/* Events */}
        <div className="space-y-12">
          {timelineEvents.map((event, index) => {
            const isLeft = index % 2 === 0
            const Icon = event.icon

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Content */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:text-right' : 'md:text-left'} mb-8 md:mb-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-xl hover:border-gray-400 dark:hover:border-gray-600 transition-all hover:shadow-xl`}
                  >
                    {/* Year Badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${event.color} text-white rounded-full text-sm font-bold mb-3`}>
                      <Calendar size={14} />
                      <span>{event.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {event.title}
                    </h3>

                    {/* Organization */}
                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-1 justify-start md:justify-end" style={{ flexDirection: isLeft ? 'row-reverse' : 'row' }}>
                      <span className="font-semibold">{event.organization}</span>
                    </div>

                    {/* Location */}
                    {event.location && (
                      <div className={`flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 mb-3 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                        <MapPin size={14} />
                        <span>{event.location}</span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {event.description}
                    </p>

                    {/* Highlights */}
                    <ul className={`space-y-2 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                      {event.highlights.map((highlight, i) => (
                        <li key={i} className={`flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                          <TrendingUp size={14} className={`mt-0.5 flex-shrink-0 text-green-600`} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Icon (Center) */}
                <div className="absolute left-8 md:left-1/2 top-6 md:transform md:-translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900`}
                  >
                    <Icon size={28} className="text-white" />
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl"
      >
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">15+</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Années d'Expérience</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">50+</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Projets Livrés</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">30+</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Clients Satisfaits</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">3</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Entreprises Clés</div>
        </div>
      </motion.div>
    </div>
  )
}
