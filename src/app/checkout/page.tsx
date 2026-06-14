"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function CheckoutPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background pt-32 pb-20 flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-10 rounded-3xl shadow-xl max-w-md w-full text-center border border-gray-100"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-playfair font-bold mb-2">Order Confirmed!</h2>
          <p className="text-muted-foreground mb-8">Thank you for your purchase. Your order #LX-8492 is being processed.</p>
          <Button className="w-full rounded-full h-12" onClick={() => window.location.href = '/'}>
            Return to Home
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-8"
        >
          <Lock className="w-6 h-6 text-gray-400" />
          <h1 className="text-3xl md:text-4xl font-playfair font-bold tracking-tight">
            Secure Checkout
          </h1>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Checkout Form */}
          <div className="w-full lg:w-3/5">
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Contact Info */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <h2 className="text-xl font-playfair font-semibold mb-6 pb-2 border-b">1. Contact Information</h2>
                <div className="space-y-4">
                  <Input type="email" placeholder="Email Address" required className="h-12 bg-white" />
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                    <input type="checkbox" id="newsletter" className="rounded text-primary focus:ring-primary" />
                    <label htmlFor="newsletter">Keep me up to date on news and exclusive offers</label>
                  </div>
                </div>
              </motion.div>

              {/* Shipping Info */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h2 className="text-xl font-playfair font-semibold mb-6 pb-2 border-b">2. Shipping Address</h2>
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" required className="h-12 bg-white col-span-2 sm:col-span-1" />
                  <Input placeholder="Last Name" required className="h-12 bg-white col-span-2 sm:col-span-1" />
                  <Input placeholder="Address Line 1" required className="h-12 bg-white col-span-2" />
                  <Input placeholder="Apartment, suite, etc. (optional)" className="h-12 bg-white col-span-2" />
                  <Input placeholder="City" required className="h-12 bg-white col-span-2 sm:col-span-1" />
                  <div className="col-span-2 sm:col-span-1 flex gap-4">
                    <Input placeholder="State/Province" required className="h-12 bg-white w-1/2" />
                    <Input placeholder="ZIP/Postal Code" required className="h-12 bg-white w-1/2" />
                  </div>
                  <Input placeholder="Country" defaultValue="United States" required className="h-12 bg-white col-span-2" />
                  <Input placeholder="Phone Number" required className="h-12 bg-white col-span-2" />
                </div>
              </motion.div>

              {/* Payment Info */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <h2 className="text-xl font-playfair font-semibold mb-6 pb-2 border-b">3. Payment Method</h2>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-medium">Credit Card</span>
                    <div className="flex gap-2">
                      <div className="w-10 h-6 bg-gray-200 rounded text-[8px] flex items-center justify-center font-bold">VISA</div>
                      <div className="w-10 h-6 bg-gray-200 rounded text-[8px] flex items-center justify-center font-bold">MC</div>
                    </div>
                  </div>
                  <Input placeholder="Card Number" required className="h-12 bg-white" />
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="MM / YY" required className="h-12 bg-white" />
                    <Input placeholder="CVC" required className="h-12 bg-white" />
                  </div>
                  <Input placeholder="Name on Card" required className="h-12 bg-white" />
                </div>
              </motion.div>

              <Button type="submit" disabled={isProcessing} className="w-full h-14 rounded-full text-lg shadow-lg">
                {isProcessing ? "Processing..." : "Pay $394.97"}
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-2/5">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-100 sticky top-32"
            >
              <h3 className="text-xl font-playfair font-bold mb-6">Order Summary</h3>
              
              <div className="space-y-6 mb-6">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden shrink-0 relative">
                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop" alt="Watch" className="w-full h-full object-cover" />
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-gray-500 text-white rounded-full text-xs flex items-center justify-center font-bold">1</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-playfair font-medium text-sm">Classic Chronograph Watch</h4>
                    <p className="text-xs text-muted-foreground mt-1">Silver/Black</p>
                  </div>
                  <div className="font-medium text-sm">$299.99</div>
                </div>

                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden shrink-0 relative">
                    <img src="https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1974&auto=format&fit=crop" alt="Wallet" className="w-full h-full object-cover" />
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-gray-500 text-white rounded-full text-xs flex items-center justify-center font-bold">2</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-playfair font-medium text-sm">Premium Leather Wallet</h4>
                    <p className="text-xs text-muted-foreground mt-1">Brown</p>
                  </div>
                  <div className="font-medium text-sm">$179.98</div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="space-y-4 font-manrope text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">$479.97</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>

                <div className="flex justify-between text-green-600">
                  <span>Discount (LUXE20)</span>
                  <span className="font-medium">-$85.00</span>
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex justify-between items-end">
                  <span className="font-playfair font-bold text-lg">Total</span>
                  <span className="font-playfair font-bold text-2xl">${(479.97 - 85).toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                Payments are secure and encrypted.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
