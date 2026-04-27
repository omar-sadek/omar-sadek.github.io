type Props = {
  children: React.ReactNode;
};

export function TechTag({ children }: Props) {
  return <span className="tech-pill">{children}</span>;
}

type ListProps = {
  items: string[];
};

export function TechList({ items }: ListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <TechTag key={item}>{item}</TechTag>
      ))}
    </div>
  );
}
