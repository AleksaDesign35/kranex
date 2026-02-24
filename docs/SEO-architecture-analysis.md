# SEO arhitektura – analiza projekta Kranex

---

## 1. Hijerarhijski sitemap

```
/ (Početna)
├── /usluge (Hub – pregled usluga)
│   ├── [Prijevoz i dostava materijala]
│   │   ├── /prijevoz-gradevinskog-materijala-zagreb
│   │   ├── /prijevoz-na-gradiliste-zagreb
│   │   ├── /dostava-cigle-ytonga-kranom-zagreb
│   │   ├── /dostava-drvene-grade-kranom-zagreb
│   │   ├── /dostava-izolacije-kranom-zagreb
│   │   ├── /prijevoz-armature-i-zeljeza-zagreb
│   │   ├── /prijevoz-knauf-ploca-zagreb
│   │   ├── /prijevoz-oplate-salunga-zagreb
│   │   └── /prijevoz-kamionom-zagreb
│   ├── [Dizanje i istovar]
│   │   ├── /kamion-s-kranom-zagreb
│   │   ├── /istovar-materijala-na-gradilistu-zagreb
│   │   ├── /istovar-bez-viljuskara-zagreb
│   │   ├── /dizanje-paleta-na-kat-zagreb
│   │   ├── /dizanje-kroz-prozor-zagreb
│   │   ├── /dizanje-preko-balkona-zagreb
│   │   ├── /dostava-materijala-na-kat-zagreb
│   │   └── /brzi-istovar-zagreb
│   ├── [Hitne i brze usluge]
│   │   ├── /hitni-prijevoz-zagreb
│   │   ├── /kamion-odmah-zagreb
│   │   ├── /hitna-dostava-materijala-zagreb
│   │   ├── /interventni-prijevoz-zagreb
│   │   └── /prijevoz-isti-dan-zagreb
│   ├── [Specijalizirani prijevoz i dizanje]
│   │   ├── /prijevoz-namjestaja-i-dizanje-kranom-zagreb
│   │   ├── /selidba-teskih-stvari-zagreb
│   │   ├── /dizanje-agregata-kompresora-zagreb
│   │   ├── /dizanje-klima-uredaja-vanjske-jedinice-zagreb
│   │   ├── /dizanje-toplinske-pumpe-zagreb
│   │   ├── /podizanje-sefova-zagreb
│   │   ├── /prijevoz-industrijske-opreme-zagreb
│   │   ├── /prijevoz-strojeva-zagreb
│   │   └── /kamion-dizalica-zagreb
│   └── [Logistika i opskrba]
│       ├── /logistika-gradilista-zagreb
│       ├── /opskrba-gradilista-materijalom-zagreb
│       ├── /preuzimanje-robe-iz-skladista-zagreb
│       └── /transport-paleta-robe-zagreb
├── /impressum
└── /pravila-privatnosti
```

**Napomena:** Home dodatno linka na 6 usluga (sekcija „Naše usluge”): prijevoz-kamionom, prijevoz-gradevinskog-materijala, kamion-s-kranom, prijevoz-na-gradiliste, hitni-prijevoz, prijevoz-namjestaja-i-dizanje-kranom. Footer linka na /usluge, istih 6 usluga i /impressum.

---

## 2. Internal linking map

### 2.1 Globalni izvori (na svakoj stranici)

| Izvor | Ciljne stranice |
|--------|------------------|
| Header | /, /#usluge ili /usluge, /#o-nama, /#specifikacije, /#galerija, /#kontakt |
| Footer | /, /usluge, /kamion-s-kranom-zagreb, /prijevoz-kamionom-zagreb, /prijevoz-gradevinskog-materijala-zagreb, /prijevoz-na-gradiliste-zagreb, /hitni-prijevoz-zagreb, /prijevoz-namjestaja-i-dizanje-kranom-zagreb, /impressum |
| Breadcrumbs | /, /usluge (samo na stranicama usluga) |
| ServicePageLayout (CTA) | /#kontakt |

### 2.2 Homepage

| Stranica | Linkovi prema |
|----------|----------------|
| / (UslugeSection) | /prijevoz-kamionom-zagreb, /prijevoz-gradevinskog-materijala-zagreb, /kamion-s-kranom-zagreb, /prijevoz-na-gradiliste-zagreb, /hitni-prijevoz-zagreb, /prijevoz-namjestaja-i-dizanje-kranom-zagreb |

