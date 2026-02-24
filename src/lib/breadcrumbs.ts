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
