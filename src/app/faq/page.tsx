"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

const faqs = [
  {
    category: "Orders & Shipping",
    items: [
      {
        q: "How long does shipping take?",
        a: "We offer complimentary express shipping on all orders. Deliveries typically take 2-3 business days within the continental US, and 5-7 business days for international orders."
      },
      {
        q: "Can I track my order?",
        a: "Yes, once your order is dispatched, you will receive a tracking number via email. You can also track your order directly through your Luxe account."
      },
      {
        q: "Do you ship internationally?",
        a: "Yes, we ship to over 100 countries worldwide. International shipping rates and delivery times vary by destination and will be calculated at checkout."
      }
    ]
  },
  {
    category: "Returns & Exchanges",
    items: [
      {
        q: "What is your return policy?",
        a: "We offer a 30-day hassle-free return policy. If you are not completely satisfied with your purchase, you can return it in its original condition for a full refund or exchange."
      },
      {
        q: "How do I initiate a return?",
        a: "To initiate a return, log into your account, select the order, and click 'Request Return'. We will provide a pre-paid shipping label and further instructions."
      }
    ]
  },
  {
    category: "Product & Care",
    items: [
      {
        q: "Does my watch come with a warranty?",
        a: "All Luxe timepieces come with a 2-year international warranty covering manufacturing defects. Please register your watch on our site after purchase."
      },
      {
        q: "How should I care for my leather goods?",
        a: "We recommend keeping leather products away from direct sunlight and water. Use a soft, dry cloth for regular cleaning and apply a premium leather conditioner every few months."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-playfair font-bold tracking-tight mb-4"
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground font-manrope text-lg mb-8"
            >
              Find answers to common questions about our products, services, and policies.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative max-w-xl mx-auto"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                placeholder="Search FAQs..." 
                className="w-full h-14 pl-12 pr-4 rounded-full bg-white border-gray-200 shadow-sm text-lg"
              />
            </motion.div>
          </div>

          <div className="space-y-12">
            {faqs.map((section, index) => (
              <motion.div 
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h2 className="text-2xl font-playfair font-bold mb-6 text-foreground border-b pb-2">
                  {section.category}
                </h2>
                <Accordion className="w-full space-y-4">
                  {section.items.map((faq, i) => (
                    <AccordionItem 
                      key={i} 
                      value={`${index}-${i}`} 
                      className="bg-white border border-gray-100 rounded-2xl px-6 data-[state=open]:shadow-md transition-all"
                    >
                      <AccordionTrigger className="font-playfair font-semibold text-left py-6 hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="font-manrope text-muted-foreground text-base leading-relaxed pb-6">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
