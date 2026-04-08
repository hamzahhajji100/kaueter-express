import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="kontakt" className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-body font-semibold uppercase tracking-widest text-sm mb-3">
            Kontakt
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Besuchen Sie uns
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-1">Adresse</h3>
                <p className="text-primary-foreground/80 font-body">
                  Kräuterhandel Kräuter Express<br />
                  Josef-Linden-Weg 6<br />
                  51149 Köln (Gremberghoven)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-1">Telefon</h3>
                <a href="tel:+491777457395" className="text-primary-foreground/80 font-body hover:text-accent transition-colors text-lg">
                  +49 177 745 7395
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-1">E-Mail</h3>
                <a href="mailto:info@kraeuterexpress.com" className="text-primary-foreground/80 font-body hover:text-accent transition-colors text-lg">
                  info@kraeuterexpress.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-1">Standort</h3>
                <p className="text-primary-foreground/80 font-body">
                  ABA Frischezentrum<br />
                  Köln-Gremberghoven
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.5!2d7.035!3d50.905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf2357e8a4c0b5%3A0x0!2sJosef-Linden-Weg%206%2C%2051149%20K%C3%B6ln!5e0!3m2!1sde!2sde!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Standort Kräuter Express"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
