import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { label: "Sortiment", href: "#sortiment" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-2">
          <img
            src={logoImg}
            alt="Kräuter Express Logo"
            className={`transition-all duration-300 object-contain ${
              scrolled ? "h-12" : "h-14"
            }`}
          />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-primary-foreground/90 font-body font-semibold hover:text-accent transition-colors text-[15px]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+491777457395"
            className="bg-accent text-accent-foreground px-6 py-2.5 rounded-full font-body font-bold hover:brightness-110 hover:scale-105 transition-all shadow-md"
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
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary/98 backdrop-blur-md border-t border-primary-foreground/10 px-6 py-6 space-y-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-primary-foreground/90 font-body font-semibold text-lg hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+491777457395"
            className="block text-center bg-accent text-accent-foreground px-5 py-3 rounded-full font-body font-bold"
          >
            Anrufen
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
