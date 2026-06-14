"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, MailCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ForgotPasswordPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
        >
          <div className="mb-8 text-center">
            <Link href="/" className="text-2xl font-playfair font-bold tracking-tighter inline-block mb-6">
              L U X E<span className="text-accent">.</span>
            </Link>
            {!isSubmitted ? (
              <>
                <h1 className="text-2xl font-playfair font-bold tracking-tight mb-2">Reset Password</h1>
                <p className="text-muted-foreground font-manrope text-sm">
                  Enter your email address and we'll send you a link to reset your password.
                </p>
              </>
            ) : (
              <>
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MailCheck className="w-8 h-8" />
                </div>
                <h1 className="text-2xl font-playfair font-bold tracking-tight mb-2">Check Your Email</h1>
                <p className="text-muted-foreground font-manrope text-sm">
                  We have sent a password reset link to your email address.
                </p>
              </>
            )}
          </div>

          {!isSubmitted ? (
            <form 
              className="space-y-6" 
              onSubmit={(e) => {
                e.preventDefault();
                setIsSubmitted(true);
              }}
            >
              <div className="space-y-2">
                <Input type="email" placeholder="name@example.com" className="h-12 bg-gray-50 border-gray-200" required />
              </div>
              <Button type="submit" className="w-full h-12 rounded-full text-base shadow-md">
                Send Reset Link
              </Button>
            </form>
          ) : (
            <Button className="w-full h-12 rounded-full text-base shadow-md" onClick={() => setIsSubmitted(false)}>
              Try another email
            </Button>
          )}

          <div className="mt-8 text-center">
            <Link href="/login" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Sign In
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
