import { trustSignals } from "@/data/experience";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function TrustSection() {
  return (
    <section id="confianza" className="bg-warmWhite px-6 py-20 text-ink">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Confianza"
          title="Una experiencia cuidada, privada y memorable"
          description="La propuesta esta pensada para viajeros que buscan calma, atencion personalizada y una conexion real con el Lago Calafquen."
          align="center"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {trustSignals.map((signal) => (
            <Card key={signal.title} className="text-center">
              <h3 className="font-serif text-xl text-lake">{signal.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/70">{signal.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
