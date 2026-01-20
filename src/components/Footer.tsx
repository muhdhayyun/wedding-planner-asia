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
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-gold" />
              <span className="font-serif text-2xl text-foreground">
                Éternel Events
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

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="font-sans text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-4">Contact</h4>
            <div className="space-y-3 font-sans text-muted-foreground">
              <p>hello@eternelevents.com</p>
              <p>+1 (555) 123-4567</p>
              <p>
                123 Bridal Lane, Suite 200<br />
                Los Angeles, CA 90001
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-sm text-muted-foreground">
            © 2024 Éternel Events. All rights reserved.
          </p>
          <p className="font-sans text-sm text-muted-foreground">
            Crafted with love for love.
          </p>
        </div>
      </div>
    </footer>
  );
};
