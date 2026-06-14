const footerLinks = [
  { href: "https://www.linkedin.com/in/jwu6", label: "LinkedIn" },
  { href: "https://github.com/JeffersonWu25", label: "GitHub" },
  { href: "mailto:jwu6@u.northwestern.edu", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-surface">
      <div className="mx-auto flex max-w-[var(--spacing-container-max)] flex-col items-center justify-between gap-8 border-t border-outline-variant/10 px-[var(--spacing-margin-mobile)] py-12 md:flex-row md:px-[var(--spacing-margin-desktop)]">
        <div className="space-y-2 text-center md:text-left">
          <div className="font-display text-[32px] font-bold text-on-surface">
            Jefferson Wu
          </div>
          <p className="font-body text-base text-on-surface-variant">
            Thanks for visiting!
          </p>
        </div>

        <div className="flex gap-8">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-base text-on-surface-variant decoration-primary underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
