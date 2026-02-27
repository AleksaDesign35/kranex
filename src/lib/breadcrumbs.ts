const BASE_URL = "https://kranexprijevozi.hr";

export function getBreadcrumbLabel(pathname: string): string | null {
    return BREADCRUMB_LABELS[pathname] ?? null;
}

export const BREADCRUMB_LABELS: Record<string, string> = {
    "/impressum": "Impressum",
    "/pravila-privatnosti": "Pravila privatnosti",
    "/prijevoz-gradevinskog-materijala-zagreb": "Prijevoz građevinskog materijala Zagreb",
    "/kamion-s-kranom-zagreb": "Kamion s kranom Zagreb",
    "/prijevoz-na-gradiliste-zagreb": "Prijevoz na gradilište Zagreb",
    "/hitni-prijevoz-zagreb": "Hitni prijevoz Zagreb",
    "/prijevoz-namjestaja-i-dizanje-kranom-zagreb": "Prijevoz namještaja i dizanje kranom Zagreb",
    "/prijevoz-kamionom-zagreb": "Prijevoz kamionom Zagreb",
    "/dostava-cigle-ytonga-kranom-zagreb": "Dostava cigle i Ytonga kranom Zagreb",
    "/istovar-materijala-na-gradilistu-zagreb": "Istovar materijala na gradilištu Zagreb",
    "/selidba-teskih-stvari-zagreb": "Selidba teških stvari Zagreb",
    "/kamion-odmah-zagreb": "Kamion odmah Zagreb",
    "/kamion-dizalica-zagreb": "Kamion dizalica Zagreb",
    "/dizanje-kroz-prozor-zagreb": "Dizanje kroz prozor Zagreb",
    "/dizanje-paleta-na-kat-zagreb": "Dizanje paleta na kat Zagreb",
    "/dizanje-preko-balkona-zagreb": "Dizanje preko balkona Zagreb",
    "/dostava-materijala-na-kat-zagreb": "Dostava materijala na kat Zagreb",
    "/istovar-bez-viljuskara-zagreb": "Istovar bez viljuškara Zagreb",
    "/dizanje-agregata-kompresora-zagreb": "Dizanje agregata i kompresora Zagreb",
    "/dizanje-klima-uredaja-vanjske-jedinice-zagreb": "Dizanje klima uređaja (vanjske jedinice) Zagreb",
    "/dizanje-toplinske-pumpe-zagreb": "Dizanje toplinske pumpe Zagreb",
    "/podizanje-sefova-zagreb": "Podizanje sefova Zagreb",
    "/prijevoz-industrijske-opreme-zagreb": "Prijevoz industrijske opreme Zagreb",
    "/prijevoz-strojeva-zagreb": "Prijevoz strojeva Zagreb",
    "/dostava-drvene-grade-kranom-zagreb": "Dostava drvene građe kranom Zagreb",
    "/dostava-izolacije-kranom-zagreb": "Dostava izolacije kranom Zagreb",
    "/prijevoz-armature-i-zeljeza-zagreb": "Prijevoz armature i željeza Zagreb",
    "/prijevoz-knauf-ploca-zagreb": "Prijevoz knauf ploča Zagreb",
    "/prijevoz-oplate-salunga-zagreb": "Prijevoz oplate (šalunga) Zagreb",
    "/brzi-istovar-zagreb": "Brzi istovar Zagreb",
    "/hitna-dostava-materijala-zagreb": "Hitna dostava materijala Zagreb",
    "/interventni-prijevoz-zagreb": "Interventni prijevoz Zagreb",
    "/logistika-gradilista-zagreb": "Logistika gradilišta Zagreb",
    "/opskrba-gradilista-materijalom-zagreb": "Opskrba gradilišta materijalom Zagreb",
    "/preuzimanje-robe-iz-skladista-zagreb": "Preuzimanje robe iz skladišta i dostava Zagreb",
    "/prijevoz-isti-dan-zagreb": "Prijevoz isti dan Zagreb",
    "/transport-paleta-robe-zagreb": "Transport paleta robe Zagreb",
    "/usluge": "Usluge",
    "/korisni-tekstovi": "Korisni tekstovi",
    "/korisni-tekstovi/americki-frizider-ne-stane": "Američki frižider ne stane",
    "/korisni-tekstovi/dizanje-crijepa-na-krov": "Dizanje krovne građe",
    "/korisni-tekstovi/dizanje-jacuzzija-na-krov": "Jacuzzi na krov",
    "/korisni-tekstovi/dizanje-kuhinjskog-otoka-zagreb": "Kuhinjski otoci od kamena",
    "/korisni-tekstovi/dizanje-masivnog-stola-na-kat": "Masivni stolovi (epoxy, puno drvo)",
    "/korisni-tekstovi/dizanje-pvc-prozora-na-kat": "Zatvaranje lođe – podizanje prozora",
    "/korisni-tekstovi/dizanje-staklene-stijene": "Staklene stijene",
    "/korisni-tekstovi/dizanje-toplinske-pumpe-blog": "Toplinska pumpa",
    "/korisni-tekstovi/dostava-plocica-na-kat-zagreb": "Dostava pločica bez lifta",
    "/korisni-tekstovi/dostava-solarnih-panela-na-krov": "Solarni paneli",
    "/korisni-tekstovi/dozvola-za-zatvaranje-ulice-zagreb": "Zatvaranje ulice Zagreb",
    "/korisni-tekstovi/istovar-zemlje-preko-ograde": "Ubacivanje zemlje preko ograde",
    "/korisni-tekstovi/izvlacenje-stroja-iz-blata": "Izvlačenje stroja iz blata",
    "/korisni-tekstovi/kako-unijeti-klavir-u-stan": "Kako unijeti klavir u stan",
    "/korisni-tekstovi/koliko-prostora-treba-kamion-s-kranom": "Koliko prostora treba kamion s kranom",
    "/korisni-tekstovi/kutna-garnitura-ne-stane-kroz-vrata": "Kutna garnitura ne stane kroz vrata",
    "/korisni-tekstovi/montaza-reklamnog-panoa-kranom": "Montaža reklamnog panoa kranom",
    "/korisni-tekstovi/nosenje-knaufa-na-kat": "Nošenje knaufa na 4. kat",
    "/korisni-tekstovi/odvoz-gradevinske-sute-zagreb": "Spuštanje šute s visokih katova",
    "/korisni-tekstovi/postavljanje-kontejnera-kranom": "Kontejner",
};

