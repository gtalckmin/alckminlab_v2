"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="site-container site-header__inner">
        <Link href="/" className="site-brand" aria-label="Alckmin Lab home">
          <span className="site-brand__mark" aria-hidden="true">A</span>
          <span>
            <span className="site-brand__name">Alckmin Lab</span>
            <span className="site-brand__tagline">Remote sensing · precision agriculture · data</span>
          </span>
        </Link>
        <nav aria-label="Main navigation" className="site-nav">
          {links.map((link) => {
            const isCurrent =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className="site-nav__link"
                aria-current={isCurrent ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
