"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-playfair font-bold tracking-tight text-center mb-4"
        >
          Contact Us
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center text-muted-foreground font-manrope text-lg mb-16 max-w-2xl mx-auto"
        >
          Have a question about our products or your order? We're here to help. Reach out to our dedicated support team.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-lg mb-1">Store Location</h3>
                  <p className="text-muted-foreground font-manrope">123 Heritage Lane<br />Jewelry Market, Mumbai 400002</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-lg mb-1">Email Support</h3>
                  <p className="text-muted-foreground font-manrope">info@mpoojaaccessories.com</p>
                  <p className="text-muted-foreground font-manrope text-sm mt-1">We aim to reply within 24 hours.</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-lg mb-1">Phone</h3>
                  <p className="text-muted-foreground font-manrope">+91 98765 43210</p>
                  <p className="text-muted-foreground font-manrope text-sm mt-1">Mon-Sat: 10am - 8pm IST</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-lg mb-1">WhatsApp</h3>
                  <p className="text-muted-foreground font-manrope">+91 98765 43210</p>
                  <Button variant="link" className="p-0 h-auto text-[#25D366] hover:text-[#1da851] font-semibold mt-1">Chat with us</Button>
                </div>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="w-full h-[300px] bg-gray-200 rounded-3xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                alt="Map location" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="bg-white px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  View on Google Maps
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            <h2 className="text-2xl font-playfair font-bold mb-6">Send us a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input placeholder="John" className="h-12 bg-gray-50 border-gray-200" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input placeholder="Doe" className="h-12 bg-gray-50 border-gray-200" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <Input type="email" placeholder="name@example.com" className="h-12 bg-gray-50 border-gray-200" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="How can we help?" className="h-12 bg-gray-50 border-gray-200" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea 
                  className="w-full min-h-[150px] p-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ring focus:border-input resize-none" 
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>
              <Button type="submit" className="w-full h-14 rounded-full text-lg shadow-md">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
