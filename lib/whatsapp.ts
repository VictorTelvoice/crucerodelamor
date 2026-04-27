import { siteConfig } from "./constants";

export function buildWhatsAppUrl(message = siteConfig.defaultWhatsAppMessage) {
  const phone = siteConfig.whatsAppPhone.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${phone}?text=${encodedMessage}`;
}
