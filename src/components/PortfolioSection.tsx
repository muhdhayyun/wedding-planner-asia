import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, MapPin } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "Garden Romance",
    location: "Napa Valley, CA",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
    category: "Outdoor",
  },
  {
    id: 2,
    title: "Tuscan Dream",
    location: "Florence, Italy",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800",
    category: "Destination",
  },
  {
    id: 3,
    title: "Modern Elegance",
    location: "New York City",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800",
    category: "Urban",
  },
  {
    id: 4,
    title: "Coastal Bliss",
    location: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800",
    category: "Destination",
  },
  {
    id: 5,
    title: "Rustic Charm",
    location: "Vermont",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800",
    category: "Rustic",
  },
  {
    id: 6,
    title: "Ballroom Grandeur",
    location: "Beverly Hills, CA",
    image: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800",
    category: "Classic",
  },
];

export const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Our Work
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
            Featured Celebrations
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            Each wedding tells a unique story. Explore some of our favorite 
            celebrations and discover the magic we create.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={item.id}
              item={item}
              index={index}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <button
            className="absolute top-4 right-4 text-primary-foreground hover:text-gold transition-colors"
            onClick={() => setSelectedItem(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full aspect-video object-cover rounded-lg mb-4"
            />
            <div className="text-center">
              <h3 className="font-serif text-3xl text-primary-foreground mb-2">
                {selectedItem.title}
              </h3>
              <div className="flex items-center justify-center gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4" />
                <span className="font-sans">{selectedItem.location}</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

interface PortfolioCardProps {
  item: typeof portfolioItems[0];
  index: number;
  onClick: () => void;
}

const PortfolioCard = ({ item, index, onClick }: PortfolioCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.button
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative aspect-[4/5] overflow-hidden rounded-xl text-left"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="inline-block px-3 py-1 bg-gold/20 backdrop-blur-sm rounded-full text-xs font-sans uppercase tracking-wider text-primary-foreground mb-3">
          {item.category}
        </span>
        <h3 className="font-serif text-2xl text-primary-foreground mb-1">
          {item.title}
        </h3>
        <div className="flex items-center gap-2 text-primary-foreground/70">
          <MapPin className="w-4 h-4" />
          <span className="font-sans text-sm">{item.location}</span>
        </div>
      </div>
    </motion.button>
  );
};
