export const SITE_NAME = 'SoberaníaTech';
export const SITE_TAGLINE =
  'Capacitación técnica gratuita, de código abierto y soberana para el desarrollo de Neuquén';
// Cambiá TU-USUARIO por tu usuario real de GitHub/Codeberg
export const REPO_URL = 'https://github.com/abeloqui/soberania-tech';
export const CONTACT_EMAIL = 'andrebeloqui@gmail.comg';
export const url = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;