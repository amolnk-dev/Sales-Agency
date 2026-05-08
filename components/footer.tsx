"use client"

import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Image
              src="/vegam-logo.png"
              alt="Vegam Infotech Logo"
              width={40}
              height={40}
              className="w-8 h-8"
            />
            <span className="font-bold text-xl text-foreground">Vegam Infotech</span>
          </div>

          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Europe</a>
            <a href="#" className="hover:text-foreground transition-colors">UAE</a>
            <a href="#" className="hover:text-foreground transition-colors">India
            </a>
            <a href="#" className="hover:text-foreground transition-colors">US
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Vegam Infotech
          </p>
        </div>
      </div>
    </footer>
  )
}
