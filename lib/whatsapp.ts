import { CONTACT, DEFAULT_WHATSAPP_MESSAGE } from "./constants";

export function buildWhatsAppUrl(message = DEFAULT_WHATSAPP_MESSAGE) {
  const phone = CONTACT.whatsappNumber.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

export const buildWhatsAppLink = buildWhatsAppUrl;
