import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CalendarHeart, Palette, Users, MapPin, Sparkles, Gift } from "lucide-react";

const services = [
  {
    icon: CalendarHeart,
    title: "The Coordination",
    description: "For the couple that is planning their own wedding and has confirmed all the wedding vendors but wants a wedding specialist to coordinate and manage all the details of the wedding day.",
    features: ["Timeline management", "Vendor coordination", "Budget planning", "Day-of coordination"],
  },
  {
    icon: Palette,
    title: "The Partial Planning",
    description: "For the couple who has begun planning parts of their wedding but is now overwhelmed with all the details and wants a wedding specialist to assist with some vendor referrals, provide professional advice, and also coordinate and manage the details of the wedding day.",
    features: ["Mood boards", "Floral design", "Tablescape styling", "Lighting design"],
  },
  {
    icon: Users,
    title: "The Full Planning",
    description: "For the couple that has limited or no time to plan and coordinate all the details and wants a wedding specialist to take them through the entire wedding planning process, focus on design and décor, assemble their team of vendors, provide unlimited professional advice, and manage every detail of the wedding day.",
    features: ["Vendor recommendations", "Timeline creation", "Month-of support", "Rehearsal coordination"],
  },
  {
    icon: MapPin,
    title: "The Destination Planning",
    description: "This is designed for couples who do not have time to plan their own overseas wedding and need a wedding planner to oversee the process and guide them through all of the decisions they must make. Every aspect of the wedding is carefully planned and orchestrated, and this may include additional activities like a welcome reception, a rehearsal dinner, and a post-wedding brunch for all of the guests.",
    features: ["Location scouting", "Travel coordination", "Local vendor sourcing", "Guest experience"],
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
          <p className="font-sans text-muted-foreground max-w-[45rem] mx-auto text-justify text-lg">
            We offer our clients several levels of services which include actual wedding day coordination, partial wedding planning and coordination, or producing and executing the entire wedding event. No matter which service you select, we will do our best to ensure that you have a fabulous wedding event. We absolutely love the details and feel that our clients deserve the personalised events.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
        <p className="font-sans text-muted-foreground leading-relaxed mb-4 text-justify">
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
