"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

// Mock Wishlist Items
const wishlistItems = [
  { 
    id: "3", 
    name: "24K Temple Gold Bangles", 
    category: "Bangles", 
    price: 899.99, 
    originalPrice: 1100.00,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2000&auto=format&fit=crop",
    inStock: true
  },
  { 
    id: "4", 
    name: "Diamond Mangalsutra", 
    category: "Mangalsutras", 
    price: 1850.00, 
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=2000&auto=format&fit=crop",
    inStock: false
  }
];

export default function WishlistPage() {
  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-background pt-32 pb-20 flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-gray-400" />
          </div>
          <h2 className="text-3xl font-playfair font-bold mb-4">Your wishlist is empty</h2>
          <p className="text-muted-foreground mb-8">Save items you love and buy them later.</p>
          <Link href="/shop" className={buttonVariants({ size: "lg", className: "rounded-full px-8" })}>
            Explore Products
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-playfair font-bold tracking-tight mb-12"
        >
          My Wishlist
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
                <Link href={`/product/${item.id}`}>
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </Link>
                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-red-500 hover:bg-red-50 transition-colors z-10">
                  <Trash2 className="w-4 h-4" />
                </button>
                {!item.inStock && (
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex items-center justify-center z-0">
                    <span className="bg-black text-white px-4 py-2 rounded-full font-semibold tracking-wider text-sm">OUT OF STOCK</span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1 font-semibold">{item.category}</p>
                <Link href={`/product/${item.id}`}>
                  <h3 className="font-playfair font-medium text-lg hover:text-accent transition-colors mb-2">{item.name}</h3>
                </Link>
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-bold text-lg">₹{item.price.toFixed(2)}</span>
                  {item.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">₹{item.originalPrice.toFixed(2)}</span>
                  )}
                </div>
                
                <Button 
                  className="w-full rounded-full" 
                  disabled={!item.inStock}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {item.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
