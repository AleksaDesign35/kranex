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
    "dostava-cigle-ytonga-kranom-zagreb": [
        { src: `${BASE}/prijevoz-gradevinskog-materijala-zagreb-01.jpg`, alt: "Dostava cigle i Ytonga kranom Zagreb" },
        { src: `${BASE}/prijevoz-gradevinskog-materijala-zagreb-03.jpg`, alt: "Prijevoz cigle i blokova kranom Zagreb" },
        { src: `${BASE}/kamion-kran-zagreb-dizanje-tereta-01.jpg`, alt: "Kamion s kranom za dostavu cigle Zagreb" },
    ],
    "istovar-materijala-na-gradilistu-zagreb": [
        { src: `${BASE}/prijevoz-na-gradiliste-zagreb-01.jpg`, alt: "Istovar materijala na gradilištu Zagreb" },
        { src: `${BASE}/prijevoz-na-gradiliste-zagreb-04.jpg`, alt: "Istovar kranom na gradilištu Zagreb" },
        { src: `${BASE}/utovar-istovar-kranom-zagreb-01.jpg`, alt: "Utovar i istovar kranom Zagreb" },
    ],
    "selidba-teskih-stvari-zagreb": [
        { src: `${BASE}/prijevoz-namjestaja-dizanje-kranom-zagreb-01.jpg`, alt: "Selidba teških stvari Zagreb – dizanje kranom" },
        { src: `${BASE}/prijevoz-namjestaja-dizanje-kranom-zagreb-03.jpg`, alt: "Prijevoz teških predmeta kranom Zagreb" },
        { src: `${BASE}/kamion-kran-zagreb-dizanje-tereta-01.jpg`, alt: "Kamion s kranom za selidbu Zagreb" },
    ],
    "kamion-odmah-zagreb": [
        { src: `${BASE}/hitni-prijevoz-zagreb-01.jpg`, alt: "Kamion odmah Zagreb – brzi prijevoz" },
        { src: `${BASE}/kamion-kran-zagreb-dizanje-tereta-01.jpg`, alt: "Kamion s kranom – dolazak isti dan" },
        { src: `${BASE}/utovar-istovar-kranom-zagreb-01.jpg`, alt: "Brzi utovar i istovar kranom Zagreb" },
    ],
    "kamion-dizalica-zagreb": [
        { src: `${BASE}/kamion-kran-zagreb-dizanje-tereta-01.jpg`, alt: "Kamion dizalica Zagreb" },
        { src: `${BASE}/utovar-istovar-kranom-zagreb-01.jpg`, alt: "Kamionska dizalica – utovar i istovar" },
        { src: `${BASE}/prijevoz-na-gradiliste-zagreb-01.jpg`, alt: "Usluga dizalice Zagreb" },
    ],
    "dizanje-kroz-prozor-zagreb": [
        { src: `${BASE}/prijevoz-namjestaja-dizanje-kranom-zagreb-01.jpg`, alt: "Dizanje kroz prozor Zagreb" },
        { src: `${BASE}/prijevoz-namjestaja-dizanje-kranom-zagreb-04.jpg`, alt: "Dostava namještaja kranom kroz prozor Zagreb" },
        { src: `${BASE}/kamion-kran-zagreb-dizanje-tereta-01.jpg`, alt: "Kamion s kranom za dizanje kroz prozor" },
    ],
    "dizanje-paleta-na-kat-zagreb": [
        { src: `${BASE}/prijevoz-na-gradiliste-zagreb-01.jpg`, alt: "Dizanje paleta na kat Zagreb" },
        { src: `${BASE}/prijevoz-na-gradiliste-zagreb-04.jpg`, alt: "Dizanje paleta kranom na gradilištu" },
        { src: `${BASE}/utovar-istovar-kranom-zagreb-01.jpg`, alt: "Utovar i istovar paleta kranom Zagreb" },
    ],
    "dizanje-preko-balkona-zagreb": [
        { src: `${BASE}/prijevoz-namjestaja-dizanje-kranom-zagreb-01.jpg`, alt: "Dizanje preko balkona Zagreb" },
        { src: `${BASE}/prijevoz-namjestaja-dizanje-kranom-zagreb-04.jpg`, alt: "Podizanje namještaja preko balkona" },
        { src: `${BASE}/kamion-kran-zagreb-dizanje-tereta-01.jpg`, alt: "Kamion s kranom za dizanje preko balkona" },
    ],
    "dostava-materijala-na-kat-zagreb": [
        { src: `${BASE}/prijevoz-na-gradiliste-zagreb-01.jpg`, alt: "Dostava materijala na kat Zagreb" },
        { src: `${BASE}/prijevoz-na-gradiliste-zagreb-04.jpg`, alt: "Dizanje materijala na kat kranom" },
        { src: `${BASE}/utovar-istovar-kranom-zagreb-01.jpg`, alt: "Utovar i istovar materijala kranom" },
    ],
    "istovar-bez-viljuskara-zagreb": [
        { src: `${BASE}/utovar-istovar-kranom-zagreb-01.jpg`, alt: "Istovar bez viljuškara Zagreb" },
        { src: `${BASE}/prijevoz-na-gradiliste-zagreb-04.jpg`, alt: "Istovar kranom na gradilištu" },
        { src: `${BASE}/kamion-kran-zagreb-dizanje-tereta-01.jpg`, alt: "Kamion s kranom za istovar" },
    ],
    "dizanje-agregata-kompresora-zagreb": [
        { src: `${BASE}/kamion-kran-zagreb-dizanje-tereta-01.jpg`, alt: "Dizanje agregata i kompresora Zagreb" },
        { src: `${BASE}/utovar-istovar-kranom-zagreb-01.jpg`, alt: "Utovar teške opreme kranom" },
        { src: `${BASE}/prijevoz-na-gradiliste-zagreb-01.jpg`, alt: "Prijevoz i podizanje opreme" },
    ],
    "dizanje-klima-uredaja-vanjske-jedinice-zagreb": [
        { src: `${BASE}/prijevoz-namjestaja-dizanje-kranom-zagreb-01.jpg`, alt: "Dizanje vanjske jedinice klime Zagreb" },
        { src: `${BASE}/kamion-kran-zagreb-dizanje-tereta-01.jpg`, alt: "Podizanje klima uređaja kranom" },
        { src: `${BASE}/utovar-istovar-kranom-zagreb-01.jpg`, alt: "Transport klima opreme" },
    ],
    "dizanje-toplinske-pumpe-zagreb": [
        { src: `${BASE}/prijevoz-namjestaja-dizanje-kranom-zagreb-01.jpg`, alt: "Dizanje toplinske pumpe Zagreb" },
        { src: `${BASE}/kamion-kran-zagreb-dizanje-tereta-01.jpg`, alt: "Podizanje toplinske pumpe kranom" },
        { src: `${BASE}/utovar-istovar-kranom-zagreb-01.jpg`, alt: "Transport HVAC uređaja" },
    ],
    "podizanje-sefova-zagreb": [
        { src: `${BASE}/prijevoz-namjestaja-dizanje-kranom-zagreb-01.jpg`, alt: "Podizanje sefova Zagreb" },
        { src: `${BASE}/prijevoz-namjestaja-dizanje-kranom-zagreb-03.jpg`, alt: "Selidba sefova kranom" },
        { src: `${BASE}/kamion-kran-zagreb-dizanje-tereta-01.jpg`, alt: "Kamion s kranom za podizanje sefova" },
    ],
    "prijevoz-industrijske-opreme-zagreb": [
        { src: `${BASE}/kamion-kran-zagreb-dizanje-tereta-01.jpg`, alt: "Prijevoz industrijske opreme Zagreb" },
        { src: `${BASE}/utovar-istovar-kranom-zagreb-01.jpg`, alt: "Utovar i istovar opreme dizalicom" },
        { src: `${BASE}/prijevoz-na-gradiliste-zagreb-01.jpg`, alt: "Transport industrijske opreme" },
    ],
    "prijevoz-strojeva-zagreb": [
        { src: `${BASE}/utovar-istovar-kranom-zagreb-01.jpg`, alt: "Prijevoz strojeva Zagreb" },
        { src: `${BASE}/kamion-kran-zagreb-dizanje-tereta-01.jpg`, alt: "Utovar strojeva dizalicom" },
        { src: `${BASE}/prijevoz-gradevinskog-materijala-zagreb-01.jpg`, alt: "Industrijski prijevoz strojeva" },
    ],
    "dostava-drvene-grade-kranom-zagreb": [
        { src: `${BASE}/prijevoz-gradevinskog-materijala-zagreb-01.jpg`, alt: "Dostava drvene građe kranom Zagreb" },
        { src: `${BASE}/prijevoz-na-gradiliste-zagreb-01.jpg`, alt: "Prijevoz drvene građe na gradilište" },
        { src: `${BASE}/utovar-istovar-kranom-zagreb-01.jpg`, alt: "Istovar drvene građe kranom" },
    ],
    "dostava-izolacije-kranom-zagreb": [
        { src: `${BASE}/prijevoz-gradevinskog-materijala-zagreb-01.jpg`, alt: "Dostava izolacije kranom Zagreb" },
        { src: `${BASE}/utovar-istovar-kranom-zagreb-01.jpg`, alt: "Istovar izolacije kranom" },
        { src: `${BASE}/kamion-kran-zagreb-dizanje-tereta-01.jpg`, alt: "Prijevoz izolacije kamionom s kranom" },
    ],
    "prijevoz-armature-i-zeljeza-zagreb": [
        { src: `${BASE}/prijevoz-gradevinskog-materijala-zagreb-01.jpg`, alt: "Prijevoz armature i željeza Zagreb" },
        { src: `${BASE}/prijevoz-na-gradiliste-zagreb-04.jpg`, alt: "Istovar armature kranom" },
        { src: `${BASE}/utovar-istovar-kranom-zagreb-01.jpg`, alt: "Transport armature kranom" },
    ],
    "prijevoz-knauf-ploca-zagreb": [
        { src: `${BASE}/prijevoz-gradevinskog-materijala-zagreb-01.jpg`, alt: "Prijevoz knauf ploča Zagreb" },
        { src: `${BASE}/prijevoz-na-gradiliste-zagreb-01.jpg`, alt: "Dostava knauf ploča na gradilište" },
        { src: `${BASE}/utovar-istovar-kranom-zagreb-01.jpg`, alt: "Istovar knaufa kranom" },
    ],
    "prijevoz-oplate-salunga-zagreb": [
        { src: `${BASE}/prijevoz-gradevinskog-materijala-zagreb-01.jpg`, alt: "Prijevoz oplate Zagreb" },
        { src: `${BASE}/prijevoz-na-gradiliste-zagreb-01.jpg`, alt: "Transport oplate na gradilište" },
        { src: `${BASE}/utovar-istovar-kranom-zagreb-01.jpg`, alt: "Istovar oplate kranom" },
    ],
    "brzi-istovar-zagreb": [
        { src: `${BASE}/utovar-istovar-kranom-zagreb-01.jpg`, alt: "Brzi istovar Zagreb" },
        { src: `${BASE}/prijevoz-na-gradiliste-zagreb-04.jpg`, alt: "Istovar kranom na gradilištu" },
        { src: `${BASE}/kamion-kran-zagreb-dizanje-tereta-01.jpg`, alt: "Istovar kranom" },
    ],
    "hitna-dostava-materijala-zagreb": [
        { src: `${BASE}/hitni-prijevoz-zagreb-01.jpg`, alt: "Hitna dostava materijala Zagreb" },
        { src: `${BASE}/prijevoz-gradevinskog-materijala-zagreb-01.jpg`, alt: "Hitan prijevoz građevinskog materijala" },
        { src: `${BASE}/prijevoz-na-gradiliste-zagreb-01.jpg`, alt: "Dostava isti dan" },
    ],
    "interventni-prijevoz-zagreb": [
        { src: `${BASE}/hitni-prijevoz-zagreb-01.jpg`, alt: "Interventni prijevoz Zagreb" },
        { src: `${BASE}/kamion-kran-zagreb-dizanje-tereta-01.jpg`, alt: "Brzi prijevoz kranom" },
        { src: `${BASE}/utovar-istovar-kranom-zagreb-01.jpg`, alt: "Hitni transport" },
    ],
    "logistika-gradilista-zagreb": [
        { src: `${BASE}/prijevoz-na-gradiliste-zagreb-01.jpg`, alt: "Logistika gradilišta Zagreb" },
        { src: `${BASE}/prijevoz-gradevinskog-materijala-zagreb-01.jpg`, alt: "Opskrba gradilišta" },
        { src: `${BASE}/utovar-istovar-kranom-zagreb-01.jpg`, alt: "Doprema materijala" },
    ],
    "opskrba-gradilista-materijalom-zagreb": [
        { src: `${BASE}/prijevoz-na-gradiliste-zagreb-01.jpg`, alt: "Opskrba gradilišta materijalom Zagreb" },
        { src: `${BASE}/prijevoz-gradevinskog-materijala-zagreb-01.jpg`, alt: "Redovne dostave" },
        { src: `${BASE}/utovar-istovar-kranom-zagreb-01.jpg`, alt: "Fazna doprema" },
    ],
    "preuzimanje-robe-iz-skladista-zagreb": [
        { src: `${BASE}/prijevoz-na-gradiliste-zagreb-01.jpg`, alt: "Preuzimanje robe iz skladišta Zagreb" },
        { src: `${BASE}/utovar-istovar-kranom-zagreb-01.jpg`, alt: "Dostava na gradilište" },
        { src: `${BASE}/kamion-kran-zagreb-dizanje-tereta-01.jpg`, alt: "Prijevoz paletirane robe" },
    ],
    "prijevoz-isti-dan-zagreb": [
        { src: `${BASE}/hitni-prijevoz-zagreb-01.jpg`, alt: "Prijevoz isti dan Zagreb" },
        { src: `${BASE}/kamion-kran-zagreb-dizanje-tereta-01.jpg`, alt: "Brz prijevoz" },
        { src: `${BASE}/utovar-istovar-kranom-zagreb-01.jpg`, alt: "Dostava isti dan" },
    ],
    "transport-paleta-robe-zagreb": [
        { src: `${BASE}/prijevoz-na-gradiliste-zagreb-01.jpg`, alt: "Transport paleta Zagreb" },
        { src: `${BASE}/prijevoz-na-gradiliste-zagreb-04.jpg`, alt: "Dostava paletirane robe" },
        { src: `${BASE}/utovar-istovar-kranom-zagreb-01.jpg`, alt: "Istovar paleta kranom" },
    ],
} as const;

export type SubpageGallerySlug = keyof typeof SUBPAGE_IMAGES;
