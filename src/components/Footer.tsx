import logoImg from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/60 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={logoImg} alt="Kräuter Express Logo" className="h-16 object-contain" />
        <p className="font-body text-sm text-center md:text-right">
          © {new Date().getFullYear()} Kräuterhandel Kräuter Express · Ahmed Bouklata · Köln
        </p>
      </div>
    </footer>
  );
};

export default Footer;
