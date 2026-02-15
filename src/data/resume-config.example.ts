import type { ResumeConfig } from './types'

/**
 * This is an example configuration file.
 * Copy this file to `resume-config.ts` and fill in your own information.
 *
 * All text fields that support multiple languages use the `LocalizedString` format:
 * { en: "English text", fr: "Texte français" }
 *
 * Add as many languages as you need — just make sure to list them in `languages.available`.
 */
export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'Jane Doe',
    photo: '/images/photo.jpg', // Place your photo in public/images/
    photoBackEmoji: '👩‍💻', // Shown when clicking the photo (3D flip)
    title: {
      en: 'Fullstack Developer',
      fr: 'Développeuse Fullstack',
    },
    subtitle: {
      en: '5 years of experience',
      fr: '5 ans d\'expérience',
    },
    location: 'Paris, France',
  },

  // ===== SEO (used in <head> meta tags) =====
  seo: {
    title: 'Jane Doe — Fullstack Developer',
    description: 'Interactive resume of Jane Doe, Fullstack Developer specializing in React and TypeScript.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'en',
    available: ['en', 'fr'],
    labels: {
      en: 'EN',
      fr: 'FR',
    },
  },

  // ===== CONTACT =====
  contact: [
    { type: 'github', label: 'janedoe', href: 'https://github.com/janedoe' },
    { type: 'linkedin', label: 'Jane Doe', href: 'https://linkedin.com/in/janedoe' },
    { type: 'email', label: 'jane@example.com' },
    { type: 'phone', label: '+33 6 12 34 56 78' },
    { type: 'location', label: 'Paris, France' },
  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { en: 'Languages', fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { en: 'French', fr: 'Français' }, level: { en: 'Native', fr: 'Natif' } },
        { name: { en: 'English', fr: 'Anglais' }, level: { en: 'Professional', fr: 'Professionnel' }, details: 'TOEIC 910' },
      ],
    },
    {
      title: { en: 'Frontend', fr: 'Frontend' },
      type: 'badges',
      items: [
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'Angular' },
      ],
    },
    {
      title: { en: 'Backend', fr: 'Backend' },
      type: 'badges',
      items: [
        { name: 'Node.js' },
        { name: 'Python' },
      ],
    },
    {
      title: { en: 'Database', fr: 'Base de données' },
      type: 'badges',
      items: [
        { name: 'PostgreSQL' },
        { name: 'MongoDB' },
      ],
    },
    {
      title: { en: 'DevOps', fr: 'DevOps' },
      type: 'text',
      items: [
        { name: 'Docker, Kubernetes, AWS, GitHub Actions' },
      ],
    },
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: 'company-a',
      company: { en: 'TechCorp', fr: 'TechCorp' },
      role: { en: 'Senior Fullstack Developer', fr: 'Développeuse Fullstack Senior' },
      type: { en: 'Permanent', fr: 'CDI' },
      period: { en: '2022 - Present', fr: '2022 - Présent' },
      description: {
        en: 'Led the development of a SaaS platform used by 10k+ users. Built microservices architecture and modern React frontend.',
        fr: 'Direction du développement d\'une plateforme SaaS utilisée par 10k+ utilisateurs. Architecture microservices et frontend React moderne.',
      },
      techs: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      isHighlighted: true,
      details: {
        context: {
          en: 'Team of 8 developers, Agile methodology, CI/CD pipeline with GitHub Actions.',
          fr: 'Équipe de 8 développeurs, méthodologie Agile, pipeline CI/CD avec GitHub Actions.',
        },
        tasks: {
          en: [
            'Designed and implemented the frontend architecture',
            'Built a real-time notification system using WebSockets',
            'Migrated legacy codebase from JavaScript to TypeScript',
            'Set up automated testing with 85% code coverage',
            'Mentored 3 junior developers',
          ],
          fr: [
            'Conception et implémentation de l\'architecture frontend',
            'Création d\'un système de notifications temps réel via WebSockets',
            'Migration du code legacy de JavaScript vers TypeScript',
            'Mise en place de tests automatisés avec 85% de couverture',
            'Mentorat de 3 développeurs juniors',
          ],
        },
        env: {
          en: 'React / TypeScript / Node.js / PostgreSQL / Docker / AWS',
          fr: 'React / TypeScript / Node.js / PostgreSQL / Docker / AWS',
        },
      },
    },
    {
      id: 'company-b',
      company: { en: 'WebAgency', fr: 'WebAgency' },
      role: { en: 'Frontend Developer', fr: 'Développeuse Frontend' },
      type: { en: 'Permanent', fr: 'CDI' },
      period: { en: '2019 - 2022', fr: '2019 - 2022' },
      description: {
        en: 'Developed responsive web applications for various clients. Specialized in React and Angular projects.',
        fr: 'Développement d\'applications web responsives pour divers clients. Spécialisée en projets React et Angular.',
      },
      techs: ['React', 'Angular', 'TypeScript'],
      details: {
        context: {
          en: 'Digital agency with 20+ clients across various industries.',
          fr: 'Agence digitale avec 20+ clients dans différents secteurs.',
        },
        tasks: {
          en: [
            'Built 15+ client-facing web applications',
            'Implemented design systems for consistent UI',
            'Optimized web performance (Core Web Vitals)',
          ],
          fr: [
            'Développement de 15+ applications web clients',
            'Implémentation de design systems pour une UI cohérente',
            'Optimisation des performances web (Core Web Vitals)',
          ],
        },
        env: {
          en: 'React / Angular / TypeScript / SCSS / Figma',
          fr: 'React / Angular / TypeScript / SCSS / Figma',
        },
      },
    },
    {
      id: 'internship',
      company: { en: 'StartupXYZ', fr: 'StartupXYZ' },
      role: { en: 'Fullstack Developer Intern', fr: 'Stagiaire Développeuse Fullstack' },
      type: { en: 'Internship', fr: 'Stage' },
      period: { en: '2018 - 2019', fr: '2018 - 2019' },
      description: {
        en: 'Contributed to the development of an e-commerce platform. Gained experience in fullstack development.',
        fr: 'Contribution au développement d\'une plateforme e-commerce. Acquisition d\'expérience en développement fullstack.',
      },
      techs: ['React', 'Node.js', 'MongoDB'],
      details: {
        context: {
          en: 'Early-stage startup, small team of 5.',
          fr: 'Startup en phase de démarrage, petite équipe de 5 personnes.',
        },
        tasks: {
          en: [
            'Developed product catalog and shopping cart features',
            'Integrated Stripe payment gateway',
          ],
          fr: [
            'Développement du catalogue produits et du panier d\'achat',
            'Intégration de la passerelle de paiement Stripe',
          ],
        },
        env: {
          en: 'React / Node.js / MongoDB / Stripe',
          fr: 'React / Node.js / MongoDB / Stripe',
        },
      },
    },
  ],

  // ===== PROJECTS (optional) =====
  projects: [
    {
      id: 'project-a',
      title: { en: 'WeatherApp', fr: 'WeatherApp' },
      description: {
        en: 'A real-time weather dashboard built with React and OpenWeather API.',
        fr: 'Un tableau de bord météo en temps réel construit avec React et l\'API OpenWeather.',
      },
      techs: ['React', 'TypeScript'],
      url: 'https://weather-app.example.com',
      github: 'https://github.com/janedoe/weather-app',
    },
    {
      id: 'project-b',
      title: { en: 'TaskManager', fr: 'TaskManager' },
      description: {
        en: 'A Kanban-style task management tool with drag-and-drop.',
        fr: 'Un outil de gestion de tâches style Kanban avec glisser-déposer.',
      },
      techs: ['React', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/janedoe/task-manager',
    },
  ],

  // ===== EDUCATION =====
  education: [
    {
      school: { en: 'University of Paris', fr: 'Université de Paris' },
      degree: { en: 'Master in Computer Science', fr: 'Master Informatique' },
      specialty: { en: 'Web & Mobile Development', fr: 'Développement Web & Mobile' },
      period: '2017 - 2019',
    },
    {
      school: { en: 'University of Paris', fr: 'Université de Paris' },
      degree: { en: 'Bachelor in Computer Science', fr: 'Licence Informatique' },
      period: '2014 - 2017',
    },
  ],

  // ===== HOBBIES (optional) =====
  hobbies: [
    {
      title: { en: 'Photography', fr: 'Photographie' },
      details: [
        { en: 'Street photography', fr: 'Photo de rue' },
        { en: '5 years', fr: '5 ans' },
      ],
    },
    {
      title: { en: 'Hiking', fr: 'Randonnée' },
      details: [
        { en: 'Mountain trails', fr: 'Sentiers de montagne' },
      ],
    },
    {
      title: { en: 'Open Source', fr: 'Open Source' },
    },
    {
      title: { en: 'Guitar', fr: 'Guitare' },
      details: [
        { en: '3 years', fr: '3 ans' },
      ],
    },
  ],

  // ===== PDF (optional — place your PDF in public/cv/) =====
  pdf: {
    label: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    path: '/cv/resume.pdf',
  },

  // ===== THEME =====
  theme: {
    preset: 'minimal', // 'modern' | 'ocean' | 'forest' | 'warm' | 'minimal'
    // You can override individual colors:
    // colors: {
    //   primary: '#8B5A2B',
    //   primaryLight: '#D4A574',
    // },
  },

  // ===== TECH BADGE COLORS (optional) =====
  // 150+ technologies already have their brand colors built-in (see src/data/tech-registry.ts).
  // Only use this to override existing colors or add colors for custom/niche technologies.
  // techColors: {
  //   'My Custom Tool': '#FF6600',
  // },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { en: 'CONTACT', fr: 'CONTACT' },
      skills: { en: 'SKILLS', fr: 'COMPÉTENCES' },
      experience: { en: 'PROFESSIONAL EXPERIENCE', fr: 'EXPÉRIENCES PROFESSIONNELLES' },
      education: { en: 'EDUCATION', fr: 'FORMATION' },
      projects: { en: 'PROJECTS', fr: 'PROJETS' },
      hobbies: { en: 'HOBBIES', fr: 'LOISIRS' },
    },
    experience: {
      mainTasks: { en: 'Main tasks:', fr: 'Tâches principales :' },
      moreTasks: { en: 'more tasks...', fr: 'autres tâches...' },
      training: { en: 'Training:', fr: 'Formations :' },
      techEnv: { en: 'Tech environment:', fr: 'Env. technique :' },
      technologies: { en: 'Technologies', fr: 'Technologies' },
    },
    actions: {
      clickHint: { en: 'Click on experiences to see more details', fr: 'Cliquez sur les expériences pour voir plus de détails' },
      switchTheme: { en: 'Toggle dark mode', fr: 'Changer le thème' },
      downloadPdf: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    },
  },
}
