import Link from "next/link";
import type { Metadata } from "next";
import { projects, repositories, articles } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";
import { RepositoryCard } from "@/components/RepositoryCard";
import { SectionHeader } from "@/components/SectionHeader";
import { ArrowRightIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects, repositories, and writing.",
};

export default function ProjectsPage() {
  return (
    <section className="container-page pt-16 pb-12">
      <Reveal>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-text-muted)] hover:text-[color:var(--color-accent)] transition-colors mb-8"
        >
          <ArrowRightIcon className="rotate-180" /> Back to Home
        </Link>

        <SectionHeader
          eyebrow="Selected work"
          title="Projects"
          description="Games and prototypes I've shipped or contributed to. Most are built in Unity, but the playground extends into engines, tools, and graphics."
        />
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 120}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <div className="mt-20">
        <Reveal>
          <SectionHeader
            eyebrow="Open Source"
            title="Repositories"
            description="Side projects and tooling I've built — usually to learn something deeper about engines, graphics, or systems design."
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {repositories.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <RepositoryCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>

      {articles.length > 0 ? (
        <div className="mt-20">
          <Reveal>
            <SectionHeader
              eyebrow="Writing"
              title="Articles"
              description="Occasional write-ups about engineering puzzles I've enjoyed solving."
            />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((article, i) => (
              <Reveal key={article.title} delay={i * 120}>
                <a
                  href={article.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block card-surface-hover overflow-hidden h-full"
                >
                  <div
                    className="aspect-[16/9] bg-[color:var(--color-surface-2)] bg-cover bg-center"
                    style={{ backgroundImage: `url(${article.image})` }}
                    role="img"
                    aria-label={article.title}
                  />
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold tracking-tight">
                        {article.title}
                      </h3>
                      <ArrowRightIcon className="mt-1 text-[color:var(--color-text-dim)] transition-transform group-hover:translate-x-1 group-hover:text-[color:var(--color-accent)]" />
                    </div>
                    <p className="mt-2 text-sm text-[color:var(--color-text-muted)] leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
