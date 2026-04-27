import { experience } from "@/data/experience";
import { DEFAULT_WHATSAPP_MESSAGE } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function BookingSection() {
  const whatsappUrl = buildWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE);

  return (
    <section id="reservar" className="section-shell bg-[var(--color-cream)] text-[var(--color-ink)]">
      <div className="container-premium grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionTitle
          eyebrow="Reservas"
          title="Cuéntanos tu fecha ideal y diseñamos la navegación"
          description="Esta primera versión deja preparado el espacio para un formulario de reserva, calendario de disponibilidad o integración de pagos en una segunda etapa."
        />
        <Card className="space-y-6 border-[var(--color-sunset)]/30 bg-white shadow-premium">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-wine)]">
              Reserva directa
            </p>
            <h3 className="mt-3 font-serif text-3xl text-[var(--color-lake)]">
              {experience.booking.title}
            </h3>
            <p className="mt-4 text-[var(--color-muted)]">
              {experience.booking.description}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {experience.booking.fields.map((field) => (
              <div
                className="rounded-2xl border border-[var(--color-lake)]/10 bg-[var(--color-cream)] p-4"
                key={field}
              >
                <p className="text-sm font-semibold text-[var(--color-lake)]">
                  {field}
                </p>
              </div>
            ))}
          </div>
          <Button href={whatsappUrl} target="_blank" rel="noreferrer">
            Consultar por WhatsApp
          </Button>
        </Card>
      </div>
    </section>
  );
}
