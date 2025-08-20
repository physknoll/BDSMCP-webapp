"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Users, Shield, Zap } from "lucide-react";

const risks = [
  {
    icon: AlertTriangle,
    title: "Bearer Token Replay",
    description: "OAuth/OIDC tokens are high-value targets. Attackers who exfiltrate them bypass MFA and user presence checks"
  },
  {
    icon: Users,
    title: "Confused Deputy",
    description: "MCP servers may act with high privileges on behalf of agents lacking context to constrain authority"
  },
  {
    icon: Shield,
    title: "Supply-Chain Trust",
    description: "Remote 'servers' are executable components. Without workload attestation, clients trust whatever is at the far end of TLS"
  },
  {
    icon: Zap,
    title: "Message-Layer Gaps",
    description: "TLS protects transport, not application semantics. JSON-RPC frames lack individual binding to capabilities and sequence"
  }
];

export function ProblemSection() {
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
            The Agent Revolution is Here.
            <br />
            <span className="text-brand-orange">So Are the Risks.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground">
            MCP standardizes how AI agents discover tools, exchange prompts, and invoke functions using JSON-RPC. 
            However, deployments that perform real-world actions (changing infrastructure, moving money, 
            controlling robots) demand security guarantees that basic web patterns don&apos;t provide.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {risks.map((risk, index) => (
              <motion.div
                key={risk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="relative p-6 border border-dark-border rounded-lg bg-background/50 backdrop-blur"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10 ring-1 ring-red-500/20">
                  <risk.icon className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground-bright">
                  {risk.title}
                </h3>
                <p className="mt-2 text-sm text-foreground">
                  {risk.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg font-medium text-foreground">
            Three critical gaps demand first-class treatment:
            <br />
            <span className="text-brand-orange">bi-directional attestation, session-scoped authorization, and per-message provenance.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