### 2.3 Hub

| Stranica | Linkovi prema |
|----------|----------------|
| /usluge | Sve 36 uslužnih stranica (grupirano po kategorijama), /#kontakt |

### 2.4 Sadržajni linkovi (page → page)

| Izvor (stranica) | Ciljne stranice |
|-------------------|------------------|
| /brzi-istovar-zagreb | istovar-materijala-na-gradilistu-zagreb, istovar-bez-viljuskara-zagreb, kamion-s-kranom-zagreb, prijevoz-na-gradiliste-zagreb, hitni-prijevoz-zagreb |
| /transport-paleta-robe-zagreb | prijevoz-na-gradiliste-zagreb, prijevoz-kamionom-zagreb, istovar-bez-viljuskara-zagreb, dizanje-paleta-na-kat-zagreb, preuzimanje-robe-iz-skladista-zagreb |
| /prijevoz-isti-dan-zagreb | hitni-prijevoz-zagreb, kamion-s-kranom-zagreb, prijevoz-kamionom-zagreb, interventni-prijevoz-zagreb, kamion-odmah-zagreb |
| /preuzimanje-robe-iz-skladista-zagreb | prijevoz-kamionom-zagreb, hitni-prijevoz-zagreb, prijevoz-na-gradiliste-zagreb, kamion-s-kranom-zagreb, istovar-bez-viljuskara-zagreb, kamion-odmah-zagreb |
| /opskrba-gradilista-materijalom-zagreb | prijevoz-gradevinskog-materijala-zagreb, prijevoz-na-gradiliste-zagreb, logistika-gradilista-zagreb, dostava-materijala-na-kat-zagreb, hitni-prijevoz-zagreb, / (2×) |
| /logistika-gradilista-zagreb | prijevoz-na-gradiliste-zagreb, istovar-materijala-na-gradilistu-zagreb, prijevoz-gradevinskog-materijala-zagreb, kamion-s-kranom-zagreb, hitni-prijevoz-zagreb |
| /impressum | kamion-s-kranom-zagreb, prijevoz-gradevinskog-materijala-zagreb, istovar-materijala-na-gradilistu-zagreb |

**Broj ulaznih linkova (sadržaj + global) po stranici (sažeto):**

- **Visoki (7+):** /kamion-s-kranom-zagreb, /prijevoz-kamionom-zagreb, /istovar-materijala-na-gradilistu-zagreb, /istovar-bez-viljuskara-zagreb, /prijevoz-na-gradiliste-zagreb, /hitni-prijevoz-zagreb
- **Srednji (3–6):** /prijevoz-gradevinskog-materijala-zagreb, /brzi-istovar-zagreb, /dizanje-paleta-na-kat-zagreb, /preuzimanje-robe-iz-skladista-zagreb, /logistika-gradilista-zagreb, /opskrba-gradilista-materijalom-zagreb, /prijevoz-isti-dan-zagreb, /transport-paleta-robe-zagreb, /interventni-prijevoz-zagreb, /kamion-odmah-zagreb, /dostava-materijala-na-kat-zagreb
- **Niski (samo hub + eventualno 1):** ostalih 24 uslužne stranice (samo /usluge + eventualno jedan sadržajni link)

---

## 3. Topical cluster map (grupiranje po temi)

