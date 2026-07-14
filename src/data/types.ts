export type RoleId = 'analyst' | 'fullstack';
export type Lang = 'en' | 'ru';

export interface Stat {
  value: string;
  label: string;
}

export interface ExperienceEntry {
  title: string;
  company: string;
  companyNote: string;
  period: string;
  summary: string;
  bullets: string[];
}

export interface RoleContent {
  id: RoleId;
  navLabel: string;
  heroTitle: string;
  tagline: string;
  accent: string;
  accent2: string;
  about: string;
  stats: Stat[];
  highlights: string[];
  experience: ExperienceEntry;
  stack: string[];
  keySkills: string[];
  resumeFile: string;
  resumeLabel: string;
}

export interface EducationEntry {
  degree: string;
  school: string;
  department: string;
}

export interface LanguageSkill {
  name: string;
  level: string;
}

export interface ProjectEntry {
  name: string;
  desc: string;
  tags: string;
  lang: string;
}

export interface UiStrings {
  nav: {
    about: string;
    experience: string;
    skills: string;
    projects: string;
    contact: string;
  };
  meta: {
    title: string;
    description: string;
  };
  themeToggle: {
    toLight: string;
    toDark: string;
  };
  languageToggle: {
    ariaLabel: string;
  };
  hero: {
    eyebrow: string;
    downloadPrefix: string;
    contactCta: string;
  };
  about: {
    kicker: string;
    title: string;
  };
  highlights: {
    kicker: string;
    title: string;
  };
  experience: {
    kicker: string;
    title: string;
  };
  skills: {
    kicker: string;
    title: string;
    stack: string;
    core: string;
  };
  education: {
    kicker: string;
    title: string;
    languagesLabel: string;
  };
  projects: {
    kicker: string;
    title: string;
    viewProfile: string;
    note: string;
  };
  contact: {
    kicker: string;
    title: string;
    body: string;
    telegram: string;
    github: string;
    email: string;
    phone: string;
    preferPdf: string;
  };
  footer: {
    backToTop: string;
  };
}

export interface SiteContent {
  profileLocation: string;
  education: EducationEntry[];
  languages: LanguageSkill[];
  projects: ProjectEntry[];
  roles: Record<RoleId, RoleContent>;
  ui: UiStrings;
}
