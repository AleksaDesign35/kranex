import type { LucideIcon } from "lucide-react";

type Props = {
  href: string;
  label: string;
  subtitle: string;
  value: string;
  Icon: LucideIcon;
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
  const className =
    "flex items-start gap-4 rounded-lg border border-zinc-200 p-4 transition hover:border-primary/40 hover:bg-primary/5";
  const content = (
    <>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-5 w-5 text-primary" strokeWidth={2} />
      </div>
      <div>
        <p className="font-semibold text-zinc-900">{label}</p>
        <p className="text-sm text-zinc-600">{subtitle}</p>
        <p className="mt-1 font-medium text-primary">{value}</p>
      </div>
    </>
  );
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }
  return (
    <a href={href} className={className}>
      {content}
    </a>
  );
}
