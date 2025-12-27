import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/publications", label: "Publications" },
  { href: "/videos", label: "Videos" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <Link href="/" className="text-xl font-heading font-semibold tracking-tight">
          Alckmin Lab
        </Link>
        <p className="text-sm text-base-800/70">Research, publications, and lab updates</p>
      </div>
      <nav className="flex flex-wrap gap-3 text-sm font-medium">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-full px-3 py-1 transition-colors hover:bg-base-100"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
