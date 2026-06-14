"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Eye, Star } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Royal Kundan Bridal Set",
    category: "Necklaces",
    price: 1299.99,
    originalPrice: 1499.99,
    rating: 4.9,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop",
    isNew: true,
    isSale: true,
  },
  {
    id: 2,
    name: "Antique Polki Jhumkas",
    category: "Earrings",
    price: 450.00,
    originalPrice: null,
    rating: 4.8,
    reviews: 86,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2000&auto=format&fit=crop",
    isNew: false,
    isSale: false,
  },
  {
    id: 3,
    name: "24K Temple Gold Bangles",
    category: "Bangles",
    price: 899.99,
    originalPrice: 1100.00,
    rating: 4.7,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2000&auto=format&fit=crop",
    isNew: false,
    isSale: true,
  },
  {
    id: 4,
    name: "Diamond Mangalsutra",
    category: "Mangalsutras",
    price: 1850.00,
    originalPrice: null,
    rating: 5.0,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=2000&auto=format&fit=crop",
    isNew: true,
    isSale: false,
  },
];

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("Best Sellers");
  const tabs = ["Best Sellers", "New Arrivals", "Trending"];

  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-playfair font-bold tracking-tight mb-4"
          >
            Featured Collections
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "bg-white text-muted-foreground hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <Link href={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </Link>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && <Badge className="bg-primary text-white hover:bg-primary">New</Badge>}
                  {product.isSale && <Badge className="bg-destructive text-white hover:bg-destructive">Sale</Badge>}
                </div>

                {/* Hover Actions */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <Button size="icon" variant="secondary" className="rounded-full shadow-md hover:bg-accent hover:text-white transition-colors">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="rounded-full shadow-md hover:bg-accent hover:text-white transition-colors">
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="rounded-full shadow-md hover:bg-accent hover:text-white transition-colors">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <div className="text-xs text-muted-foreground mb-2 uppercase tracking-wider font-semibold">{product.category}</div>
                <Link href={`/product/${product.id}`}>
                  <h3 className="font-playfair font-medium text-lg leading-tight mb-2 hover:text-accent transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "fill-gray-200 text-gray-200"}`} 
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-lg">₹{product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toFixed(2)}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <Link href="/shop" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full border-primary/20 hover:bg-primary hover:text-white transition-all px-8 h-12" })}>
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
