type Props = {
  href: string;
  label: string;
  subtitle: string;
  value: string;
  Icon: React.ElementType;
  external?: boolean;
};

export default function ContactCard({
  href,
  label,
  subtitle,
  value,
  Icon,
  external,
}: Props) {
  const base =
    "group rounded-2xl border-2 border-transparent bg-zinc-50 p-5 transition-colors hover:border-primary/20 hover:bg-primary/5 active:border-primary/20 active:bg-primary/5";
  const content = (
    <>
      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFEDD4] transition-colors group-hover:bg-primary group-active:bg-primary">
        <Icon
          className="h-7 w-7 text-primary transition-colors group-hover:text-white group-active:text-white"
          strokeWidth={2}
          aria-hidden
        />
      </div>
      <h3 className="mb-2 text-xl font-bold text-zinc-900">{label}</h3>
      <p className="text-base text-zinc-600">{subtitle}</p>
      <p className="mt-2 text-base font-medium text-primary">{value}</p>
    </>
  );
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={base}
      >
        {content}
      </a>
    );
  }
  return <a href={href} className={base}>{content}</a>;
}
