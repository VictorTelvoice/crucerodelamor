import { siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 text-sm text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-lg text-white">{siteConfig.name}</p>
          <p>{siteConfig.location}</p>
        </div>
        <p>
          Experiencia privada en el Lago Calafquen. Reservas sujetas a clima y
          disponibilidad.
        </p>
      </div>
    </footer>
  );
}
