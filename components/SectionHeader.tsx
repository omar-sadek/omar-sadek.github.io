type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  return (
    <header
      className={`mb-12 ${align === "center" ? "text-center mx-auto max-w-2xl" : ""}`}
    >
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 text-base sm:text-lg text-[color:var(--color-text-muted)] max-w-2xl">
          {description}
        </p>
      ) : null}
    </header>
  );
}
