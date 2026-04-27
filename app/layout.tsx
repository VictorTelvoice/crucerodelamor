import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Innuendo por El Crucero del Amor | Lago Calafquen",
  description:
    "Experiencia privada premium en el Lago Calafquen con navegacion al atardecer, rock, vino y asado frente al lago.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
