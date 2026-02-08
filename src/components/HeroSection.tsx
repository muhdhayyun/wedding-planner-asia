import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-planner.jpg";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elegant wedding reception"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/40 to-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <Sparkles className="w-4 h-4 text-gold-light" />
          <span className="font-serif text-sm md:text-base tracking-[0.3em] uppercase text-primary-foreground/80">
            Established in 2005
          </span>
          <Sparkles className="w-4 h-4 text-gold-light" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground mb-6 leading-tight"
        >
          Wedding & Romance
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-24 h-px bg-gold mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-sans text-lg md:text-xl text-primary-foreground/90 mb-4 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting unforgettable celebrations with elegance, 
          passion, and meticulous attention to every detail.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="font-serif text-base md:text-lg text-gold-light italic mb-12"
        >
          "Where dreams become timeless memories"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex justify-center"
        >
          <Button
            variant="hero"
            size="xl"
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Start Planning Your Day
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
