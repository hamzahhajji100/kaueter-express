import rosmarinImg from "@/assets/rosmarin.png";
import minzeSalbeiImg from "@/assets/minze-salbei.png";
import kurkumaImg from "@/assets/kurkuma.png";
import { Leaf } from "lucide-react";

const categories = [
  {
    title: "Schnittkräuter",
    image: minzeSalbeiImg,
    items: ["Basilikum", "Petersilie", "Schnittlauch", "Koriander", "Dill", "Minze", "Salbei", "Estragon", "Bärlauch", "Thymian", "Rosmarin", "Oregano", "Majoran", "Liebstöckel", "Kresse", "Wildkräuter"],
  },
  {
    title: "Topfkräuter",
    image: rosmarinImg,
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

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group bg-background rounded-2xl overflow-hidden transition-all duration-300"
              style={{ boxShadow: "var(--card-shadow)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow)")}
            >
              <div className="overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={600}
                  height={400}
                />
              </div>
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