| Klaster (tema) | Stranice u klasteru |
|----------------|----------------------|
| **Prijevoz i dostava materijala** | prijevoz-gradevinskog-materijala-zagreb, prijevoz-na-gradiliste-zagreb, dostava-cigle-ytonga-kranom-zagreb, dostava-drvene-grade-kranom-zagreb, dostava-izolacije-kranom-zagreb, prijevoz-armature-i-zeljeza-zagreb, prijevoz-knauf-ploca-zagreb, prijevoz-oplate-salunga-zagreb, prijevoz-kamionom-zagreb |
| **Dizanje i istovar** | kamion-s-kranom-zagreb, istovar-materijala-na-gradilistu-zagreb, istovar-bez-viljuskara-zagreb, dizanje-paleta-na-kat-zagreb, dizanje-kroz-prozor-zagreb, dizanje-preko-balkona-zagreb, dostava-materijala-na-kat-zagreb, brzi-istovar-zagreb |
| **Hitne i brze usluge** | hitni-prijevoz-zagreb, kamion-odmah-zagreb, hitna-dostava-materijala-zagreb, interventni-prijevoz-zagreb, prijevoz-isti-dan-zagreb |
| **Specijalizirani prijevoz i dizanje** | prijevoz-namjestaja-i-dizanje-kranom-zagreb, selidba-teskih-stvari-zagreb, dizanje-agregata-kompresora-zagreb, dizanje-klima-uredaja-vanjske-jedinice-zagreb, dizanje-toplinske-pumpe-zagreb, podizanje-sefova-zagreb, prijevoz-industrijske-opreme-zagreb, prijevoz-strojeva-zagreb, kamion-dizalica-zagreb |
| **Logistika i opskrba** | logistika-gradilista-zagreb, opskrba-gradilista-materijalom-zagreb, preuzimanje-robe-iz-skladista-zagreb, transport-paleta-robe-zagreb |
| **Pravno / info** | impressum, pravila-privatnosti |

---

## 4. Orphan stranice

**Definicija:** Orphan = stranica na koju ne vodi nijedan link s drugih stranica (samo sitemap/URL).

**Rezultat:** Nema potpuno orphan stranica. Sve usluge dobivaju barem jedan link s /usluge (hub). Home, Usluge, Impressum i Pravila dobivaju linkove iz headera/footera.

**Stranice s najmanje ulaznih linkova (samo hub + 0–1 sadržajna):**

- dostava-cigle-ytonga-kranom-zagreb  
- dostava-drvene-grade-kranom-zagreb  
- dostava-izolacije-kranom-zagreb  
- prijevoz-armature-i-zeljeza-zagreb  
- prijevoz-knauf-ploca-zagreb  
- prijevoz-oplate-salunga-zagreb  
- dizanje-kroz-prozor-zagreb  
- dizanje-preko-balkona-zagreb  
- hitna-dostava-materijala-zagreb  
- selidba-teskih-stvari-zagreb  
- dizanje-agregata-kompresora-zagreb  
- dizanje-klima-uredaja-vanjske-jedinice-zagreb  
- dizanje-toplinske-pumpe-zagreb  
- podizanje-sefova-zagreb  
- prijevoz-industrijske-opreme-zagreb  
- prijevoz-strojeva-zagreb  
- kamion-dizalica-zagreb  

**Preporuka:** Dodati 1–2 kontekstualna interna linka s drugih uslužnih stranica (npr. iz prijevoz-gradevinskog-materijala prema dostava-cigle, dostava-drvene-grade; iz kamion-s-kranom prema dizanje-kroz-prozor, dizanje-paleta-na-kat) kako bi ove stranice imale više od samo hub linka.

---

## 5. Cannibalization rizici (slični slugovi / preklapanja)

| Rizična grupa | Stranice | Opis rizika | Preporuka |
|---------------|----------|-------------|-----------|
| **Hitni / brzi / isti dan** | hitni-prijevoz-zagreb, hitna-dostava-materijala-zagreb, prijevoz-isti-dan-zagreb, kamion-odmah-zagreb, interventni-prijevoz-zagreb | Svi ciljaju „brzo”, „hitno”, „isti dan”. Preklapanje intenta. | Odrediti jednu pillar stranicu (npr. hitni-prijevoz-zagreb), ostale pozicionirati kao podstranice („dostava materijala isti dan”, „kamion odmah”) s jasno različitim H1/opisom i internal linkovima prema pillaru. |
| **Istovar** | brzi-istovar-zagreb, istovar-materijala-na-gradilistu-zagreb, istovar-bez-viljuskara-zagreb | „Istovar” u slugu/naslovu. | brzi-istovar = brzina; istovar-na-gradilistu = lokacija; istovar-bez-viljuskara = način. Razlikovati H1/meta i anchor tekste. |
| **Prijevoz građevinskog / na gradilište** | prijevoz-gradevinskog-materijala-zagreb, prijevoz-na-gradiliste-zagreb | Oba „građevinski” + „gradilište”. | prijevoz-gradevinskog = vrsta materijala; prijevoz-na-gradiliste = destinacija. Jasno razlikovati u title/description i na stranici. |
| **Kamion / dizalica** | kamion-s-kranom-zagreb, kamion-dizalica-zagreb, kamion-odmah-zagreb | „Kamion” u nazivu. | kamion-s-kranom = glavni brand/stroj; kamion-dizalica = sinonim (možda canonical na kamion-s-kranom ili jasna podstranica); kamion-odmah = brzina. |
| **Dostava materijala** | dostava-materijala-na-kat-zagreb, hitna-dostava-materijala-zagreb, dostava-* (cigle, drvene, izolacije) | „Dostava” + materijal/okolnost. | Zadržati razliku: na kat vs hitna vs po vrstama materijala. Dovoljno različiti intenti. |
| **Logistika / opskrba gradilišta** | logistika-gradilista-zagreb, opskrba-gradilista-materijalom-zagreb | Oba „gradilište” + opskrba/organizacija. | logistika = planiranje/organizacija; opskrba = redovita doprema. Razlikovati u sadržaju i meta. |

