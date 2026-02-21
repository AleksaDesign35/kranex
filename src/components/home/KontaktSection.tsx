import { Phone, Send, MapPin } from "lucide-react";
import { KONTAKT } from "@/lib/constants";
import InstagramIcon from "@/components/icons/InstagramIcon";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import EmailContactCard from "./EmailContactCard";

export default function KontaktSection() {
    return (
        <section id="kontakt" className="scroll-mt-20 bg-white px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1280px]">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-zinc-900 md:text-5xl">
                        Kontaktirajte nas
                    </h2>
                    <p className="text-xl text-zinc-600">
                        Spremni ste za početak vašeg projekta? Kontaktirajte nas za
                        besplatnu ponudu.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    <ContactCard
                        href={KONTAKT.telHref}
                        label="Telefon"
                        subtitle="Nazovite nas direktno"
                        value={KONTAKT.telefon}
                        Icon={Phone}
                    />
                    <ContactCard
                        href={KONTAKT.whatsappHref}
                        label="WhatsApp"
                        subtitle="Pošalite nam poruku na WhatsApp"
                        value={KONTAKT.telefon}
                        Icon={Send}
                        external
                    />
                    <EmailContactCard />
                    <ContactCard
                        href={KONTAKT.mapsHref}
                        label="Lokacija poslovnice"
                        subtitle="Pokrivamo cijelu Hrvatsku"
                        value={KONTAKT.adresa}
                        Icon={MapPin}
                        external
                    />
                    <ContactCard
                        href={KONTAKT.instagramHref}
                        label="Instagram"
                        subtitle="Pratite nas na Instagramu"
                        value="@kranexprijevozi.hr"
                        Icon={InstagramIcon}
                        external
                    />
                </div>
                <article className="mt-12 rounded-2xl bg-white p-8 shadow-lg md:p-12" aria-labelledby="contact-form-heading">
                    <h3 id="contact-form-heading" className="mb-2 text-3xl font-bold text-zinc-900">
                        Pošalji nam poruku
                    </h3>
                    <p className="mb-8 text-zinc-600">
                        Ispunite obrazac i kontaktirat ćemo vas uskoro s ponudom
                        prilagođenom vašim potrebama.
                    </p>
                    <ContactForm />
                </article>
            </div>
        </section>
    );
}
