import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/lib/projects";

const capabilities = [
  "Product discovery & research",
  "User journeys & product flows",
  "PRDs & user stories",
  "UX/UI design",
  "Prototyping",
  "Design systems",
  "QA & product validation",
  "Founder & stakeholder collaboration",
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="home-hero page-shell">
        <div className="home-hero__eyebrow">
          <span className="status-dot" />
          Product designer · Addis Ababa
        </div>
        <h1>
          I design, improve, and ship <em>digital products.</em>
        </h1>
        <div className="home-hero__footer">
          <p>
            I work across UX, product design, and delivery—turning incomplete ideas,
            messy flows, and early concepts into products people can actually use.
          </p>
          <a href="#work" className="round-link" aria-label="See selected work">↓</a>
        </div>
        <div className="home-hero__signature" aria-hidden="true">Bemnet</div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div>Product thinking · UX systems · Thoughtful interfaces · Product delivery · Product thinking · UX systems · Thoughtful interfaces · Product delivery · </div>
      </div>

      <section id="work" className="work-section page-shell">
        <Reveal className="section-intro">
          <p className="kicker">Selected work · 2024—Present</p>
          <h2>Products shaped from the messy middle to the finished experience.</h2>
        </Reveal>
        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectCard project={project} reverse={index % 2 === 1} key={project.slug} />
          ))}
        </div>
      </section>

      <section className="beyond-section">
        <div className="page-shell beyond-section__inner">
          <Reveal>
            <p className="kicker">Beyond product design</p>
            <h2>Designing for businesses, not just interfaces.</h2>
          </Reveal>
          <Reveal className="beyond-section__copy" delay={100}>
            <p>
              Alongside product work, I redesign digital experiences for businesses where
              the website directly affects how customers discover, understand, and trust the company.
            </p>
            <p>
              I step into existing websites, find what is holding the experience back,
              and restructure it around what the business and its customers actually need.
            </p>
            <div className="chip-list">
              {["Website redesigns", "Customer journeys", "Conversion", "Brand direction", "Content structure"].map((item) => <span key={item}>{item}</span>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="experience-section page-shell">
        <Reveal className="section-intro section-intro--split">
          <p className="kicker">Experience</p>
          <h2>Close to the product, from strategy through QA.</h2>
        </Reveal>
        <div className="experience-grid">
          <Reveal className="experience-card">
            <div><span>Current</span><h3>Tison / DirectEd</h3></div>
            <p>I work across product design and delivery, moving between strategy, UX, design, documentation, and QA.</p>
          </Reveal>
          <Reveal className="experience-card" delay={80}>
            <div><span>2024—Present</span><h3>Freelance & client projects</h3></div>
            <p>Healthcare, marketplaces, community platforms, real estate, education, and B2B businesses.</p>
          </Reveal>
        </div>
        <Reveal className="capability-list">
          {capabilities.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</div>)}
        </Reveal>
      </section>

      <section id="about" className="about-section page-shell">
        <div className="portrait-placeholder" aria-label="Portrait coming soon">
          <span className="portrait-placeholder__b">B</span>
          <span>Portrait coming soon</span>
        </div>
        <Reveal className="about-section__copy">
          <p className="kicker">About me</p>
          <h2>I like being close to the actual product.</h2>
          <p>
            I enjoy figuring out what needs to exist, why it needs to exist, and how it should work—then designing it.
          </p>
          <p className="about-note">Outside of product work: sketching, 2D animation, guitar or piano, reading, and an unreasonable amount of time with my three dogs and cat.</p>
        </Reveal>
      </section>

      <section className="contact-section">
        <div className="page-shell contact-section__inner">
          <p className="kicker">Have a product that needs figuring out?</p>
          <h2>Let’s build something worth using.</h2>
          <div className="contact-links">
            <a href="mailto:bemnetseifu@gmail.com">bemnetseifu@gmail.com <span>↗</span></a>
            <a href="https://www.linkedin.com/in/bemnet-seifu?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          </div>
        </div>
      </section>

      <footer className="site-footer page-shell">
        <p>Bemnet Seifu · Product Designer</p>
        <p>© {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}
