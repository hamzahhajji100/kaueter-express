import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImg from "@/assets/logo.jpg";

const navLinks = [
  { label: "Sortiment", href: "#sortiment" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-display text-2xl font-bold text-primary-foreground">
          Kräuter<span className="text-accent">Express</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-primary-foreground/80 font-body font-medium hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+491777457395"
            className="bg-accent text-accent-foreground px-5 py-2 rounded-lg font-body font-semibold hover:brightness-110 transition-all"
          >
            Anrufen
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary/95 backdrop-blur-md border-t border-primary-foreground/10 px-6 py-6 space-y-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-primary-foreground/80 font-body font-medium text-lg hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+491777457395"
            className="block text-center bg-accent text-accent-foreground px-5 py-3 rounded-lg font-body font-semibold"
          >
            Anrufen
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
