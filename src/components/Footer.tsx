import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-champagne border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-blush-dark" />
          <span className="font-serif text-2xl text-foreground">E & J</span>
          <Heart className="w-5 h-5 text-blush-dark" />
        </div>
        <p className="font-sans text-sm text-muted-foreground mb-2">
          October 12th, 2025 • Tuscany, Italy
        </p>
        <p className="font-sans text-xs text-muted-foreground">
          Made with love for our special day
        </p>
      </div>
    </footer>
  );
};
