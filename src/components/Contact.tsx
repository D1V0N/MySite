import type { CSSProperties } from 'react';
import { FaEnvelope, FaGithub, FaTelegram, FaPhone } from 'react-icons/fa6';
import { LuArrowUpRight } from 'react-icons/lu';
import { roleOrder } from '../data/constants';
import { useSiteContent } from '../i18n/useSiteContent';
import { useReveal } from '../hooks/useReveal';
import { useTilt } from '../hooks/useTilt';
import './Contact.css';

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  external,
  index,
}: {
  icon: typeof FaTelegram;
  label: string;
  value: string;
  href: string;
  external: boolean;
  index: number;
}) {
  const tiltRef = useTilt<HTMLAnchorElement>(3);

  return (
    <a
      className="contact__card card reveal-item"
      ref={tiltRef}
      style={{ '--i': index } as CSSProperties}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      <span className="contact__icon">
        <Icon size={17} />
      </span>
      <span className="contact__meta">
        <span className="contact__label">{label}</span>
        <span className="contact__value">{value}</span>
      </span>
      <LuArrowUpRight className="contact__arrow" size={16} />
    </a>
  );
}

export default function Contact() {
  const { t, profile } = useSiteContent();
  const { ref, visible } = useReveal<HTMLDivElement>();

  const contactMethods = [
    {
      icon: FaTelegram,
      label: t.ui.contact.telegram,
      value: profile.telegramHandle,
      href: profile.telegramHref,
      external: true,
    },
    {
      icon: FaGithub,
      label: t.ui.contact.github,
      value: profile.githubHandle,
      href: profile.githubHref,
      external: true,
    },
    {
      icon: FaEnvelope,
      label: t.ui.contact.email,
      value: profile.email,
      href: profile.emailHref,
      external: false,
    },
    {
      icon: FaPhone,
      label: t.ui.contact.phone,
      value: profile.phone,
      href: profile.phoneHref,
      external: false,
    },
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__intro">
          <span className="section-kicker">
            <span className="section-kicker__index">07</span>
            {t.ui.contact.kicker}
          </span>
          <h2 className="section-title contact__headline">{t.ui.contact.title}</h2>
          <p className="contact__text">{t.ui.contact.body}</p>
        </div>

        <div ref={ref} className={`contact__grid reveal${visible ? ' is-visible' : ''}`}>
          {contactMethods.map((method, index) => (
            <ContactCard key={method.label} {...method} index={index} />
          ))}
        </div>

        <div className="contact__resumes">
          <span className="contact__resumes-label">{t.ui.contact.preferPdf}</span>
          <div className="contact__resumes-links">
            {roleOrder.map((id) => (
              <a
                key={id}
                className="contact__resume-link"
                href={t.roles[id].resumeFile}
                download
              >
                {t.roles[id].resumeLabel}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
