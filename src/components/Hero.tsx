import heroBg from "@/assets/hero-bg.jpg";
import logoImg from "@/assets/logo.png";
import { Phone, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        {/* Logo prominent */}
        <div className="mb-8 animate-fade-in relative">
          {/* Warm glow behind logo */}
          <div
            className="absolute inset-0 mx-auto w-64 md:w-80 lg:w-96 h-24 md:h-32 top-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-40"
            style={{ background: "radial-gradient(ellipse, hsl(42, 85%, 52%) 0%, hsl(145, 45%, 22%) 60%, transparent 100%)" }}
          />
          <img
            src={logoImg}
            alt="Kräuter Express"
            className="relative mx-auto w-72 md:w-96 lg:w-[28rem]"
            style={{
              filter: "drop-shadow(0 0 30px hsla(42, 85%, 52%, 0.4)) drop-shadow(0 4px 20px hsla(0, 0%, 0%, 0.5))",
            }}
          />
        </div>

        <p className="text-primary-foreground/70 font-body uppercase tracking-[0.3em] text-sm mb-4 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          Seit 2009 · Köln
        </p>

        <p className="text-primary-foreground/85 text-lg md:text-xl font-body max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Ihr Spezialist für frische Schnitt- und Topfkräuter am ABA Frischezentrum Köln-Gremberghoven
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.45s" }}>
          <a
            href="tel:+491777457395"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-body font-bold text-lg hover:brightness-110 hover:scale-105 transition-all shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Jetzt anrufen
          </a>
          <a
            href="mailto:Kraeuter.express@yahoo.de"
            className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-lg hover:bg-primary-foreground/10 transition-all"
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
