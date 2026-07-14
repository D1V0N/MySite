import { LuMapPin } from 'react-icons/lu';
import type { RoleContent } from '../data/types';
import { useSiteContent } from '../i18n/useSiteContent';
import { useReveal } from '../hooks/useReveal';
import './About.css';

export default function About({ role }: { role: RoleContent }) {
  const { t } = useSiteContent();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__heading">
          <span className="section-kicker">
            <span className="section-kicker__index">01</span>
            {t.ui.about.kicker}
          </span>
          <h2 className="section-title">{t.ui.about.title}</h2>
          <p className="about__location">
            <LuMapPin size={15} />
            {t.profileLocation}
          </p>
        </div>
        <div ref={ref} className={`reveal${visible ? ' is-visible' : ''}`}>
          <p className="about__text">{role.about}</p>
        </div>
      </div>
    </section>
  );
}
