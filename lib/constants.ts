export const SITE_NAME = "Innuendo por El Crucero del Amor";

export const SITE_DESCRIPTION =
  "Experiencia privada premium en embarcacion por el Lago Calafquen, con atardecer, rock clasico, cata de vino y asado frente al lago.";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hola, quiero consultar por una reserva para Innuendo por El Crucero del Amor en el Lago Calafquen.";

export const CONTACT = {
  whatsappNumber: "56900000000",
  whatsappLabel: "+56 9 0000 0000",
  email: "reservas@crucerodelamor.cl",
  location: "Lican Ray, Lago Calafquen, Chile",
};

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
};

export const NAV_ITEMS = [
  { label: "Experiencia", href: "#experiencia" },
  { label: "Galeria", href: "#galeria" },
  { label: "Itinerario", href: "#itinerario" },
  { label: "Valor", href: "#valor" },
  { label: "Reservar", href: "#reservar" },
];

export const siteConfig = {
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  location: CONTACT.location,
  whatsAppPhone: CONTACT.whatsappNumber,
  whatsAppDisplay: CONTACT.whatsappLabel,
  defaultWhatsAppMessage: DEFAULT_WHATSAPP_MESSAGE,
};

export const brand = {
  experience: SITE_NAME,
  vessel: "El Crucero del Amor",
};

export const businessInfo = {
  whatsappDisplay: CONTACT.whatsappLabel,
  location: CONTACT.location,
};

export const brandConstants = {
  bookingHref: "#reservar",
};

export const navigation = NAV_ITEMS;
