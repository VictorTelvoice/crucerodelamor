import { experience } from "@/data/experience";
import { DEFAULT_WHATSAPP_MESSAGE } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function FinalCTASection() {
  const href = buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE);

  return (
    <section className="relative overflow-hidden px-6 py-24 text-center">
      <div className="absolute inset-x-0 top-1/2 -z-10 mx-auto h-80 max-w-4xl -translate-y-1/2 rounded-full bg-sunset-gold/15 blur-3xl" />
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          eyebrow="Reserva privada"
          title="Haz que el Lago Calafquen sea parte de tu celebracion."
          description={experience.finalCta}
        />
        <div className="mt-8 flex justify-center">
          <Button href={href}>Quiero reservar Innuendo</Button>
        </div>
      </div>
    </section>
  );
}