---

## 6. Stranice koje ciljaju isti keyword intent

| Intent (pojmovno) | Stranice koje ga ciljaju | Napomena |
|-------------------|---------------------------|----------|
| **„Kamion s kranom Zagreb”** | /kamion-s-kranom-zagreb (primarno), /kamion-dizalica-zagreb, /kamion-odmah-zagreb | Rizik da se međusobno „grickaju” ako su title/H1 previše slični. |
| **„Hitni prijevoz / isti dan”** | /hitni-prijevoz-zagreb, /hitna-dostava-materijala-zagreb, /prijevoz-isti-dan-zagreb, /kamion-odmah-zagreb, /interventni-prijevoz-zagreb | 5 stranica – visok rizik cannibalizationa. Odrediti jednu glavnu (npr. hitni-prijevoz), ostale usko specijalizirati. |
| **„Istovar kranom”** | /istovar-materijala-na-gradilistu-zagreb, /istovar-bez-viljuskara-zagreb, /brzi-istovar-zagreb | 3 stranice – umjereni rizik. Razlikovati: gdje / kako / brzina. |
| **„Prijevoz građevinskog materijala Zagreb”** | /prijevoz-gradevinskog-materijala-zagreb (primarno), /prijevoz-na-gradiliste-zagreb, /dostava-cigle-ytonga-kranom-zagreb, /dostava-drvene-grade-kranom-zagreb, /dostava-izolacije-kranom-zagreb, /prijevoz-armature-i-zeljeza-zagreb, /prijevoz-knauf-ploca-zagreb, /prijevoz-oplate-salunga-zagreb | Jedna generička pillar + više specifičnih (cigla, drvo, izolacija, armature, knauf, oplate). Dobar cluster; paziti da pillar ima najjači title za „prijevoz građevinskog materijala Zagreb”. |
| **„Dostava na gradilište / prijevoz na gradilište”** | /prijevoz-na-gradiliste-zagreb, /logistika-gradilista-zagreb, /opskrba-gradilista-materijalom-zagreb | Razlika: jednokratni prijevoz vs logistika vs opskrba. |
| **„Dizanje na kat / dostava na kat”** | /dostava-materijala-na-kat-zagreb, /dizanje-paleta-na-kat-zagreb | Sličan intent; razlika materijal vs palete može biti dovoljna. |
| **„Prijevoz kamionom Zagreb”** | /prijevoz-kamionom-zagreb (primarno), /transport-paleta-robe-zagreb, /preuzimanje-robe-iz-skladista-zagreb | prijevoz-kamionom = opća usluga; ostale pod-niche. |

---

## 7. Topical authority – procjena

### 7.1 „Kamion s kranom Zagreb”

| Kriterij | Status | Napomena |
|----------|--------|----------|
| Pillar stranica | Da | /kamion-s-kranom-zagreb – jasna glavna stranica. |
| Hub povezanost | Da | Link s /usluge; u footeru i na homepage sekciji. |
| Unutarnji linkovi prema pillaru | Dobro | Brzi-istovar, Transport-paleta, Prijevoz-isti-dan, Preuzimanje, Logistika, Impressum linkaju na kamion-s-kranom. |
| Broj stranica u klasteru | 8 | Dizanje i istovar klaster (kamion-s-kranom, istovar, dizanje, brzi-istovar…) sve podržava „kamion s kranom” kao središnji pojam. |
| Cannibalization | Umeren | kamion-dizalica i kamion-odmah dijele „kamion”; preporuka: kamion-s-kranom kao glavni brand URL. |

