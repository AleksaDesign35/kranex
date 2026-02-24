import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { CheckCircle2 } from "lucide-react";
import type { KorisniTekstMeta } from "@/lib/korisni-tekstovi";
import SocialShare from "@/components/SocialShare";
import FaqBlock from "@/components/FaqBlock";

type Props = { meta: KorisniTekstMeta; content: string; slug: string };

function stripFirstH1(text: string): string {
    const match = text.match(/^#\s+[\s\S]+?\n\n/);
    return match ? text.slice(match[0].length).trim() : text;
}

function stripZatražitePonudu(text: string): string {
    const idx = text.search(/\n##\s+Zatražite ponudu\s*\n/i);
    return idx >= 0 ? text.slice(0, idx).trim() : text;
}

const FAQ_HEADING = "Česta pitanja";

function parseFaqSection(raw: string): { q: string; a: string }[] {
    const blocks = raw.split(/\n###\s+/);
    const items: { q: string; a: string }[] = [];
    for (let i = 0; i < blocks.length; i++) {
        let block = blocks[i].trim();
        if (!block) continue;
        if (block.startsWith("###")) block = block.replace(/^###\s*/, "");
        const firstNewline = block.indexOf("\n\n");
        const q = firstNewline >= 0 ? block.slice(0, firstNewline).trim() : block;
        const a = firstNewline >= 0 ? block.slice(firstNewline + 2).trim() : "";
        if (q) items.push({ q, a });
    }
    return items;
}

function splitFaqFromBody(body: string): { before: string; faqItems: { q: string; a: string }[]; after: string } {
    const match = body.match(new RegExp(`\\n##\\s+${FAQ_HEADING.replace(/\s+/g, "\\s+")}\\s*\\n`, "i"));
    if (!match || match.index == null) return { before: body, faqItems: [], after: "" };
    const before = body.slice(0, match.index).trim();
    const rest = body.slice(match.index + match[0].length);
    const nextH2 = rest.match(/\n##\s+/);
    const faqRaw = nextH2 ? rest.slice(0, nextH2.index) : rest;
    const after = nextH2 ? rest.slice(nextH2.index! + nextH2[0].length).trim() : "";
    const faqItems = parseFaqSection(faqRaw);
    return { before, faqItems, after };
}

function formatDate(dateStr: string): string {
    try {
        const d = new Date(dateStr);
        return d.toLocaleDateString("hr-HR", { day: "numeric", month: "long", year: "numeric" });
    } catch {
        return dateStr;
    }
}

const proseClass =
    "article-prose prose prose-zinc max-w-none prose-p:text-zinc-700 prose-a:font-medium prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl";

const markdownComponents = () => ({
    a: ({ href, children }: { href?: string; children?: React.ReactNode }) => {
        if (href?.startsWith("/"))
            return (
                <Link href={href} className="rounded underline-offset-2 hover:underline">
                    {children}
                </Link>
            );
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="rounded underline-offset-2 hover:underline">
                {children}
            </a>
        );
    },
    ul: ({ children }: { children?: React.ReactNode }) => (
        <ul className="article-prose list-none space-y-2 pl-0 mt-4 mb-4">{children}</ul>
    ),
    li: ({ children }: { children?: React.ReactNode }) => (
        <li className="flex items-start gap-3 py-1.5">
            <span className="mt-0.5 shrink-0 text-primary" aria-hidden>
                <CheckCircle2 className="size-5" strokeWidth={2} />
            </span>
            <span className="min-w-0 text-zinc-700">{children}</span>
        </li>
    ),
    ol: ({ children }: { children?: React.ReactNode }) => (
        <ol className="article-prose list-decimal space-y-2 pl-6">{children}</ol>
    ),
    img: (props: { src?: string | Blob; alt?: string }) => {
        const srcStr = typeof props.src === "string" ? props.src : "";
        if (!srcStr) return null;
        const isInternal = srcStr.startsWith("/");
        const altStr = typeof props.alt === "string" ? props.alt : "";
        if (isInternal)
            return (
                <span className="relative my-8 block overflow-hidden rounded-xl">
                    <Image src={srcStr} alt={altStr} width={896} height={504} className="size-full object-cover" sizes="(max-width: 896px) 100vw, 896px" />
                </span>
            );
        return (
            <span className="relative my-8 block overflow-hidden rounded-xl">
                <img src={srcStr} alt={altStr} className="size-full object-cover" />
            </span>
        );
    },
});

export default function KorisniTekstPage({ meta, content, slug }: Props) {
    const body = stripZatražitePonudu(stripFirstH1(content));
    const { before, faqItems, after } = splitFaqFromBody(body);
    const path = `/korisni-tekstovi/${slug}`;
    const components = markdownComponents();

    const imageAlt = meta.image_alt || meta.title;
    const imageTitle = meta.title;

    return (
        <main className="min-h-screen">
            <div className="mx-auto max-w-[1280px] px-4 pb-20 pt-6 sm:px-6 md:pt-10 lg:px-8">
                <article>
                    {meta.image && (
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-zinc-100">
                            <Image
                                src={meta.image}
                                alt={imageAlt}
                                title={imageTitle}
                                fill
                                className="object-cover object-center"
                                priority
                                sizes="(max-width: 1280px) 100vw, 1280px"
                            />
                        </div>
                    )}
                    <div className="max-w-3xl py-8 pl-0 pr-4 sm:py-10 sm:pr-8">
                        <div className="mb-2 inline-block px-0 text-xs font-semibold uppercase tracking-wide text-primary">
                            Korisni tekstovi
                        </div>
                        <p className="text-sm font-medium text-zinc-500">{formatDate(meta.date)}</p>
                        <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl">
                            {meta.title}
                        </h1>
                        <div className="mt-6 px-0 py-4">
                            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                                Podijeli članak
                            </p>
                            <SocialShare path={path} title={meta.title} />
                        </div>
                        <div className={`article-prose mt-10 border-t border-zinc-200 pt-10 ${proseClass}`}>
                            <ReactMarkdown components={components}>{before}</ReactMarkdown>
                            {faqItems.length > 0 && (
                                <FaqBlock
                                    heading={FAQ_HEADING}
                                    items={faqItems.map(({ q, a }) => ({
                                        q,
                                        a: <ReactMarkdown components={components}>{a}</ReactMarkdown>,
                                    }))}
                                />
                            )}
                            {after && <ReactMarkdown components={components}>{after}</ReactMarkdown>}
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
}
