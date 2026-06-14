"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-playfair font-bold tracking-tight text-center mb-16"
        >
          Our Story
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100"
          >
            <img 
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=2070&auto=format&fit=crop" 
              alt="M Pooja Accessories Store" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6 text-lg text-muted-foreground font-manrope"
          >
            <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">A Legacy of Elegance</h2>
            <p>
              Founded with a passion for heritage, M Pooja Accessories began with a simple yet ambitious vision: to celebrate the rich traditions of Indian jewelry while embracing modern aesthetics.
            </p>
            <p>
              We believe that true luxury lies in the details. Every piece in our collection—from heavy Kundan bridal sets to everyday gold essentials—is meticulously handcrafted by master artisans to ensure authenticity and unmatched quality.
            </p>
            <p>
              Our mission is to empower individuals to express their cultural pride with elegance. Whether you're dressing for a grand wedding or a festive celebration, M Pooja Accessories provides the perfect finishing touch.
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="bg-primary text-primary-foreground rounded-3xl p-10 md:p-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-playfair font-bold mb-12"
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Authentic Craftsmanship", desc: "We partner directly with traditional Karigars (artisans) across India to preserve age-old jewelry-making techniques." },
              { title: "Ethical Sourcing", desc: "We are committed to ethically sourcing our stones and gold, ensuring transparency and fairness in every step." },
              { title: "Bridal Excellence", desc: "Your special day is our priority. We provide personalized consultations to curate the perfect bridal trousseau." }
            ].map((value, index) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-accent rounded-full" />
                </div>
                <h3 className="text-xl font-playfair font-semibold">{value.title}</h3>
                <p className="text-white/70 font-manrope">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
