import { BREADCRUMB_LABELS } from "@/lib/breadcrumbs";

const EXCLUDE_FROM_USLUGE = ["/impressum", "/pravila-privatnosti", "/usluge"];

const CATEGORY_ORDER = [
    "Prijevoz i dostava materijala",
    "Dizanje i istovar",
    "Hitne i brze usluge",
    "Specijalizirani prijevoz i dizanje",
    "Logistika i opskrba",
] as const;

const SLUG_TO_CATEGORY: Record<string, (typeof CATEGORY_ORDER)[number]> = {
    "prijevoz-gradevinskog-materijala-zagreb": "Prijevoz i dostava materijala",
    "prijevoz-na-gradiliste-zagreb": "Prijevoz i dostava materijala",
    "dostava-cigle-ytonga-kranom-zagreb": "Prijevoz i dostava materijala",
    "dostava-drvene-grade-kranom-zagreb": "Prijevoz i dostava materijala",
    "dostava-izolacije-kranom-zagreb": "Prijevoz i dostava materijala",
    "prijevoz-armature-i-zeljeza-zagreb": "Prijevoz i dostava materijala",
    "prijevoz-knauf-ploca-zagreb": "Prijevoz i dostava materijala",
    "prijevoz-oplate-salunga-zagreb": "Prijevoz i dostava materijala",
    "prijevoz-kamionom-zagreb": "Prijevoz i dostava materijala",
    "kamion-s-kranom-zagreb": "Dizanje i istovar",
    "istovar-materijala-na-gradilistu-zagreb": "Dizanje i istovar",
    "istovar-bez-viljuskara-zagreb": "Dizanje i istovar",
    "dizanje-paleta-na-kat-zagreb": "Dizanje i istovar",
    "dizanje-kroz-prozor-zagreb": "Dizanje i istovar",
    "dizanje-preko-balkona-zagreb": "Dizanje i istovar",
    "dostava-materijala-na-kat-zagreb": "Dizanje i istovar",
    "brzi-istovar-zagreb": "Dizanje i istovar",
    "hitni-prijevoz-zagreb": "Hitne i brze usluge",
    "kamion-odmah-zagreb": "Hitne i brze usluge",
    "hitna-dostava-materijala-zagreb": "Hitne i brze usluge",
    "interventni-prijevoz-zagreb": "Hitne i brze usluge",
    "prijevoz-isti-dan-zagreb": "Hitne i brze usluge",
    "prijevoz-namjestaja-i-dizanje-kranom-zagreb": "Specijalizirani prijevoz i dizanje",
    "selidba-teskih-stvari-zagreb": "Specijalizirani prijevoz i dizanje",
    "dizanje-agregata-kompresora-zagreb": "Specijalizirani prijevoz i dizanje",
    "dizanje-klima-uredaja-vanjske-jedinice-zagreb": "Specijalizirani prijevoz i dizanje",
    "dizanje-toplinske-pumpe-zagreb": "Specijalizirani prijevoz i dizanje",
    "podizanje-sefova-zagreb": "Specijalizirani prijevoz i dizanje",
    "prijevoz-industrijske-opreme-zagreb": "Specijalizirani prijevoz i dizanje",
    "prijevoz-strojeva-zagreb": "Specijalizirani prijevoz i dizanje",
    "kamion-dizalica-zagreb": "Specijalizirani prijevoz i dizanje",
    "logistika-gradilista-zagreb": "Logistika i opskrba",
    "opskrba-gradilista-materijalom-zagreb": "Logistika i opskrba",
    "preuzimanje-robe-iz-skladista-zagreb": "Logistika i opskrba",
    "transport-paleta-robe-zagreb": "Logistika i opskrba",
};

export type UslugaHubItem = { slug: string; label: string };
export type UslugaHubGroup = { category: string; items: UslugaHubItem[] };

export function getUslugeHubGroups(): UslugaHubGroup[] {
    const byCategory: Record<string, UslugaHubItem[]> = {};
    for (const path of Object.keys(BREADCRUMB_LABELS)) {
        if (EXCLUDE_FROM_USLUGE.includes(path)) continue;
        const slug = path.slice(1);
        const label = BREADCRUMB_LABELS[path];
        const category = SLUG_TO_CATEGORY[slug] ?? "Logistika i opskrba";
        if (!byCategory[category]) byCategory[category] = [];
        byCategory[category].push({ slug, label });
    }
    return CATEGORY_ORDER.map((cat) => ({
        category: cat,
        items: byCategory[cat] ?? [],
    })).filter((g) => g.items.length > 0);
}
