import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Instalaciones', href: getPermalink('/instalaciones') },
    { text: 'Novedades', href: getBlogPermalink() },
    { text: 'Hípica', href: getPermalink('/instalaciones') },
    { text: 'Actividades Deportivas', href: getPermalink('/actividades-deportivas') },
    { text: 'Ocio y Restauración', href: getPermalink('/ocio-restauracion') },
    { text: 'Normativa', href: getPermalink('/normativa') },
    { text: 'Contacto', href: getPermalink('/contact') },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'La Hípica',
      links: [
        { text: 'Instalaciones', href: getPermalink('/instalaciones') },
        { text: 'Hípica', href: getPermalink('/instalaciones') },
        { text: 'Novedades', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Actividades y ocio',
      links: [
        { text: 'Actividades Deportivas', href: getPermalink('/actividades-deportivas') },
        { text: 'Ocio y Restauración', href: getPermalink('/ocio-restauracion') },
        { text: 'Normativa', href: getPermalink('/normativa') },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { text: 'Cómo llegar y horarios', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Aviso legal', href: getPermalink('/terms') },
    { text: 'Privacidad', href: getPermalink('/privacy') },
    { text: 'Cookies', href: getPermalink('/cookies') },
  ],
  socialLinks: [
    // Deja solo las redes que tengan, con su URL real
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://...' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://...' },
  ],
  footNote: '© 2026 Todos los derechos reservados.',
};
