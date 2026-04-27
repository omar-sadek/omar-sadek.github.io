import Image from "next/image";
import Link from "next/link";
import {
  experience,
  profile,
  projects,
  repositories,
} from "@/lib/data";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { RepositoryCard } from "@/components/RepositoryCard";
import { TypingText } from "@/components/TypingText";
import {
  ArrowRightIcon,
  GamepadIcon,
  SparkleIcon,
} from "@/components/Icons";

export default function Home() {
  const latestExperience = experience.slice(0, 2);
  const latestProjects = projects.slice(0, 3);
  const latestRepos = repositories.slice(0, 2);

  return (
    <>
      <section className="container-page pt-12 sm:pt-20 pb-10">
        <div className="flex flex-col items-center text-center animate-fade-up">
          <div className="relative mb-10">
            <div
              aria-hidden
              className="absolute inset-0 rounded-full bg-[color:var(--color-accent)]/30 blur-3xl scale-110"
            />
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={144}
              height={144}
              priority
              className="avatar-ring relative rounded-full object-cover"
            />
          </div>

          <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.15]">
            <span className="block text-[color:var(--color-text)]">Hi,</span>
            <span className="block mt-2">
              <span className="text-[color:var(--color-text)]">I&apos;m </span>
              <span className="text-[color:var(--color-accent)]">
                <TypingText phrases={profile.roles} />
              </span>
            </span>
          </h1>

          <p className="mt-8 font-mono text-base sm:text-lg text-[color:var(--color-text-muted)] inline-flex items-center gap-2">
            <SparkleIcon className="text-[color:var(--color-accent)]" />
            {profile.heroSubtitle}
          </p>

          <div className="mt-7 flex flex-wrap gap-2 justify-center">
            {profile.heroChips.map((chip) => (
              <span key={chip} className="info-chip">
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3 justify-center">
            <Link href="/projects" className="btn-accent">
              View Projects
              <ArrowRightIcon />
            </Link>
            <Link href="/about" className="btn-outline">
              About Me
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page pb-12">
        <div className="flex flex-col items-center text-center">
          <p className="font-mono text-sm sm:text-base text-[color:var(--color-text-muted)] inline-flex items-center gap-2">
            <GamepadIcon className="text-[color:var(--color-accent)]" />
            {profile.heroSkillsLabel}
          </p>
          <div className="mt-5 flex flex-wrap gap-2 justify-center max-w-2xl">
            {profile.heroSkills.map((skill) => (
              <span key={skill} className="info-chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page section-y">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="eyebrow mb-2">Recent Work</p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Latest Experience
            </h2>
          </div>
          <Link
            href="/work-experience"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm text-[color:var(--color-text-muted)] hover:text-[color:var(--color-accent)] transition-colors"
          >
            View all <ArrowRightIcon />
          </Link>
        </div>
        <div className="grid gap-5">
          {latestExperience.map((item) => (
            <ExperienceCard key={item.company} item={item} />
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <Link
            href="/work-experience"
            className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-text-muted)] hover:text-[color:var(--color-accent)] transition-colors"
          >
            View all experience <ArrowRightIcon />
          </Link>
        </div>
      </section>

      <section className="container-page section-y">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="eyebrow mb-2">Selected</p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm text-[color:var(--color-text-muted)] hover:text-[color:var(--color-accent)] transition-colors"
          >
            View all <ArrowRightIcon />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {latestProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-text-muted)] hover:text-[color:var(--color-accent)] transition-colors"
          >
            View all projects <ArrowRightIcon />
          </Link>
        </div>
      </section>

      <section className="container-page section-y">
        <div className="mb-10">
          <p className="eyebrow mb-2">Open Source & Side Work</p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Repositories
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {latestRepos.map((repo) => (
            <RepositoryCard key={repo.title} item={repo} />
          ))}
        </div>
      </section>
    </>
  );
}
