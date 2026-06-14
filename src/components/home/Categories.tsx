"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  { name: "Necklaces", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2000&auto=format&fit=crop", span: "md:col-span-2 md:row-span-2" },
  { name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2000&auto=format&fit=crop", span: "col-span-1" },
  { name: "Bangles", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2000&auto=format&fit=crop", span: "col-span-1" },
  { name: "Bridal Sets", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=2000&auto=format&fit=crop", span: "col-span-1" },
  { name: "Rings", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=2000&auto=format&fit=crop", span: "col-span-1" },
];

export default function Categories() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-playfair font-bold tracking-tight mb-4"
            >
              Shop by Category
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground font-manrope text-lg"
            >
              Explore our exquisite collection of authentic Indian jewelry, from traditional bridal sets to contemporary everyday elegance.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 md:mt-0"
          >
            <Link href="/categories" className="group flex items-center gap-2 text-accent font-medium hover:text-primary transition-colors">
              View All Categories
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${category.span}`}
            >
              <Link href="/shop" className="absolute inset-0 z-30">
                <span className="sr-only">Shop {category.name}</span>
              </Link>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                <h3 className="text-white text-2xl font-playfair font-bold tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {category.name}
                </h3>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2">
                  <span className="inline-flex items-center text-sm font-medium text-white/90 uppercase tracking-wider">
                    Explore <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
