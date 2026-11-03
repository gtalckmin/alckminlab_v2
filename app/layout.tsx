import "./globals.css";
import { PropsWithChildren } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/header";
import { personJsonLd, personName, siteDescription, siteUrl, websiteJsonLd } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gustavo Alckmin | Remote Sensing, Precision Agriculture & AI",
    template: "%s | Gustavo Alckmin",
  },
  description: siteDescription,
  authors: [{ name: personName, url: siteUrl }],
  creator: personName,
  keywords: ["Gustavo Alckmin", "Gustavo Togeiro de Alckmin", "Alckmin Lab", "remote sensing", "precision agriculture", "digital agronomy", "APSIM", "LLMs in agriculture"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Alckmin Lab",
    title: "Gustavo Alckmin | Remote Sensing, Precision Agriculture & AI",
    description: siteDescription,
    locale: "en_AU",
  },
  twitter: {
    card: "summary",
    creator: "@GustavoTA8",
    title: "Gustavo Alckmin | Remote Sensing, Precision Agriculture & AI",
    description: siteDescription,
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-base-50 text-base-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([personJsonLd, websiteJsonLd]) }}
        />
        <div className="site-container flex min-h-screen flex-col">
          <Header />
          <div className="site-main flex-1">{children}</div>
          <footer className="site-footer">
            <p>Alckmin Lab · Gustavo Togeiro de Alckmin · Remote sensing, precision agriculture, and data</p>
            <p>Applying Earth observation and data science for resilient, productive agricultural systems.</p>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
