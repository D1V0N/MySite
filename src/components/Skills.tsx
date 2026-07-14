import type { CSSProperties } from 'react';
import { LuCheck } from 'react-icons/lu';
import type { RoleContent } from '../data/types';
import { useSiteContent } from '../i18n/useSiteContent';
import { useReveal } from '../hooks/useReveal';
import './Skills.css';

export default function Skills({ role }: { role: RoleContent }) {
  const { t } = useSiteContent();
  const { ref, visible } = useReveal<HTMLDivElement>();
  const revealClass = `reveal${visible ? ' is-visible' : ''}`;

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="section-kicker">
              <span className="section-kicker__index">04</span>
              {t.ui.skills.kicker}
            </span>
            <h2 className="section-title">{t.ui.skills.title}</h2>
          </div>
        </div>

        <div className="skills__grid" ref={ref}>
          <div className="skills__block">
            <h3 className="skills__block-title">{t.ui.skills.stack}</h3>
            <div className={`skills__tags ${revealClass}`}>
              {role.stack.map((item, index) => (
                <span
                  className="tag reveal-item"
                  key={item}
                  style={{ '--i': index } as CSSProperties}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="skills__block">
            <h3 className="skills__block-title">{t.ui.skills.core}</h3>
            <ul className={`skills__list ${revealClass}`}>
              {role.keySkills.map((item, index) => (
                <li key={item} className="reveal-item" style={{ '--i': index } as CSSProperties}>
                  <LuCheck size={14} className="skills__list-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
