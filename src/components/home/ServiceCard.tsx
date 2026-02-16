import type { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  text: string;
  Icon: LucideIcon;
};

export default function ServiceCard({ title, text, Icon }: Props) {
  return (
    <article className="flex flex-col rounded-xl bg-white p-6 shadow-sm ring-1 ring-zinc-200/80">
      <div className="mb-4 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-6 w-6 text-primary" strokeWidth={2} />
      </div>
      <h3 className="text-lg font-bold text-zinc-900">{title}</h3>
      <p className="mt-2 flex-1 text-base text-zinc-600">{text}</p>
    </article>
  );
}
