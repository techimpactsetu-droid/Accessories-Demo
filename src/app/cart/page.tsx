"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Trash2, ArrowRight, ShieldCheck, CreditCard, ShoppingCart } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

// Mock Cart Items
const initialCartItems = [
  { 
    id: "1", 
    name: "Royal Kundan Bridal Set", 
    brand: "M Pooja Heritage",
    price: 1299.99, 
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop",
    color: "Gold/Emerald",
    quantity: 1
  },
  { 
    id: "2", 
    name: "Antique Polki Jhumkas", 
    brand: "M Pooja Essentials",
    price: 450.00, 
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2000&auto=format&fit=crop",
    color: "Gold/Ruby",
    quantity: 2
  }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(items => items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.toLowerCase() === "pooja20") {
      setIsCouponApplied(true);
    }
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 200 ? 0 : 15;
  const discount = isCouponApplied ? subtotal * 0.2 : 0;
  const total = subtotal + shipping - discount;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background pt-32 pb-20 flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingCart className="w-10 h-10 text-gray-400" />
          </div>
          <h2 className="text-3xl font-playfair font-bold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Link href="/shop" className={buttonVariants({ size: "lg", className: "rounded-full px-8" })}>
            Start Shopping
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
          Shopping Cart
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="w-full lg:w-2/3">
            <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-gray-200 text-sm font-medium text-muted-foreground uppercase tracking-wider">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
            </div>

            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -50, scale: 0.9 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 border-b border-gray-200 items-center"
                >
                  <div className="col-span-1 md:col-span-6 flex gap-4">
                    <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">{item.brand}</span>
                      <Link href={`/product/${item.id}`} className="font-playfair font-medium text-lg hover:text-accent transition-colors line-clamp-1">
                        {item.name}
                      </Link>
                      <span className="text-sm text-muted-foreground mt-1">Color: {item.color}</span>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-sm text-destructive hover:text-red-700 flex items-center gap-1 mt-3 w-fit transition-colors"
                      >
                        <Trash2 className="w-3 h-3" /> Remove
                      </button>
                    </div>
                  </div>
                  
                  <div className="col-span-1 md:col-span-2 text-center hidden md:block font-medium">
                    ₹{item.price.toFixed(2)}
                  </div>
                  
                  <div className="col-span-1 md:col-span-2 flex justify-center">
                    <div className="flex items-center border border-gray-200 rounded-full h-10 bg-white px-2">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-primary transition-colors"
                      >-</button>
                      <span className="w-8 text-center font-medium text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-primary transition-colors"
                      >+</button>
                    </div>
                  </div>
                  
                  <div className="col-span-1 md:col-span-2 text-right font-playfair font-semibold text-lg flex justify-between md:block mt-4 md:mt-0">
                    <span className="md:hidden text-muted-foreground font-normal">Total:</span>
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/3"
          >
            <div className="bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-100 sticky top-32">
              <h3 className="text-xl font-playfair font-bold mb-6">Order Summary</h3>
              
              <div className="space-y-4 font-manrope">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal ({cartItems.length} items)</span>
                  <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  {shipping === 0 ? (
                    <span className="text-green-600 font-medium">Free</span>
                  ) : (
                    <span className="font-medium">₹{shipping.toFixed(2)}</span>
                  )}
                </div>

                {isCouponApplied && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount (20%)</span>
                    <span className="font-medium">-₹{discount.toFixed(2)}</span>
                  </div>
                )}
                
                <Separator className="my-4" />
                
                <div className="flex justify-between items-end mb-6">
                  <span className="font-playfair font-bold text-xl">Total</span>
                  <span className="font-playfair font-bold text-3xl">₹{total.toFixed(2)}</span>
                </div>
              </div>

              {/* Coupon Form */}
              {!isCouponApplied ? (
                <form onSubmit={applyCoupon} className="flex gap-2 mb-8">
                  <Input 
                    placeholder="Promo Code (try POOJA20)" 
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="bg-white"
                  />
                  <Button type="submit" variant="secondary">Apply</Button>
                </form>
              ) : (
                <div className="bg-green-50 text-green-700 p-3 rounded-lg text-sm flex items-center justify-between mb-8 border border-green-200">
                  <span>Coupon <strong>{couponCode.toUpperCase()}</strong> applied!</span>
                  <button onClick={() => setIsCouponApplied(false)} className="text-xs underline">Remove</button>
                </div>
              )}

              <Link href="/checkout" className={buttonVariants({ className: "w-full h-14 rounded-full text-lg shadow-lg" })}>
                Proceed to Checkout <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              <div className="mt-6 flex flex-col gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 justify-center">
                  <ShieldCheck className="w-4 h-4" /> Secure Checkout
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <CreditCard className="w-4 h-4" /> We accept all major cards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