const IS_SERVICE_PAGE = new Set(
    Object.keys(BREADCRUMB_LABELS).filter(
        (p) => p !== "/impressum" && p !== "/pravila-privatnosti" && p !== "/usluge"
    )
);

export function isServicePage(pathname: string): boolean {
    return IS_SERVICE_PAGE.has(pathname);
}

const KORISNI_TEKSTOVI_LIST = "/korisni-tekstovi";

export function isKorisniTekstPage(pathname: string): boolean {
    return pathname.startsWith(KORISNI_TEKSTOVI_LIST + "/") && pathname !== KORISNI_TEKSTOVI_LIST;
}

export function getBreadcrumbSchema(pathname: string) {
    if (pathname === "/") return null;
    const label = getBreadcrumbLabel(pathname);
    if (!label) return null;
    const isService = isServicePage(pathname);
    const isKorisniTekst = isKorisniTekstPage(pathname);
    const elements: { "@type": string; position: number; name: string; item: string }[] =
        isService
            ? [
                { "@type": "ListItem", position: 1, name: "Početna", item: `${BASE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Usluge", item: `${BASE_URL}/usluge` },
                { "@type": "ListItem", position: 3, name: label, item: `${BASE_URL}${pathname}` },
            ]
            : isKorisniTekst
                ? [
                    { "@type": "ListItem", position: 1, name: "Početna", item: `${BASE_URL}/` },
                    { "@type": "ListItem", position: 2, name: "Korisni tekstovi", item: `${BASE_URL}${KORISNI_TEKSTOVI_LIST}` },
                    { "@type": "ListItem", position: 3, name: label, item: `${BASE_URL}${pathname}` },
                ]
                : [
                    { "@type": "ListItem", position: 1, name: "Početna", item: `${BASE_URL}/` },
                    { "@type": "ListItem", position: 2, name: label, item: `${BASE_URL}${pathname}` },
                ];
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: elements,
    };
}
