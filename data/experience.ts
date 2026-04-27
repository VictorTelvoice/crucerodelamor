export type ExperienceFeature = {
  title: string;
  description: string;
};

export type ItineraryItem = {
  time: string;
  title: string;
  description: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  label: string;
};

export const experience = {
  name: "Innuendo por El Crucero del Amor",
  vesselName: "El Crucero del Amor",
  location: "Lago Calafquen, Lican Ray, Chile",
  priceCLP: 149000,
  priceLabel: "$149.000 CLP por persona",
  priceNote:
    "Valor referencial para reservas privadas. La confirmacion depende de clima, disponibilidad y tamano del grupo.",
  price: {
    formatted: "$149.000 CLP",
    note: "Por persona. Reserva sujeta a clima, disponibilidad y confirmacion del grupo.",
  },
  audience:
    "Parejas, grupos pequenos, turistas, celebraciones, aniversarios y experiencias exclusivas.",
  hero: {
    eyebrow: "Experiencia privada en el sur de Chile",
    title: "Innuendo por El Crucero del Amor",
    subtitle:
      "Navegacion premium al atardecer por el Lago Calafquen, con rock clasico, cata de vino y un asado frente al lago.",
    primaryCta: "Reservar por WhatsApp",
    secondaryCta: "Ver experiencia",
  },
  highlights: [
    "Paseo personalizado en embarcacion privada",
    "Atardecer sobre el Lago Calafquen",
    "Musica rock durante la navegacion",
    "Cata de vino en el lago",
    "Asado al regresar, a los pies del lago",
  ],
  included: [
    "Paseo personalizado en embarcacion privada",
    "Navegacion al atardecer por el Lago Calafquen",
    "Musica rock durante el tour",
    "Cata de vino en el lago",
    "Asado al regresar frente al agua",
  ],
  features: [
    {
      title: "Navegacion boutique",
      description:
        "Un recorrido privado disenado para disfrutar el lago con calma, privacidad y una atmosfera exclusiva.",
    },
    {
      title: "Atardecer, vino y rock",
      description:
        "Una combinacion sensorial de paisaje, musica clasica rockera y cata de vino durante la travesia.",
    },
    {
      title: "Asado frente al lago",
      description:
        "La experiencia termina en tierra con un asado preparado junto al Lago Calafquen.",
    },
  ] satisfies ExperienceFeature[],
  itinerary: [
    {
      time: "Inicio",
      title: "Bienvenida en Lican Ray",
      description:
        "Recepcion del grupo, introduccion a la experiencia y preparacion para embarcar.",
    },
    {
      time: "Navegacion",
      title: "Paseo por el Lago Calafquen",
      description:
        "Tour privado con vistas del lago, musica rock y momentos pensados para fotografias.",
    },
    {
      time: "Atardecer",
      title: "Cata de vino en el lago",
      description:
        "Degustacion de vino en plena navegacion mientras cae la luz sobre el Calafquen.",
    },
    {
      time: "Regreso",
      title: "Asado a los pies del lago",
      description:
        "Cierre con asado frente al agua, ideal para celebrar una ocasion especial.",
    },
  ] satisfies ItineraryItem[],
  gallery: [
    {
      src: "/images/innuendo/hero-crucero-amor.jpg",
      alt: "El Crucero del Amor navegando por el Lago Calafquen",
      label: "Crucero",
    },
    {
      src: "/images/innuendo/atardecer-calafquen.jpg",
      alt: "Atardecer sobre el Lago Calafquen",
      label: "Atardecer",
    },
    {
      src: "/images/innuendo/cata-vino-lago.jpg",
      alt: "Cata de vino durante la navegacion",
      label: "Vino",
    },
    {
      src: "/images/innuendo/asado-lago.jpg",
      alt: "Asado frente al Lago Calafquen",
      label: "Asado",
    },
  ] satisfies GalleryImage[],
  trust: [
    "Experiencia privada y personalizada",
    "Ideal para aniversarios y celebraciones",
    "Propuesta boutique en Lican Ray",
    "Ambiente elegante, romantico y sensorial",
  ],
  booking: {
    title: "Reserva directa para tu grupo",
    description:
      "Escribenos con tu fecha, numero de personas y motivo de celebracion para coordinar una experiencia privada.",
    fields: ["Fecha tentativa", "Numero de personas", "Ocasion", "Horario ideal"],
    defaultMessage:
      "Hola, quiero consultar disponibilidad para Innuendo por El Crucero del Amor.",
  },
  finalCta:
    "Conversemos por WhatsApp y disenenos una salida privada con navegacion, vino, rock y asado frente al Lago Calafquen.",
};

export const galleryImages = experience.gallery;

export const trustSignals = experience.trust.map((title) => ({
  title,
  description:
    "Detalle editable para reforzar la confianza, el cuidado y el caracter boutique de la experiencia.",
}));
