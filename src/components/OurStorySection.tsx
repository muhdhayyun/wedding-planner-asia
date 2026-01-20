import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart } from "lucide-react";

const storyMilestones = [
  {
    date: "June 2018",
    title: "First Meeting",
    description:
      "We met at a friend's summer barbecue. James spilled lemonade on Emma's dress, and somehow that led to our first conversation that lasted until sunrise.",
  },
  {
    date: "August 2018",
    title: "First Date",
    description:
      "A simple coffee date turned into an impromptu adventure through the city's hidden bookshops and ended with gelato by the river.",
  },
  {
    date: "December 2020",
    title: "Moving In",
    description:
      "We took the leap and found our cozy apartment with the big windows Emma always dreamed of and the reading nook James pretends he uses.",
  },
  {
    date: "March 2024",
    title: "The Proposal",
    description:
      "On a misty morning in the Scottish Highlands, surrounded by ancient stones and rolling hills, James asked the question. She said yes before he even finished.",
  },
];

export const OurStorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" className="py-24 md:py-32 bg-romantic">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            How It All Began
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
            Our Love Story
          </h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          {storyMilestones.map((milestone, index) => (
            <TimelineItem
              key={milestone.date}
              milestone={milestone}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  milestone: {
    date: string;
    title: string;
    description: string;
  };
  index: number;
  isLeft: boolean;
}

const TimelineItem = ({ milestone, index, isLeft }: TimelineItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex flex-col md:flex-row items-center mb-12 md:mb-16 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Content Card */}
      <div
        className={`w-full md:w-5/12 ${isLeft ? "md:pr-12" : "md:pl-12"}`}
      >
        <div className="bg-card rounded-xl p-6 md:p-8 shadow-soft hover:shadow-romantic transition-shadow duration-300">
          <span className="font-sans text-xs tracking-wider uppercase text-gold font-medium">
            {milestone.date}
          </span>
          <h3 className="font-serif text-2xl text-foreground mt-2 mb-3">
            {milestone.title}
          </h3>
          <p className="font-sans text-muted-foreground leading-relaxed">
            {milestone.description}
          </p>
        </div>
      </div>

      {/* Center Dot */}
      <div className="hidden md:flex w-2/12 justify-center">
        <div className="w-10 h-10 bg-blush rounded-full flex items-center justify-center shadow-romantic">
          <Heart className="w-4 h-4 text-blush-dark" />
        </div>
      </div>

      {/* Spacer */}
      <div className="hidden md:block w-5/12" />
    </motion.div>
  );
};
