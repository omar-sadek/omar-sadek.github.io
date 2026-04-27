import type { Experience } from "@/lib/data";
import { ExternalIcon } from "./Icons";
import { TechList } from "./TechTag";

type Props = {
  item: Experience;
};

export function ExperienceCard({ item }: Props) {
  return (
    <article className="card-surface-hover p-6 sm:p-8">
      <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
            {item.role}
          </h3>
          <p className="mt-1 text-sm text-[color:var(--color-text-muted)]">
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-[color:var(--color-accent)] transition-colors"
              >
                {item.company}
                <ExternalIcon className="opacity-60" />
              </a>
            ) : (
              <span>{item.company}</span>
            )}
            <span className="px-1.5 text-[color:var(--color-text-dim)]">•</span>
            <span>{item.location}</span>
          </p>
        </div>
        <span className="eyebrow whitespace-nowrap shrink-0 sm:mt-1.5">
          {item.period}
        </span>
      </div>

      <p className="mt-5 text-[color:var(--color-text-muted)] leading-relaxed">
        {item.summary}
      </p>

      {item.highlights.length > 0 ? (
        <div className="mt-6">
          <h4 className="text-sm font-medium mb-3">Key Highlights</h4>
          <ul className="space-y-2.5">
            {item.highlights.map((h) => (
              <li
                key={h}
                className="flex gap-3 text-sm text-[color:var(--color-text-muted)] leading-relaxed"
              >
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-accent)]"
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {item.tech.length > 0 ? (
        <div className="mt-6">
          <h4 className="text-sm font-medium mb-3">Technologies</h4>
          <TechList items={item.tech} />
        </div>
      ) : null}
    </article>
  );
}
