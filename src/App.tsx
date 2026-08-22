import { useEffect, useState, type CSSProperties } from 'react';
import { ThemeProvider } from './theme/ThemeContext';
import { LanguageProvider } from './i18n/LanguageContext';
import { useSiteContent } from './i18n/useSiteContent';
import { roleOrder } from './data/constants';
import type { RoleId } from './data/types';
import ScrollProgress from './components/ScrollProgress';
import CursorSpotlight from './components/CursorSpotlight';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Highlights from './components/Highlights';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function getInitialRole(): RoleId {
  const fromUrl = new URLSearchParams(window.location.search).get('role');
  return roleOrder.includes(fromUrl as RoleId) ? (fromUrl as RoleId) : roleOrder[0];
}

function Site() {
  const [activeRole, setActiveRole] = useState<RoleId>(getInitialRole);
  const { t } = useSiteContent();
  const role = t.roles[activeRole];

  const handleChangeRole = (id: RoleId) => {
    setActiveRole(id);
    const url = new URL(window.location.href);
    url.searchParams.set('role', id);
    window.history.replaceState({}, '', url);
  };

  useEffect(() => {
    document.title = t.ui.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t.ui.meta.description);
  }, [t]);

  const accentVars = {
    '--accent': role.accent,
    '--accent-2': role.accent2,
  } as CSSProperties;

  return (
    <div style={accentVars}>
      <ScrollProgress />
      <CursorSpotlight />
      <Header />
      <main>
        <Hero role={role} activeRole={activeRole} onChangeRole={handleChangeRole} />
        <About role={role} />
        <Highlights role={role} />
        <Experience role={role} />
        <Skills role={role} />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Site />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
