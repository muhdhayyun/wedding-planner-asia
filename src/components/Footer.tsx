import { Sparkles, Instagram, Facebook, Mail } from "lucide-react";

const footerLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-16 bg-champagne border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 mb-12 max-w-2xl mx-auto md:ml-auto md:mr-[20%]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-serif text-2xl text-foreground">
                Wedding & Romance
              </span>
            </div>
            <p className="font-sans text-muted-foreground mb-6 max-w-xs">
              Crafting unforgettable celebrations with elegance, passion, and 
              meticulous attention to every detail.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-blush rounded-full flex items-center justify-center text-blush-dark hover:bg-blush-dark hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blush rounded-full flex items-center justify-center text-blush-dark hover:bg-blush-dark hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blush rounded-full flex items-center justify-center text-blush-dark hover:bg-blush-dark hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-4">Contact</h4>
            <div className="space-y-3 font-sans text-muted-foreground">
              <p>info@weddingandromance.com</p>
              <p>+65 93865465</p>
              <p>@weddingandromance</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="font-sans text-sm text-muted-foreground">
            © 2026 Wedding & Romance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
