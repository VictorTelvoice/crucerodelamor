import { Button } from "@/components/ui/Button";
import { experience } from "@/data/experience";
import { businessInfo } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function HeroSection() {
  const { hero } = experience;

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-6 py-28 sm:px-10 lg:px-16"
    >
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,rgba(3,14,24,0.94),rgba(13,31,45,0.86),rgba(116,48,30,0.72))]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_20%,rgba(244,159,69,0.24),transparent_32%),radial-gradient(circle_at_15%_70%,rgba(103,18,42,0.24),transparent_30%)]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.38em] text-sunset-gold">
            {hero.eyebrow}
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-warm-white sm:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-warm-white/78 sm:text-xl">
            {hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={buildWhatsAppLink()}>{hero.primaryCta}</Button>
            <Button href="#experiencia" variant="secondary">
              {hero.secondaryCta}
            </Button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/12 bg-white/8 p-6 shadow-premium backdrop-blur">
          <div className="rounded-[1.5rem] border border-sunset-gold/30 bg-lake-black/50 p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-sunset-gold">
              Experiencia privada
            </p>
            <div className="mt-8 space-y-5 text-warm-white/82">
              <p className="text-3xl font-semibold text-warm-white">
                Lago Calafquen al atardecer
              </p>
              <p>
                Navegacion boutique desde Lican Ray con musica rock, vino en el
                lago y un cierre con asado frente al agua.
              </p>
              <p className="text-sm text-warm-white/60">
                Reservas por WhatsApp: {businessInfo.whatsappDisplay}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
