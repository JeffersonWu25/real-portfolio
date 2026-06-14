import { useState } from "react";

const navLinks = [
  { href: "#featured-projects", label: "Featured Projects" },
  { href: "#about", label: "Experience" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-outline-variant/20 bg-surface/70 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-[var(--spacing-container-max)] items-center justify-between px-[var(--spacing-margin-mobile)] py-4 md:px-[var(--spacing-margin-desktop)]">
        <a
          href="#"
          className="font-display text-2xl font-bold text-primary md:text-[32px]"
        >
          JW
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-base font-medium text-on-surface-variant transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="text-on-surface md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-outline-variant/20 bg-surface px-[var(--spacing-margin-mobile)] py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-base font-medium text-on-surface-variant"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
