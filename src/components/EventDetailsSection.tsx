import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Utensils, Music } from "lucide-react";

const events = [
  {
    icon: Clock,
    title: "Ceremony",
    time: "4:00 PM",
    location: "Villa Catureglio Gardens",
    description: "Join us as we exchange vows surrounded by the rolling Tuscan hills and centuries-old olive groves.",
  },
  {
    icon: Utensils,
    title: "Dinner Reception",
    time: "6:00 PM",
    location: "Villa Catureglio Terrace",
    description: "A celebration of love and Italian cuisine under the stars, featuring locally sourced ingredients and family recipes.",
  },
  {
    icon: Music,
    title: "Dancing & Celebration",
    time: "9:00 PM",
    location: "Villa Catureglio Courtyard",
    description: "Dance the night away under string lights and the Tuscan sky. Comfortable shoes recommended!",
  },
];

export const EventDetailsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="details" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Join Us In Celebration
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
            Wedding Day Details
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          
          {/* Venue Info */}
          <div className="flex items-center justify-center gap-2 text-sage-dark">
            <MapPin className="w-5 h-5" />
            <span className="font-sans text-lg">Villa Catureglio, Tuscany, Italy</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={event.title} event={event} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-champagne rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl text-foreground mb-4">
              Dress Code
            </h3>
            <p className="font-sans text-muted-foreground mb-6">
              Formal Attire — Think elegant evening wear in soft, romantic colors. 
              The ceremony will be outdoors, so please plan accordingly.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-blush rounded-full text-sm font-sans text-foreground">Blush</span>
              <span className="px-4 py-2 bg-sage rounded-full text-sm font-sans text-foreground">Sage</span>
              <span className="px-4 py-2 bg-gold-light rounded-full text-sm font-sans text-foreground">Gold</span>
              <span className="px-4 py-2 bg-cream border border-border rounded-full text-sm font-sans text-foreground">Ivory</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface EventCardProps {
  event: {
    icon: React.ElementType;
    title: string;
    time: string;
    location: string;
    description: string;
  };
  index: number;
}

const EventCard = ({ event, index }: EventCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = event.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div className="bg-card rounded-2xl p-8 h-full shadow-soft hover:shadow-romantic transition-all duration-300 hover:-translate-y-1 border border-border/50">
        <div className="w-14 h-14 bg-blush rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <Icon className="w-6 h-6 text-blush-dark" />
        </div>
        <h3 className="font-serif text-2xl text-foreground mb-2">{event.title}</h3>
        <p className="font-sans text-gold font-medium mb-1">{event.time}</p>
        <p className="font-sans text-sm text-muted-foreground mb-4">{event.location}</p>
        <p className="font-sans text-muted-foreground leading-relaxed">
          {event.description}
        </p>
      </div>
    </motion.div>
  );
};
