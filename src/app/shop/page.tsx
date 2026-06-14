"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Filter, SlidersHorizontal, Heart, ShoppingCart, Eye, Star, X, Check } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

// Mock Products
const products = [
  { id: 1, name: "Royal Kundan Bridal Set", category: "Necklaces", brand: "Tanishq", price: 1299.99, originalPrice: 1499.99, rating: 4.9, reviews: 124, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop", isNew: true, isSale: true, inStock: true },
  { id: 2, name: "Antique Polki Jhumkas", category: "Earrings", brand: "Kalyan", price: 450.00, originalPrice: null, rating: 4.8, reviews: 86, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2000&auto=format&fit=crop", isNew: false, isSale: false, inStock: true },
  { id: 3, name: "24K Temple Gold Bangles", category: "Bangles", brand: "Malabar", price: 899.99, originalPrice: 1100.00, rating: 4.7, reviews: 210, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2000&auto=format&fit=crop", isNew: false, isSale: true, inStock: true },
  { id: 4, name: "Diamond Mangalsutra", category: "Mangalsutras", brand: "Tanishq", price: 1850.00, originalPrice: null, rating: 5.0, reviews: 42, image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=2000&auto=format&fit=crop", isNew: true, isSale: false, inStock: false },
  { id: 5, name: "Emerald Drop Necklace", category: "Necklaces", brand: "Senco", price: 750.00, originalPrice: null, rating: 4.6, reviews: 55, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2000&auto=format&fit=crop", isNew: false, isSale: false, inStock: true },
  { id: 6, name: "Peacock Motif Maang Tikka", category: "Bridal Sets", brand: "Kalyan", price: 299.99, originalPrice: 350.00, rating: 4.9, reviews: 18, image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=2000&auto=format&fit=crop", isNew: false, isSale: true, inStock: true },
  { id: 7, name: "Ruby Cocktail Ring", category: "Rings", brand: "Malabar", price: 540.00, originalPrice: null, rating: 4.5, reviews: 92, image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=2000&auto=format&fit=crop", isNew: false, isSale: false, inStock: true },
  { id: 8, name: "Gold Plated Anklets", category: "Jewelry", brand: "Senco", price: 120.00, originalPrice: null, rating: 4.8, reviews: 110, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop", isNew: true, isSale: false, inStock: true },
];

const allCategories = ["Necklaces", "Earrings", "Bangles", "Bridal Sets", "Rings", "Mangalsutras", "Jewelry"];
const allBrands = ["Tanishq", "Kalyan", "Malabar", "Senco"];

export default function ShopPage() {
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState("newest");

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange([0, 2000]);
    setInStockOnly(false);
  };

  const filteredProducts = useMemo(() => {
    let result = products.filter(product => {
      // Category Filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) return false;
      // Brand Filter
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;
      // Price Filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
      // Stock Filter
      if (inStockOnly && !product.inStock) return false;
      return true;
    });

    // Sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
      default:
        result.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
        break;
    }

    return result;
  }, [selectedCategories, selectedBrands, priceRange, inStockOnly, sortBy]);

  const activeFilterCount = selectedCategories.length + selectedBrands.length + (inStockOnly ? 1 : 0) + (priceRange[0] > 0 || priceRange[1] < 2000 ? 1 : 0);

  // Reusable Premium Checkbox
  const CustomCheckbox = ({ checked, onChange, label, count }: { checked: boolean, onChange: () => void, label: string, count?: number }) => (
    <div 
      className="flex items-center justify-between group cursor-pointer py-1" 
      onClick={onChange}
    >
      <div className="flex items-center gap-3">
        <div className={`w-5 h-5 rounded flex items-center justify-center transition-all duration-300 border ${
          checked ? "bg-accent border-accent shadow-sm" : "border-gray-300 group-hover:border-accent bg-transparent"
        }`}>
          {checked && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
        </div>
        <span className={`text-sm font-medium transition-colors ${checked ? "text-foreground font-semibold" : "text-muted-foreground group-hover:text-foreground"}`}>
          {label}
        </span>
      </div>
      {count !== undefined && (
        <span className={`text-xs px-2 py-0.5 rounded-full ${checked ? "bg-accent/10 text-accent" : "bg-gray-100 text-gray-500"}`}>
          {count}
        </span>
      )}
    </div>
  );

  const FilterSidebar = () => (
    <div className="space-y-8 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-playfair font-bold text-xl">Filters</h3>
        {activeFilterCount > 0 && (
          <button onClick={clearFilters} className="text-xs font-medium text-accent hover:text-accent/80 transition-colors flex items-center gap-1">
            <X className="w-3 h-3" /> Clear All
          </button>
        )}
      </div>

      <div className="pt-2">
        <h4 className="font-playfair font-semibold mb-4 text-base tracking-wide uppercase text-muted-foreground">Categories</h4>
        <div className="space-y-3">
          {allCategories.map((category) => {
            const count = products.filter(p => p.category === category).length;
            return (
              <CustomCheckbox 
                key={category} 
                label={category} 
                checked={selectedCategories.includes(category)} 
                onChange={() => toggleCategory(category)}
                count={count}
              />
            );
          })}
        </div>
      </div>

      <div className="pt-6 border-t border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h4 className="font-playfair font-semibold text-base tracking-wide uppercase text-muted-foreground">Price Range</h4>
          <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">₹{priceRange[0]} - ₹{priceRange[1]}</span>
        </div>
        <Slider
          defaultValue={[0, 2000]}
          max={2000}
          step={50}
          value={priceRange}
          onValueChange={(val) => setPriceRange(val as number[])}
          className="mb-2"
        />
      </div>

      <div className="pt-6 border-t border-gray-100">
        <Accordion defaultValue={["item-1"]}>
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="font-playfair font-semibold text-base tracking-wide uppercase text-muted-foreground hover:no-underline py-2">Brand</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-4">
                {allBrands.map((brand) => (
                  <CustomCheckbox 
                    key={brand} 
                    label={brand} 
                    checked={selectedBrands.includes(brand)} 
                    onChange={() => toggleBrand(brand)}
                  />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border-none mt-4">
            <AccordionTrigger className="font-playfair font-semibold text-base tracking-wide uppercase text-muted-foreground hover:no-underline py-2">Availability</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-4">
                <CustomCheckbox 
                  label="In Stock Only" 
                  checked={inStockOnly} 
                  onChange={() => setInStockOnly(!inStockOnly)}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      {/* Page Header */}
      <div className="bg-[#f8f9fa] py-12 mb-12 border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center justify-between"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold tracking-tight mb-4">Shop All</h1>
              <p className="text-muted-foreground font-manrope text-lg max-w-xl">
                Discover our complete collection of traditional and modern Indian jewelry designed to elevate your style.
              </p>
            </div>
            <div className="mt-8 md:mt-0 flex items-center gap-4">
              <span className="text-sm text-muted-foreground hidden sm:inline-block">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </span>
              
              <Select value={sortBy} onValueChange={(val) => val && setSortBy(val)}>
                <SelectTrigger className="w-[180px] bg-white rounded-full h-12 shadow-sm border-gray-200">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest Arrivals</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Top Rated</SelectItem>
                </SelectContent>
              </Select>

              {/* Mobile Filter Trigger */}
              <div className="lg:hidden">
                <Sheet>
                  <SheetTrigger className={buttonVariants({ variant: "outline", size: "icon", className: "bg-white rounded-full h-12 w-12 shadow-sm border-gray-200 text-foreground" })}>
                    <SlidersHorizontal className="w-5 h-5" />
                  </SheetTrigger>
                  <SheetContent side="right" className="w-full sm:w-[400px] overflow-y-auto pt-16 bg-background">
                    <SheetTitle className="sr-only">Filters</SheetTitle>
                    <FilterSidebar />
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-32">
              <FilterSidebar />
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm flex flex-col items-center justify-center min-h-[400px]">
                <Filter className="w-16 h-16 text-gray-200 mb-6" />
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">No products found</h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-8">
                  We couldn't find any products matching your current filter selection. Try adjusting your filters or clearing them completely.
                </p>
                <Button onClick={clearFilters} className="rounded-full px-8 h-12" variant="outline">
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                <AnimatePresence>
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      layout
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-500 flex flex-col"
                    >
                      {/* Product Image */}
                      <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
                        <Link href={`/product/${product.id}`}>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                          />
                        </Link>
                        
                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                          {product.isNew && <Badge className="bg-primary text-white hover:bg-primary border-none shadow-sm px-3 py-1 text-xs font-semibold tracking-wide">NEW</Badge>}
                          {product.isSale && <Badge className="bg-destructive text-white hover:bg-destructive border-none shadow-sm px-3 py-1 text-xs font-semibold tracking-wide">SALE</Badge>}
                        </div>

                        {/* Hover Actions */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          <Button size="icon" variant="secondary" className="rounded-full h-12 w-12 shadow-xl bg-white/90 backdrop-blur text-gray-900 hover:bg-accent hover:text-white transition-colors border border-gray-100">
                            <Heart className="w-5 h-5" />
                          </Button>
                          <Button size="icon" variant="secondary" className="rounded-full h-12 w-12 shadow-xl bg-white/90 backdrop-blur text-gray-900 hover:bg-accent hover:text-white transition-colors border border-gray-100">
                            <ShoppingCart className="w-5 h-5" />
                          </Button>
                          <Link href={`/product/${product.id}`} className={buttonVariants({ variant: "secondary", size: "icon", className: "rounded-full h-12 w-12 shadow-xl bg-white/90 backdrop-blur text-gray-900 hover:bg-accent hover:text-white transition-colors border border-gray-100" })}>
                            <Eye className="w-5 h-5" />
                          </Link>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="text-xs text-muted-foreground mb-2 uppercase tracking-wider font-semibold">{product.category}</div>
                        <Link href={`/product/${product.id}`}>
                          <h3 className="font-playfair font-semibold text-lg leading-tight mb-3 hover:text-accent transition-colors line-clamp-2">
                            {product.name}
                          </h3>
                        </Link>
                        
                        <div className="mt-auto">
                          <div className="flex items-center gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "fill-gray-200 text-gray-200"}`} 
                              />
                            ))}
                            <span className="text-xs text-muted-foreground ml-1 font-medium">({product.reviews})</span>
                          </div>
                          <div className="flex items-end gap-3">
                            <span className="font-playfair font-bold text-xl text-foreground">₹{product.price.toFixed(2)}</span>
                            {product.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through mb-1">₹{product.originalPrice.toFixed(2)}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
            
            {filteredProducts.length > 0 && (
              <div className="mt-16 flex justify-center">
                <Button variant="outline" size="lg" className="rounded-full border-gray-300 text-foreground hover:bg-gray-100 transition-all px-12 h-14 font-semibold tracking-wide">
                  Load More Products
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
