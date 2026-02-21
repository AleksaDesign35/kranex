import { KONTAKT } from "./constants";

export function getOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Kranex prijevozi",
        description: "Kamion s kranom Zagreb za prijevoz tereta, građevinskog materijala i dizanje tereta. Brz dolazak, siguran transport i fleksibilni termini.",
        telephone: KONTAKT.telefon,
        email: KONTAKT.email,
        address: {
            "@type": "PostalAddress",
            streetAddress: "Čulinečka cesta 246a",
            addressLocality: "Zagreb",
            postalCode: "10000",
            addressCountry: "HR",
        },
        url: "https://kranexprijevozi.hr",
        areaServed: {
            "@type": "GeoCircle",
            geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 45.815,
                longitude: 15.9819,
            },
            geoRadius: "50000",
        },
        priceRange: "€€",
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "07:00",
            closes: "18:00",
        },
    };
}
