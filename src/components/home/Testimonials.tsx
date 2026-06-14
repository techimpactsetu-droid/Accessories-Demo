"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Fashion Enthusiast",
    content: "The quality of the leather wallet I purchased is absolutely phenomenal. It feels premium and the craftsmanship is evident in every stitch. Highly recommend!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Verified Buyer",
    content: "I bought a chronograph watch for my husband's anniversary and he hasn't taken it off since. The packaging was luxurious and the watch itself is a masterpiece.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Style Blogger",
    content: "These aviator sunglasses have become my daily essential. They provide excellent UV protection without compromising on the sleek, modern aesthetic.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-background overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-playfair font-bold tracking-tight mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-manrope text-lg"
          >
            Real reviews from our verified customers who have experienced the Luxe standard.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 z-20">
            <Button variant="outline" size="icon" className="rounded-full shadow-lg bg-white/80 backdrop-blur" onClick={prev}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 z-20">
            <Button variant="outline" size="icon" className="rounded-full shadow-lg bg-white/80 backdrop-blur" onClick={next}>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="overflow-hidden px-4 md:px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center relative"
              >
                <Quote className="w-16 h-16 text-accent/20 absolute top-8 left-8" />
                
                <div className="flex gap-1 mb-6 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-6 h-6 ${i < testimonials[currentIndex].rating ? "fill-accent text-accent" : "fill-gray-200 text-gray-200"}`} 
                    />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl font-manrope text-foreground/80 leading-relaxed mb-8 italic max-w-2xl">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-accent">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-playfair font-bold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-accent" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
