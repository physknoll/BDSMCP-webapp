import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookOpen, Code, Shield, Zap, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BDSMCP Documentation | Get Started with Secure AI Agents",
  description: "Complete documentation for implementing BDSMCP in your AI agent systems. Includes protocol specs, SDK guides, and examples.",
};

const docSections = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Quick setup guide to secure your first AI agent conversation",
    href: "/docs/getting-started",
    time: "5 min read"
  },
  {
    icon: Shield,
    title: "Protocol Specification",
    description: "Complete technical specification with security proofs and message formats",
    href: "/docs/spec",
    time: "30 min read"
  },
  {
    icon: Code,
    title: "SDK Reference",
    description: "API documentation for Python, JavaScript, Go, and Rust implementations",
    href: "/docs/sdk",
    time: "15 min read"
  },
  {
    icon: Zap,
    title: "Examples & Tutorials",
    description: "Real-world examples and step-by-step tutorials for common use cases",
    href: "/docs/examples",
    time: "10 min read"
  }
];

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-4xl py-24 sm:py-32">
            <div className="text-center">
              <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground-bright sm:text-6xl">
                BDSMCP
                <br />
                <span className="text-brand-orange">Documentation</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-foreground sm:text-xl">
                Everything you need to implement secure AI agent communication 
                in your systems.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-24 sm:py-32 bg-gradient-to-b from-background/50 to-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground-bright sm:text-4xl">
                Quick Start
              </h2>
              <p className="mt-6 text-lg leading-8 text-foreground">
                Get BDSMCP running in under 5 minutes
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <pre className="p-8 border border-dark-border rounded-xl bg-gray-900/50 text-sm overflow-x-auto">
                  <code className="text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">
{`# Install the BDSMCP SDK
pip install bdsmcp

# Basic secure agent setup
from bdsmcp import SecureAgent, SafeWord

# Initialize agent with hardware attestation
agent = SecureAgent(
    identity="my-ai-agent",
    attestation_provider="tpm2.0"
)

# Establish secure session
session = await agent.connect_to("peer-agent-id")

# Create capability-restricted token
token = session.create_capability(
    resource="file:read:/secure/data/*",
    duration="1h",
    max_operations=100
)

# Emergency termination setup
safeword = SafeWord.generate()
session.register_safeword(safeword)

# Your secure agent communication starts here!
response = await session.call("analyze_data", {"file": "/secure/data/input.json"})
`}
                  </code>
                </pre>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="/docs/getting-started"
                className="inline-flex items-center rounded-lg bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-orange/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
              >
                Full Getting Started Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground-bright sm:text-4xl">
                Documentation Sections
              </h2>
              <p className="mt-6 text-lg leading-8 text-foreground">
                Comprehensive guides for every aspect of BDSMCP
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {docSections.map((section) => (
                <a
                  key={section.title}
                  href={section.href}
                  className="relative p-8 border border-dark-border rounded-xl bg-background/50 backdrop-blur hover:bg-background/80 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange/10 ring-1 ring-brand-orange/20 group-hover:bg-brand-orange/20 transition-colors flex-shrink-0">
                      <section.icon className="h-6 w-6 text-brand-orange" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-xl font-bold text-foreground-bright mb-2">
                        {section.title}
                      </h3>
                      
                      <p className="text-foreground leading-relaxed mb-4">
                        {section.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground/60">
                          {section.time}
                        </span>
                        <div className="flex items-center text-sm font-medium text-foreground group-hover:text-brand-orange transition-colors">
                          Read more
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* API Reference */}
        <section className="py-24 sm:py-32 bg-gradient-to-b from-background to-background/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground-bright sm:text-4xl">
                Multi-Language Support
              </h2>
              <p className="mt-6 text-lg leading-8 text-foreground">
                Official SDKs available for your preferred programming language
              </p>
              
              <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { name: "Python", status: "Stable" },
                  { name: "JavaScript", status: "Stable" },
                  { name: "Go", status: "Beta" },
                  { name: "Rust", status: "Beta" }
                ].map((lang) => (
                  <div key={lang.name} className="p-4 border border-dark-border rounded-lg bg-background/50">
                    <div className="font-heading font-semibold text-foreground-bright">{lang.name}</div>
                    <div className="text-sm text-brand-orange">{lang.status}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
