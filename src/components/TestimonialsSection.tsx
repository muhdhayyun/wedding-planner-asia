import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    couple: "Sarah & Michael",
    location: "Napa Valley Wedding",
    quote: "Sophia and her team made our wedding day absolutely perfect. Every detail was exactly as we dreamed, and we were free to enjoy every moment without a single worry.",
    image: "https://images.unsplash.com/photo-1623091411395-09e79fdbfcf3?w=400",
  },
  {
    id: 2,
    couple: "Emma & David",
    location: "Tuscan Destination Wedding",
    quote: "Planning a destination wedding seemed overwhelming until we found Éternel Events. They handled everything with such grace and professionalism. Our guests are still talking about it!",
    image: "https://images.unsplash.com/photo-1529635969203-0d2f84e2a5c0?w=400",
  },
  {
    id: 3,
    couple: "Jessica & Thomas",
    location: "NYC Rooftop Celebration",
    quote: "From our first meeting, we knew we were in incredible hands. The creativity, attention to detail, and genuine care for us as a couple shone through in every interaction.",
    image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-romantic">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Love Letters
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
            What Couples Say
          </h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-romantic border border-border/50">
            <Quote className="w-12 h-12 text-blush mx-auto mb-8" />
            
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-gold" />
              ))}
            </div>

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed text-center mb-8 italic">
                "{current.quote}"
              </p>

              <div className="flex flex-col items-center">
                <img
                  src={current.image}
                  alt={current.couple}
                  className="w-16 h-16 rounded-full object-cover mb-4 ring-2 ring-gold/30"
                />
                <p className="font-serif text-xl text-foreground mb-1">
                  {current.couple}
                </p>
                <p className="font-sans text-sm text-muted-foreground">
                  {current.location}
                </p>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-gold transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-gold transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-gold" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
