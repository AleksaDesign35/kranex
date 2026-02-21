import {
  Truck,
  Package,
  ArrowUp,
  ArrowLeftRight,
  ShoppingCart,
} from "lucide-react";

export const USLUGE = [
  {
    title: "Cestovni prijevoz robe",
    text: "Pouzdan prijevoz različitih vrsta tereta – od paletirane robe do građevinskog materijala.",
    Icon: Truck,
  },
  {
    title: "Prijevoz građevinskog materijala i rasutog tereta",
    text: "Prijevoz pijeska, šljunka, zemlje, betonskog i ostalog građevinskog materijala.",
    Icon: Package,
  },
  {
    title: "Dizanje tereta kranom",
    text: "Pružamo uslugu dizanja i manipulacije teretom pomoću kamionske dizalice – brzo, sigurno i precizno.",
    Icon: ArrowUp,
  },
  {
    title: "Utovar i istovar",
    text: "Izvodimo kompletne operacije utovara i istovara pomoću vlastitog krana, bez potrebe za dodatnom mehanizacijom.",
    Icon: ArrowLeftRight,
  },
  {
    title: "Prodaja građevinskog materijala",
    text: "U ponudi imamo širok asortiman osnovnih građevinskih materijala – pijesak, šljunak, tucanik i ostalo.",
    Icon: ShoppingCart,
  },
] as const;

export const PREDNOSTI = [
  "Brza i pouzdana usluga",
  "Sigurnost i preciznost pri radu",
  "Fleksibilnost u vrsti tereta",
  "Konkurentne cijene",
] as const;

export const KONTAKT = {
  telefon: "+385 (98) 426 326",
  telHref: "tel:+38598426326",
  whatsappHref: "https://wa.me/38598426326",
  email: "info@kranexprijevozi.hr",
  contactFormRecipient: "kranexprijevozi@gmail.com",
  adresa: "Ulica Hrvatskog proljeća 47, 10000 Zagreb",
  mapsHref: "https://maps.app.goo.gl/N4zqvyoZQcShjoKu9",
  instagramHref: "https://www.instagram.com/kranexprijevozi.hr/",
} as const;
