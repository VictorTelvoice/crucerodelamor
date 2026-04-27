import { brand, navigation } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#inicio" className="group">
          <span className="block text-xs font-semibold uppercase tracking-[0.35em] text-sunset-300">
            {brand.vessel}
          </span>
          <span className="text-lg font-semibold text-cream-50 transition group-hover:text-sunset-200">
            {brand.experience}
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-cream-100/80 md:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-sunset-200">
              {item.label}
            </a>
          ))}
        </nav>

        <Button href="#reserva" size="sm" className="hidden sm:inline-flex">
          Reservar
        </Button>
      </div>
    </header>
  );
}
