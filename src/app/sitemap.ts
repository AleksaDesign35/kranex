import type { MetadataRoute } from "next";

const BASE_URL = "https://kranexprijevozi.hr";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
        {
            url: `${BASE_URL}/prijevoz-gradevinskog-materijala-zagreb`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/kamion-s-kranom-zagreb`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/prijevoz-na-gradiliste-zagreb`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/hitni-prijevoz-zagreb`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/prijevoz-namjestaja-i-dizanje-kranom-zagreb`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/prijevoz-kamionom-zagreb`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/dostava-cigle-ytonga-kranom-zagreb`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/istovar-materijala-na-gradilistu-zagreb`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/selidba-teskih-stvari-zagreb`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/kamion-odmah-zagreb`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/kamion-dizalica-zagreb`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/impressum`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${BASE_URL}/pravila-privatnosti`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];
}
