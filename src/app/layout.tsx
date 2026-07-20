import type { Metadata } from "next";
import { Anton, Archivo, Inter, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  style: ["italic", "normal"],
  subsets: ["latin"],
});

const siteUrl = "https://www.marketststudios.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Market Street Studios | Content Studio for Greek Life",
    template: "%s | Market Street Studios",
  },
  description:
    "Market Street Studios is the production team behind Alpha Delta Pi's biggest moments — documenting sorority history so these memories outlive us and live on for generations. Photo, video, and social content built to be watched today and treasured for years to come.",
  keywords: [
    "sorority content agency",
    "Greek life video production",
    "sorority conference photography",
    "Alpha Delta Pi content",
    "sorority social media content",
    "Panhellenic event videography",
    "sorority recruitment video",
    "sorority archive",
    "Greek life legacy content",
  ],
  authors: [{ name: "Market Street Studios" }],
  creator: "Market Street Studios",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Market Street Studios",
    title: "Market Street Studios | Content Studio for Greek Life",
    description:
      "Photo, video, and social content that documents sorority history — trusted by Alpha Delta Pi, building archives that outlive us all.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Market Street Studios — Content Studio for Greek Life",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Market Street Studios | Content Studio for Greek Life",
    description:
      "Photo, video, and social content that documents sorority history — trusted by Alpha Delta Pi, building archives that outlive us all.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Market Street Studios",
  url: siteUrl,
  description:
    "Content studio documenting sorority history nationwide — photo, long-form video, and social content built to outlive us all.",
  email: "hello@marketststudios.com",
  sameAs: [],
  areaServed: "US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${archivo.variable} ${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-ink text-paper">
        <div className="grain" aria-hidden="true" />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
