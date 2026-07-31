import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";
import { TechList } from "./TechTag";
import { ArrowRightIcon } from "./Icons";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  const cardClass = "group block card-surface-hover overflow-hidden h-full";

  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    project.slug ? (
      <Link href={`/projects/${project.slug}`} className={cardClass}>
        {children}
      </Link>
    ) : project.href ? (
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className={cardClass}
      >
        {children}
      </a>
    ) : (
      <div className="group card-surface-hover overflow-hidden h-full">
        {children}
      </div>
    );

  return (
    <Wrapper>
      <div className="relative aspect-[16/10] overflow-hidden bg-[color:var(--color-surface-2)]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight">
            {project.title}
          </h3>
          {project.slug || project.href ? (
            <ArrowRightIcon className="mt-1 text-[color:var(--color-text-dim)] transition-transform group-hover:translate-x-1 group-hover:text-[color:var(--color-accent)]" />
          ) : null}
        </div>
        <p className="mt-2 text-sm text-[color:var(--color-text-muted)] leading-relaxed">
          {project.description}
        </p>
        {project.slug ? (
          <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[color:var(--color-accent)] opacity-0 -translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
            View details <ArrowRightIcon className="w-3.5 h-3.5" />
          </span>
        ) : null}
        {project.tech.length > 0 ? (
          <div className="mt-4">
            <TechList items={project.tech} />
          </div>
        ) : null}
      </div>
    </Wrapper>
  );
}
