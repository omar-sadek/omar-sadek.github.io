import Link from "next/link";
import type { Metadata } from "next";
import {
  education,
  languages,
  profile,
  skills,
} from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About",
  description: profile.shortBio,
};

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm">{name}</span>
        <span className="text-xs text-[color:var(--color-text-dim)] font-mono">
          {level}%
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-[color:var(--color-surface-2)] overflow-hidden">
        <div
          className="h-full rounded-full bg-[color:var(--color-accent)]"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <section className="container-page pt-16 pb-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-text-muted)] hover:text-[color:var(--color-accent)] transition-colors mb-8"
      >
        <ArrowRightIcon className="rotate-180" /> Back to Home
      </Link>

      <SectionHeader
        eyebrow="Who am I"
        title="A Game Enthusiast — wired for tech and graphics"
      />

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-5 text-[color:var(--color-text-muted)] leading-relaxed">
          <p className="text-base sm:text-lg">{profile.longBio}</p>
          <p>
            On the engineering side, I&apos;m comfortable shipping production
            Unity with C#, but I keep one foot in C++ and graphics APIs like
            OpenGL and Vulkan because that&apos;s where the most interesting
            problems live. Build tools, AI, and rendering pipelines are the
            work I gravitate to when I get to choose.
          </p>
        </div>

        <aside className="card-surface p-6">
          <h3 className="text-sm font-medium mb-4">Personal Info</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <span className="text-[color:var(--color-text-dim)] w-20 shrink-0">
                Email
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="text-[color:var(--color-text)] hover:text-[color:var(--color-accent)] break-all"
              >
                {profile.email}
              </a>
            </li>
            <li className="flex gap-2">
              <span className="text-[color:var(--color-text-dim)] w-20 shrink-0">
                Phone
              </span>
              <a
                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                className="text-[color:var(--color-text)] hover:text-[color:var(--color-accent)]"
              >
                {profile.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <span className="text-[color:var(--color-text-dim)] w-20 shrink-0">
                Discord
              </span>
              <span className="text-[color:var(--color-text)]">
                {profile.discord}
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-[color:var(--color-text-dim)] w-20 shrink-0">
                Location
              </span>
              <span className="text-[color:var(--color-text)]">
                {profile.location}
              </span>
            </li>
          </ul>
        </aside>
      </div>

      <div className="grid lg:grid-cols-3 gap-5 mt-16">
        <div className="card-surface p-6">
          <h3 className="text-sm font-medium mb-1">Education</h3>
          <span className="block w-10 h-px bg-[color:var(--color-accent)] mb-5" />
          {education.map((ed) => (
            <div key={ed.title}>
              <p className="eyebrow mb-2">{ed.period}</p>
              <h4 className="text-base font-semibold">{ed.title}</h4>
              <p className="text-sm text-[color:var(--color-text-dim)] mt-1">
                {ed.institution}
              </p>
              <p className="text-sm text-[color:var(--color-text-muted)] mt-3 leading-relaxed">
                {ed.description}
              </p>
            </div>
          ))}
        </div>

        <div className="card-surface p-6 lg:col-span-1">
          <h3 className="text-sm font-medium mb-1">Skills</h3>
          <span className="block w-10 h-px bg-[color:var(--color-accent)] mb-5" />
          <div className="space-y-3.5">
            {skills.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </div>

        <div className="card-surface p-6">
          <h3 className="text-sm font-medium mb-1">Languages</h3>
          <span className="block w-10 h-px bg-[color:var(--color-accent)] mb-5" />
          <div className="space-y-3.5">
            {languages.map((lang) => (
              <SkillBar key={lang.name} {...lang} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
