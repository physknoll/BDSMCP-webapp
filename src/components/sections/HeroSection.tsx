"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Lock, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative px-6 pt-8 lg:px-8">
      <div className="mx-auto max-w-4xl py-16 sm:py-24 lg:py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-dark-border bg-background/50 px-4 py-2 text-sm text-foreground backdrop-blur">
              <Shield className="h-4 w-4 text-brand-orange" />
              <span>Introducing BDSMCP v1.0</span>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl font-bold tracking-tight text-foreground-bright sm:text-6xl lg:text-7xl"
          >
            The Unbreakable
            <br />
            <span className="text-brand-orange">Handshake</span>
            <br />
            for AI Agents
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-foreground sm:text-xl"
          >
            A transport-agnostic overlay that adds mutual attestation, forward secrecy, 
            capability attenuation, per-message authentication, and an operator kill-switch 
            (&ldquo;<span className="text-brand-orange font-semibold">SafeWord</span>&rdquo;) to MCP and 
            agent-to-agent exchanges without breaking developer ergonomics.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              href="/docs/getting-started"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-brand-orange text-white hover:bg-brand-orange/90 hover:shadow-lg hover:shadow-brand-orange/20 h-10 px-8 text-sm font-medium transition-all"
            >
              Get the SDK
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              href="/docs/spec"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-dark-border text-foreground hover:bg-dark-border/20 h-10 px-8 text-sm font-medium transition-all"
            >
              Read the Spec
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6"
          >
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange/10 ring-1 ring-brand-orange/20">
                <Shield className="h-6 w-6 text-brand-orange" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground-bright">
                Bi-directional Attestation
              </h3>
              <p className="mt-2 text-sm text-foreground">
                SPIFFE workload identity with hardware-backed TPM/TEE support
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange/10 ring-1 ring-brand-orange/20">
                <Zap className="h-6 w-6 text-brand-orange" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground-bright">
                Macaroon Capabilities
              </h3>
              <p className="mt-2 text-sm text-foreground">
                HMAC-chained, caveat-bearing tokens with automatic attenuation
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange/10 ring-1 ring-brand-orange/20">
                <Lock className="h-6 w-6 text-brand-orange" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground-bright">
                Cryptographic SafeWord
              </h3>
              <p className="mt-2 text-sm text-foreground">
                K_sw authenticated emergency termination with session revocation
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
