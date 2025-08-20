import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Key, Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The BDSMCP Protocol | Technical Specification",
  description: "A deep dive into the BDSMCP handshake, SafeWord, and capability attenuation model for secure AI agent communication.",
};

const protocolFeatures = [
  {
    icon: Shield,
    title: "Noise Protocol Integration",
    description: "Built on the proven Noise Protocol framework with XX handshake pattern for mutual authentication",
    details: [
      "Perfect forward secrecy",
      "Resistance to quantum attacks (post-quantum ready)",
      "Zero round-trip handshake after initial setup",
      "Built-in replay protection"
    ]
  },
  {
    icon: Key,
    title: "Macaroon-Based Authorization",
    description: "Capability-based security with cryptographic attenuation and time-bound permissions",
    details: [
      "Hierarchical delegation of authority",
      "Time-based automatic expiration",
      "Resource-scoped access control",
      "Tamper-evident capability chains"
    ]
  },
  {
    icon: Lock,
    title: "SafeWord Emergency Termination",
    description: "Cryptographically secure kill-switch for immediate session termination from either party",
    details: [
      "256-bit entropy generation",
      "Instant propagation across all endpoints",
      "Forensic audit trail preservation",
      "No false positive terminations"
    ]
  },
  {
    icon: Zap,
    title: "Hardware Attestation",
    description: "TPM and TEE integration for verifiable compute integrity and workload identity",
    details: [
      "TPM 2.0 remote attestation",
      "Intel TXT / AMD SVM support",
      "ARM TrustZone integration",
      "Custom HSM compatibility"
    ]
  }
];

export default function ProtocolPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-4xl py-24 sm:py-32">
            <div className="text-center">
              <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground-bright sm:text-6xl">
                The BDSMCP
                <br />
                <span className="text-brand-orange">Protocol Specification</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-foreground sm:text-xl">
                A comprehensive technical breakdown of the Bi-Directionally Secure Model Control Protocol.
                Built for enterprise-grade AI agent communication.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Overview */}
        <section className="py-24 sm:py-32 bg-gradient-to-b from-background/50 to-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground-bright sm:text-4xl">
                Core Protocol Components
              </h2>
              <p className="mt-6 text-lg leading-8 text-foreground">
                BDSMCP extends MCP with three fundamental security primitives
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                          {protocolFeatures.map((feature) => (
              <div
                key={feature.title}
                className="relative p-8 border border-dark-border rounded-xl bg-background/50 backdrop-blur"
              >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange/10 ring-1 ring-brand-orange/20">
                      <feature.icon className="h-6 w-6 text-brand-orange" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground-bright">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p className="text-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Message Flow */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground-bright sm:text-4xl">
                Protocol Message Flow
              </h2>
              <p className="mt-6 text-lg leading-8 text-foreground">
                The complete handshake and session lifecycle
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <pre className="p-8 border border-dark-border rounded-xl bg-gray-900/50 text-sm overflow-x-auto">
                  <code className="text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">
{`// 1. Initial Handshake
BDSMCP_HELLO {
  version: "1.0",
  agent_id: "secure-workload-identifier",
  hardware_attestation: {
    tpm_quote: "base64-encoded-quote",
    pcr_values: [0, 1, 2, 7],
    nonce: "random-challenge"
  },
  noise_public_key: "ephemeral-dh-key"
}

// 2. Mutual Authentication Response
BDSMCP_HANDSHAKE_RESPONSE {
  session_id: "uuid-v4-session-identifier",
  mutual_attestation: "verified",
  noise_handshake: "completed-xx-pattern",
  safeword: {
    phrase: "entropy-derived-phrase",
    hmac: "phrase-authentication-code"
  },
  macaroon_root: "session-capability-root"
}

// 3. Capability Request
BDSMCP_CAPABILITY_REQUEST {
  session_id: "established-session",
  requested_capabilities: [
    "file:read:/secure/data/*",
    "api:call:payment-processor",
    "compute:schedule:background-task"
  ],
  duration: "1h",
  max_operations: 100
}

// 4. Attenuated Capability Grant
BDSMCP_CAPABILITY_GRANT {
  macaroon: {
    identifier: "capability-token-id",
    caveats: [
      "expires < 2024-08-20T22:00:00Z",
      "max_calls < 100",
      "resource_pattern = /secure/data/*",
      "operation = read"
    ],
    signature: "cryptographic-mac"
  }
}

// 5. Emergency Termination
BDSMCP_SAFEWORD_CANCEL {
  session_id: "target-session",
  safeword_phrase: "entropy-derived-phrase",
  reason: "security_incident",
  propagate_to_peers: true
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Security Guarantees */}
        <section className="py-24 sm:py-32 bg-gradient-to-b from-background to-background/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground-bright sm:text-4xl">
                Security Guarantees
              </h2>
              <p className="mt-6 text-lg leading-8 text-foreground">
                Mathematical and cryptographic assurances built into the protocol
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Perfect Forward Secrecy",
                "Mutual Authentication",
                "Replay Attack Prevention",
                "Session Isolation",
                "Capability Revocation",
                "Hardware-Backed Identity",
                "Zero-Knowledge Proofs",
                "Post-Quantum Readiness",
                "Audit Trail Integrity"
              ].map((guarantee) => (
                <div key={guarantee} className="flex items-center gap-3 p-4 border border-dark-border rounded-lg bg-background/50">
                  <Shield className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-foreground font-medium">{guarantee}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
