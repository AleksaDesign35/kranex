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
};

export function getBreadcrumbSchema(pathname: string) {
    if (pathname === "/") return null;
    const label = getBreadcrumbLabel(pathname);
    if (!label) return null;
    const elements: { "@type": string; position: number; name: string; item: string }[] = [
        { "@type": "ListItem", position: 1, name: "Početna", item: `${BASE_URL}/` },
        { "@type": "ListItem", position: 2, name: label, item: `${BASE_URL}${pathname}` },
    ];
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: elements,
    };
}
