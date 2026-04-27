import { experience } from "@/data/experience";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  const url = buildWhatsAppUrl(experience.booking.defaultMessage);

  return (
    <a
      aria-label="Reservar por WhatsApp"
      className="fixed bottom-5 right-5 z-40 rounded-full border border-[rgba(255,255,255,0.2)] bg-[#25d366] px-5 py-4 text-sm font-bold text-[#062116] shadow-[0_18px_60px_rgba(0,0,0,0.35)] transition hover:-translate-y-1"
      href={url}
      rel="noreferrer"
      target="_blank"
    >
      WhatsApp
    </a>
  );
}
