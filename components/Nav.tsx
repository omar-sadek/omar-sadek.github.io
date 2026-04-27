"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, profile } from "@/lib/data";
import { CloseIcon, MenuIcon } from "./Icons";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[color:var(--color-bg)]/70 border-b border-[color:var(--color-border)]">
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-medium tracking-tight"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)] font-semibold">
            OS
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                isActive(link.href)
                  ? "text-[color:var(--color-accent)] bg-[color:var(--color-accent)]/5"
                  : "text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-2 px-3 py-1.5 rounded-md text-sm border border-[color:var(--color-border)] text-[color:var(--color-text)] hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] transition-colors"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-[color:var(--color-border)] text-[color:var(--color-text)]"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open ? (
        <div className="md:hidden border-t border-[color:var(--color-border)] bg-[color:var(--color-bg)]">
          <div className="container-page py-3 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-2 text-sm transition-colors ${
                  isActive(link.href)
                    ? "text-[color:var(--color-accent)]"
                    : "text-[color:var(--color-text-muted)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-[color:var(--color-text)]"
            >
              Resume
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
