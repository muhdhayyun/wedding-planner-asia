import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";

const hotels = [
  { name: "Four Points by Sheraton, Riverview", image: "/hotels/Four Points.png" },
  { name: "Furama Riverfront", image: "/hotels/Furama.png?v=2" },
  { name: "Grand Copthorne Waterfront", image: "/hotels/Grand Copthrone.png" },
  { name: "PARKROYAL on Beach Road", image: "/hotels/Parkroyal.png" },
  { name: "Ginger", image: "/hotels/Ginger.png" }
];

export const HotelsSection = ({ bgColor = "bg-slate-900", bgHex, cardBgColorHex: _cardBgColorHex }: { bgColor?: string; bgHex?: string; cardBgColorHex?: string }) => {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current || !containerRef.current) return;
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(scrollRef.current.scrollLeft);
    containerRef.current.style.cursor = 'grabbing';
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.clientX;
    const walk = (startX - x) * 2;
    scrollRef.current.scrollLeft = scrollLeft + walk;
  }, [isDragging, startX, scrollLeft]);

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      if (containerRef.current) {
        containerRef.current.style.cursor = 'grab';
      }
    }
  }, [isDragging]);

  return (
    <section id="hotels" className={`py-0 ${bgColor} text-white overflow-hidden`} style={bgHex ? { backgroundColor: bgHex } : {}}>
      <div 
        ref={containerRef}
        className="w-full px-2 cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          ref={scrollRef}
          className="overflow-x-auto py-4 scrollbar-hide"
        >
          <div ref={ref} className="flex flex-nowrap items-center justify-center gap-[1.53rem] w-max mx-auto">
            {hotels.map((hotel, index) => {
              const isCardless = hotel.name === "Four Points by Sheraton, Riverview" || hotel.name === "Furama Riverfront";
              const isSemiCardless = isCardless;
              
              return (
              <motion.div
                key={hotel.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 h-[210px] flex items-center justify-center"
              >
                {hotel.image ? (
                  <img 
                    src={hotel.image} 
                    alt={hotel.name}
                    className="max-h-[195px] w-auto object-contain"
                  />
                ) : (
                  <p className="text-xl md:text-2xl font-medium whitespace-nowrap text-center">{hotel.name}</p>
                )}
              </motion.div>
            );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
