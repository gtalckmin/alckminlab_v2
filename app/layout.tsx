import "./globals.css";
import { PropsWithChildren } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/header";

export const metadata = {
  title: {
    default: "Alckmin Lab",
    template: "%s | Alckmin Lab",
  },
  description: "Academic modern profile for research outputs, publications, and videos",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-base-50 text-base-900">
        <div className="mx-auto max-w-6xl px-6 pb-12">
          <Header />
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
