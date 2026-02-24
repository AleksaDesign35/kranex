import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTekst, getAllSlugs } from "@/lib/korisni-tekstovi";
import KorisniTekstPage from "@/components/KorisniTekstPage";

const BASE_URL = "https://kranexprijevozi.hr";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    const slugs = getAllSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getTekst(slug);
    if (!post) return { title: "Korisni tekstovi | Kranex" };
    const title = post.meta.meta_title || post.meta.title;
    const desc = post.meta.excerpt || `Korisni savjet: ${post.meta.title}. Kranex prijevozi – kamion s kranom Zagreb.`;
    const og: Metadata["openGraph"] = {
        title: `${title} | Kranex`,
        description: desc,
        url: `${BASE_URL}/korisni-tekstovi/${slug}`,
    };
    if (post.meta.image)
        og.images = [{ url: post.meta.image.startsWith("http") ? post.meta.image : `${BASE_URL}${post.meta.image}`, alt: post.meta.image_alt || title }];
    return {
        title: `${title} | Kranex`,
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
