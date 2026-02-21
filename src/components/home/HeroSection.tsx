import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen bg-zinc-900 ">
            <div className="absolute inset-0 linear-gradient-to-r from-primary to-[#c9451a]">
                <Image
                    src="/images/kamion-kran-zagreb-prijevoz-tereta.webp"
                    alt="Kamion s kranom Zagreb – prijevoz tereta i dizanje tereta"
                    fill
                    className="object-cover max-md:object-[75%_center]"
                    sizes="100vw"
                    priority
                />
                <div className="absolute inset-0 bg-black/70 max-md:bg-gradient-to-r max-md:from-black/80 max-md:via-black/60 max-md:to-transparent" />
            </div>
            <div className="relative flex min-h-screen flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-[1080px] text-left md:text-center">
                    <h1 className="text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl leading-relaxed">
                        Prijevoz tereta i kamion s kranom Zagreb – Transport i dizanje tereta
                    </h1>
                    <p className="max-w-4xl text-base text-white mt-4 leading-relaxed md:mx-auto md:text-center">Usluge kamiona s kranom i prijevoza tereta pružamo na području Zagreba i okolice za građevinske firme, poslovne korisnike i privatne klijente. Specijalizirani smo za prijevoz građevinskog materijala, prijevoz namještaja i dizanje tereta kranom direktno na lokaciji.</p>
                    <Link
                        href="/#kontakt"
                        className="mt-8 inline-flex w-fit items-center justify-center gap-2 rounded-full border-2 border-primary bg-transparent px-6 py-3 text-base font-semibold text-white transition hover:bg-primary/10 md:mx-auto"
                    >
                        <Phone className="h-5 w-5" strokeWidth={2} aria-hidden />
                        Kontaktirajte nas
                    </Link>
                </div>
            </div>
        </section>
    );
}
