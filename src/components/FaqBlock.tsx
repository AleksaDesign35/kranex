import { ChevronDown } from "lucide-react";

export type FaqItem = { q: string; a: React.ReactNode };

type Props = { heading: string; items: FaqItem[] };

export default function FaqBlock({ heading, items }: Props) {
    if (items.length === 0) return null;
    return (
        <section className="mt-12 space-y-4">
            <h2 className="border-l-4 border-primary pl-4 text-2xl font-bold text-zinc-900">
                {heading}
            </h2>
            <div className="space-y-0">
                {items.map(({ q, a }) => (
                    <details
                        key={q}
                        className="group mb-5 rounded-2xl border-2 border-zinc-100 bg-zinc-50 transition-colors hover:border-primary/20 open:border-primary/20 open:bg-white"
                    >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-3 font-semibold text-zinc-900 [&::-webkit-details-marker]:hidden">
                            <span>{q}</span>
                            <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" strokeWidth={2} />
                        </summary>
                        <div className="border-t border-zinc-200 px-5 py-3 text-base text-zinc-600 [&_a]:font-medium [&_a]:text-primary [&_a]:hover:underline [&>*:last-child]:mb-0 [&_p]:mb-0 [&_p:last-child]:mb-0">
                            {a}
                        </div>
                    </details>
                ))}
            </div>
        </section>
    );
}
