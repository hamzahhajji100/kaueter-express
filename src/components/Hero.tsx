import heroBg from "@/assets/hero-bg.jpg";
import { Phone, Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Frische Kräuter"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-primary-foreground/70 font-body uppercase tracking-[0.3em] text-sm mb-6 animate-fade-in">
          Seit 2009 · Köln
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 animate-fade-up leading-tight">
          Kräuter
          <span className="block text-accent">Express</span>
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl font-body max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Ihr Spezialist für frische Schnitt- und Topfkräuter am ABA Frischezentrum Köln-Gremberghoven
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="tel:+491777457395"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-body font-semibold text-lg hover:brightness-110 transition-all"
          >
            <Phone className="w-5 h-5" />
            Jetzt anrufen
          </a>
          <a
            href="mailto:Kraeuter.express@yahoo.de"
            className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-body font-semibold text-lg hover:bg-primary-foreground/10 transition-all"
          >
            <Mail className="w-5 h-5" />
            E-Mail senden
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
