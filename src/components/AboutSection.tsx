import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Heart, Calendar, Star } from "lucide-react";

const stats = [
  { icon: Heart, value: "200+", label: "Weddings Planned" },
  { icon: Calendar, value: "12", label: "Years Experience" },
  { icon: Award, value: "15+", label: "Industry Awards" },
  { icon: Star, value: "5.0", label: "Client Rating" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-romantic">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-romantic">
              <img
                src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800"
                alt="Wedding planner at work"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blush rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-gold rounded-2xl -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Meet Your Planner
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
              Hello, I'm Roslina Juri
            </h2>
            <div className="w-16 h-px bg-gold mb-6" />

            <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
              <p>
                Wedding & Romance’s approach to event planning is personalised and our service is tailored to our clients’ 
                individual needs. This reflects the personality and essence of each client. 
                We oversee and execute every aspect of your event, allowing you to fully participate in your own wedding.
              </p>
              <p>
                We take on only one wedding on any given weekend and a certain number of events per year. 
                We limit the number of events we work on to ensure that our clients receive the attention and outcome they deserve.
              </p>
              <p>
                Wedding & Romance is an independent event planning company. 
                We are proud of our reputation and are privileged to work alongside the most respected companies in the wedding industry from 
                Singapore as well as Malaysia and Indonesia. 
                These companies share our passion, commitment, and high standards of service excellence.
              </p>
            </div>

            <p className="font-serif text-xl text-foreground italic mt-8 mb-8">
              “People always think, that a wedding planner takes control of the wedding and the whole wedding planning process. 
              I believe in personalising each wedding event by listening to my clients’ wedding vision, 
              and recommending the best vendors to match their needs. It is not about me, but rather bringing out my clients’ 
              personalities and styles to showcase on their wedding day.”
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-5 h-5 text-gold mx-auto mb-2" />
                  <p className="font-serif text-2xl text-foreground">{stat.value}</p>
                  <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
