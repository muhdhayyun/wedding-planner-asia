import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CalendarHeart, Palette, Users, MapPin, Sparkles, Gift } from "lucide-react";

const services = [
  {
    icon: CalendarHeart,
    title: "Full Planning",
    description: "From engagement to 'I do' — we handle every detail so you can enjoy the journey.",
    features: ["Timeline management", "Vendor coordination", "Budget planning", "Day-of coordination"],
  },
  {
    icon: Palette,
    title: "Design & Styling",
    description: "Transform your vision into a breathtaking reality with our creative design expertise.",
    features: ["Mood boards", "Floral design", "Tablescape styling", "Lighting design"],
  },
  {
    icon: Users,
    title: "Partial Planning",
    description: "Perfect for couples who've started planning but need expert guidance to finish strong.",
    features: ["Vendor recommendations", "Timeline creation", "Month-of support", "Rehearsal coordination"],
  },
  {
    icon: MapPin,
    title: "Destination Weddings",
    description: "Dream of saying 'I do' somewhere magical? We'll make it happen seamlessly.",
    features: ["Location scouting", "Travel coordination", "Local vendor sourcing", "Guest experience"],
  },
  {
    icon: Sparkles,
    title: "Day-of Coordination",
    description: "Relax on your big day knowing every detail is in capable, caring hands.",
    features: ["Vendor management", "Timeline execution", "Emergency handling", "Guest coordination"],
  },
  {
    icon: Gift,
    title: "Special Touches",
    description: "Elevate your celebration with unique, personalized elements that wow guests.",
    features: ["Welcome gifts", "Custom stationery", "Signature cocktails", "Entertainment booking"],
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
            Our Services
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            Every love story deserves a celebration as unique as the couple. 
            We offer tailored services to bring your dream wedding to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: {
    icon: React.ElementType;
    title: string;
    description: string;
    features: string[];
  };
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-card rounded-2xl p-8 h-full shadow-soft hover:shadow-romantic transition-all duration-300 hover:-translate-y-1 border border-border/50">
        <div className="w-14 h-14 bg-blush rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <Icon className="w-6 h-6 text-blush-dark" />
        </div>
        <h3 className="font-serif text-2xl text-foreground mb-3">{service.title}</h3>
        <p className="font-sans text-muted-foreground leading-relaxed mb-4">
          {service.description}
        </p>
        <ul className="space-y-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
