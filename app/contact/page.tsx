import { fetchProfile } from "@/lib/sanity";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Gustavo Alckmin for collaborations, consultancy, and academic or professional opportunities.",
  alternates: { canonical: "/contact" },
};

// Refresh Sanity content every 5 minutes without a redeploy.
export const revalidate = 300;

const fallbackEmail = "gtalckmin@hotmail.com";

export default async function ContactPage() {
  const profile = await fetchProfile();
  const email = profile?.email || fallbackEmail;

  return (
    <main>
      <header className="page-heading">
        <p className="eyebrow">Contact</p>
        <h1 className="page-title">Let’s connect.</h1>
        <p className="page-lede">
          For collaborations, research partnerships, teaching opportunities, and digital agriculture projects, please get in touch.
        </p>
      </header>
      <section className="content-card max-w-2xl p-7 sm:p-10">
        <p className="feature-card__label">Email</p>
        <a href={`mailto:${email}`} className="mt-3 inline-block break-all font-heading text-2xl text-accent-600 sm:text-3xl">
          {email} <span aria-hidden="true">↗</span>
        </a>
        <p className="feature-card__label mt-8">Availability</p>
        <p className="mt-3 text-base-800/80">
          Australian citizen, able to relocate for academic and professional opportunities.
        </p>
      </section>
    </main>
  );
}
