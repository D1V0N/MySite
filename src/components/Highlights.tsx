import { LuSparkles } from 'react-icons/lu';
import type { CSSProperties } from 'react';
import type { RoleContent } from '../data/types';
import { useSiteContent } from '../i18n/useSiteContent';
import { useReveal } from '../hooks/useReveal';
import { useTilt } from '../hooks/useTilt';
import './Highlights.css';

function HighlightCard({ text, index }: { text: string; index: number }) {
  const tiltRef = useTilt<HTMLDivElement>(5);

  return (
    <div
      className="highlights__card card reveal-item"
      ref={tiltRef}
      style={{ '--i': index } as CSSProperties}
    >
      <span className="highlights__icon">
        <LuSparkles size={16} />
      </span>
      <p>{text}</p>
    </div>
  );
}

export default function Highlights({ role }: { role: RoleContent }) {
  const { t } = useSiteContent();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="section highlights">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="section-kicker">
              <span className="section-kicker__index">02</span>
              {t.ui.highlights.kicker}
            </span>
            <h2 className="section-title">{t.ui.highlights.title}</h2>
          </div>
        </div>

        <div ref={ref} className={`highlights__grid reveal${visible ? ' is-visible' : ''}`}>
          {role.highlights.map((item, index) => (
            <HighlightCard text={item} index={index} key={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
