import Link from "next/link";
import type { Metadata } from "next";
import { profile } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";
import {
  ArrowRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name}.`,
};

export default function ContactPage() {
  return (
    <section className="container-page pt-16 pb-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-text-muted)] hover:text-[color:var(--color-accent)] transition-colors mb-8"
      >
        <ArrowRightIcon className="rotate-180" /> Back to Home
      </Link>

      <SectionHeader
        eyebrow="Let's talk"
        title="Get in touch"
        description="I'm always happy to chat about gameplay, graphics, immersive tech, or interesting engineering problems. The fastest way to reach me is email."
      />

      <div className="grid lg:grid-cols-3 gap-5">
        <a
          href={`mailto:${profile.email}`}
          className="card-surface-hover p-6 group"
        >
          <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)] mb-4">
            <MailIcon width={20} height={20} />
          </div>
          <h3 className="text-base font-semibold">Email</h3>
          <p className="mt-1 text-sm text-[color:var(--color-text-muted)] break-all">
            {profile.email}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-[color:var(--color-accent)]">
            Send a message
            <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
          </span>
        </a>

        <a
          href={profile.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="card-surface-hover p-6 group"
        >
          <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)] mb-4">
            <LinkedInIcon width={20} height={20} />
          </div>
          <h3 className="text-base font-semibold">LinkedIn</h3>
          <p className="mt-1 text-sm text-[color:var(--color-text-muted)]">
            Connect & message
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-[color:var(--color-accent)]">
            Open profile
            <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
          </span>
        </a>

        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          className="card-surface-hover p-6 group"
        >
          <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)] mb-4">
            <GitHubIcon width={20} height={20} />
          </div>
          <h3 className="text-base font-semibold">GitHub</h3>
          <p className="mt-1 text-sm text-[color:var(--color-text-muted)]">
            See what I've been building
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-[color:var(--color-accent)]">
            Browse repos
            <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
          </span>
        </a>
      </div>

      <div className="mt-16 card-surface p-6 sm:p-8">
        <h3 className="text-sm font-medium mb-4">Other details</h3>
        <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-8 text-sm">
          <li className="flex gap-3">
            <span className="text-[color:var(--color-text-dim)] w-24 shrink-0">
              Phone
            </span>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="text-[color:var(--color-text)] hover:text-[color:var(--color-accent)]"
            >
              {profile.phone}
            </a>
          </li>
          <li className="flex gap-3">
            <span className="text-[color:var(--color-text-dim)] w-24 shrink-0">
              Discord
            </span>
            <span className="text-[color:var(--color-text)]">
              {profile.discord}
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[color:var(--color-text-dim)] w-24 shrink-0">
              Location
            </span>
            <span className="text-[color:var(--color-text)]">
              {profile.location}
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[color:var(--color-text-dim)] w-24 shrink-0">
              Resume
            </span>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[color:var(--color-accent)] hover:underline"
            >
              View / Download
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
