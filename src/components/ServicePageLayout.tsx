import Link from "next/link";
import SubpageGallery from "@/components/SubpageGallery";
import FaqBlock from "@/components/FaqBlock";
import type { SubpageGallerySlug } from "@/lib/gallery-images";

export type ServicePageSection = {
    title: string;
    children: React.ReactNode;
};

export type ServicePageFaqItem = {
    q: string;
    a: React.ReactNode;
    schemaAnswer?: string;
};

const BASE_URL = "https://kranexprijevozi.hr";

type ServicePageLayoutProps = {
    title: string;
    intro: React.ReactNode;
    sections: ServicePageSection[];
    ctaTitle: string;
    ctaSubtitle?: React.ReactNode;
    ctaButtonText?: string;
    faqHeading: string;
    faq: ServicePageFaqItem[];
    gallerySlug: SubpageGallerySlug;
    canonicalPath?: string;
};

function getFaqSchema(faq: ServicePageFaqItem[], canonicalPath: string) {
    const items = faq.filter((item) => item.schemaAnswer != null);
    if (items.length === 0) return null;
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.schemaAnswer },
        })),
        url: `${BASE_URL}${canonicalPath}`,
    };
}

export default function ServicePageLayout({
    title,
    intro,
    sections,
    ctaTitle,
    ctaSubtitle = "Kontaktirajte nas i dogovorite termin već danas.",
    ctaButtonText = "Kontaktirajte nas za ponudu",
    faqHeading,
    faq,
    gallerySlug,
    canonicalPath = "",
}: ServicePageLayoutProps) {
    const faqSchema = faq.length > 0 && canonicalPath ? getFaqSchema(faq, canonicalPath) : null;
    return (
        <main className="mx-auto max-w-3xl px-4 pb-16 pt-6 md:pt-10 sm:px-6 lg:px-8">
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
            <h1 className="text-4xl font-bold text-zinc-900">{title}</h1>
            <div className="mt-4 space-y-4 text-base [&_p]:leading-relaxed [&_p]:text-zinc-700 [&_ul]:list-inside [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:text-zinc-700 [&_ol]:list-inside [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:text-zinc-700">
                {intro}
            </div>
            {sections.map((section) => (
                <section key={section.title} className="mt-10 space-y-4">
                    <h2 className="text-2xl font-bold text-zinc-900">{section.title}</h2>
                    <div className="[&_p]:leading-relaxed [&_p]:text-zinc-700 [&_ul]:list-inside [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:text-zinc-700 [&_ol]:list-inside [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:text-zinc-700 [&_li]:text-zinc-700">
                        {section.children}
                    </div>
                </section>
            ))}
            <aside className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8" aria-label="Poziv na akciju">
                <h2 className="text-2xl font-bold text-zinc-900">{ctaTitle}</h2>
                <div className="mt-2 text-base leading-relaxed text-zinc-700">{ctaSubtitle}</div>
                <ul className="mt-4 space-y-2 text-base text-zinc-700">
                    <li>Nazovite nas</li>
                    <li>Pošaljite upit</li>
                    <li>Brzi dolazak na lokaciju</li>
                </ul>
                <Link
                    href="/#kontakt"
                    className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:opacity-95"
                >
                    {ctaButtonText}
                </Link>
            </aside>
            {faq.length > 0 && (
                <FaqBlock heading={faqHeading} items={faq.map(({ q, a }) => ({ q, a }))} />
            )}
            <SubpageGallery slug={gallerySlug} />
        </main>
    );
}
