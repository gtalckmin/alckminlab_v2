import "./globals.css";
import { PropsWithChildren } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/header";

export const metadata = {
  title: {
    default: "Alckmin Lab",
    template: "%s | Alckmin Lab",
  },
  description: "Research and teaching in remote sensing, precision agriculture, and digital agronomy.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-base-50 text-base-900">
        <div className="site-container flex min-h-screen flex-col">
          <Header />
          <div className="site-main flex-1">{children}</div>
          <footer className="site-footer">
            <p>Alckmin Lab · Remote sensing, precision agriculture, and data</p>
            <p>Applying Earth observation and data science for resilient, productive agricultural systems.</p>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
