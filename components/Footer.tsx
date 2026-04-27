import Link from "next/link";
import { profile } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--color-border)] mt-24">
      <div className="container-page py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-[color:var(--color-text)]">
            <span className="font-medium">{profile.name}</span>
            <span className="px-2 text-[color:var(--color-text-dim)]">•</span>
            <span className="text-[color:var(--color-text-muted)]">
              {profile.role}
            </span>
          </p>
          <p className="mt-1 text-xs text-[color:var(--color-text-dim)]">
            © {year} {profile.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-[color:var(--color-text-muted)] hover:text-[color:var(--color-accent)] transition-colors"
          >
            <MailIcon width={20} height={20} />
          </Link>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-[color:var(--color-text-muted)] hover:text-[color:var(--color-accent)] transition-colors"
          >
            <LinkedInIcon width={20} height={20} />
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-[color:var(--color-text-muted)] hover:text-[color:var(--color-accent)] transition-colors"
          >
            <GitHubIcon width={20} height={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
