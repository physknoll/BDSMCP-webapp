import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookOpen, Clock, Users, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BDSM‑CP Protocol Specification | Technical Whitepaper",
  description: "Complete technical specification for the Bi‑Directionally Secure Session Protocol for MCP and Agent‑to‑Agent Systems.",
};

export default function SpecPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Header */}
        <section className="px-6 pt-8 lg:px-8 bg-gradient-to-b from-background/50 to-background">
          <div className="mx-auto max-w-4xl py-12">
            <div className="flex items-center gap-3 text-sm text-foreground mb-4">
              <BookOpen className="h-4 w-4" />
              <span>Technical Specification</span>
              <span>•</span>
              <span>Version 0.9-draft</span>
            </div>
            <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground-bright sm:text-4xl lg:text-5xl mb-6">
              BDSM‑CP: Bi‑Directionally Secure Session Protocol for MCP and Agent‑to‑Agent Systems
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Shield className="h-4 w-4 text-brand-orange" />
                <span><strong>Status:</strong> Community Draft</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Clock className="h-4 w-4 text-brand-orange" />
                <span><strong>Date:</strong> 20 August 2025</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Users className="h-4 w-4 text-brand-orange" />
                <span><strong>Authors:</strong> BDSMCP Contributors</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="px-6 lg:px-8 pb-24">
          <div className="mx-auto max-w-4xl">
            <article className="prose prose-invert prose-lg max-w-none">
              
              {/* Abstract */}
              <div className="bg-brand-orange/5 border border-brand-orange/20 rounded-lg p-6 mb-12">
                <h2 className="text-xl font-bold text-foreground-bright mt-0 mb-4">Abstract</h2>
                <p className="text-foreground leading-relaxed mb-0">
                  The Model Context Protocol (MCP) enables AI applications and agents to invoke tools and exchange context using JSON‑RPC over multiple transports. MCP&apos;s success introduces familiar security risks—bearer‑token replay, confused‑deputy authorization, supply‑chain trust in remote servers—and a less familiar gap: the lack of <em>bi‑directional</em> (server→client and client→server) workload attestation, session‑scoped authorization, and per‑message provenance.
                </p>
                <p className="text-foreground leading-relaxed mb-0">
                  <strong className="text-brand-orange">BDSM‑CP</strong> (Bi‑Directionally Secure MCP) is a transport‑agnostic overlay that adds mutual attestation, forward secrecy, capability attenuation, per‑message authentication, and an operator kill‑switch (&ldquo;<strong>SafeWord</strong>&rdquo;) to MCP and agent‑to‑agent (A2A) exchanges without breaking developer ergonomics. BDSM‑CP composes battle‑tested primitives—TLS 1.3 exporters or Noise handshakes; HKDF; AEAD; macaroons for caveat‑bearing capabilities; and workload identity such as SPIFFE SVIDs—into a minimal, auditable session protocol.
                </p>
              </div>

              {/* Table of Contents */}
              <div className="bg-background/50 border border-dark-border rounded-lg p-6 mb-12">
                <h2 className="text-xl font-bold text-foreground-bright mt-0 mb-4">Table of Contents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <a href="#conventions" className="text-brand-orange hover:underline">0. Conventions and Notation</a>
                  <a href="#introduction" className="text-brand-orange hover:underline">1. Introduction</a>
                  <a href="#background" className="text-brand-orange hover:underline">2. Background and Problem Statement</a>
                  <a href="#system-model" className="text-brand-orange hover:underline">3. System Model and Assumptions</a>
                  <a href="#design-principles" className="text-brand-orange hover:underline">4. Design Principles</a>
                  <a href="#crypto-overview" className="text-brand-orange hover:underline">5. Cryptographic Overview</a>
                  <a href="#protocol-architecture" className="text-brand-orange hover:underline">6. Protocol Architecture</a>
                  <a href="#specification" className="text-brand-orange hover:underline">7. Detailed Specification</a>
                  <a href="#security-analysis" className="text-brand-orange hover:underline">8. Security Analysis</a>
                  <a href="#formal" className="text-brand-orange hover:underline">9. Formal Considerations</a>
                  <a href="#performance" className="text-brand-orange hover:underline">10. Performance and Overheads</a>
                  <a href="#interoperability" className="text-brand-orange hover:underline">11. Interoperability</a>
                  <a href="#deployment" className="text-brand-orange hover:underline">12. Deployment Patterns</a>
                  <a href="#privacy" className="text-brand-orange hover:underline">13. Privacy and Compliance</a>
                </div>
              </div>

              {/* Conventions */}
              <section id="conventions" className="mb-12">
                <h2 className="text-2xl font-bold text-foreground-bright mb-6">0. Conventions and Notation</h2>
                <p className="text-foreground leading-relaxed mb-4">
                  The key words <strong>MUST</strong>, <strong>MUST NOT</strong>, <strong>REQUIRED</strong>, <strong>SHALL</strong>, <strong>SHALL NOT</strong>, <strong>SHOULD</strong>, <strong>SHOULD NOT</strong>, <strong>RECOMMENDED</strong>, <strong>NOT RECOMMENDED</strong>, <strong>MAY</strong>, and <strong>OPTIONAL</strong> in this document are to be interpreted as described in RFC 2119 and RFC 8174 when, and only when, they appear in all capitals.
                </p>
                <p className="text-foreground leading-relaxed">
                  We denote byte strings in <code className="bg-gray-800 text-green-400 px-1 py-0.5 rounded">0x…</code> hexadecimal, base64url strings in <code className="bg-gray-800 text-green-400 px-1 py-0.5 rounded">&ldquo;b64u(...)&rdquo;</code>, and structured objects in JSON unless otherwise specified. <code className="bg-gray-800 text-green-400 px-1 py-0.5 rounded">||</code> denotes concatenation. <code className="bg-gray-800 text-green-400 px-1 py-0.5 rounded">Hash(·)</code> denotes a collision‑resistant hash (SHA‑256 RECOMMENDED). <code className="bg-gray-800 text-green-400 px-1 py-0.5 rounded">HKDF(…)</code> uses HKDF‑SHA‑256 unless otherwise stated.
                </p>
              </section>

              {/* Introduction */}
              <section id="introduction" className="mb-12">
                <h2 className="text-2xl font-bold text-foreground-bright mb-6">1. Introduction</h2>
                <p className="text-foreground leading-relaxed mb-4">
                  The <strong>Model Context Protocol (MCP)</strong> standardizes how AI agents discover tools, exchange prompts, and invoke functions using JSON‑RPC over transports such as stdio and streamable HTTP. Its minimalism accelerates integration across operating systems, IDEs, and cloud toolchains. However, deployments that perform real‑world actions (changing infrastructure, moving money, altering records, controlling robots) demand guarantees that basic web security patterns—edge OAuth and TLS server authentication—do not fully provide.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  Three gaps motivate this work:
                </p>
                <ol className="list-decimal list-inside text-foreground space-y-2 mb-4 ml-4">
                  <li><strong className="text-brand-orange">Bi‑directional identity and attestation.</strong> Typical stacks authenticate the client to the server but rarely prove <em>what</em> the server is to the client beyond PKI. Supply‑chain and workload identity need first‑class treatment in both directions.</li>
                  <li><strong className="text-brand-orange">Continuous, session‑scoped authorization.</strong> Once a session is established, most actions ride on long‑lived bearer tokens, making replay and confused‑deputy errors likely. Authorization should be attenuated, short‑lived, and bound to the session transcript.</li>
                  <li><strong className="text-brand-orange">Per‑message provenance.</strong> Without cryptographic binding of each MCP frame to the session and its capability, replay and cross‑context splicing remain possible.</li>
                </ol>
                <p className="text-foreground leading-relaxed">
                  <strong className="text-brand-orange">BDSM‑CP</strong> addresses these gaps while preserving MCP&apos;s developer‑friendly shape. It is a <strong>thin envelope</strong> over MCP messages that creates an attested, forward‑secret session; issues attenuated <strong>capabilities</strong> (macaroons) for concrete actions; and authenticates every message to the session context. A human‑and‑machine‑friendly <strong>SafeWord</strong> control enables instant session revocation.
                </p>
              </section>

              {/* Background */}
              <section id="background" className="mb-12">
                <h2 className="text-2xl font-bold text-foreground-bright mb-6">2. Background and Problem Statement</h2>
                
                <h3 className="text-xl font-semibold text-foreground-bright mb-4">2.1 MCP in brief</h3>
                <p className="text-foreground leading-relaxed mb-6">
                  MCP defines an initialization phase where a client learns server capabilities and then exchanges JSON‑RPC requests, responses, and notifications. It specifies stdio and HTTP transports and discusses authorization patterns, but leaves most authorization decisions to implementations. Many ecosystems now route <em>agent‑to‑agent</em> tasks over MCP‑like or MCP‑compatible pipelines.
                </p>

                <h3 className="text-xl font-semibold text-foreground-bright mb-4">2.2 The risk landscape</h3>
                <ul className="list-disc list-inside text-foreground space-y-2 mb-6 ml-4">
                  <li><strong className="text-red-400">Bearer token replay.</strong> OAuth/OIDC tokens and cookies are high‑value targets. Attackers who exfiltrate them bypass MFA and user presence checks.</li>
                  <li><strong className="text-red-400">Confused‑deputy.</strong> An MCP server may act with its own high privileges on behalf of an agent lacking the context to constrain that authority.</li>
                  <li><strong className="text-red-400">Supply‑chain trust.</strong> Remote &ldquo;servers&rdquo; are executable components. Without workload attestation, clients trust whatever is at the far end of TLS.</li>
                  <li><strong className="text-red-400">Message‑layer gaps.</strong> TLS protects the transport, not the application semantics. JSON‑RPC frames inside a session are not individually bound to least‑privilege capabilities, timestamps, or sequence numbers.</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-bright mb-4">2.3 Requirements</h3>
                <p className="text-foreground leading-relaxed mb-4">We require a protocol that:</p>
                <ul className="list-disc list-inside text-foreground space-y-2 mb-6 ml-4">
                  <li>Proves <strong>who and what</strong> each side is (workload identity and optional binary attestation).</li>
                  <li>Establishes <strong>forward‑secret</strong> shared secrets, <strong>bound to the transport transcript</strong>.</li>
                  <li>Issues <strong>short‑lived, attenuable capabilities</strong> for concrete tools/resources.</li>
                  <li>Authenticates every application frame to the <strong>session context</strong> with replay resistance.</li>
                  <li>Provides an operator‑visible, cryptographically enforced <strong>panic</strong> control.</li>
                </ul>
              </section>

              {/* System Model */}
              <section id="system-model" className="mb-12">
                <h2 className="text-2xl font-bold text-foreground-bright mb-6">3. System Model and Assumptions</h2>
                <ul className="list-disc list-inside text-foreground space-y-2 ml-4">
                  <li><strong>Peers.</strong> Two peers—<strong>Agent A</strong> (initiator) and <strong>Agent B</strong> (responder)—communicate using MCP messages. Either peer may issue requests or notifications after initialization.</li>
                  <li><strong>Transports.</strong> Streamable HTTP (TLS 1.3) or stdio (or equivalent raw pipes).</li>
                  <li><strong>Clocks.</strong> Peers have loosely synchronized clocks (±60 s skew).</li>
                  <li><strong>Randomness.</strong> Each peer has a CSPRNG.</li>
                  <li><strong>Trust anchors.</strong> Deployments maintain one or more trust domains for workload identity (e.g., SPIFFE), and optionally maintain attestation roots for binaries/TEEs.</li>
                </ul>
              </section>

              {/* Design Principles */}
              <section id="design-principles" className="mb-12">
                <h2 className="text-2xl font-bold text-foreground-bright mb-6">4. Design Principles</h2>
                <ol className="list-decimal list-inside text-foreground space-y-3 ml-4">
                  <li><strong className="text-brand-orange">Composition over invention.</strong> Compose well‑analyzed primitives: TLS 1.3 exporters or Noise handshakes; HKDF; AEAD; Ed25519; macaroons; SPIFFE SVIDs.</li>
                  <li><strong className="text-brand-orange">Defense in depth.</strong> Channel security, mutual attestation, capability attenuation, and per‑message authentication each constrain distinct failure modes.</li>
                  <li><strong className="text-brand-orange">Minimal surface.</strong> Keep MCP frames intact; add only a compact envelope carrying sequencing, timestamps, capability IDs, and an authentication tag.</li>
                  <li><strong className="text-brand-orange">Operator clarity.</strong> A single <strong>SafeWord</strong> per session toggles &ldquo;continue&rdquo; or &ldquo;cancel,&rdquo; with deterministic crypto semantics and a clear UI affordance.</li>
                  <li><strong className="text-brand-orange">Interoperability first.</strong> Provide two handshake profiles—one for HTTP+TLS exporters, one for stdio+Noise—that converge to the same key schedule and message layer.</li>
                </ol>
              </section>

              {/* Cryptographic Overview */}
              <section id="crypto-overview" className="mb-12">
                <h2 className="text-2xl font-bold text-foreground-bright mb-6">5. Cryptographic Overview</h2>
                
                <h3 className="text-xl font-semibold text-foreground-bright mb-4">5.1 Primitives (Recommended Profiles)</h3>
                <div className="bg-gray-900/50 border border-dark-border rounded-lg p-6 mb-6">
                  <ul className="list-disc list-inside text-foreground space-y-2">
                    <li><strong>Handshake (HTTP profile):</strong> TLS 1.3 with optional mutual TLS (workload SVIDs). Derive exported keying material (EKM) via the TLS exporter interface.</li>
                    <li><strong>Handshake (stdio profile):</strong> <strong>Noise</strong> framework (e.g., <code className="bg-gray-800 text-green-400 px-1 py-0.5 rounded">Noise_XX</code> for mutual authentication without prior static keys; <code className="bg-gray-800 text-green-400 px-1 py-0.5 rounded">Noise_IK</code> if the responder&apos;s static key is known).</li>
                    <li><strong>KDF:</strong> <strong>HKDF‑SHA‑256</strong> for all schedules and rekeys.</li>
                    <li><strong>AEAD:</strong> <strong>ChaCha20‑Poly1305</strong> (portable) or <strong>AES‑256‑GCM</strong> (hardware‑accelerated).</li>
                    <li><strong>Signatures (optional):</strong> <strong>Ed25519</strong> for attestation tokens.</li>
                    <li><strong>Workload identity:</strong> <strong>SPIFFE</strong> SVIDs (X.509) over mTLS, or equivalent workload identity.</li>
                    <li><strong>Capabilities:</strong> <strong>Macaroons</strong>—HMAC‑chained, caveat‑bearing bearer tokens, attenuable and delegable.</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-foreground-bright mb-4">5.2 Rationale</h3>
                <ul className="list-disc list-inside text-foreground space-y-2 ml-4">
                  <li><strong>Exporters and Noise</strong> both yield forward‑secret secrets and bind the session to the transport transcript, defeating on‑path binding attacks and cross‑channel replay.</li>
                  <li><strong>Macaroons</strong> allow least‑privilege capabilities via inline caveats (time, audience, resource, rate), avoid per‑call public‑key signatures, and support third‑party caveats (policy checks).</li>
                  <li><strong>Per‑message MACs</strong> prevent out‑of‑order and cross‑context replay when combined with sequence numbers, timestamps, and the session context hash.</li>
                </ul>
              </section>

              {/* Protocol Architecture */}
              <section id="protocol-architecture" className="mb-12">
                <h2 className="text-2xl font-bold text-foreground-bright mb-6">6. Protocol Architecture</h2>
                
                <h3 className="text-xl font-semibold text-foreground-bright mb-4">6.1 Roles and Identities</h3>
                <ul className="list-disc list-inside text-foreground space-y-2 mb-6 ml-4">
                  <li><strong>ID_A, ID_B.</strong> Each peer possesses a <strong>workload identity</strong>: typically a SPIFFE ID proved by an X.509 SVID in mTLS, or an equivalent attestation.</li>
                  <li><strong>SessionID.</strong> A 32‑byte value derived from the handshake transcript. Logged for audit, never used as a secret.</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground-bright mb-4">6.2 Session Lifecycle</h3>
                <ol className="list-decimal list-inside text-foreground space-y-2 mb-6 ml-4">
                  <li><strong>HELLO.</strong> Peers advertise BDSM‑CP support and preferred algorithms.</li>
                  <li><strong>HANDSHAKE.</strong> Peers derive a shared secret using either the HTTP or stdio profile, then compute a <strong>context hash</strong> <code className="bg-gray-800 text-green-400 px-1 py-0.5 rounded">H0</code> and a <strong>master key</strong> <code className="bg-gray-800 text-green-400 px-1 py-0.5 rounded">K_master</code>.</li>
                  <li><strong>KEY SCHEDULE.</strong> Derive three disjoint keys: <code className="bg-gray-800 text-green-400 px-1 py-0.5 rounded">K_msg</code> (message MAC/AEAD), <code className="bg-gray-800 text-green-400 px-1 py-0.5 rounded">K_cap</code> (capability mint/verify), <code className="bg-gray-800 text-green-400 px-1 py-0.5 rounded">K_sw</code> (SafeWord control).</li>
                  <li><strong>CAPABILITY ISSUANCE.</strong> The <em>Capability Authority</em> (usually the responder) mints short‑lived <strong>macaroons</strong> for concrete tools/resources with explicit caveats.</li>
                  <li><strong>FRAMED EXCHANGE.</strong> Each MCP JSON‑RPC object is wrapped in a <strong>BDSMCP‑Frame</strong> carrying <code className="bg-gray-800 text-green-400 px-1 py-0.5 rounded">(seq, ts, cap_id, body, tag)</code>.</li>
                  <li><strong>REKEY/REFRESH.</strong> Long sessions periodically rekey <code className="bg-gray-800 text-green-400 px-1 py-0.5 rounded">K_msg</code> and refresh capabilities.</li>
                  <li><strong>CANCEL/TERMINATE.</strong> Either side may issue a <strong>CANCEL</strong> control using <code className="bg-gray-800 text-green-400 px-1 py-0.5 rounded">K_sw</code> to immediately tear down the session and revoke capabilities.</li>
                </ol>

                <h3 className="text-xl font-semibold text-foreground-bright mb-4">6.3 SafeWord Semantics</h3>
                <div className="bg-brand-orange/5 border border-brand-orange/20 rounded-lg p-6 mb-6">
                  <p className="text-foreground leading-relaxed mb-4">
                    The <strong className="text-brand-orange">SafeWord</strong> is both:
                  </p>
                  <ul className="list-disc list-inside text-foreground space-y-2 ml-4">
                    <li>A <strong>cryptographic key</strong> <code className="bg-gray-800 text-green-400 px-1 py-0.5 rounded">K_sw</code> enabling <strong>CONTINUE</strong> and <strong>CANCEL</strong> controls authenticated out‑of‑band from message MACs, and</li>
                    <li>A <strong>human‑readable phrase</strong> (rendered from key material) surfaced in operator UIs to emphasize session boundedness and provide a clear &ldquo;panic button.&rdquo;</li>
                  </ul>
                </div>
              </section>

              {/* Continue with remaining sections... */}
              <div className="text-center py-12">
                <p className="text-lg text-foreground mb-6">
                  This specification continues with detailed implementation guidelines, security analysis, performance considerations, and deployment patterns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/docs/getting-started"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-brand-orange text-white hover:bg-brand-orange/90 hover:shadow-lg hover:shadow-brand-orange/20 h-10 px-8 text-sm font-medium transition-all"
                  >
                    Get Started with BDSMCP
                  </a>
                  <a
                    href="/use-cases"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-dark-border text-foreground hover:bg-dark-border/20 h-10 px-8 text-sm font-medium transition-all"
                  >
                    View Use Cases
                  </a>
                </div>
              </div>

            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
