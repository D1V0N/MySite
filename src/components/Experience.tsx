import type { CSSProperties } from 'react';
import { LuBuilding2, LuCalendar } from 'react-icons/lu';
import type { RoleContent } from '../data/types';
import { useSiteContent } from '../i18n/useSiteContent';
import { useReveal } from '../hooks/useReveal';
import './Experience.css';

export default function Experience({ role }: { role: RoleContent }) {
  const { t } = useSiteContent();
  const { experience } = role;
  const { ref, visible } = useReveal<HTMLUListElement>();

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="section-kicker">
              <span className="section-kicker__index">03</span>
              {t.ui.experience.kicker}
            </span>
            <h2 className="section-title">{t.ui.experience.title}</h2>
          </div>
        </div>

        <div className="experience__card card">
          <header className="experience__header">
            <div>
              <h3 className="experience__title">{experience.title}</h3>
              <div className="experience__company">
                <LuBuilding2 size={15} />
                {experience.company}
              </div>
              <p className="experience__note">{experience.companyNote}</p>
            </div>
            <div className="experience__period">
              <LuCalendar size={14} />
              {experience.period}
            </div>
          </header>

          <p className="experience__summary">{experience.summary}</p>

          <ul
            ref={ref}
            className={`experience__timeline reveal${visible ? ' is-visible' : ''}`}
          >
            {experience.bullets.map((bullet, index) => (
              <li
                key={bullet}
                className="experience__item reveal-item"
                style={{ '--i': index } as CSSProperties}
              >
                <span className="experience__dot" aria-hidden="true" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
