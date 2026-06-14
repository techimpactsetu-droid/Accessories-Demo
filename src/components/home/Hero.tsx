"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const features = [
  "Handcrafted Designs",
  "Bridal Specialists",
  "Secure Payments",
  "Authentic Heritage"
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-background">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-background/90 md:bg-background/70 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 pt-10 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent font-medium tracking-wider text-sm mb-6 uppercase border border-accent/20">
              Authentic Indian Craftsmanship
            </span>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              Embrace Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Timeless Elegance</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-manrope mb-8 max-w-lg">
              Discover our exquisite collection of traditional and modern Indian jewelry, meticulously crafted to celebrate your unique heritage.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link href="/shop" className={buttonVariants({ size: "lg", className: "bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base" })}>
                Shop Collection <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/categories" className={buttonVariants({ size: "lg", variant: "outline", className: "h-14 px-8 text-base border-primary/20 hover:bg-accent/5" })}>
                Explore Categories
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                  className="flex items-center gap-2 text-sm font-medium text-foreground/80"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  {feature}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="w-full md:w-1/2 mt-16 md:mt-0 relative hidden md:block">
          {/* Main Hero Image Placeholder with Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
            className="relative w-full aspect-square max-w-lg mx-auto"
          >
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop" 
              alt="Traditional Kundan Necklace" 
              className="relative z-10 w-full h-full object-cover rounded-t-full shadow-2xl hover:scale-105 transition-transform duration-700 border-4 border-accent/20"
            />
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-background border border-border p-4 rounded-xl shadow-xl z-20"
            >
              <div className="text-sm font-bold text-foreground">Kundan</div>
              <div className="text-xs text-muted-foreground">Heritage</div>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-background border border-border p-4 rounded-xl shadow-xl z-20"
            >
              <div className="text-sm font-bold text-accent">Bridal</div>
              <div className="text-xs text-muted-foreground">Collection</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
