import type { CSSProperties } from 'react';
import { LuBook } from 'react-icons/lu';
import { FaGithub } from 'react-icons/fa6';
import type { ProjectEntry } from '../data/types';
import { useSiteContent } from '../i18n/useSiteContent';
import { useReveal } from '../hooks/useReveal';
import { useTilt } from '../hooks/useTilt';
import './Projects.css';

function ProjectCard({ project, index }: { project: ProjectEntry; index: number }) {
  const tiltRef = useTilt<HTMLDivElement>(4);

  return (
    <div
      className="projects__card card reveal-item"
      ref={tiltRef}
      style={{ '--i': index } as CSSProperties}
    >
      <div className="projects__card-head">
        <LuBook size={16} className="projects__card-icon" />
        <span className="projects__card-name">{project.name}</span>
      </div>
      <p className="projects__card-desc">{project.desc}</p>
      <div className="projects__card-foot">
        <span className="projects__card-tags">{project.tags}</span>
        <span className="projects__card-lang">
          <span className="projects__card-dot" aria-hidden="true" />
          {project.lang}
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  const { t, profile } = useSiteContent();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head projects__head">
          <div>
            <span className="section-kicker">
              <span className="section-kicker__index">06</span>
              {t.ui.projects.kicker}
            </span>
            <h2 className="section-title">{t.ui.projects.title}</h2>
          </div>
          <a
            className="projects__profile-link"
            href={profile.githubHref}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={15} />
            {t.ui.projects.viewProfile}
          </a>
        </div>

        <div ref={ref} className={`projects__grid reveal${visible ? ' is-visible' : ''}`}>
          {t.projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.name} />
          ))}
        </div>

        <p className="projects__note">{t.ui.projects.note}</p>
      </div>
    </section>
  );
}
