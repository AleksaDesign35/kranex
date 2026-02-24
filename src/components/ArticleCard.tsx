import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { KorisniTekstMeta } from "@/lib/korisni-tekstovi";

function formatDate(dateStr: string): string {
    try {
        const d = new Date(dateStr);
        return d.toLocaleDateString("hr-HR", { day: "numeric", month: "short", year: "numeric" });
    } catch {
        return dateStr;
    }
}

type Props = { slug: string; meta: KorisniTekstMeta };

export default function ArticleCard({ slug, meta }: Props) {
    const href = `/korisni-tekstovi/${slug}`;
    return (
        <li className="flex h-full">
            <Link
                href={href}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:border-primary hover:shadow-md"
            >
                <div className="relative aspect-[4/3] w-full shrink-0 bg-zinc-100">
                    {meta.image ? (
                        <Image
                            src={meta.image}
                            alt={meta.image_alt || meta.title}
                            fill
                            className="object-cover object-center transition group-hover:scale-[1.02]"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" aria-hidden />
                    )}
                </div>
                <div className="flex min-w-0 flex-1 flex-col p-5">
                    <span className="text-sm font-medium text-zinc-500">{formatDate(meta.date)}</span>
                    <h2 className="mt-1 text-lg font-bold text-zinc-900 transition group-hover:text-primary line-clamp-2">
                        {meta.title}
                    </h2>
                    {meta.excerpt && (
                        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-zinc-600">
                            {meta.excerpt}
                        </p>
                    )}
                    <span className="mt-3 flex shrink-0 items-center gap-1 text-sm font-medium text-primary">
                        Pročitaj više
                        <ArrowRight className="size-4 shrink-0 transition group-hover:translate-x-0.5" aria-hidden />
                    </span>
                </div>
            </Link>
        </li>
    );
}
