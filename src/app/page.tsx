import type { Metadata } from "next";
import {
    HeroSection,
    UslugeSection,
    ZastoOdabratiSection,
    ONamaSection,
    SpecifikacijeSection,
    GallerySection,
    FaqSection,
    KontaktSection,
} from "@/components/home";

export const metadata: Metadata = {
    alternates: {
        canonical: "/",
    },
};

export default function Home() {
    return (
        <main>
            <HeroSection />
            <UslugeSection />
            <ZastoOdabratiSection />
            <ONamaSection />
            <SpecifikacijeSection />
            <GallerySection />
            <FaqSection />
            <KontaktSection />
        </main>
    );
}
