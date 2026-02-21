import type { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  text: string;
  Icon: LucideIcon;
};

export default function ServiceCard({ title, text, Icon }: Props) {
  return (
    <article className="group rounded-2xl border-2 border-zinc-100 bg-white p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-xl active:border-primary/20 active:shadow-xl">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#FFEDD4] transition-colors group-hover:bg-primary group-active:bg-primary">
        <Icon
          className="h-8 w-8 text-primary transition-colors group-hover:text-white group-active:text-white"
          strokeWidth={2}
          aria-hidden
        />
      </div>
      <h3 className="mb-3 text-xl font-bold text-zinc-900">{title}</h3>
      <p className="leading-relaxed text-zinc-600">{text}</p>
    </article>
  );
}
