// Level scale: 0 to 5, halves allowed (e.g., 2.5)
export const skillsCategories = [
  // 1) Développement en premier
  {
    id: 'dev',
    title: 'Dév. full‑stack et mobile',
    items: [
      { name: 'PHP', level: 4 },
      { name: 'Symfony', level: 4 },
      { name: 'React.js', level: 3 },
      { name: 'Node.js', level: 2.5 },
      { name: 'JavaScript', level: 3.5 },
      { name: 'Python', level: 2.5 },
    ],
  },
  // 2) UX/UI ensuite
  {
    id: 'uxui',
    title: 'UX/UI Design',
    items: [
      { name: 'Figma', level: 3 },
      { name: 'HTML5/CSS', level: 3 },
      { name: 'Bootstrap 5', level: 2.5 },
      { name: 'TWIG', level: 2.5 },
    ],
  },
  // 3) BDD/Cloud
  {
    id: 'db-cloud',
    title: 'BDD, cloud et hébergement',
    items: [
      { name: 'PostgreSQL', level: 2.5 },
      { name: 'MongoDB', level: 4 },
      { name: 'OVHcloud', level: 2.5 },
      { name: 'MySQL', level: 2.5 },
      { name: 'MariaDB', level: 4 },
      { name: 'phpMyAdmin', level: 4 },
    ],
  },
  // 4) Gestion de projets
  {
    id: 'project',
    title: 'Gestion de projets',
    items: [
      { name: 'Git, GitHub', level: 3 },
      { name: 'JIRA', level: 2.5 },
      { name: 'UML', level: 2.5 },
    ],
  },
  // 5) Environnement (IDE)
  {
    id: 'env',
    title: 'Environnement (IDE)',
    items: [
      { name: 'Zoom', level: 3 },
      { name: 'PyCharm', level: 2 },
      { name: 'Postman', level: 2 },
      { name: 'PhpStorm', level: 3 },
      { name: 'Visual Studio', level: 2.5 },
    ],
  },
  // 6) Langues en dernier
  {
    id: 'languages',
    title: 'Langues',
    items: [
      { name: 'Français', level: 3.5 },
      { name: 'Anglais', level: 4 },
      { name: 'Arabe', level: 4 },
    ],
  },
]


