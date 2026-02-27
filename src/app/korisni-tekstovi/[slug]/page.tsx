import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTekst, getAllSlugs } from "@/lib/korisni-tekstovi";
import KorisniTekstPage from "@/components/KorisniTekstPage";

const BASE_URL = "https://kranexprijevozi.hr";
const BRAND_SUFFIX = " | Kranex Prijevozi";
const MAX_TITLE_LENGTH = 62;
const MAX_DESCRIPTION_LENGTH = 155;

type Props = { params: Promise<{ slug: string }> };

function normalizeText(value: string): string {
    return value.replace(/\s+/g, " ").trim();
}

function truncateToWordBoundary(value: string, maxLength: number): string {
    const cleaned = normalizeText(value);
    if (cleaned.length <= maxLength) return cleaned;
    const sliced = cleaned.slice(0, maxLength + 1);
    const splitIndex = Math.max(sliced.lastIndexOf(" "), sliced.lastIndexOf("-"), sliced.lastIndexOf("–"));
    const cut = splitIndex > 32 ? sliced.slice(0, splitIndex) : cleaned.slice(0, maxLength);
    return cut.replace(/[,:;|–-]+$/g, "").trim();
}

function withLocationIfMissing(value: string): string {
    return /zagreb|okolica/i.test(value) ? value : `${value} - Zagreb i okolica`;
}

function buildSeoTitle(value: string): string {
    const baseTitle = withLocationIfMissing(normalizeText(value));
    const maxBaseLength = MAX_TITLE_LENGTH - BRAND_SUFFIX.length;
    const trimmed = truncateToWordBoundary(baseTitle, maxBaseLength);
    return `${trimmed}${BRAND_SUFFIX}`;
}

function buildSeoDescription(value: string): string {
    return truncateToWordBoundary(value, MAX_DESCRIPTION_LENGTH);
}

export async function generateStaticParams() {
    const slugs = getAllSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getTekst(slug);
    if (!post) return { title: "Korisni tekstovi - Zagreb i okolica | Kranex" };
    const rawTitle = post.meta.meta_title || post.meta.title;
    const title = buildSeoTitle(rawTitle);
    const fallbackDesc = `Korisni savjet: ${post.meta.title}. Kranex prijevozi za Zagreb i okolicu.`;
    const desc = buildSeoDescription(post.meta.excerpt || fallbackDesc);
    const og: Metadata["openGraph"] = {
        title,
        description: desc,
        url: `${BASE_URL}/korisni-tekstovi/${slug}`,
    };
    if (post.meta.image)
        og.images = [{ url: post.meta.image.startsWith("http") ? post.meta.image : `${BASE_URL}${post.meta.image}`, alt: post.meta.image_alt || title }];
    return {
        title,
        description: desc,
        alternates: { canonical: `/korisni-tekstovi/${slug}` },
        openGraph: og,
    };
}

export default async function KorisniTekstSinglePage({ params }: Props) {
    const { slug } = await params;
    const post = getTekst(slug);
    if (!post) notFound();
    return <KorisniTekstPage meta={post.meta} content={post.content} slug={slug} />;
}
