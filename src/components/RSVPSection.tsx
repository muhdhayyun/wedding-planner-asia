import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Heart, Send, Check } from "lucide-react";
import { toast } from "sonner";

export const RSVPSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "1",
    attending: "",
    dietaryRestrictions: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.attending) {
      toast.error("Please fill in all required fields");
      return;
    }
    setIsSubmitted(true);
    toast.success("Thank you for your RSVP!");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="rsvp" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            We Hope You Can Join Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
            RSVP
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="font-sans text-muted-foreground">
            Please respond by <span className="text-gold font-medium">September 1st, 2025</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {isSubmitted ? (
            <div className="bg-card rounded-2xl p-12 text-center shadow-romantic border border-border/50">
              <div className="w-20 h-20 bg-sage rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-sage-dark" />
              </div>
              <h3 className="font-serif text-3xl text-foreground mb-4">
                Thank You!
              </h3>
              <p className="font-sans text-muted-foreground">
                We've received your RSVP and can't wait to celebrate with you!
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 md:p-12 shadow-romantic border border-border/50"
            >
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="bg-background border-border focus:border-gold focus:ring-gold/20"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="bg-background border-border focus:border-gold focus:ring-gold/20"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-sm font-medium text-foreground mb-2">
                      Will you be attending? *
                    </label>
                    <select
                      name="attending"
                      value={formData.attending}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground focus:border-gold focus:ring-1 focus:ring-gold/20 outline-none transition-colors"
                    >
                      <option value="">Select...</option>
                      <option value="yes">Joyfully Accept</option>
                      <option value="no">Regretfully Decline</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-sans text-sm font-medium text-foreground mb-2">
                      Number of Guests
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground focus:border-gold focus:ring-1 focus:ring-gold/20 outline-none transition-colors"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-sm font-medium text-foreground mb-2">
                    Dietary Restrictions
                  </label>
                  <Input
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    placeholder="Vegetarian, allergies, etc."
                    className="bg-background border-border focus:border-gold focus:ring-gold/20"
                  />
                </div>

                <div>
                  <label className="block font-sans text-sm font-medium text-foreground mb-2">
                    Message for the Couple
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your wishes or a note..."
                    rows={4}
                    className="bg-background border-border focus:border-gold focus:ring-gold/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="romantic"
                  size="xl"
                  className="w-full"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send RSVP
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
