import Image from "next/image";
import type { Repository } from "@/lib/data";
import { TechList } from "./TechTag";
import { ArrowRightIcon } from "./Icons";

type Props = {
  item: Repository;
};

export function RepositoryCard({ item }: Props) {
  const isInternal = item.href === "#" || item.href === "";

  const content = (
    <>
      <div className="relative aspect-[16/9] overflow-hidden bg-[color:var(--color-surface-2)]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
          {!isInternal ? (
            <ArrowRightIcon className="mt-1 text-[color:var(--color-text-dim)] transition-transform group-hover:translate-x-1 group-hover:text-[color:var(--color-accent)]" />
          ) : null}
        </div>
        {item.byline ? (
          <p className="mt-1 text-xs text-[color:var(--color-text-dim)]">
            {item.byline}
          </p>
        ) : null}
        <p className="mt-2 text-sm text-[color:var(--color-text-muted)] leading-relaxed">
          {item.description}
        </p>
        {item.tech.length > 0 ? (
          <div className="mt-4">
            <TechList items={item.tech} />
          </div>
        ) : null}
      </div>
    </>
  );

  if (isInternal) {
    return (
      <div className="group card-surface-hover overflow-hidden h-full">
        {content}
      </div>
    );
  }

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="group block card-surface-hover overflow-hidden h-full"
    >
      {content}
    </a>
  );
}
