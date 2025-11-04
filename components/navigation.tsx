'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Sparkles, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      {/* Floating Liquid Glass Shell */}
      <div className="relative w-full max-w-6xl pointer-events-none">
        {/* Animated liquid blobs */}
        <div className="pointer-events-none absolute -inset-2 rounded-[28px] opacity-60 blur-2xl">
          <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-purple-500/30 blur-2xl animate-blob" />
          <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-blue-500/30 blur-2xl animate-blob animation-delay-2000" />
        </div>

        {/* Glass bar */}
        <div className="relative pointer-events-auto flex h-14 items-center justify-between rounded-full border border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-white/10">

          <div className="flex w-full items-center justify-between px-4 md:px-6">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-white" />
              <span className="text-base md:text-lg font-semibold text-white">Astrex AI</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-white",
                  pathname === "/" ? "text-white" : "text-neutral-300"
                )}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-white",
                  pathname === "/about" ? "text-white" : "text-neutral-300"
                )}
              >
                About
              </Link>
              <Button
                variant="ghost"
                className="rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-md"
                asChild
              >
                <Link href="/about#contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-black border-neutral-800">
                  <SheetHeader>
                    <SheetTitle className="text-white text-left">Menu</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col space-y-4 mt-8">
                    <Link
                      href="/"
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-white py-2",
                        pathname === "/" ? "text-white" : "text-neutral-400"
                      )}
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-white py-2",
                        pathname === "/about" ? "text-white" : "text-neutral-400"
                      )}
                    >
                      About
                    </Link>
                    <Button
                      variant="ghost"
                      className="rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 mt-4 backdrop-blur-md"
                      asChild
                    >
                      <Link href="/about#contact">Get Started</Link>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

