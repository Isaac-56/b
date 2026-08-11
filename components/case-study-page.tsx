import Image from "next/image";
import Link from "next/link";
import { Project, projects } from "@/lib/projects";
import { Reveal } from "./reveal";
import { SiteHeader } from "./site-header";

export function CaseStudyPage({ project }: { project: Project }) {
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="case-study" style={{ "--accent": project.accent, "--surface": project.surface } as React.CSSProperties}>
      <SiteHeader />
      <section className="case-hero page-shell">
        <Link href="/#work" className="back-link">← All work</Link>
        <div className="case-hero__heading">
          <p className="kicker">{project.index} · {project.eyebrow}</p>
          <h1>{project.headline}</h1>
        </div>
        <div className="case-hero__meta">
          <p>{project.summary}</p>
          <dl>
            <div><dt>Role</dt><dd>{project.role}</dd></div>
            <div><dt>Scope</dt><dd>{project.contributions.slice(0, 3).join(" · ")}</dd></div>
          </dl>
        </div>
      </section>

      <section className="case-showcase" style={{ background: project.surface }}>
        <div className="case-showcase__wash" style={{ background: project.accent }} />
        <div className="device device--desktop case-showcase__device">
          <span className="device__bar"><i /><i /><i /></span>
          <Image src={project.hero} alt={`${project.title} product interface`} fill priority sizes="90vw" className="device__image" />
        </div>
      </section>

      <section className="case-story page-shell">
        <Reveal className="story-block">
          <span>01 / Context</span>
          <h2>The challenge</h2>
          <p>{project.challenge}</p>
        </Reveal>
        <Reveal className="story-block" delay={80}>
          <span>02 / Process</span>
          <h2>Connecting the experience</h2>
          <p>{project.approach}</p>
        </Reveal>
      </section>

      <section className="contribution-panel page-shell">
        <Reveal className="contribution-panel__inner">
          <div>
            <p className="kicker">What I worked on</p>
            <h2>From product thinking to delivery.</h2>
          </div>
          <ol>
            {project.contributions.map((item, index) => (
              <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
            ))}
          </ol>
        </Reveal>
      </section>

      <section className="case-gallery page-shell">
        <div className="section-heading">
          <p className="kicker">Selected screens</p>
          <h2>A product story told through its key moments.</h2>
        </div>
        <div className="case-gallery__grid">
          {project.gallery.map((item, index) => (
            <Reveal as="figure" className={`gallery-frame gallery-frame--${item.layout || "wide"}`} delay={(index % 2) * 80} key={item.src}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={item.layout === "tall" ? "(max-width: 800px) 94vw, 44vw" : "(max-width: 800px) 94vw, 90vw"}
                style={{ objectPosition: item.position || "center" }}
              />
              <figcaption>{String(index + 1).padStart(2, "0")} — {item.alt}</figcaption>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="case-impact page-shell">
        <Reveal>
          <p className="kicker">Outcome</p>
          <h2>{project.impact}</h2>
          <div className="impact-results">
            {project.results.map((result) => <p key={result}>{result}</p>)}
          </div>
          {project.figma && (
            <a className="button button--outline" href={project.figma} target="_blank" rel="noreferrer">
              View the full Figma work <span aria-hidden="true">↗</span>
            </a>
          )}
        </Reveal>
      </section>

      <Link href={`/work/${nextProject.slug}`} className="next-project" style={{ background: nextProject.surface }}>
        <span>Next project</span>
        <h2>{nextProject.title}</h2>
        <p>{nextProject.headline}</p>
        <span className="next-project__arrow">→</span>
      </Link>

      <footer className="site-footer page-shell">
        <p>Bemnet Seifu · Product Designer</p>
        <p>Designed to make the work clear.</p>
      </footer>
    </main>
  );
}
