"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Truck, RefreshCw, CreditCard, Headphones } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Premium Quality",
    description: "Crafted from the finest materials for lasting elegance."
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Fast Shipping",
    description: "Free express delivery on all premium orders."
  },
  {
    icon: <RefreshCw className="w-8 h-8" />,
    title: "Easy Returns",
    description: "30-day hassle-free return policy for peace of mind."
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Secure Payments",
    description: "100% secure checkout with advanced encryption."
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Dedicated Support",
    description: "24/7 premium customer service at your fingertips."
  }
];

export default function Trust() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-playfair font-bold tracking-tight mb-4"
          >
            Why Shop With Us?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 font-manrope text-lg"
          >
            Experience the pinnacle of luxury shopping with our exclusive services.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-400 font-manrope leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
