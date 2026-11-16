export default function Footer() {
  const links = [
    { href: "#featured", label: "Properties" },
    { href: "#locations", label: "Locations" },
    { href: "#advisory", label: "Advisory" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="mt-8 px-3 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-stone/25 bg-surface-warm px-6 py-12 sm:px-10 sm:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-display text-5xl leading-none font-semibold tracking-tight text-ink/90 sm:text-7xl">
              Splendors.
            </p>
            <p className="mt-4 max-w-sm text-sm text-taupe">
              Premier property consultants in Blue Area — verified residences,
              commercial floors, and investment plots across Islamabad.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-taupe transition hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-stone/30 pt-6 text-xs text-taupe sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Splendors Properties.</p>
          <p>Digital Experience Engineered by Zee Solution Hub</p>
        </div>
      </div>
    </footer>
  );
}
