"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-primary rounded-[2.5rem] overflow-hidden relative shadow-2xl"
        >
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
          
          <div className="relative z-10 px-6 py-16 md:py-24 md:px-16 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-accent" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-4">
              Get Exclusive Offers
            </h2>
            <p className="text-gray-300 font-manrope text-lg mb-10 max-w-lg">
              Subscribe to our newsletter to receive updates on new arrivals, special promotions, and insider-only discounts.
            </p>
            
            <form className="w-full max-w-md relative flex items-center" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full h-14 pl-6 pr-32 rounded-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus-visible:ring-accent"
                required
              />
              <Button 
                type="submit" 
                className="absolute right-1 top-1 bottom-1 h-12 rounded-full bg-accent hover:bg-accent/90 text-white px-6 transition-all"
              >
                Subscribe
              </Button>
            </form>
            
            <p className="text-xs text-gray-400 mt-4 font-manrope">
              By subscribing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
