import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type { BlogMeta } from "@/lib/blog";
import type { SubpageGallerySlug } from "@/lib/gallery-images";
import SubpageGallery from "@/components/SubpageGallery";

type Props = { meta: BlogMeta; content: string; slug: SubpageGallerySlug; ctaTitle: string };

function stripFirstH1(text: string): string {
    const match = text.match(/^#\s+[\s\S]+?\n\n/);
    return match ? text.slice(match[0].length).trim() : text;
}

function stripZatražitePonudu(text: string): string {
    const idx = text.search(/\n##\s+Zatražite ponudu\s*\n/i);
    return idx >= 0 ? text.slice(0, idx).trim() : text;
}

export default function MarkdownPage({ meta, content, slug, ctaTitle }: Props) {
    const body = stripZatražitePonudu(stripFirstH1(content));
    return (
        <main className="mx-auto max-w-3xl px-4 pb-16 pt-6 md:pt-10 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-zinc-900">{meta.title}</h1>
            <div className="prose prose-zinc mt-8 max-w-none prose-headings:text-2xl prose-headings:font-bold prose-headings:text-zinc-900 prose-p:leading-relaxed prose-p:text-zinc-700 prose-a:font-medium prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-ul:list-inside prose-ul:list-disc prose-ul:space-y-1 prose-ul:text-zinc-700 prose-li:marker:text-zinc-500 [&_h2]:mt-10 [&_h2]:mb-4">
                <ReactMarkdown
                    components={{
                        a: ({ href, children }) => {
                            if (href?.startsWith("/"))
                                return <Link href={href}>{children}</Link>;
                            return (
                                <a href={href} target="_blank" rel="noopener noreferrer">
                                    {children}
                                </a>
                            );
                        },
                    }}
                >
                    {body}
                </ReactMarkdown>
            </div>
            <aside className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8" aria-label="Poziv na akciju">
                <h2 className="text-2xl font-bold text-zinc-900">{ctaTitle}</h2>
                <p className="mt-2 text-base leading-relaxed text-zinc-700">
                    Kontaktirajte nas i dogovorite termin već danas.
                </p>
                <ul className="mt-4 space-y-2 text-base text-zinc-700">
                    <li>Nazovite nas</li>
                    <li>Pošaljite upit</li>
                    <li>Brzi dolazak na lokaciju</li>
                </ul>
                <Link
                    href="/#kontakt"
                    className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:opacity-95"
                >
                    Kontaktirajte nas za ponudu
                </Link>
            </aside>
            <SubpageGallery slug={slug} />
        </main>
    );
}
