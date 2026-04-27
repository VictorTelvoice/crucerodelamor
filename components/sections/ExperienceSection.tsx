import { experience } from "@/data/experience";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ExperienceSection() {
  return (
    <section id="experiencia" className="bg-warm-white py-20 text-ink">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Experiencia boutique"
          title="Una travesia privada por el sur de Chile"
          description="Innuendo reune navegacion personalizada, musica rock, vino y cocina junto al lago en una jornada disenada para celebrar sin prisa."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experience.highlights.map((highlight) => (
            <Card key={highlight} className="border-sunset-gold/25 bg-white">
              <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sunset-gold/15 text-lg text-wine">
                *
              </span>
              <p className="text-lg font-medium leading-relaxed text-lake-blue">
                {highlight}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
