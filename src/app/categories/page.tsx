"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  { 
    id: "necklaces", 
    name: "Necklaces", 
    description: "Kundan, Polki, and Gold Necklaces.", 
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2000&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-2"
  },
  { 
    id: "earrings", 
    name: "Earrings", 
    description: "Jhumkas, Chandbalis, and Studs.", 
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2000&auto=format&fit=crop",
    span: "col-span-1"
  },
  { 
    id: "bangles", 
    name: "Bangles & Bracelets", 
    description: "Traditional temple and modern bangles.", 
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2000&auto=format&fit=crop",
    span: "col-span-1"
  },
  { 
    id: "bridal-sets", 
    name: "Bridal Sets", 
    description: "Complete heavy jewelry sets for brides.", 
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=2000&auto=format&fit=crop",
    span: "col-span-1"
  },
  { 
    id: "rings", 
    name: "Rings", 
    description: "Statement cocktail rings and engagement rings.", 
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=2000&auto=format&fit=crop",
    span: "col-span-1"
  },
  { 
    id: "mangalsutras", 
    name: "Mangalsutras", 
    description: "Sacred threads of love with modern diamond pendants.", 
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=2000&auto=format&fit=crop",
    span: "md:col-span-2"
  },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-playfair font-bold tracking-tight mb-6"
          >
            Collections
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground font-manrope max-w-2xl mx-auto"
          >
            Explore our diverse collections of authentic Indian jewelry, handcrafted to perfection for every occasion.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[300px]">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-3xl group cursor-pointer ${category.span}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-colors duration-500 z-10" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500 z-10" />
              
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                <h3 className="text-white text-3xl font-playfair font-bold tracking-wide mb-2">
                  {category.name}
                </h3>
                <p className="text-white/80 font-manrope text-sm md:text-base mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {category.description}
                </p>
                <Link 
                  href={`/shop?category=${category.name.toLowerCase()}`}
                  className="inline-flex items-center w-fit text-sm font-medium text-white bg-white/20 hover:bg-white/30 backdrop-blur-md px-4 py-2 rounded-full transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
                >
                  Shop Collection <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
