import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";

const hotels = [
  { name: "Four Points by Sheraton, Riverview", image: "/hotels/Four Points.png" },
  { name: "Furama Riverfront", image: "/hotels/Furama.png" },
  { name: "Grand Copthorne Waterfront", image: "/hotels/Grand Copthrone.png" },
  { name: "PARKROYAL on Beach Road", image: "/hotels/Parkroyal.png" },
  { name: "Ginger", image: "/hotels/Ginger.png" }
];

export const HotelsSection = ({ bgColor = "bg-slate-900", bgHex, cardBgColorHex }: { bgColor?: string; bgHex?: string; cardBgColorHex?: string }) => {
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
        className="w-full px-4 cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          ref={scrollRef}
          className="overflow-x-auto py-9 scrollbar-hide"
        >
          <div ref={ref} className="flex flex-nowrap items-center justify-center gap-6 w-max mx-auto">
            {hotels.map((hotel, index) => {
              const isCardless = hotel.name === "Four Points by Sheraton, Riverview" || hotel.name === "Furama Riverfront";
              
              return (
              <motion.div
                key={hotel.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={!isCardless ? "transition-colors duration-300 px-4 py-4 rounded-lg border hover:border-rose-400 flex-shrink-0" : "flex-shrink-0"}
                style={!isCardless ? (cardBgColorHex ? { 
                  backgroundColor: cardBgColorHex, 
                  borderColor: "rgba(0,0,0,0.2)",
                } : {
                  backgroundColor: "#1e293b",
                  borderColor: "#334155"
                }) : {}}
              >
                {hotel.image ? (
                  <img 
                    src={hotel.image} 
                    alt={hotel.name}
                    className={hotel.name === "Furama Riverfront" ? "h-[128px] w-auto object-contain" : hotel.name === "Grand Copthorne Waterfront" || hotel.name === "PARKROYAL on Beach Road" ? "h-[178px] w-auto object-contain" : "h-[170px] w-auto object-contain"}
                  />
                ) : (
                  <p className="text-xl md:text-2xl font-medium whitespace-nowrap">{hotel.name}</p>
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
