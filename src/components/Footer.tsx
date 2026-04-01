const Footer = () => {
  return (
    <footer className="bg-foreground text-background/60 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={logoImg} alt="Kräuter Express Logo" className="h-10 object-contain" />
        <p className="font-body text-sm">
          © {new Date().getFullYear()} Kräuterhandel Kräuter Express · Ahmed Bouklata · Köln
        </p>
      </div>
    </footer>
  );
};

export default Footer;
