import type { CSSProperties, ReactNode } from 'react';
import { LuGraduationCap, LuLanguages } from 'react-icons/lu';
import { useSiteContent } from '../i18n/useSiteContent';
import { useReveal } from '../hooks/useReveal';
import { useTilt } from '../hooks/useTilt';
import './Education.css';

function EduCard({
  icon,
  title,
  lines,
  index,
}: {
  icon: ReactNode;
  title: string;
  lines: string[];
  index: number;
}) {
  const tiltRef = useTilt<HTMLDivElement>(4);

  return (
    <div
      className="education__card card reveal-item"
      ref={tiltRef}
      style={{ '--i': index } as CSSProperties}
    >
      <span className="education__icon">{icon}</span>
      <div>
        <h3 className="education__degree">{title}</h3>
        {lines.map((line, i) => (
          <p className={i === 0 ? 'education__school' : 'education__department'} key={line}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function Education() {
  const { t } = useSiteContent();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="section-kicker">
              <span className="section-kicker__index">05</span>
              {t.ui.education.kicker}
            </span>
            <h2 className="section-title">{t.ui.education.title}</h2>
          </div>
        </div>

        <div ref={ref} className={`education__grid reveal${visible ? ' is-visible' : ''}`}>
          {t.education.map((item, index) => (
            <EduCard
              key={item.degree}
              icon={<LuGraduationCap size={18} />}
              title={item.degree}
              lines={[item.school, item.department]}
              index={index}
            />
          ))}

          <EduCard
            icon={<LuLanguages size={18} />}
            title={t.ui.education.languagesLabel}
            lines={t.languages.map((lang) => `${lang.name} — ${lang.level}`)}
            index={t.education.length}
          />
        </div>
      </div>
    </section>
  );
}
