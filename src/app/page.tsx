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
