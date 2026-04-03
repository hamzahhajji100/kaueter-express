import ahmedImg from "@/assets/ahmed-hero.png";
import teamImg from "@/assets/team.jpeg";

const About = () => {
  return (
    <section id="ueber-uns" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-accent/10 rounded-2xl -rotate-3" />
          <img
            src={ahmedImg}
            alt="Ahmed Bouklata – der Kräuterkönig"
            className="relative rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
            loading="lazy"
            width={800}
            height={600}
          />
        </div>
        <div>
          <p className="text-accent font-body font-semibold uppercase tracking-widest text-sm mb-3">
            Über uns
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Der Kräuterkönig
            <span className="block text-primary">von Köln</span>
          </h2>
          <div className="space-y-4 text-muted-foreground font-body text-lg leading-relaxed">
            <p>
              Ahmed Bouklata – bekannt als <strong className="text-foreground">der Kräuterkönig</strong> – ist seit 2009 als Kräuterhändler in Köln tätig. Seit Anfang 2026 bietet er seine erstklassige Ware im neuen ABA Frischezentrum in Köln-Gremberghoven an.
            </p>
            <p>
              Mit einem breiten Sortiment an Schnitt- und Topfkräutern aus Deutschland, Italien, Spanien, Marokko sowie Flugware aus Äthiopien und Kenia bedient er Facheinzelhändler, Wochenmarkthändler, Gastronomen und eigenständige Supermärkte.
            </p>
            <p className="italic border-l-4 border-accent pl-4 text-foreground">
              „Die Qualität italienischer Kräuter ist unschlagbar – Jahr für Jahr bieten wir mehr Schnittkräuter italienischen Ursprungs an."
            </p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-accent font-body font-semibold uppercase tracking-widest text-sm mb-3">
            Unser Team
          </p>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            Gemeinsam für
            <span className="block text-primary">beste Qualität</span>
          </h3>
          <div className="space-y-4 text-muted-foreground font-body text-lg leading-relaxed">
            <p>
              Hinter Kräuter Express steht ein engagiertes Team, das jeden Morgen früh aufsteht, um frische Kräuter in Spitzenqualität zu liefern. Ob langjährige Mitarbeiter oder treue Kunden – bei uns zählt der persönliche Kontakt.
            </p>
            <p>
              Vertrauen, Herzlichkeit und Leidenschaft für frische Kräuter – das verbindet uns alle. Wir sind stolz auf die Beziehungen, die wir über die Jahre aufgebaut haben.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-accent/10 rounded-2xl rotate-2" />
          <img
            src={teamImg}
            alt="Das Kräuter Express Team mit Kunden im Frischezentrum"
            className="relative rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
            loading="lazy"
            width={800}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
