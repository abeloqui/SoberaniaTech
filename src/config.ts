export const SITE_NAME = 'SoberaníaTech';
export const SITE_TAGLINE =
  'Capacitación técnica gratuita, de código abierto y soberana para el desarrollo de Neuquén';
// Cambiá TU-USUARIO por tu usuario real de GitHub/Codeberg
export const REPO_URL = 'https://github.com/TU-USUARIO/soberania-tech';
export const CONTACT_EMAIL = 'contacto@example.org';
export const url = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;