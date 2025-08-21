"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Protocol", href: "/docs/spec" },
  { name: "Use Cases", href: "/use-cases" },
  { name: "Docs", href: "/docs" },
  { name: "Community", href: "/community" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-dark-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="font-heading text-xl font-bold text-foreground-bright">
              BDSMCP
            </span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground hover:bg-dark-border/20 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-foreground hover:text-brand-orange transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Link 
            href="/docs/spec"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-dark-border text-foreground hover:bg-dark-border/20 h-8 px-3 text-xs font-medium transition-all"
          >
            Read the Spec
          </Link>
          <Link 
            href="/docs/getting-started"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-brand-orange text-white hover:bg-brand-orange/90 hover:shadow-lg hover:shadow-brand-orange/20 h-8 px-3 text-xs font-medium transition-all"
          >
            Get the SDK →
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-dark-border shadow-xl">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="font-heading text-xl font-bold text-foreground-bright">
                  BDSMCP
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground hover:bg-dark-border/20 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-dark-border">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-dark-border/20"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 space-y-4">
                <Link 
                  href="/docs/spec"
                  className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-dark-border text-foreground hover:bg-dark-border/20 h-9 px-4 py-2 text-sm font-medium transition-all"
                >
                  Read the Spec
                </Link>
                <Link 
                  href="/docs/getting-started"
                  className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-brand-orange text-white hover:bg-brand-orange/90 hover:shadow-lg hover:shadow-brand-orange/20 h-9 px-4 py-2 text-sm font-medium transition-all"
                >
                  Get the SDK →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
