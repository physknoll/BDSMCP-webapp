"use client";

import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center px-6 py-24">
          <div className="mb-8">
            <Shield className="h-16 w-16 text-brand-orange mx-auto mb-4" />
            <h1 className="font-heading text-6xl font-bold text-foreground-bright mb-4">
              404
            </h1>
            <h2 className="font-heading text-2xl font-semibold text-foreground-bright mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-foreground mb-8 max-w-md mx-auto">
              The page you&apos;re looking for doesn&apos;t exist. It might have been moved, 
              deleted, or you entered the wrong URL.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-brand-orange text-white hover:bg-brand-orange/90 hover:shadow-lg hover:shadow-brand-orange/20 h-9 px-4 py-2 text-sm font-medium transition-all"
            >
              <Home className="h-4 w-4" />
              Go Home
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-dark-border text-foreground hover:bg-dark-border/20 h-9 px-4 py-2 text-sm font-medium transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </button>
          </div>
          
          <div className="mt-12">
            <p className="text-sm text-foreground/60">
              Need help? Check out our{" "}
              <Link href="/docs" className="text-brand-orange hover:underline">
                documentation
              </Link>{" "}
              or{" "}
              <Link href="/community" className="text-brand-orange hover:underline">
                join our community
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
