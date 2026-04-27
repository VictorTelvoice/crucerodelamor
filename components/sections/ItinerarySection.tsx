import { experience } from "@/data/experience";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ItinerarySection() {
  return (
    <section id="itinerario" className="section-padding bg-warm-white text-lake-night">
      <div className="container-premium">
        <SectionTitle
          eyebrow="Itinerario sensorial"
          title="Una tarde pensada para bajar el ritmo"
          description="El recorrido se adapta a cada reserva, manteniendo una experiencia privada, fluida y memorable."
        />

        <div className="mt-12 grid gap-5">
          {experience.itinerary.map((item, index) => (
            <Card key={item.title} className="flex gap-5 border-l-4 border-l-sunset-gold">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lake-night text-sm font-bold text-sunset-gold">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-wine-red">
                  {item.time}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-lake-night">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-lake-night/70">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
