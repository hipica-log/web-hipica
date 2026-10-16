import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Inicio', href: getPermalink('/') },
    { text: 'Instalaciones', href: getPermalink('/instalaciones') },
    { text: 'Noticias', href: getBlogPermalink() },
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
        { text: 'Noticias', href: getBlogPermalink() },
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
  footNote: `© ${new Date().getFullYear()} Hípica de Logroño. Todos los derechos reservados.`,
};
