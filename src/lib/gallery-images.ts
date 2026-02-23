const BASE = "/images/new-images";

export const GALLERY_IMAGES = [
    { src: `${BASE}/kamion-kran-zagreb-dizanje-tereta-01.jpg`, alt: "Kamion s kranom Zagreb – dizanje tereta i prijevoz" },
    { src: `${BASE}/kamion-kran-zagreb-dizanje-tereta-02.jpg`, alt: "Kamionska dizalica Zagreb za utovar i istovar tereta" },
    { src: `${BASE}/kamion-kran-zagreb-dizanje-tereta-03.jpg`, alt: "Kamion s kranom – prijevoz tereta i dizanje u Zagrebu" },
    { src: `${BASE}/kamion-kran-zagreb-dizanje-tereta-04.jpg`, alt: "Dizanje tereta kranom Zagreb – Kranex prijevozi" },
    { src: `${BASE}/kamion-kran-zagreb-dizanje-tereta-05.jpg`, alt: "Prijevoz i dizanje građevinskog materijala kranom Zagreb" },
    { src: `${BASE}/kamion-kran-zagreb-dizanje-tereta-06.jpg`, alt: "Kamion s kranom za prijevoz tereta Zagreb i okolica" },
    { src: `${BASE}/prijevoz-gradevinskog-materijala-zagreb-01.jpg`, alt: "Prijevoz građevinskog materijala Zagreb kamionom s kranom" },
    { src: `${BASE}/prijevoz-gradevinskog-materijala-zagreb-02.jpg`, alt: "Dostava građevinskog materijala na gradilište Zagreb" },
    { src: `${BASE}/prijevoz-gradevinskog-materijala-zagreb-03.jpg`, alt: "Prijevoz cigle, blokova i građevinskog materijala Zagreb" },
    { src: `${BASE}/prijevoz-gradevinskog-materijala-zagreb-04.jpg`, alt: "Utovar građevinskog materijala kranom Zagreb" },
    { src: `${BASE}/prijevoz-gradevinskog-materijala-zagreb-05.jpg`, alt: "Kamion s kranom za građevinski materijal Zagreb" },
    { src: `${BASE}/prijevoz-gradevinskog-materijala-zagreb-06.jpg`, alt: "Prijevoz rasutog materijala i građevinskog materijala Zagreb" },
    { src: `${BASE}/prijevoz-na-gradiliste-zagreb-01.jpg`, alt: "Prijevoz na gradilište Zagreb – dostava materijala direktno na lokaciju" },
    { src: `${BASE}/prijevoz-na-gradiliste-zagreb-02.jpg`, alt: "Kamion s kranom za gradilište Zagreb i okolica" },
    { src: `${BASE}/prijevoz-na-gradiliste-zagreb-03.jpg`, alt: "Dostava materijala direktno na gradilište Zagreb" },
    { src: `${BASE}/prijevoz-na-gradiliste-zagreb-04.jpg`, alt: "Istovar građevinskog materijala kranom na gradilištu Zagreb" },
    { src: `${BASE}/prijevoz-namjestaja-dizanje-kranom-zagreb-01.jpg`, alt: "Prijevoz namještaja i dizanje kranom Zagreb" },
    { src: `${BASE}/prijevoz-namjestaja-dizanje-kranom-zagreb-02.jpg`, alt: "Dizanje namještaja kranom na kat Zagreb" },
    { src: `${BASE}/prijevoz-namjestaja-dizanje-kranom-zagreb-03.jpg`, alt: "Selidba namještaja kranom Zagreb – Kranex prijevozi" },
    { src: `${BASE}/prijevoz-namjestaja-dizanje-kranom-zagreb-04.jpg`, alt: "Dostava namještaja kranom kroz prozor Zagreb" },
    { src: `${BASE}/hitni-prijevoz-zagreb-01.jpg`, alt: "Hitni prijevoz tereta Zagreb – dolazak isti dan" },
    { src: `${BASE}/hitni-prijevoz-zagreb-02.jpg`, alt: "Brzi prijevoz građevinskog materijala Zagreb" },
    { src: `${BASE}/hitni-prijevoz-zagreb-03.jpg`, alt: "Hitni prijevoz kranom Zagreb – Kranex prijevozi" },
    { src: `${BASE}/hitni-prijevoz-zagreb-04.jpg`, alt: "Prijevoz isti dan Zagreb – kamion s kranom" },
    { src: `${BASE}/utovar-istovar-kranom-zagreb-01.jpg`, alt: "Utovar i istovar tereta kranom Zagreb" },
] as const;

export const SUBPAGE_IMAGES = {
    "kamion-s-kranom-zagreb": [
        { src: `${BASE}/kamion-kran-zagreb-dizanje-tereta-01.jpg`, alt: "Kamion s kranom Zagreb – dizanje tereta i prijevoz" },
        { src: `${BASE}/kamion-kran-zagreb-dizanje-tereta-03.jpg`, alt: "Kamion s kranom – prijevoz tereta i dizanje u Zagrebu" },
        { src: `${BASE}/utovar-istovar-kranom-zagreb-01.jpg`, alt: "Utovar i istovar tereta kranom Zagreb" },
    ],
    "prijevoz-gradevinskog-materijala-zagreb": [
        { src: `${BASE}/prijevoz-gradevinskog-materijala-zagreb-01.jpg`, alt: "Prijevoz građevinskog materijala Zagreb kamionom s kranom" },
        { src: `${BASE}/prijevoz-gradevinskog-materijala-zagreb-03.jpg`, alt: "Prijevoz cigle, blokova i građevinskog materijala Zagreb" },
        { src: `${BASE}/prijevoz-gradevinskog-materijala-zagreb-05.jpg`, alt: "Kamion s kranom za građevinski materijal Zagreb" },
    ],
    "prijevoz-na-gradiliste-zagreb": [
        { src: `${BASE}/prijevoz-na-gradiliste-zagreb-01.jpg`, alt: "Prijevoz na gradilište Zagreb – dostava materijala direktno na lokaciju" },
        { src: `${BASE}/prijevoz-na-gradiliste-zagreb-03.jpg`, alt: "Dostava materijala direktno na gradilište Zagreb" },
    ],
    "hitni-prijevoz-zagreb": [
        { src: `${BASE}/hitni-prijevoz-zagreb-01.jpg`, alt: "Hitni prijevoz tereta Zagreb – dolazak isti dan" },
        { src: `${BASE}/hitni-prijevoz-zagreb-03.jpg`, alt: "Hitni prijevoz kranom Zagreb – Kranex prijevozi" },
    ],
    "prijevoz-namjestaja-i-dizanje-kranom-zagreb": [
        { src: `${BASE}/prijevoz-namjestaja-dizanje-kranom-zagreb-01.jpg`, alt: "Prijevoz namještaja i dizanje kranom Zagreb" },
        { src: `${BASE}/prijevoz-namjestaja-dizanje-kranom-zagreb-03.jpg`, alt: "Selidba namještaja kranom Zagreb – Kranex prijevozi" },
    ],
    "prijevoz-kamionom-zagreb": [
        { src: `${BASE}/kamion-kran-zagreb-dizanje-tereta-01.jpg`, alt: "Prijevoz kamionom Zagreb – kamion s kranom za transport tereta" },
        { src: `${BASE}/prijevoz-gradevinskog-materijala-zagreb-01.jpg`, alt: "Kamionski prijevoz građevinskog materijala Zagreb" },
        { src: `${BASE}/prijevoz-na-gradiliste-zagreb-01.jpg`, alt: "Prijevoz kamionom na gradilište Zagreb" },
    ],
} as const;
