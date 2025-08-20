"use client";

import { motion } from "framer-motion";
import { Building2, Server, Heart, Shield } from "lucide-react";

const useCases = [
  {
    icon: Building2,
    title: "Financial Services",
    description: "Securely orchestrate multi-trillion dollar settlements between institutional agents",
    features: [
      "Hardware-attested agent identities for institutional trust",
      "Time-bounded capabilities for transaction windows", 
      "Cryptographic audit trails with non-repudiation",
      "Emergency SafeWord for instant trade halts"
    ],
    stats: {
      value: "$2.4T",
      label: "Daily settlements secured"
    }
  },
  {
    icon: Server,
    title: "DevOps & Infrastructure",
    description: "Enforce audited, least-privilege infrastructure changes across your entire toolchain",
    features: [
      "Mutual attestation for build agent verification",
      "Capability attenuation for time-scoped deployments",
      "Hardware-backed code signing verification", 
      "Immutable deployment audit chains"
    ],
    stats: {
      value: "99.99%",
      label: "Uptime guarantee"
    }
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Enable compliant, consent-driven data exchange between provider agents",
    features: [
      "Patient-scoped capability tokens with consent binding",
      "Zero-knowledge proofs for privacy-preserving analytics",
      "Hardware-attested medical device integration",
      "Immutable audit logs for regulatory compliance"
    ],
    stats: {
      value: "100M+",
      label: "Patient records protected"
    }
  }
];

export function UseCasesSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground-bright sm:text-4xl">
            Built for the
            <br />
            <span className="text-brand-orange">New Stack of AI</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground">
            From finance to fleet management, BDSMCP provides the guardrails for agents 
            to take real-world action safely.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-6xl"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="relative p-8 border border-dark-border rounded-xl bg-background/50 backdrop-blur hover:bg-background/80 transition-all group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange/10 ring-1 ring-brand-orange/20 group-hover:bg-brand-orange/20 transition-colors">
                  <useCase.icon className="h-6 w-6 text-brand-orange" />
                </div>
                
                <h3 className="mt-6 font-heading text-xl font-bold text-foreground-bright">
                  {useCase.title}
                </h3>
                
                <p className="mt-4 text-foreground leading-relaxed">
                  {useCase.description}
                </p>
                
                <ul className="mt-6 space-y-3">
                  {useCase.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                      <Shield className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-dark-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-orange">
                      {useCase.stats.value}
                    </div>
                    <div className="text-sm text-foreground">
                      {useCase.stats.label}
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
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-brand-orange/5 px-6 py-3">
            <Shield className="h-5 w-5 text-brand-orange" />
            <span className="text-sm font-medium text-foreground">
              Enterprise-ready security for mission-critical AI systems
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
