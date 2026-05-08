"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">

      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        <p className="text-primary text-sm md:text-base mb-4 tracking-wide">
          Your search ends here
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
          <span className="text-foreground">
            We Build
          </span>{" "}
          <span className="bg-gradient-to-r from-primary via-cyan-400 to-orange-400 bg-clip-text text-transparent">
            What You Need.
          </span>
        </h1>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          Providing high performance solutions that improves business growth. No fluff, just results.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          {/* Get Started */}
          <Button
            size="lg"
            className="text-base px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
          >
            Get Started
          </Button>

        </div>
      </div>
    </section>
  )
}
