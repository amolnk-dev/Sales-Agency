"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="redifsolvs Logo"
            width={40}
            height={40}
            className="w-8 h-8"
          />
          <span className="font-bold text-xl text-foreground">
            Redif Solutions
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-muted-foreground hover:text-foreground">
            Offering
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground">
            How It Works
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground">
            Pricing
          </a>
        </div>

        {/* Desktop Button (NO ACTION) */}
        <div className="hidden md:block">
          <Button className="rounded-full px-6">
            Get Started
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 py-4 space-y-4">
            <a href="#services" className="block">Offering</a>
            <a href="#how-it-works" className="block">How It Works</a>
            <a href="#pricing" className="block">Pricing</a>

            {/* Mobile Button (NO ACTION) */}
            <Button className="w-full rounded-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}