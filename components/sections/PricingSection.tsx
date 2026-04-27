import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { brandConstants } from "@/lib/constants";
import { experience } from "@/data/experience";

export function PricingSection() {
  return (
    <section id="valor" className="section-padding">
      <SectionTitle
        eyebrow="Inversion"
        title="Una experiencia boutique en el Lago Calafquen"
        description="Pensada para quienes buscan algo mas que un paseo: una tarde completa, cuidada y privada frente al paisaje del sur de Chile."
      />
      <Card className="mx-auto grid max-w-4xl gap-8 bg-[#fff8ec] p-8 text-[#111111] md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-[#8f5c21]">
            Valor por persona
          </p>
          <p className="mt-4 text-5xl font-semibold tracking-tight">
            {experience.price.formatted}
          </p>
          <p className="mt-3 text-sm text-[#60564b]">
            {experience.price.note}
          </p>
        </div>
        <div className="space-y-5">
          <ul className="grid gap-3 text-sm text-[#30261f] sm:grid-cols-2">
            {experience.included.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#a94d3d]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button href={brandConstants.bookingHref} variant="dark">
            Solicitar reserva privada
          </Button>
        </div>
      </Card>
    </section>
  );
}
