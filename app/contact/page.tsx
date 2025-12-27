export default function ContactPage() {
  return (
    <main className="space-y-4">
      <p className="text-xs uppercase tracking-[0.2em] text-base-800/60">Contact</p>
      <h1 className="font-heading text-3xl">Get in touch</h1>
      <p className="text-base text-base-800/80">
        For collaborations, speaking engagements, or student opportunities, reach out via email.
      </p>
      <div className="rounded-2xl bg-white p-6 shadow-soft">
        <p className="text-sm text-base-800/70">Email</p>
        <a href="mailto:you@example.com" className="text-lg font-medium text-accent-600">
          you@example.com
        </a>
      </div>
    </main>
  );
}
