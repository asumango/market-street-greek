import { navLinks, contactEmail } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          <div>
            <span className="font-display text-xl tracking-wide">
              MARKET<span className="text-gold">ST.</span>
            </span>
            <p className="text-xs text-paper-dim mt-2 max-w-xs">
              Content Studio for Greek Life
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-paper-dim hover:text-paper transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${contactEmail}`}
              className="text-sm text-paper-dim hover:text-paper transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-paper-dim">
            © {new Date().getFullYear()} Market Street Studios. All rights
            reserved.
          </p>
          <p className="text-xs text-paper-dim">
            Built for sororities, by people who get it.
          </p>
        </div>
      </div>
    </footer>
  );
}
