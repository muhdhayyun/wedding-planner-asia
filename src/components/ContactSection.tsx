import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Send, Check, Mail, Phone, MapPin, Instagram } from "lucide-react";
import { toast } from "sonner";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    weddingDate: "",
    venue: "",
    guestCount: "",
    budget: "",
    howHeard: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }
    setIsSubmitted(true);
    toast.success("Thank you! We'll be in touch soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-romantic">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Let's Create Magic
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
            Start Your Journey
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your dream wedding to life? We'd love to hear your story. 
            Fill out the form below and we'll be in touch within 48 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-champagne rounded-2xl p-4 h-full">
              <h3 className="font-serif text-2xl text-foreground mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blush rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-blush-dark" />
                  </div>
                  <div>
                    <p className="font-sans text-sm text-muted-foreground mb-1">Email</p>
                    <p className="font-sans text-foreground">info@weddingandromance.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blush rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-blush-dark" />
                  </div>
                  <div>
                    <p className="font-sans text-sm text-muted-foreground mb-1">Phone</p>
                    <p className="font-sans text-foreground">+65 93865465</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blush rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-blush-dark" />
                  </div>
                  <div>
                    <p className="font-sans text-sm text-muted-foreground mb-1">Consultation</p>
                    <p className="font-sans text-foreground">
                      Reserve a complimentary 45-minute consultation through <a href="https://calendly.com/weddingandromance" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Calendly</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blush rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-4 h-4 text-blush-dark" />
                  </div>
                  <div>
                    <p className="font-sans text-sm text-muted-foreground mb-1">Instagram</p>
                    <p className="font-sans text-foreground">@weddingandromance</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="font-serif text-lg text-foreground italic">
                  "Every great celebration begins with a conversation."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-1"
          >
            {isSubmitted ? (
              <div className="bg-card rounded-2xl p-12 text-center shadow-romantic border border-border/50 h-full flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-sage rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-sage-dark" />
                </div>
                <h3 className="font-serif text-3xl text-foreground mb-4">
                  Message Received!
                </h3>
                <p className="font-sans text-muted-foreground max-w-md">
                  Thank you for reaching out! We're excited to learn more about 
                  your special day. Expect to hear from us within 48 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl p-8 md:p-10 shadow-romantic border border-border/50"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full name"
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
                  <div>
                    <label className="block font-sans text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+65 9123 4567"
                      className="bg-background border-border focus:border-gold focus:ring-gold/20"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-sm font-medium text-foreground mb-2">
                      Wedding Date
                    </label>
                    <Input
                      type="date"
                      name="weddingDate"
                      value={formData.weddingDate}
                      onChange={handleChange}
                      className="bg-background border-border focus:border-gold focus:ring-gold/20"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-sm font-medium text-foreground mb-2">
                      Venue (if known)
                    </label>
                    <Input
                      name="venue"
                      value={formData.venue}
                      onChange={handleChange}
                      placeholder="Venue name or location"
                      className="bg-background border-border focus:border-gold focus:ring-gold/20"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-sm font-medium text-foreground mb-2">
                      Guest Count
                    </label>
                    <select
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground focus:border-gold focus:ring-1 focus:ring-gold/20 outline-none transition-colors"
                    >
                      <option value="">Select range...</option>
                      <option value="under50">Under 50</option>
                      <option value="50-100">50 - 100</option>
                      <option value="100-150">100 - 150</option>
                      <option value="150-200">150 - 200</option>
                      <option value="200+">200+</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block font-sans text-sm font-medium text-foreground mb-2">
                      Tell Us About Your Vision
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your wedding dreams, style preferences, or any questions you have..."
                      rows={4}
                      className="bg-background border-border focus:border-gold focus:ring-gold/20 resize-none"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="romantic"
                  size="xl"
                  className="w-full mt-8"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Inquiry
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
