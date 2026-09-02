export type Locale = 'es' | 'en';

export const site = {
  name: 'Istaliyan Ivanov Manov',
  role: {
    es: 'ML & Geospatial Engineer',
    en: 'ML & Geospatial Engineer',
  },
  email: 'istaliyan.ivanov@gmail.com',
  github: 'https://github.com/Istaliyan',
  linkedin: 'https://www.linkedin.com/in/istaliyan/',
};

export const ui = {
  es: {
    nav: { home: 'Inicio', projects: 'Proyectos', about: 'Sobre mí' },
    language: 'English',
    all: 'Todos',
    projects: 'Proyectos',
    viewProject: 'Ver proyecto',
    selectedWork: 'Proyectos destacados',
    backToProjects: 'Volver a proyectos',
  },
  en: {
    nav: { home: 'Home', projects: 'Projects', about: 'About' },
    language: 'Español',
    all: 'All',
    projects: 'Projects',
    viewProject: 'View project',
    selectedWork: 'Selected projects',
    backToProjects: 'Back to projects',
  },
} as const;

export function withBase(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}` || '/';
}

export function stripBase(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const path = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  return path || '/';
}

export function localePath(locale: Locale, path = '/'): string {
  const cleanPath = path === '/' ? '' : `/${path.replace(/^\/+|\/+$/g, '')}`;
  return withBase(locale === 'en' ? `/en${cleanPath}/` : `${cleanPath}/`);
}

export function projectsTagPath(locale: Locale, tag: string): string {
  return `${localePath(locale, '/projects')}?tag=${encodeURIComponent(tag)}#projects`;
}

export function alternateLocalePath(locale: Locale, pathname: string): string {
  const route = stripBase(pathname).replace(/\/$/, '') || '/';
  if (locale === 'en') {
    const spanishRoute = route.replace(/^\/en(?=\/|$)/, '') || '/';
    return withBase(spanishRoute === '/' ? '/' : `${spanishRoute}/`);
  }
  return withBase(`/en${route === '/' ? '/' : `${route}/`}`);
}
