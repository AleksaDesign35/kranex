import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen bg-zinc-900 ">
            <div className="absolute inset-0 linear-gradient-to-r from-primary to-[#c9451a]">
                <Image
                    src="/images/hero-truck.webp"
                    alt=""
                    fill
                    className="object-cover max-md:object-[75%_center]"
                    sizes="100vw"
                    priority
                />
                <div className="absolute inset-0 bg-black/90 max-md:bg-gradient-to-r max-md:from-black/80 max-md:via-black/60 max-md:to-transparent" />
            </div>
            <div className="relative flex min-h-screen flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-[1080px] text-left md:text-center">
                    <h1 className="text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl leading-relaxed md:leading-normal">
                        Prijevoz tereta i kamion s kranom Zagreb – Transport i dizanje tereta
                    </h1>
                    <p className="max-w-4xl mx-auto  text-white text-sm md:text-lg mt-4 leading-relaxed md:leading-normal">Usluge kamiona s kranom i prijevoza tereta pružamo na području Zagreba i okolice za građevinske firme, poslovne korisnike i privatne klijente. Specijalizirani smo za prijevoz građevinskog materijala, prijevoz namještaja i dizanje tereta kranom direktno na lokaciji.</p>
                    <Link
                        href="/#kontakt"
                        className="mt-8 inline-flex items-center justify-center rounded-lg border-2 border-primary bg-transparent px-6 py-3 text-base font-semibold text-white transition hover:bg-primary/10"
                    >
                        Kontaktirajte nas
                    </Link>
                </div>
            </div>
        </section>
    );
}
