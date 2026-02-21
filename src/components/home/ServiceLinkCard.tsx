import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Props = {
    href: string;
    title: string;
    text: string;
    Icon: LucideIcon;
};

export default function ServiceLinkCard({ href, title, text, Icon }: Props) {
    return (
        <Link
            href={href}
            className="group flex flex-col rounded-2xl border-2 border-zinc-100 bg-white p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-xl active:border-primary/20 active:shadow-xl"
        >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-[#FFEDD4] transition-colors group-hover:bg-primary group-active:bg-primary">
                <Icon
                    className="h-8 w-8 text-primary transition-colors group-hover:text-white group-active:text-white"
                    strokeWidth={2}
                    aria-hidden
                />
            </div>
            <h3 className="mb-3 text-xl font-bold text-zinc-900">{title}</h3>
            <p className="mb-6 flex-1 text-base leading-relaxed text-zinc-600">{text}</p>
            <span className="inline-flex items-center gap-1 text-base font-medium text-primary">
                Saznaj više
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
            </span>
        </Link>
    );
}
