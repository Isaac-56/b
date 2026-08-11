import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/projects";
import { Reveal } from "./reveal";

export function ProjectCard({ project, reverse = false }: { project: Project; reverse?: boolean }) {
  return (
    <Reveal as="article" className={`project-card ${reverse ? "is-reverse" : ""}`}>
      <Link href={`/work/${project.slug}`} className="project-card__link" aria-label={`View ${project.title} case study`}>
        <div className="project-card__copy">
          <div className="project-card__meta">
            <span>{project.index}</span>
            <span>{project.eyebrow}</span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.headline}</p>
          <span className="text-link">Explore case study <span aria-hidden="true">↗</span></span>
        </div>
        <div className="project-card__visual" style={{ background: project.surface }}>
          <span className="project-card__orb" style={{ background: project.accent }} />
          <div className="device device--desktop project-card__device project-card__device--back">
            <span className="device__bar"><i /><i /><i /></span>
            <Image src={project.cards[1]} alt="" fill sizes="(max-width: 800px) 86vw, 45vw" className="device__image" />
          </div>
          <div className="device device--desktop project-card__device project-card__device--front">
            <span className="device__bar"><i /><i /><i /></span>
            <Image src={project.cards[0]} alt={`${project.title} interface preview`} fill sizes="(max-width: 800px) 86vw, 45vw" className="device__image" />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
