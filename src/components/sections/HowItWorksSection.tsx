"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Handshake, ShieldAlert, Key, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "handshake",
    title: "Handshake",
    icon: Handshake,
    description: "TLS 1.3 exporters or Noise handshakes with SPIFFE workload identity",
    codeSnippet: `// BSP-HTTP Handshake (TLS 1.3 Exporter)
EKM = TLS-Exporter("EXPORTER-bdsmcp-v1", info, 64)
H0 = Hash(canon(MCP.initialize.params) || 
          TLS.transcript_hash || ID_A || ID_B)
K_master = HKDF-Extract(salt=H0, IKM=EKM)

// Key Schedule
K_msg = HKDF-Expand(K_master, "bdsmcp:key:msg", 32)
K_cap = HKDF-Expand(K_master, "bdsmcp:key:cap", 32)
K_sw  = HKDF-Expand(K_master, "bdsmcp:key:sw", 32)
SessionID = Hash(H0 || K_msg || K_cap || K_sw)`,
    visual: {
      title: "Key Schedule Derivation",
      steps: ["TLS 1.3 exporter derivation", "Context hash computation", "HKDF key expansion", "Session ID generation"]
    }
  },
  {
    id: "safeword",
    title: "SafeWord",
    icon: ShieldAlert,
    description: "Cryptographic kill-switch for instant session termination",
    codeSnippet: `// SafeWord Control Messages
{
  "type": "bdsmcp.control",
  "op": "CONTINUE" | "CANCEL",
  "reason": "operator|policy|revocation",
  "nonce": "b64u(16 random bytes)",
  "tag": "b64u(Mac(K_sw, op || nonce || pack_u64(seq)))"
}

// UI renders human-readable phrase from K_sw
SafeWord_phrase = words_from_bytes(K_sw[0:15])
// Example: "crimson-delta-protocol-secure-7891"`,
    visual: {
      title: "K_sw Authentication",
      steps: ["Control message crafted", "HMAC tag computed", "Out-of-band verification", "Session termination"]
    }
  },
  {
    id: "macaroons",
    title: "Macaroons",
    icon: Key,
    description: "HMAC-chained, caveat-bearing bearer tokens with session binding",
    codeSnippet: `// Capability Token (Macaroon)
{
  "iss": "spiffe://trust/cap-authority",
  "sub": "spiffe://trust/agentA", 
  "aud": "spiffe://trust/agentB",
  "sid": "b64u(SessionID)",
  "tool": "filesystem.read",
  "resource": "s3://bucket/path",
  "ttl": "2025-08-20T12:00:00Z",
  "caveats": [
    "time<2025-08-20T12:00:00Z",
    "context=H0: b64u(...)",
    "calls<10", "rate<1/s"
  ],
  "sig": "b64u(macaroon_HMAC_chain(R, ...))"
}`,
    visual: {
      title: "Caveat Enforcement",
      steps: ["Macaroon root derived", "Caveats bound to session", "HMAC chain verified", "Least privilege enforced"]
    }
  }
];

export function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState("handshake");

  const activeTabData = tabs.find(tab => tab.id === activeTab) || tabs[0];

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-background/50 to-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground-bright sm:text-4xl">
            How It Works:
            <br />
            <span className="text-brand-orange">A Protocol You Can Trust</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground">
            An interactive exploration of the three core stages that make BDSMCP unbreakable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-6xl"
        >
          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row justify-center border-b border-dark-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-3 px-6 py-4 text-sm font-medium transition-all relative",
                  activeTab === tab.id
                    ? "text-brand-orange border-b-2 border-brand-orange"
                    : "text-foreground hover:text-brand-orange"
                )}
              >
                <tab.icon className="h-5 w-5" />
                <span className="font-heading font-semibold">{tab.title}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {/* Visual Side */}
                <div className="space-y-6">
                  <div className="p-6 border border-dark-border rounded-lg bg-background/80 backdrop-blur">
                    <h3 className="font-heading text-xl font-bold text-foreground-bright mb-4 flex items-center gap-3">
                      <activeTabData.icon className="h-6 w-6 text-brand-orange" />
                      {activeTabData.visual.title}
                    </h3>
                    <div className="space-y-4">
                      {activeTabData.visual.steps.map((step, index) => (
                        <motion.div
                          key={step}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * index }}
                          className="flex items-center gap-3"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange/10 ring-2 ring-brand-orange/20">
                            <span className="text-sm font-bold text-brand-orange">{index + 1}</span>
                          </div>
                          <span className="text-foreground">{step}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-4 border border-dark-border rounded-lg bg-background/50">
                    <p className="text-sm text-foreground italic">
                      {activeTabData.description}
                    </p>
                  </div>
                </div>

                {/* Code Side */}
                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute top-4 right-4">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    </div>
                    <pre className="p-6 border border-dark-border rounded-lg bg-gray-900/50 text-sm overflow-x-auto">
                      <code className="text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">
                        {activeTabData.codeSnippet}
                      </code>
                    </pre>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-3 border border-dark-border rounded-lg bg-background/50">
                      <div className="text-lg font-bold text-brand-orange">256-bit</div>
                      <div className="text-xs text-foreground">Encryption</div>
                    </div>
                    <div className="p-3 border border-dark-border rounded-lg bg-background/50">
                      <div className="text-lg font-bold text-green-400">0ms</div>
                      <div className="text-xs text-foreground">Latency</div>
                    </div>
                    <div className="p-3 border border-dark-border rounded-lg bg-background/50">
                      <div className="text-lg font-bold text-blue-400">100%</div>
                      <div className="text-xs text-foreground">Verified</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
