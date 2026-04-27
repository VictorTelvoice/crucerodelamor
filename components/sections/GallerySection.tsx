import { galleryImages } from "@/data/experience";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function GallerySection() {
  return (
    <section id="galeria" className="bg-cream-50 px-6 py-24 text-ink-950">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Galeria"
          title="Momentos pensados para quedarse en la memoria"
          description="Estos espacios estan listos para recibir las fotografias reales del Crucero del Amor, el lago, la cata y el asado."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {galleryImages.map((image) => (
            <Card
              key={image.src}
              className="flex min-h-64 flex-col justify-end overflow-hidden border-lake-900/10 bg-lake-950 p-0 text-white"
            >
              <div className="flex min-h-64 flex-col justify-end bg-gradient-to-br from-lake-950 via-lake-900 to-sunset-700 p-6">
                <span className="text-xs uppercase tracking-[0.35em] text-gold-200">
                  {image.alt}
                </span>
                <p className="mt-4 text-sm text-cream-100">{image.src}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
