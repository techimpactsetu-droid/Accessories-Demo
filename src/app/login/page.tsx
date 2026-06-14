"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Image Section */}
      <div className="hidden lg:block w-1/2 relative bg-primary">
        <img 
          src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1974&auto=format&fit=crop" 
          alt="Luxury accessories" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl font-playfair font-bold text-white mb-4">Welcome Back</h2>
            <p className="text-white/80 font-manrope text-lg max-w-md">
              Sign in to access your exclusive member benefits, track your orders, and manage your wishlist.
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
              <h1 className="text-3xl font-playfair font-bold tracking-tight mb-2">Sign In</h1>
              <p className="text-muted-foreground font-manrope">Enter your email and password to access your account.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email Address</label>
                <Input type="email" placeholder="name@example.com" className="h-12 bg-gray-50 border-gray-200" required />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Password</label>
                  <Link href="/forgot-password" className="text-sm text-accent hover:underline font-medium">Forgot Password?</Link>
                </div>
                <Input type="password" placeholder="••••••••" className="h-12 bg-gray-50 border-gray-200" required />
              </div>
              <Button type="submit" className="w-full h-12 rounded-full text-base shadow-md">
                Sign In
              </Button>
            </form>

            <div className="mt-8 text-center text-sm text-muted-foreground font-manrope">
              Don't have an account?{" "}
              <Link href="/register" className="text-primary font-semibold hover:text-accent transition-colors">
                Create Account
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
