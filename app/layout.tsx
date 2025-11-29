import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Odkodowani – podcast o polskich specjalistach IT za granicą",
  description:
    "Odkodowani to podcast o polskich specjalistach IT, którzy wyjechali z Polski i dzielą się swoimi historiami zawodowymi i prywatnymi.",
  metadataBase: new URL("https://odkodowani.com"),
  keywords: [
    "podcast",
    "Odkodowani",
    "IT",
    "programiści",
    "Polacy za granicą",
    "emigracja",
    "kariera w IT",
    "software engineering",
    "praca zdalna",
    "życie za granicą"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Odkodowani – podcast o polskich specjalistach IT za granicą",
    description:
      "Posłuchaj historii polskich specjalistów IT, którzy wyjechali z Polski i budują swoje życie oraz karierę za granicą.",
    siteName: "Odkodowani",
    locale: "pl_PL"
  },
  twitter: {
    card: "summary_large_image",
    title: "Odkodowani – podcast o polskich specjalistach IT za granicą",
    description:
      "Rozmowy o pracy w IT, przeprowadzce i życiu za granicą z perspektywy polskich specjalistów.",
    creator: "@odkodowani" // placeholder
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className="h-full">
      <head>
        {/* Cloudflare Web Analytics – wstaw swój prawdziwy token */}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "YOUR_CLOUDFLARE_WEB_ANALYTICS_TOKEN"}'
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#fafafa] font-sans text-zinc-900 antialiased transition-colors duration-300 dark:bg-[#020617] dark:text-zinc-50">
        {children}
      </body>
    </html>
  );
}


