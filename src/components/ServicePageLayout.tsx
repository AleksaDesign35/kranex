import Link from "next/link";
import { ChevronDown } from "lucide-react";
import SubpageGallery from "@/components/SubpageGallery";
import type { SubpageGallerySlug } from "@/lib/gallery-images";

export type ServicePageSection = {
    title: string;
    children: React.ReactNode;
};

export type ServicePageFaqItem = {
    q: string;
    a: React.ReactNode;
};

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
};

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
}: ServicePageLayoutProps) {
    return (
        <main className="mx-auto max-w-3xl px-4 pb-16 pt-6 md:pt-10 sm:px-6 lg:px-8">
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
            <section className="mt-12 space-y-4">
                <h2 className="text-2xl font-bold text-zinc-900">{faqHeading}</h2>
                <div className="space-y-4">
                    {faq.map(({ q, a }) => (
                        <details
                            key={q}
                            className="group rounded-2xl border-2 border-zinc-100 bg-zinc-50 transition-colors hover:border-primary/20 open:border-primary/20 open:bg-white"
                        >
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-3 font-semibold text-zinc-900 [&::-webkit-details-marker]:hidden">
                                <span>{q}</span>
                                <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" strokeWidth={2} />
                            </summary>
                            <div className="border-t border-zinc-200 px-5 py-3 text-base text-zinc-600 [&_a]:font-medium [&_a]:text-primary [&_a]:hover:underline">
                                {a}
                            </div>
                        </details>
                    ))}
                </div>
            </section>
            )}
            <SubpageGallery slug={gallerySlug} />
        </main>
    );
}
