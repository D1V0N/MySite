import { useSiteContent } from '../i18n/useSiteContent';
import './Footer.css';

export default function Footer() {
  const { t, profile } = useSiteContent();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <span>
          © {year} {profile.name}
        </span>
        <a href="#top">{t.ui.footer.backToTop}</a>
      </div>
    </footer>
  );
}
