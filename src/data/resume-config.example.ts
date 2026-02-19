import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Hugo Lapie',
    photoBackEmoji: '💻',
    title: {
      fr: 'Technicien Support IT N1/N2',
    },
    subtitle: {
      fr: 'Technicien IT polyvalent spécialisé en support utilisateurs et infrastructure réseau',
    },
    location: 'Caen, France',
  },
  seo: {
    title: 'Hugo Lapie — Technicien Support IT',
    description: 'CV interactif de Hugo Lapie, Technicien Support IT spécialisé en infrastructure, réseau et support utilisateurs.',
  },
  languages: {
    default: 'fr',
    available: ['fr'],
    labels: {
      fr: 'FR',
    },
  },
  contact: [
    { type: 'linkedin', label: 'hugo lapie', href: 'https://linkedin.com/in/hugo-lapie' },
    { type: 'email', label: 'lapiehugo0@gmail.com' },
    { type: 'phone', label: '06.76.83.34.82' },
    { type: 'location', label: 'Caen / Granville' },
  ],
  skills: [
    {
      title: { fr: 'Infrastructure & Réseau' },
      type: 'badges',
      items: [
        { name: 'Active Directory' },
        { name: 'GPO' },
        { name: 'DHCP / DNS' },
        { name: 'VPN' },
        { name: 'pfSense' },
        { name: 'TCP/IP' },
        { name: 'Switchs & Routeurs' },
      ],
    },
    {
      title: { fr: 'Support & Systèmes' },
      type: 'badges',
      items: [
        { name: 'Windows Server' },
        { name: 'Linux' },
        { name: 'VMware' },
        { name: 'VirtualBox' },
        { name: 'Helpdesk N1/N2' },
        { name: 'PowerShell' },
      ],
    },
    {
      title: { fr: 'Web & CMS' },
      type: 'badges',
      items: [
        { name: 'WordPress' },
        { name: 'PrestaShop' },
        { name: 'SEO' },
        { name: 'Plesk' },
        { name: 'OVH' },
      ],
    },
    {
      title: { fr: 'Qualités' },
      type: 'text',
      items: [
        { name: { fr: 'Curieux, Sérieux, Rigoureux' } },
      ],
    },
  ],
  experiences: [
    {
      id: 'tessi',
      company: { fr: 'Tessi' },
      role: { fr: 'Opérateur de saisie' },
      period: { fr: '2025' },
      description: { fr: 'Saisie et traitement de données avec rigueur et précision.' },
      techs: [], // Ajouté pour corriger l'erreur de build
      details: {
        context: { fr: 'Traitement de flux documentaires.' },
        tasks: { fr: [
          'Traitement de données volumineuses',
          'Respect de délais stricts et des procédures internes',
        ] },
        env: { fr: 'Logiciels de saisie internes' },
      },
    },
    {
      id: 'ref-pro',
      company: { fr: 'Le référencement professionnel' },
      role: { fr: 'Webmaster / SEO Manager' },
      type: { fr: 'Alternance' },
      period: { fr: '2022 - 2024' },
      description: { fr: 'Gestion complète de l\'écosystème web et visibilité client.' },
      techs: ['WordPress', 'SEO', 'OVH'],
      details: {
        context: { fr: 'Agence spécialisée en visibilité numérique.' },
        tasks: { fr: [
          'Support client et maintenance technique',
          'Maquettage et création de logos',
          'Gestion des réseaux sociaux',
          'Gestion des noms de domaines (OVH)',
        ] },
        env: { fr: 'WordPress / Suite Adobe / OVH' },
      },
    },
    {
      id: 'aclp',
      company: { fr: 'ACLP' },
      role: { fr: 'Technicien Réseau / Informatique' },
      type: { fr: 'Alternance' },
      period: { fr: '2021' },
      description: { fr: 'Maintenance de boutiques e-commerce et support réseau.' },
      techs
