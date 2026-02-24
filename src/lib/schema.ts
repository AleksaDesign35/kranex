import { KONTAKT } from "./constants";

const BASE_URL = "https://kranexprijevozi.hr";

export function getOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${BASE_URL}/#organization`,
        name: "Kranex Prijevozi D.O.O.",
        description: "Kamion s kranom Zagreb za prijevoz tereta, građevinskog materijala i dizanje tereta. Brz dolazak, siguran transport i fleksibilni termini.",
        telephone: KONTAKT.telefon,
        email: KONTAKT.email,
        url: BASE_URL,
        image: `${BASE_URL}/images/logo.svg`,
        address: {
            "@type": "PostalAddress",
            streetAddress: "Ulica Hrvatskog proljeća 47",
            addressLocality: "Zagreb",
            postalCode: "10000",
            addressCountry: "HR",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 45.815,
            longitude: 15.9819,
        },
        areaServed: {
            "@type": "GeoCircle",
            geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 45.815,
                longitude: 15.9819,
            },
            geoRadius: 50000,
        },
        priceRange: "€€",
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "73",
            bestRating: "5",
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "07:00",
                closes: "17:00",
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Saturday"],
                opens: "07:00",
                closes: "14:00",
            },
        ],
        sameAs: [KONTAKT.instagramHref],
    };
}

export function getWebSiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "Kranex prijevozi – kamion s kranom Zagreb",
        description: "Prijevoz tereta i dizanje kranom u Zagrebu. Građevinski materijal, namještaj, hitni prijevoz i logistika gradilišta.",
        publisher: { "@id": `${BASE_URL}/#organization` },
        inLanguage: "hr-HR",
    };
}

export function getSchemaGraph() {
    return {
        "@context": "https://schema.org",
        "@graph": [getOrganizationSchema(), getWebSiteSchema()],
    };
}
