import { Truck, Award, Globe, Clock } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Qualität",
    desc: "Nur die besten Kräuter aus Deutschland, Italien, Spanien & Marokko",
  },
  {
    icon: Globe,
    title: "Internationale Beschaffung",
    desc: "Flugware aus Äthiopien & Kenia, Saisonware aus dem Mittelmeerraum",
  },
  {
    icon: Truck,
    title: "Abholung vor Ort",
    desc: "Direkt im ABA Frischezentrum Köln-Gremberghoven abholbereit",
  },
  {
    icon: Clock,
    title: "Täglich frisch",
    desc: "Tagesfrische Ware für Gastro, Einzelhandel & Wochenmärkte",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-body font-semibold uppercase tracking-widest text-sm mb-3">
            Warum Kräuter Express
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Ihr Vorteil
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.title} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <f.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground font-body">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
