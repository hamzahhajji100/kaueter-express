import { Link } from "react-router-dom";
import logoImg from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/60 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={logoImg} alt="Kräuter Express Logo" className="h-16 object-contain" />
        <div className="text-center md:text-right space-y-2">
          <div className="flex items-center gap-4 justify-center md:justify-end font-body text-sm">
            <Link to="/impressum" className="hover:text-background transition-colors">
              Impressum
            </Link>
            <span className="text-background/30">|</span>
            <Link to="/datenschutz" className="hover:text-background transition-colors">
              Datenschutz
            </Link>
          </div>
          <p className="font-body text-sm">
            © {new Date().getFullYear()} Kräuter Express GmbH · Ahmed Bouklata · Köln
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
