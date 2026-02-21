import { SERVICE_PAGES } from "@/lib/service-pages";
import ServiceLinkCard from "./ServiceLinkCard";
import CtaCard from "./CtaCard";

export default function UslugeSection() {
    return (
        <section id="usluge" className="scroll-mt-20 bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
            <div className="mx-auto max-w-[1280px]">
                <h2 className="text-left text-2xl font-bold text-zinc-900 sm:text-3xl md:text-center">
                    Naše usluge prijevoza i kamiona s kranom u Zagrebu
                </h2>
                <div className="mt-6 grid gap-6 sm:mt-8 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
                    {SERVICE_PAGES.map(({ slug, title, description, Icon }) => (
                        <ServiceLinkCard
                            key={slug}
                            href={`/${slug}`}
                            title={title}
                            text={description}
                            Icon={Icon}
                        />
                    ))}
                    <CtaCard />
                </div>
                <p className="mt-6 max-w-3xl text-left text-base text-zinc-600 sm:mt-8 md:mx-auto md:mt-10 md:text-center">
                    Usluge prijevoza i dizanja tereta pružamo na području cijelog Zagreba
                    uključujući Novi Zagreb, Dubravu, Sesvete, Trešnjevku, Črnomerec,
                    Maksimir te okolna mjesta Zaprešić, Velika Gorica i Samobor.
                </p>
            </div>
        </section>
    );
}
