import {
    HeroSection,
    UslugeSection,
    ZastoOdabratiSection,
    ONamaSection,
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
            <GallerySection />
            <FaqSection />
            <KontaktSection />
        </main>
    );
}
