const BASE_URL = "https://kranexprijevozi.hr";

export const BREADCRUMB_LABELS: Record<string, string> = {
    "/impressum": "Impressum",
    "/pravila-privatnosti": "Pravila privatnosti",
    "/prijevoz-gradevinskog-materijala-zagreb": "Prijevoz građevinskog materijala Zagreb",
    "/kamion-s-kranom-zagreb": "Kamion s kranom Zagreb",
    "/prijevoz-na-gradiliste-zagreb": "Prijevoz na gradilište Zagreb",
    "/hitni-prijevoz-zagreb": "Hitni prijevoz Zagreb",
    "/prijevoz-namjestaja-i-dizanje-kranom-zagreb": "Prijevoz namještaja i dizanje kranom Zagreb",
};

export function getBreadcrumbSchema(pathname: string) {
    if (pathname === "/") return null;
    const label = BREADCRUMB_LABELS[pathname];
    if (!label) return null;
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Početna",
                item: `${BASE_URL}/`,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: label,
                item: `${BASE_URL}${pathname}`,
            },
        ],
    };
}
