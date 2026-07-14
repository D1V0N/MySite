import { LuMoon, LuSun } from 'react-icons/lu';
import { useTheme } from '../theme/ThemeContext';
import { useSiteContent } from '../i18n/useSiteContent';
import LanguageSwitcher from './LanguageSwitcher';
import './Header.css';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { t, lang, setLang, profile } = useSiteContent();

  const navItems = [
    { href: '#about', label: t.ui.nav.about },
    { href: '#experience', label: t.ui.nav.experience },
    { href: '#skills', label: t.ui.nav.skills },
    { href: '#projects', label: t.ui.nav.projects },
    { href: '#contact', label: t.ui.nav.contact },
  ];

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#top" className="site-header__mark">
          <span className="site-header__mark-badge">DM</span>
          <span className="site-header__mark-name">{profile.name}</span>
        </a>

        <nav className="site-header__nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__controls">
          <LanguageSwitcher lang={lang} onChange={setLang} ariaLabel={t.ui.languageToggle.ariaLabel} />
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.ui.themeToggle.toLight : t.ui.themeToggle.toDark}
          >
            {theme === 'dark' ? <LuSun size={18} /> : <LuMoon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
