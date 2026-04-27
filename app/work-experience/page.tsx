import Link from "next/link";
import type { Metadata } from "next";
import { experience } from "@/lib/data";
import { ExperienceCard } from "@/components/ExperienceCard";
import { SectionHeader } from "@/components/SectionHeader";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Work Experience",
  description:
    "Over a decade between gameplay programming, graphics, and immersive experiences.",
};

export default function WorkExperiencePage() {
  return (
    <section className="container-page pt-16 pb-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-text-muted)] hover:text-[color:var(--color-accent)] transition-colors mb-8"
      >
        <ArrowRightIcon className="rotate-180" /> Back to Home
      </Link>

      <SectionHeader
        eyebrow="Career"
        title="Work Experience"
        description="A timeline of the teams I've worked with — building gameplay, graphics, build tools, and immersive systems across games and beyond."
      />

      <div className="grid gap-5">
        {experience.map((item) => (
          <ExperienceCard key={item.company} item={item} />
        ))}
      </div>
    </section>
  );
}
