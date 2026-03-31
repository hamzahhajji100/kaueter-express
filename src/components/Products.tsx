import schnittlauchImg from "@/assets/schnittlauch.png";
import minzeImg from "@/assets/minze.png";
import rosmarinImg from "@/assets/rosmarin-neu.png";
import basilikumImg from "@/assets/basilikum.png";
import pimpinelleImg from "@/assets/pimpinelle.png";
import dillImg from "@/assets/dill.png";
import baerlauchImg from "@/assets/baerlauch.png";
import korianderImg from "@/assets/koriander.png";
import thymianImg from "@/assets/thymian.png";
import kurkumaImg from "@/assets/kurkuma.png";
import estragonImg from "@/assets/estragon.png";
import liebstoeckelImg from "@/assets/liebstoeckel.png";
import thaiBasilikumImg from "@/assets/thai-basilikum.png";
import sauerampferImg from "@/assets/sauerampfer.png";
import grueneSosseImg from "@/assets/gruene-sosse.png";
import zitronenthymianImg from "@/assets/zitronenthymian.png";
import petersilieGlattImg from "@/assets/petersilie-glatt.png";
import salbeiImg from "@/assets/salbei.png";
import krausePetersilieImg from "@/assets/krause-petersilie.png";
import majoranImg from "@/assets/majoran.png";
import oreganoImg from "@/assets/oregano.png";
import kresseGruenImg from "@/assets/kresse-gruen.png";
import kresseRotImg from "@/assets/kresse-rot.png";
import zitronenmelisseImg from "@/assets/zitronenmelisse.png";
import { Leaf } from "lucide-react";

const herbs = [
  { name: "Schnittlauch", image: schnittlauchImg },
  { name: "Minze", image: minzeImg },
  { name: "Rosmarin", image: rosmarinImg },
  { name: "Basilikum", image: basilikumImg },
  { name: "Pimpinelle", image: pimpinelleImg },
  { name: "Dill", image: dillImg },
  { name: "Bärlauch", image: baerlauchImg },
  { name: "Koriander", image: korianderImg },
  { name: "Thymian", image: thymianImg },
  { name: "Estragon", image: estragonImg },
  { name: "Liebstöckel", image: liebstoeckelImg },
  { name: "Thai-Basilikum", image: thaiBasilikumImg },
  { name: "Sauerampfer", image: sauerampferImg },
  { name: "Grüne Soße", image: grueneSosseImg },
  { name: "Zitronenthymian", image: zitronenthymianImg },
  { name: "Petersilie glatt", image: petersilieGlattImg },
  { name: "Salbei", image: salbeiImg },
  { name: "Krause Petersilie", image: krausePetersilieImg },
  { name: "Majoran", image: majoranImg },
  { name: "Oregano", image: oreganoImg },
  { name: "Kresse grün", image: kresseGruenImg },
  { name: "Kresse rot", image: kresseRotImg },
  { name: "Zitronenmelisse", image: zitronenmelisseImg },
];

const categories = [
  {
    title: "Schnittkräuter",
    items: ["Basilikum", "Petersilie", "Schnittlauch", "Koriander", "Dill", "Minze", "Salbei", "Estragon", "Bärlauch", "Thymian", "Rosmarin", "Oregano", "Majoran", "Liebstöckel", "Kresse", "Pimpinelle", "Wildkräuter"],
  },
  {
    title: "Topfkräuter",
    items: ["Basilikum", "Rosmarin", "Thymian", "Salbei", "Minze", "Koriander", "Schnittlauch", "Petersilie", "Majoran", "Oregano", "Zitronenmelisse"],
  },
  {
    title: "Gemüse & Spezialitäten",
    image: kurkumaImg,
    items: ["Kurkuma", "Ingwer", "Lauchzwiebeln", "Staudensellerie", "Mangold", "Rote Bete", "Chili", "Radieschen", "Spinat", "Meerrettich", "Suppengrün", "Möhren-Bund"],
  },
];

const Products = () => {
  return (
    <section id="sortiment" className="py-24 px-6" style={{ background: "var(--section-gradient)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-body font-semibold uppercase tracking-widest text-sm mb-3">
            Unser Sortiment
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frische Vielfalt
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Über 60 Artikel aus regionalem Anbau und internationaler Beschaffung – täglich frisch am Frischezentrum Köln.
          </p>
        </div>

        {/* Herb photo gallery */}
        <div className="mb-16">
          <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center flex items-center justify-center gap-2">
            <Leaf className="w-5 h-5 text-accent" />
            Unsere Kräuter
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {herbs.map((herb) => (
              <div key={herb.name} className="group text-center">
                <div className="bg-background rounded-xl p-3 mb-2 transition-all duration-300 hover:shadow-lg">
                  <img
                    src={herb.image}
                    alt={herb.name}
                    className="w-full aspect-square object-contain group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    width={200}
                    height={200}
                  />
                </div>
                <span className="text-sm font-body font-medium text-foreground">{herb.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group bg-background rounded-2xl overflow-hidden transition-all duration-300"
              style={{ boxShadow: "var(--card-shadow)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow)")}
            >
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-accent" />
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-body"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
