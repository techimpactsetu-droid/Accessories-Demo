"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Heart, Share2, ShoppingCart, Truck, ShieldCheck, RefreshCw, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock Product Data
const product = {
  id: "1",
  name: "Royal Kundan Bridal Set",
  brand: "M Pooja Heritage",
  price: 1299.99,
  originalPrice: 1499.99,
  rating: 4.9,
  reviews: 124,
  description: "A magnificent masterpiece that embodies the essence of traditional Indian royalty. The Royal Kundan Bridal Set features exquisite uncut diamonds set in 24K gold foil, accented with rich emerald drops and lustrous pearls. Perfect for your special day, this set includes a heavy choker necklace, matching earrings, and a traditional maang tikka.",
  features: [
    "Handcrafted 24K Gold Plated Brass",
    "Premium Quality Kundan Stones",
    "Natural Emerald Drops and Pearls",
    "Adjustable Dori (Thread) Closure",
    "Hypoallergenic and Skin-Friendly"
  ],
  specifications: [
    { label: "Material", value: "Brass, 24K Gold Plating" },
    { label: "Stone Type", value: "Kundan, Emeralds, Pearls" },
    { label: "Necklace Style", value: "Choker with Adjustable Dori" },
    { label: "Earring Length", value: "3.5 inches" },
    { label: "Care Instructions", value: "Avoid water, perfumes, and chemicals" },
    { label: "Warranty", value: "1 Year Craftsmanship Warranty" },
  ],
  images: [
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2000&auto=format&fit=crop"
  ],
  colors: [
    { name: "Gold/Emerald", value: "bg-emerald-700" },
    { name: "Gold/Ruby", value: "bg-red-700" },
    { name: "Gold/Pearl", value: "bg-gray-100" }
  ]
};

export default function ProductDetailsPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumb Placeholder */}
        <div className="flex items-center text-sm text-muted-foreground mb-8">
          <span className="hover:text-foreground cursor-pointer transition-colors">Home</span>
          <span className="mx-2">/</span>
          <span className="hover:text-foreground cursor-pointer transition-colors">Watches</span>
          <span className="mx-2">/</span>
          <span className="text-foreground font-medium">{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20">
          {/* Product Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === index ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <motion.div 
              key={selectedImage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="relative flex-1 bg-gray-100 rounded-3xl overflow-hidden aspect-square md:aspect-[4/5] lg:aspect-square flex items-center justify-center cursor-zoom-in group"
            >
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                {discountPercentage > 0 && (
                  <Badge className="bg-destructive text-white hover:bg-destructive text-sm px-3 py-1">
                    -{discountPercentage}%
                  </Badge>
                )}
                <Badge className="bg-primary text-white hover:bg-primary text-sm px-3 py-1">New</Badge>
              </div>
            </motion.div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-2">{product.brand}</p>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold tracking-tight mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "fill-gray-200 text-gray-200"}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground underline cursor-pointer">{product.reviews} Reviews</span>
              </div>

              <div className="flex items-end gap-4 mb-8">
                <span className="text-4xl font-playfair font-bold text-foreground">₹{product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through mb-1">₹{product.originalPrice.toFixed(2)}</span>
                )}
              </div>

              <p className="text-muted-foreground font-manrope text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Color Selection */}
              <div className="mb-8">
                <h3 className="font-playfair font-medium mb-4">Color: <span className="text-muted-foreground ml-1">{product.colors[selectedColor].name}</span></h3>
                <div className="flex gap-4">
                  {product.colors.map((color, index) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(index)}
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                        selectedColor === index ? "border-primary p-1" : "border-transparent"
                      }`}
                    >
                      <span className={`w-full h-full rounded-full ${color.value} shadow-sm border border-black/10`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <div className="flex items-center border border-gray-200 rounded-full h-14 bg-white px-4 shrink-0 w-32 justify-between">
                  <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="text-xl text-gray-500 hover:text-primary transition-colors px-2"
                  >-</button>
                  <span className="font-medium text-lg">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(q => q + 1)}
                    className="text-xl text-gray-500 hover:text-primary transition-colors px-2"
                  >+</button>
                </div>
                
                <Button className="flex-1 h-14 rounded-full text-lg shadow-lg hover:shadow-xl transition-all" size="lg">
                  <ShoppingCart className="w-5 h-5 mr-2" /> Add to Cart
                </Button>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="h-14 w-14 rounded-full shrink-0 hover:bg-accent hover:text-white hover:border-accent transition-colors">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-14 w-14 rounded-full shrink-0 hover:bg-gray-100 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">Free Express Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <RefreshCw className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">30-Day Free Returns</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">2-Year Warranty</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tabs Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full flex border-b border-gray-200 rounded-none bg-transparent h-auto p-0 mb-8 justify-start overflow-x-auto">
              <TabsTrigger 
                value="description" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-8 py-4 text-lg font-playfair data-[state=active]:shadow-none"
              >
                Description
              </TabsTrigger>
              <TabsTrigger 
                value="specifications" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-8 py-4 text-lg font-playfair data-[state=active]:shadow-none"
              >
                Specifications
              </TabsTrigger>
              <TabsTrigger 
                value="reviews" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-8 py-4 text-lg font-playfair data-[state=active]:shadow-none"
              >
                Reviews ({product.reviews})
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="focus-visible:outline-none">
              <div className="prose prose-lg max-w-none text-muted-foreground font-manrope">
                <p className="mb-6">{product.description}</p>
                <h3 className="text-foreground font-playfair font-semibold text-xl mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-accent shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="specifications" className="focus-visible:outline-none">
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {product.specifications.map((spec, i) => (
                      <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                        <th className="py-4 px-6 font-playfair font-medium text-foreground w-1/3 bg-gray-50/30">{spec.label}</th>
                        <td className="py-4 px-6 font-manrope text-muted-foreground">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="focus-visible:outline-none">
              <div className="flex items-center justify-center py-12">
                <p className="text-muted-foreground italic">Customer reviews will be displayed here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
