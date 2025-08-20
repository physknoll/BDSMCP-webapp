"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Timer, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "TLS Exporters + Noise Handshakes",
    description: "Forward-secret sessions using TLS 1.3 exporters or Noise XX/IK patterns with SPIFFE workload identity and optional hardware attestation.",
    color: "text-blue-400"
  },
  {
    icon: Timer,
    title: "HKDF Key Schedule + Macaroons",
    description: "Three disjoint keys (K_msg, K_cap, K_sw) derived via HKDF. Macaroon capabilities with inline caveats for time, audience, resource, and usage limits.",
    color: "text-green-400"
  },
  {
    icon: Lock,
    title: "Per-Message AEAD + SafeWord",
    description: "Every JSON-RPC frame wrapped with sequence numbers, timestamps, and HMAC/AEAD tags. K_sw enables cryptographic CONTINUE/CANCEL controls.",
    color: "text-brand-orange"
  }
];

export function SolutionSection() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-background to-background/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground-bright sm:text-4xl">
            Stop Bolting On Security.
            <br />
            <span className="text-brand-orange">Build It In.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground">
            <strong className="text-brand-orange">BDSM-CP</strong> is a transport-agnostic overlay that composes 
            battle-tested primitives—TLS 1.3 exporters, Noise handshakes, HKDF, AEAD, macaroons, and SPIFFE SVIDs—into 
            a minimal, auditable session protocol.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="space-y-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                viewport={{ once: true }}
                className={`flex flex-col gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}
              >
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-background border border-dark-border`}>
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground-bright">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-lg text-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                <div className="flex-1 lg:max-w-md">
                  <div className="relative p-6 border border-dark-border rounded-lg bg-background/80 backdrop-blur">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>Hardware-level security</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>Zero-trust architecture</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>Enterprise-ready</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg font-medium text-foreground">
            A <span className="text-brand-orange font-semibold">thin envelope</span> over MCP messages that creates 
            attested, forward-secret sessions with{" "}
            <span className="text-brand-orange font-semibold">cryptographic per-message provenance</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
