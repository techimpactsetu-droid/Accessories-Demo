"use client"; // force rebuild

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "@/components/globals/Magnetic";
import { ShoppingBag, Heart, Search, User, Menu, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Categories", href: "/categories" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Mobile Menu & Logo Container for Desktop */}
        <div className="flex-1 flex items-center justify-start gap-4">
          <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger className={buttonVariants({ variant: "ghost", size: "icon", className: "text-foreground" })}>
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <nav className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <Magnetic key={link.name} intensity={0.2}>
                    <Link
                      href={link.href}
                      className={`text-lg font-medium transition-colors hover:text-accent ${
                        pathname === link.href ? "text-accent" : "text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </Magnetic>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

          {/* Logo */}
          <Magnetic intensity={0.1}>
            <Link href="/" className="hidden md:flex flex-col items-start justify-center group">
              <span className="text-2xl font-playfair font-black tracking-[0.15em] uppercase leading-none text-foreground transition-colors group-hover:text-accent">
                M POOJA<span className="text-accent">.</span>
              </span>
              <span className="text-[10px] font-manrope font-bold tracking-[0.3em] uppercase text-muted-foreground mt-1.5 ml-1">
                Accessories
              </span>
            </Link>
          </Magnetic>
        </div>

        {/* Mobile Logo */}
        <div className="flex-1 md:hidden flex justify-center">
          <Link href="/" className="flex flex-col items-center justify-center">
            <span className="text-xl font-playfair font-black tracking-[0.15em] uppercase leading-none text-foreground">
              M POOJA<span className="text-accent">.</span>
            </span>
            <span className="text-[8px] font-manrope font-bold tracking-[0.3em] uppercase text-muted-foreground mt-1">
              Accessories
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Magnetic key={link.name} intensity={0.2}>
              <Link
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-accent relative group ${
                  pathname === link.href ? "text-accent" : "text-foreground"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-[2px] bg-accent transform origin-left transition-transform duration-300 ease-out ${
                    pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            </Magnetic>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-2 md:gap-4 flex-1 justify-end">
          <Magnetic intensity={0.3}>
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex text-foreground hover:text-accent">
              <Search className="h-5 w-5" />
            </Button>
          </Magnetic>
          <Magnetic intensity={0.3}>
            <Link href="/login" className={buttonVariants({ variant: "ghost", size: "icon", className: "text-foreground hover:text-accent" })}>
              <User className="h-5 w-5" />
            </Link>
          </Magnetic>
          <Magnetic intensity={0.3}>
            <Link href="/wishlist" className={buttonVariants({ variant: "ghost", size: "icon", className: "text-foreground hover:text-accent relative" })}>
              <Heart className="h-5 w-5" />
            </Link>
          </Magnetic>
          <Magnetic intensity={0.3}>
            <Link href="/cart" className={buttonVariants({ variant: "ghost", size: "icon", className: "text-foreground hover:text-accent relative" })}>
              <ShoppingBag className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px] bg-accent text-white border-white">
                3
              </Badge>
            </Link>
          </Magnetic>
        </div>
      </div>
    </header>
  );
}
