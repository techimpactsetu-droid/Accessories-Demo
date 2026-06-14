"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background flex flex-row-reverse">
      {/* Image Section */}
      <div className="hidden lg:block w-1/2 relative bg-primary">
        <img 
          src="https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury packaging" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl font-playfair font-bold text-white mb-4">Join the Elite</h2>
            <p className="text-white/80 font-manrope text-lg max-w-md">
              Create an account to experience a new standard of luxury shopping, with early access to new collections and exclusive offers.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mb-10">
              <Link href="/" className="text-2xl font-playfair font-bold tracking-tighter inline-block mb-8">
                L U X E<span className="text-accent">.</span>
              </Link>
              <h1 className="text-3xl font-playfair font-bold tracking-tight mb-2">Create Account</h1>
              <p className="text-muted-foreground font-manrope">Fill in your details below to get started.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">First Name</label>
                  <Input placeholder="John" className="h-12 bg-gray-50 border-gray-200" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">Last Name</label>
                  <Input placeholder="Doe" className="h-12 bg-gray-50 border-gray-200" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Email Address</label>
                <Input type="email" placeholder="name@example.com" className="h-12 bg-gray-50 border-gray-200" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Password</label>
                <Input type="password" placeholder="Create a password" className="h-12 bg-gray-50 border-gray-200" required />
                <p className="text-xs text-muted-foreground mt-1">Must be at least 8 characters long.</p>
              </div>
              <Button type="submit" className="w-full h-12 rounded-full text-base shadow-md mt-4">
                Create Account
              </Button>
            </form>

            <div className="mt-8 text-center text-sm text-muted-foreground font-manrope">
              Already have an account?{" "}
              <Link href="/login" className="text-primary font-semibold hover:text-accent transition-colors">
                Sign In
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
