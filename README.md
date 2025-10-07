# Portfolio - Mikail Lekesiz

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success)](https://portfolio.lekesiz.fr)
[![React](https://img.shields.io/badge/React-19.1.0-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.7-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> Portfolio professionnel moderne et multilingue de Mikail Lekesiz - DevOps Engineer & Full Stack Developer

🌐 **[Voir le site en direct](https://portfolio.lekesiz.fr)**

---

## 📋 Table des matières

- [À propos](#à-propos)
- [Fonctionnalités](#fonctionnalités)
- [Technologies](#technologies)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Déploiement](#déploiement)
- [Structure du projet](#structure-du-projet)
- [Personnalisation](#personnalisation)
- [Contribuer](#contribuer)
- [Licence](#licence)
- [Contact](#contact)

---

## 🎯 À propos

Ce portfolio présente mon parcours professionnel, mes compétences techniques, mes projets et mes réalisations en tant que **DevOps Engineer** et **Full Stack Developer**. 

En tant que CEO de **Netz Informatique**, je me spécialise dans :
- 🚀 DevOps & Cloud Solutions (AWS, Azure, Google Cloud)
- 💻 Développement Full Stack (React, Node.js, Python, PHP)
- 🤖 Intelligence Artificielle & Automatisation
- 🔒 Cybersécurité & Protection des données
- 🌐 Transformation Digitale
- 📚 Formation Professionnelle (Certifié QUALIOPI)

---

## ✨ Fonctionnalités

### 🌍 Multilingue
- **Français** (langue par défaut)
- **Anglais**
- **Turc**

### 📱 Responsive Design
- Optimisé pour tous les appareils (mobile, tablette, desktop)
- Navigation fluide et intuitive
- Animations élégantes avec Framer Motion

### 📄 Sections complètes
- **Hero** : Présentation avec photo de profil
- **À propos** : Parcours et philosophie professionnelle
- **Services** : 6 services proposés avec descriptions détaillées
- **Compétences** : Technologies organisées par catégories
- **Expérience** : Historique professionnel (Netz Informatique, IBM, Microsoft)
- **Formation** : Parcours académique et certifications
- **Projets** : Portfolio de projets avec liens GitHub et démos
- **Contact** : Coordonnées France et Turquie

### 🎨 Design moderne
- Palette de couleurs : Noir, Blanc, Gris
- Typographie professionnelle
- Icônes Lucide React
- Composants shadcn/ui

### 📥 Téléchargement CV
- CV au format PDF disponible en téléchargement direct
- Généré automatiquement avec toutes les informations

### 🔗 Intégrations sociales
- GitHub
- LinkedIn
- Twitter
- Instagram
- YouTube

---

## 🛠️ Technologies

### Frontend
- **React 19.1.0** - Bibliothèque JavaScript pour interfaces utilisateur
- **Vite 6.3.5** - Build tool ultra-rapide
- **Tailwind CSS 4.1.7** - Framework CSS utility-first
- **Framer Motion 12.15.0** - Bibliothèque d'animations
- **Lucide React 0.510.0** - Icônes modernes

### UI Components
- **shadcn/ui** - Composants React réutilisables
- **Radix UI** - Primitives UI accessibles
- **class-variance-authority** - Gestion des variants CSS

### Outils de développement
- **ESLint** - Linter JavaScript
- **pnpm** - Gestionnaire de paquets rapide
- **gh-pages** - Déploiement GitHub Pages

### Hébergement
- **GitHub Pages** - Hébergement gratuit et fiable
- **Custom Domain** - portfolio.lekesiz.fr
- **SSL/TLS** - Certificat Let's Encrypt automatique

---

## 🚀 Installation

### Prérequis
- Node.js 18+ 
- pnpm (ou npm/yarn)
- Git

### Étapes

1. **Cloner le repository**
```bash
git clone https://github.com/lekesiz/portfolio.git
cd portfolio
```

2. **Installer les dépendances**
```bash
pnpm install
```

3. **Lancer le serveur de développement**
```bash
pnpm run dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:5173
```

---

## 💻 Utilisation

### Commandes disponibles

```bash
# Développement
pnpm run dev          # Démarrer le serveur de développement

# Build
pnpm run build        # Créer le build de production

# Preview
pnpm run preview      # Prévisualiser le build de production

# Lint
pnpm run lint         # Vérifier le code avec ESLint

# Déploiement
pnpm run deploy       # Déployer sur GitHub Pages
```

---

## 🌐 Déploiement

### GitHub Pages

Le site est automatiquement déployé sur GitHub Pages via la branche `gh-pages`.

**Déploiement manuel :**
```bash
pnpm run deploy
```

**Déploiement automatique :**
- Chaque push sur la branche `main` peut déclencher un déploiement automatique (via GitHub Actions si configuré)

### Custom Domain

Le site est accessible via le domaine personnalisé : **https://portfolio.lekesiz.fr**

**Configuration DNS :**
```
Type: A
Host: portfolio
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

---

## 📁 Structure du projet

```
portfolio/
├── public/
│   ├── CV_Mikail_Lekesiz.pdf    # CV téléchargeable
│   ├── CNAME                     # Configuration custom domain
│   └── favicon.ico               # Icône du site
├── src/
│   ├── assets/
│   │   └── mikail_lekesiz.png   # Photo de profil
│   ├── components/
│   │   └── ui/                   # Composants shadcn/ui
│   ├── lib/
│   │   └── translations.js       # Contenu multilingue
│   ├── App.jsx                   # Composant principal
│   ├── App.css                   # Styles globaux
│   └── main.jsx                  # Point d'entrée
├── dist/                         # Build de production (généré)
├── node_modules/                 # Dépendances (généré)
├── .gitignore                    # Fichiers ignorés par Git
├── eslint.config.js              # Configuration ESLint
├── index.html                    # Template HTML
├── package.json                  # Dépendances et scripts
├── pnpm-lock.yaml                # Lockfile pnpm
├── README.md                     # Ce fichier
├── tailwind.config.js            # Configuration Tailwind
└── vite.config.js                # Configuration Vite
```

---

## 🎨 Personnalisation

### Modifier le contenu

**Traductions et textes :**
Éditez `src/lib/translations.js` pour modifier le contenu dans chaque langue.

**Photo de profil :**
Remplacez `src/assets/mikail_lekesiz.png` par votre propre photo.

**CV :**
Remplacez `public/CV_Mikail_Lekesiz.pdf` par votre CV.

### Modifier les couleurs

**Palette actuelle :** Noir, Blanc, Gris

Pour changer les couleurs, éditez les classes Tailwind dans `src/App.jsx` :
```jsx
// Exemple : changer la couleur de fond
className="bg-white dark:bg-black"  // Modifier ici
```

### Ajouter des sections

1. Créez une nouvelle section dans `src/App.jsx`
2. Ajoutez les traductions dans `src/lib/translations.js`
3. Ajoutez le lien dans la navigation

---

## 🤝 Contribuer

Les contributions sont les bienvenues ! Pour contribuer :

1. **Fork** le projet
2. Créez une **branche** pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. **Commit** vos changements (`git commit -m 'Add some AmazingFeature'`)
4. **Push** vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une **Pull Request**

---

## 📝 Licence

Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 📧 Contact

**Mikail Lekesiz**  
DevOps Engineer & Full Stack Developer  
CEO @ Netz Informatique

### 🇫🇷 France
- **Email :** [mikail@lekesiz.fr](mailto:mikail@lekesiz.fr)
- **Téléphone :** [+33 6 63 90 75 27](tel:+33663907527)
- **Adresse :** 2 rue des Tulipes, 67500 HAGUENAU, France

### 🇹🇷 Turquie
- **Email :** [mikail@lekesiz.org](mailto:mikail@lekesiz.org)
- **Téléphone :** [+90 507 43 43 253](tel:+905074343253)
- **Adresse :** Tepeköy Mahallesi, Çengel Çeşme Caddesi No: 44, 59800 Şarköy / Tekirdağ

### 🌐 Réseaux sociaux
- **Website :** [https://lekesiz.fr](https://lekesiz.fr)
- **Portfolio :** [https://portfolio.lekesiz.fr](https://portfolio.lekesiz.fr)
- **GitHub :** [@lekesiz](https://github.com/lekesiz)
- **LinkedIn :** [mikail-lekesiz](https://www.linkedin.com/in/mikail-lekesiz/)
- **Twitter :** [@lekesiz_mikail](https://x.com/lekesiz_mikail)
- **Instagram :** [@lekesizmikail](https://www.instagram.com/lekesizmikail)
- **YouTube :** [@mlekesiz](https://www.youtube.com/@mlekesiz)

---

## 🙏 Remerciements

- Design inspiré de [wholivesonmars.github.io/portfolio](https://wholivesonmars.github.io/portfolio/)
- Icônes par [Lucide](https://lucide.dev/)
- Composants UI par [shadcn/ui](https://ui.shadcn.com/)
- Hébergement par [GitHub Pages](https://pages.github.com/)

---

<div align="center">

**⭐ Si ce projet vous plaît, n'hésitez pas à lui donner une étoile ! ⭐**

Made with ❤️ by [Mikail Lekesiz](https://portfolio.lekesiz.fr)

© 2025 Mikail Lekesiz. Tous droits réservés.

</div>
