import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  title: "Jotamotors | Taller mecánico en Concón · Agenda por WhatsApp",
  description: "¿Ruidos, dudas con los frenos o una mantención pendiente? Agenda tu revisión en Jotamotors. Servicio automotriz en Av. Borgoño 25600, Concón.",
  openGraph: {
    title: "Jotamotors · Tu auto, en buenas manos",
    description: "Taller mecánico en Concón. Cuéntanos qué necesita tu auto y agenda por WhatsApp.",
    locale: "es_CL",
    type: "website",
  },
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL">
      <body>
        {children}
        <Analytics />
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