**Ocjena:** 8/10 – dobra osnova za topical authority. Jačati: jasno da je /kamion-s-kranom-zagreb glavna stranica za taj pojam; kamion-dizalica i kamion-odmah trebaju jasno diferencirati H1/meta (dizalica = sinonim, odmah = brzina).

---

### 7.2 „Istovar kranom”

| Kriterij | Status | Napomena |
|----------|--------|----------|
| Pillar stranica | Djelomično | Nema jedne jasne „istovar kranom Zagreb” stranice. Tri stranice: istovar-materijala-na-gradilistu, istovar-bez-viljuskara, brzi-istovar. |
| Hub povezanost | Da | Sve tri u hubu pod „Dizanje i istovar”. |
| Unutarnji linkovi | Dobro | Brzi-istovar jako linka na istovar-* i kamion-s-kranom; transport-paleta, preuzimanje linkaju na istovar-bez-viljuskara. |
| Klaster | 8 stranica | Dizanje i istovar = prirodan klaster za „istovar kranom”. |

**Ocjena:** 6/10 – klaster postoji, ali intent je raspršen na 3 stranice. Preporuka: odrediti jednu pillar (npr. /istovar-materijala-na-gradilistu-zagreb ili /istovar-bez-viljuskara-zagreb) kao glavnu za „istovar kranom Zagreb”, ostale pozicionirati kao „istovar na gradilištu” i „istovar bez viljuškara” s jasno drugačijim naslovima.

---

### 7.3 „Prijevoz građevinskog materijala Zagreb”

| Kriterij | Status | Napomena |
|----------|--------|----------|
| Pillar stranica | Da | /prijevoz-gradevinskog-materijala-zagreb – izravan slug i naslov. |
| Hub povezanost | Da | U hubu; u footeru i na homepage. |
| Unutarnji linkovi prema pillaru | Dobro | Opskrba, Logistika, Impressum linkaju na prijevoz-gradevinskog-materijala. |
| Klaster (pod-teme) | 9 stranica | Prijevoz na gradilište, cigla/ytong, drvena građa, izolacija, armatura, knauf, oplate, prijevoz kamionom – sve podržavaju građevinski materijal. |
| Cannibalization | Nizak | Pillar je jasan; ostale su specifične (po vrstama materijala). |

**Ocjena:** 9/10 – najjača tema za topical authority. Jedan jasan pillar + mnogo pod-stranica po vrstama materijala i situacijama. Moguće poboljšanje: još 2–3 kontekstualna linka s drugih usluga prema /prijevoz-gradevinskog-materijala-zagreb.

---

## 8. Sažetak preporuka

1. **Interni linkovi:** Dodati 1–2 kontekstualna linka s relevantnih stranica prema „slabim” stranicama (npr. prijevoz-gradevinskog → dostava-cigle, dostava-drvene-grade; kamion-s-kranom → dizanje-kroz-prozor, dizanje-paleta-na-kat).
2. **Cannibalization – hitni/brzi:** Definirati /hitni-prijevoz-zagreb kao glavnu stranicu za „hitni prijevoz”; ostale (hitna-dostava, prijevoz-isti-dan, kamion-odmah, interventni) diferencirati u H1 i meta (npr. „Hitna dostava materijala”, „Prijevoz isti dan”, „Kamion odmah”).
3. **Istovar kranom:** Odlučiti jednu pillar stranicu za „istovar kranom Zagreb” i konzistentno na nju linkati iz ostalih istovarnih stranica.
4. **Kamion s kranom:** Zadržati /kamion-s-kranom-zagreb kao glavni brand URL; /kamion-dizalica i /kamion-odmah jasno razlikovati u naslovima (dizalica = opća usluga, odmah = brzina).
5. **Orphani:** Izbjegavati nove stranice koje imaju samo link s /usluge; za postojeće „slabo linkane” dodati barem 1–2 kontekstualna linka iz srodnih stranica.
