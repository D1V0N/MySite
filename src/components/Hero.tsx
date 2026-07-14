import type { CSSProperties } from 'react';
import { FaEnvelope, FaGithub, FaTelegram } from 'react-icons/fa6';
import { LuDownload } from 'react-icons/lu';
import type { RoleContent, RoleId } from '../data/types';
import { useSiteContent } from '../i18n/useSiteContent';
import { useTypewriter } from '../hooks/useTypewriter';
import { useMagnetic } from '../hooks/useMagnetic';
import RoleSwitcher from './RoleSwitcher';
import './Hero.css';

interface HeroProps {
  role: RoleContent;
  activeRole: RoleId;
  onChangeRole: (role: RoleId) => void;
}

export default function Hero({ role, activeRole, onChangeRole }: HeroProps) {
  const { t, profile } = useSiteContent();
  const typedTagline = useTypewriter(role.tagline, 14);
  const magneticRef = useMagnetic<HTMLAnchorElement>();

  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <p className="hero__eyebrow">
          <span className="hero__eyebrow-prompt" aria-hidden="true">
            &gt;
          </span>{' '}
          {t.ui.hero.eyebrow}
        </p>

        <h1 className="hero__title" key={`title-${role.id}`}>
          {role.heroTitle}
        </h1>

        <div className="hero__switcher">
          <RoleSwitcher
            activeRole={activeRole}
            onChange={onChangeRole}
            roles={t.roles}
            ariaLabel="Resume focus"
          />
        </div>

        <p className="hero__tagline">
          {typedTagline}
          <span className="hero__caret" aria-hidden="true" />
        </p>

        <div className="hero__actions">
          <a className="btn btn-primary" href={role.resumeFile} download ref={magneticRef}>
            <LuDownload size={16} />
            {t.ui.hero.downloadPrefix}
            {role.resumeLabel}
          </a>
          <a className="btn btn-ghost" href="#contact">
            {t.ui.hero.contactCta}
          </a>
        </div>

        <div className="hero__social">
          <a
            className="icon-btn"
            href={profile.githubHref}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={16} />
          </a>
          <a
            className="icon-btn"
            href={profile.telegramHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
          >
            <FaTelegram size={16} />
          </a>
          <a className="icon-btn" href={profile.emailHref} aria-label="Email">
            <FaEnvelope size={16} />
          </a>
        </div>

        <dl className="hero__stats" key={`stats-${role.id}`}>
          {role.stats.map((stat, index) => (
            <div
              className="hero__stat"
              key={stat.label}
              style={{ '--i': index } as CSSProperties}
            >
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
