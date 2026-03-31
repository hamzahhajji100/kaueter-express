const Footer = () => {
  return (
    <footer className="bg-foreground text-background/60 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-xl font-bold text-background">
          Kräuter<span className="text-accent">Express</span>
        </p>
        <p className="font-body text-sm">
          © {new Date().getFullYear()} Kräuterhandel Kräuter Express · Ahmed Bouklata · Köln
        </p>
      </div>
    </footer>
  );
};

export default Footer;
