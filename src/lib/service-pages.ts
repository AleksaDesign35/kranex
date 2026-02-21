import { Package, Truck, MapPin, Zap, Armchair } from "lucide-react";

export const SERVICE_PAGES = [
    {
        slug: "prijevoz-gradevinskog-materijala-zagreb",
        title: "Prijevoz građevinskog materijala",
        description: "Profesionalni prijevoz građevinskog materijala u Zagrebu i okolici uključujući ciglu, blokove, paletirani materijal, građevinske elemente i opremu uz mogućnost utovara i istovara kranom direktno na lokaciji.",
        Icon: Package,
    },
    {
        slug: "kamion-s-kranom-zagreb",
        title: "Kamion s kranom",
        description: "Najam kamiona s kranom u Zagrebu za transport i dizanje tereta. Utovar, istovar i manipulacija materijalom direktno na gradilištu ili lokaciji dostave.",
        Icon: Truck,
    },
    {
        slug: "prijevoz-na-gradiliste-zagreb",
        title: "Prijevoz na gradilište",
        description: "Organiziramo prijevoz materijala i opreme direktno na gradilište u Zagrebu bez dodatne mehanizacije zahvaljujući integriranom kranu.",
        Icon: MapPin,
    },
    {
        slug: "hitni-prijevoz-zagreb",
        title: "Hitni prijevoz kranom",
        description: "Hitni prijevoz materijala i tereta uz mogućnost dolaska isti dan i fleksibilne termine prema dostupnosti.",
        Icon: Zap,
    },
    {
        slug: "prijevoz-namjestaja-i-dizanje-kranom-zagreb",
        title: "Prijevoz namještaja i dizanje kranom",
        description: "Siguran prijevoz namještaja uz dizanje kranom na više katove i teško dostupne lokacije. Idealno za selidbe i dostavu velikih komada namještaja.",
        Icon: Armchair,
    },
] as const;
