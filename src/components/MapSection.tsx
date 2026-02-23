import { KONTAKT } from "@/lib/constants";

const MAP_EMBED_URL = "https://www.google.com/maps?q=45.8285206,16.0489207&z=17&output=embed";

export default function MapSection() {
    return (
        <section className="bg-zinc-100" aria-label="Lokacija">
            <div className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8">
                <h2 className="mb-4 text-left text-xl font-bold text-zinc-900 md:text-center md:text-2xl">
                    Naša lokacija
                </h2>
                <p className="mb-4 text-left text-base text-zinc-600 md:text-center">
                    Kranex Prijevozi D.O.O.
                    <br />
                    Ul. Hrvatskog proljeća 47
                    <br />
                    Zagreb, Croatia
                </p>
                <div className="overflow-hidden rounded-xl border-2 border-zinc-200 shadow-sm">
                    <iframe
                        src={MAP_EMBED_URL}
                        width="100%"
                        height="320"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Kranex prijevozi – lokacija na karti"
                        className="block w-full"
                    />
                </div>
                <p className="mt-4 text-center">
                    <a
                        href={KONTAKT.mapsHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-medium text-primary hover:underline"
                    >
                        Otvori u Google Maps →
                    </a>
                </p>
            </div>
        </section>
    );
}
