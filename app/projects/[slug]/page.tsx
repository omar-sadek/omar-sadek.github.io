import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/lib/data";
import { TechList } from "@/components/TechTag";
import { ArrowRightIcon, ExternalIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";

type Props = {
  params: Promise<{ slug: string }>;
};

const detailProjects = projects.filter((project) => project.slug);

export function generateStaticParams() {
  return detailProjects.map((project) => ({ slug: project.slug as string }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = detailProjects.find((item) => item.slug === slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.subtitle ?? project.description,
    openGraph: {
      title: project.title,
      description: project.subtitle ?? project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = detailProjects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <article className="container-page pt-16 pb-24">
      <Reveal>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-text-muted)] hover:text-[color:var(--color-accent)] transition-colors mb-8"
        >
          <ArrowRightIcon className="rotate-180" /> Back to Projects
        </Link>

        <header className="mb-10">
          {project.year || project.role ? (
            <p className="eyebrow mb-3">
              {[project.year, project.role].filter(Boolean).join(" · ")}
            </p>
          ) : null}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            {project.title}
          </h1>
          {project.subtitle ? (
            <p className="mt-4 text-base sm:text-lg text-[color:var(--color-text-muted)] max-w-2xl">
              {project.subtitle}
            </p>
          ) : null}
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="btn-outline mt-6"
            >
              {project.externalLabel ?? "Visit project"} <ExternalIcon />
            </a>
          ) : null}
        </header>
      </Reveal>

      <Reveal delay={80}>
        <div
          className="relative overflow-hidden rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-2)]"
          style={{ aspectRatio: project.heroAspectRatio ?? 2.1 }}
        >
          <Image
            src={project.heroImage ?? project.image}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 72rem"
            className="object-cover"
          />
        </div>
      </Reveal>

      {project.overview?.length ? (
        <Reveal delay={80}>
          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight">
              About this project
            </h2>
            <div className="mt-4 space-y-4 max-w-3xl">
              {project.overview.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-[color:var(--color-text-muted)] leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        </Reveal>
      ) : null}

      {project.highlights?.length ? (
        <section className="mt-16">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight mb-6">
              Key features
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.highlights.map((highlight, i) => (
              <Reveal key={highlight} delay={i * 60}>
                <div className="card-surface h-full p-5 flex gap-4">
                  <span className="shrink-0 font-mono text-sm text-[color:var(--color-accent)] pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-[color:var(--color-text-muted)] leading-relaxed">
                    {highlight}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      {project.tech.length ? (
        <Reveal>
          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight mb-6">
              Technologies used
            </h2>
            <TechList items={project.tech} />
          </section>
        </Reveal>
      ) : null}

      {project.gallery?.length ? (
        <section className="mt-16">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight mb-6">
              Gallery
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {project.gallery.map((item, i) => (
              <Reveal key={item.src} delay={i * 90}>
                <figure className="card-surface-hover overflow-hidden h-full">
                  <div className="relative aspect-[16/9] bg-[color:var(--color-surface-2)]">
                    <Image
                      src={item.src}
                      alt={item.caption ?? `${project.title} screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  {item.caption ? (
                    <figcaption className="px-5 py-4 text-sm text-[color:var(--color-text-muted)]">
                      {item.caption}
                    </figcaption>
                  ) : null}
                </figure>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      {project.video ? (
        <Reveal>
          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight mb-6">Video</h2>
            <figure className="card-surface overflow-hidden">
              {project.video.youtubeId ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${project.video.youtubeId}`}
                  title={`${project.title} video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="w-full aspect-video bg-black border-0"
                />
              ) : (
                <video
                  controls
                  preload="none"
                  poster={project.video.poster}
                  className="w-full aspect-video bg-black"
                >
                  <source src={project.video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {project.video.caption ? (
                <figcaption className="px-5 py-4 text-sm text-[color:var(--color-text-muted)]">
                  {project.video.caption}
                </figcaption>
              ) : null}
            </figure>
          </section>
        </Reveal>
      ) : null}

      {project.credits?.length ? (
        <Reveal>
          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight mb-6">
              Credits
            </h2>
            {project.creditsNote ? (
              <p className="mb-5 text-[color:var(--color-text-muted)] leading-relaxed max-w-2xl">
                {project.creditsNote}
              </p>
            ) : null}
            <dl className="card-surface p-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {project.credits.map((credit) => (
                <div
                  key={credit.people}
                  className={credit.role ? "" : "sm:col-span-2"}
                >
                  {credit.role ? (
                    <dt className="font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--color-text-dim)]">
                      {credit.role}
                    </dt>
                  ) : null}
                  <dd className="mt-1 text-sm text-[color:var(--color-text)]">
                    {credit.people}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </Reveal>
      ) : null}

      <Reveal>
        <div className="mt-20 pt-10 border-t border-[color:var(--color-border)]">
          <Link href="/projects" className="btn-outline">
            <ArrowRightIcon className="rotate-180" /> All projects
          </Link>
        </div>
      </Reveal>
    </article>
  );
}
