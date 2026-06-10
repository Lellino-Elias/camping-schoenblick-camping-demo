import type { CampsiteConfig } from "../types";

const IMG = "/campsites/camping-schoenblick";

const campingSchoenblick: CampsiteConfig = {
  name: "Camping Schönblick",
  shortName: "Schönblick",
  slug: "camping-schoenblick",
  ort: "Abersee am Wolfgangsee",
  region: "Salzkammergut",
  brandKind: "Camping & Ferienwohnungen",
  see: "Wolfgangsee",
  regionLong: "Wolfgangsee · Salzkammergut · Österreich",

  theme: "schiefer",
  heroVariant: "center",

  claim: "Terrassen mit Blick über den Wolfgangsee",
  claimEmphasis: "über den Wolfgangsee",
  intro:
    "Auf einer kleinen Anhöhe über dem Wolfgangsee liegen unsere Terrassenplätze — mit eigenem Badestrand, Liegewiese und Blick auf St. Wolfgang. Familie Laimer heißt dich am Schönblick willkommen.",

  logo: { src: `${IMG}/logo-15e4743a89.png`, alt: "Camping Schönblick Logo" },

  statement: {
    text: "Von der Terrasse reicht der Blick über den Wolfgangsee bis hinüber nach St. Wolfgang.",
    emphasis: "über den Wolfgangsee",
  },

  pillars: [
    {
      title: "Plätze auf der Seeterrasse",
      text: "In Terrassen angelegt, klar abgegrenzt und mit Blick auf den See — du campst wie in deinem eigenen Garten.",
      image: { src: `${IMG}/gallery-029f312de6.webp`, alt: "Blick von der Seeterrasse über den Campingplatz auf den Wolfgangsee und den Schafberg" },
    },
    {
      title: "Eigener Badestrand",
      text: "Direkt am See gehören ein eigener Badestrand und eine Liegewiese zum Platz — Seezugang inklusive.",
      image: { src: `${IMG}/gallery-70d570b54d.webp`, alt: "Eigener Badestrand des Camping Schönblick mit Steg am Wolfgangsee" },
    },
    {
      title: "Modernes Sanitärgebäude",
      text: "Mitten im Platz gelegen und 2015 komplett renoviert — hell, gepflegt und von überall kurz erreichbar.",
      image: { src: `${IMG}/amenity-88375a1981.webp`, alt: "Helles, modernes Sanitärgebäude des Camping Schönblick" },
    },
  ],

  usps: [
    "Eigener Badestrand am See",
    "Seeterrasse mit Seeblick",
    "Sanitär 2015 renoviert",
    "Gratis WLAN",
    "Schiffsanlegestelle 200 m",
    "Sommerrodelbahn 1 km",
  ],

  trust: {
    heading: "Was den Schönblick besonders macht",
    headingEmphasis: "besonders",
    intro:
      "In Familienhand und mitten im Salzkammergut: ruhige Terrassenplätze, ein eigener Badestrand und kurze Wege zu Schiffsanlegestelle, Sommerrodelbahn und den Wanderwegen rund um den Wolfgangsee.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/gallery-b0e89e7591.webp`, alt: "Luftaufnahme: Camping Schönblick auf der Anhöhe über dem Wolfgangsee" },
  },

  breather: {
    image: { src: `${IMG}/gallery-5f870edde2.webp`, alt: "Badesteg im türkisen Wolfgangsee mit Blick auf St. Wolfgang" },
    line: "Der Wolfgangsee beginnt gleich unterhalb der Terrassen.",
  },

  camping: {
    heading: "Camping über dem Wolfgangsee",
    intro:
      "Großzügige Terrassenplätze mit Seeblick, ein modernes Sanitärgebäude und der eigene Badestrand — der Weg vom Stellplatz ins Wasser ist kurz.",
    features: [
      {
        title: "Stellplätze auf der Seeterrasse",
        text: "Die Plätze auf der Seeterrasse sind klar voneinander abgegrenzt — du genießt deinen Campingurlaub wie in deinem eigenen Garten mit Blick auf den See.",
        image: { src: `${IMG}/gallery-8975511040.webp`, alt: "Stellplätze mit Wohnwagen und Bergblick am Camping Schönblick" },
      },
      {
        title: "Großzügige Plätze hinter dem Haus",
        text: "Die Plätze hinter dem Haus überzeugen durch ihre besondere Größe und die sehr kurze Entfernung zum Sanitärgebäude.",
        image: { src: `${IMG}/gallery-f1d9000a62.webp`, alt: "Großzügiger Stellplatz mit Blick auf den Schafberg am Schönblick" },
      },
      {
        title: "Sanitärgebäude, 2015 renoviert",
        text: "Das Sanitärgebäude liegt im Herzen des Platzes und wurde 2015 komplett renoviert — modern ausgestattet, sogar mit Fußbodenheizung.",
        image: { src: `${IMG}/gallery-d3b93dfb30.webp`, alt: "Renoviertes Sanitärgebäude des Camping Schönblick mit überdachtem Eingang" },
      },
      {
        title: "Liegewiese am See",
        text: "Direkt am Ufer erwartet dich eine Liegewiese mit Blick auf St. Wolfgang — zum Sonnen, Lesen und Abkühlen zwischendurch.",
        image: { src: `${IMG}/gallery-fce0d2f73c.webp`, alt: "Liegewiese am Badestrand des Camping Schönblick am Wolfgangsee" },
      },
      {
        title: "Baden im Wolfgangsee",
        text: "Vom eigenen Badestrand geht es ins klare Wasser — traumhaft zum Schwimmen, und für Segeln, Surfen und Fischen gleich nebenan.",
        image: { src: `${IMG}/gallery-495ef73372.webp`, alt: "Badende im klaren Wolfgangsee am Strand des Camping Schönblick" },
      },
      {
        title: "Plätze im Grünen",
        text: "Alte Bäume spenden Schatten über den Wiesenplätzen — ruhig gelegen, mit viel Platz zwischen dir und den Nachbarn.",
        image: { src: `${IMG}/gallery-1cae3a9309.webp`, alt: "Schattige Wiesenplätze unter Bäumen am Camping Schönblick" },
      },
    ],
  },

  mobilheime: {
    heading: "Drei Ferienwohnungen",
    intro:
      "Für Urlaubsgäste vermieten wir drei modern eingerichtete Ferienwohnungen für zwei bis vier Personen — mit Dusche/WC, Küche, Balkon, Sat-TV und Brotservice.",
    items: [
      {
        name: "Wohnen mit Balkon",
        kind: "Ferienwohnung · 2–4 Pers.",
        text: "Heller Wohnbereich mit eigenem Balkon und Sat-TV — gemütlich für zwei bis vier Personen.",
        image: { src: `${IMG}/accommodation-9a864e0497.webp`, alt: "Wohnbereich einer Ferienwohnung am Camping Schönblick mit Balkontür" },
        features: ["Eigener Balkon", "Sat-TV", "2–4 Personen"],
      },
      {
        name: "Schlafen & Ankommen",
        kind: "Ferienwohnung · 2–4 Pers.",
        text: "Ruhiges Schlafzimmer mit Blick ins Grüne — modern eingerichtet zum Wohlfühlen.",
        image: { src: `${IMG}/accommodation-221abe4b42.webp`, alt: "Schlafzimmer einer Ferienwohnung am Camping Schönblick" },
        features: ["Modern möbliert", "Dusche/WC", "Ruhige Lage"],
      },
      {
        name: "Küche & Brotservice",
        kind: "Ferienwohnung · 2–4 Pers.",
        text: "Eigene Küche mit gemütlicher Essecke, dazu frisches Gebäck über unseren Brotservice.",
        image: { src: `${IMG}/accommodation-3d20da3de0.webp`, alt: "Essecke mit Küche in einer Ferienwohnung am Camping Schönblick" },
        features: ["Eigene Küche", "Essecke", "Brotservice"],
      },
    ],
  },

  kinder: {
    heading: "Platz zum Spielen",
    intro:
      "Eine Spielwiese am Haupthaus, der See zum Plantschen und die familiäre Atmosphäre, für die unsere Gäste wiederkommen — hier sind Kinder gern gesehen.",
    features: [
      {
        title: "Spielwiese am Haupthaus",
        text: "Schaukel und Sandkiste auf der Wiese vor dem Bauernhaus — mit Bergblick zum Toben und Austoben.",
        image: { src: `${IMG}/gallery-436f22b2a9.webp`, alt: "Spielwiese mit Schaukel und Sandkiste vor dem Haupthaus am Camping Schönblick" },
      },
      {
        title: "Baden am See",
        text: "Die Liegewiese am eigenen Badestrand lädt die ganze Familie zum Baden im Wolfgangsee ein.",
        image: { src: `${IMG}/gallery-b9fade0a09.webp`, alt: "Familien an der Liegewiese am Badestrand des Camping Schönblick" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg an den Wolfgangsee",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A1 Richtung Salzkammergut, dann auf der B158 am Wolfgangsee entlang nach Abersee-Strobl.",
      },
      {
        title: "Mit Bahn & Bus",
        text: "Mit der Bahn bis Bad Ischl oder Salzburg, weiter mit dem Postbus an den See — Abholung nach Absprache.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Flughafen Salzburg, von dort rund 45 Autominuten bis an den Wolfgangsee.",
      },
    ],
  },

  galerie: {
    heading: "Sommer am Wolfgangsee",
    headingEmphasis: "Wolfgangsee",
    intro:
      "Türkises Wasser, Terrassenplätze und der Blick auf St. Wolfgang — ein paar Eindrücke vom Schönblick.",
    tag: "Am Wolfgangsee",
    moreCount: 18,
    images: [
      { src: `${IMG}/gallery-a88c5989d0.webp`, alt: "Luftaufnahme des Camping Schönblick am Ufer des Wolfgangsees" },
      { src: `${IMG}/gallery-0e042973ee.webp`, alt: "Der Platz mit Badestrand am Wolfgangsee von oben" },
      { src: `${IMG}/gallery-3d94cc29c9.webp`, alt: "Stellplatz mit Rad und Bergblick am Camping Schönblick" },
      { src: `${IMG}/gallery-191859b989.webp`, alt: "Herbstabend am Ufer des Wolfgangsees beim Schönblick" },
    ],
  },

  booking: {
    heading: "Bereit für deinen Urlaub am Wolfgangsee?",
    headingEmphasis: "am Wolfgangsee",
    intro:
      "Unsere Stellplätze sind derzeit an Dauercamper vergeben — für deinen Urlaub vermieten wir drei Ferienwohnungen. Familie Laimer meldet sich persönlich bei dir.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreis pro Ferienwohnung und Nacht — auf der Website sind keine Preise angegeben (bitte bestätigen). Zzgl. Ortstaxe.",
    highlight: { title: "Direkt am See", text: "Eigener Badestrand und Liegewiese gehören zum Platz." },
    categories: [
      { id: "ferienwohnung", label: "Ferienwohnung (2–4 Pers.)", perNight: 110 },
    ],
  },

  kontakt: {
    tel: "+43 (0)6137 7042",
    telHref: "tel:+4361377042",
    mail: "info@camping-schoenblick.at",
    adresse: "Forsthub 1 · 5350 Abersee-Strobl · Salzkammergut",
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Badestrand", href: "#camping" },
    ]},
    { label: "Ferienwohnungen", href: "#mobilheime" },
    { label: "Familie", href: "#kinder" },
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default campingSchoenblick;
