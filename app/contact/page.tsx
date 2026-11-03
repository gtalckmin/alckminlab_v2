import { fetchProfile } from "@/lib/sanity";

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
      </section>
    </main>
  );
}
