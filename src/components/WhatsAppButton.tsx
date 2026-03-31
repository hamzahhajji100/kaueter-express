import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/491777457395?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Kr%C3%A4uter."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp kontaktieren"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      style={{ backgroundColor: "#25D366" }}
    >
      <MessageCircle className="w-8 h-8 text-background" fill="hsl(var(--background))" />
    </a>
  );
};

export default WhatsAppButton;
