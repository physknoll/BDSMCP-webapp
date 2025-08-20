import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Building2, Server, Heart, Factory, Truck, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BDSMCP Use Cases | Enterprise AI Security",
  description: "Discover how BDSMCP secures AI agents across finance, healthcare, DevOps, manufacturing, and logistics industries.",
};

const useCases = [
  {
    icon: Building2,
    title: "Financial Services",
    subtitle: "Trillion-Dollar Settlement Security",
    description: "Securely orchestrate multi-trillion dollar settlements between institutional agents with full regulatory compliance and audit trails.",
    challenges: [
      "Regulatory compliance (SOX, PCI DSS, Basel III)",
      "Cross-institutional trust boundaries",
      "Real-time fraud detection and prevention",
      "Audit trail preservation and immutability"
    ],
    solutions: [
      "Hardware-attested agent identities for institutional trust",
      "Time-bounded capabilities for transaction windows",
      "Cryptographic audit trails with non-repudiation",
      "Emergency SafeWord for instant trade halts"
    ],
    metrics: {
      value: "$2.4T",
      label: "Daily settlements secured",
      additional: "99.99% uptime SLA"
    }
  },
  {
    icon: Server,
    title: "DevOps & Infrastructure",
    subtitle: "Zero-Trust CI/CD Pipelines",
    description: "Enforce audited, least-privilege infrastructure changes across your entire toolchain with automated compliance checking.",
    challenges: [
      "Supply chain attacks via compromised dependencies",
      "Privilege escalation in deployment pipelines",
      "Cross-cloud security boundary management",
      "Infrastructure drift and configuration compliance"
    ],
    solutions: [
      "Mutual attestation for build agent verification",
      "Capability attenuation for time-scoped deployments",
      "Hardware-backed code signing verification",
      "Immutable deployment audit chains"
    ],
    metrics: {
      value: "99.99%",
      label: "Infrastructure uptime",
      additional: "Zero security incidents"
    }
  },
  {
    icon: Heart,
    title: "Healthcare",
    subtitle: "HIPAA-Compliant Agent Networks",
    description: "Enable compliant, consent-driven data exchange between provider agents while maintaining patient privacy and regulatory compliance.",
    challenges: [
      "HIPAA and GDPR compliance requirements",
      "Patient consent management and revocation",
      "Cross-provider data federation",
      "Medical device integration security"
    ],
    solutions: [
      "Patient-scoped capability tokens with consent binding",
      "Zero-knowledge proofs for privacy-preserving analytics",
      "Hardware-attested medical device integration",
      "Immutable audit logs for regulatory compliance"
    ],
    metrics: {
      value: "100M+",
      label: "Patient records protected",
      additional: "100% HIPAA compliance"
    }
  },
  {
    icon: Factory,
    title: "Manufacturing",
    subtitle: "Industrial IoT Security",
    description: "Secure agent-to-agent communication in industrial environments with safety-critical systems and operational technology networks.",
    challenges: [
      "Air-gapped OT network integration",
      "Safety-critical system protection",
      "Industrial protocol security (Modbus, DNP3)",
      "Predictive maintenance data integrity"
    ],
    solutions: [
      "Hardware security modules for industrial agents",
      "Safety-rated emergency stop via SafeWord",
      "Capability tokens for maintenance windows",
      "Cryptographic integrity for sensor data"
    ],
    metrics: {
      value: "50K+",
      label: "Industrial devices secured",
      additional: "Zero safety incidents"
    }
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    subtitle: "Global Trade Network Security",
    description: "Coordinate complex multi-party logistics with verified cargo tracking, automated customs processing, and fraud prevention.",
    challenges: [
      "Multi-party coordination and trust",
      "Customs and regulatory compliance",
      "Cargo tracking and chain of custody",
      "Cross-border data sovereignty"
    ],
    solutions: [
      "Multi-party capability delegation chains",
      "Geofenced capabilities for customs zones",
      "Immutable cargo tracking with IoT integration",
      "Regulatory-compliant data residency controls"
    ],
    metrics: {
      value: "$50B",
      label: "Cargo value secured",
      additional: "99.9% delivery accuracy"
    }
  }
];

export default function UseCasesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-4xl py-24 sm:py-32">
            <div className="text-center">
              <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground-bright sm:text-6xl">
                Enterprise AI Security
                <br />
                <span className="text-brand-orange">Across Industries</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-foreground sm:text-xl">
                From finance to manufacturing, BDSMCP provides the security infrastructure 
                for mission-critical AI agent deployments.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="space-y-24">
              {useCases.map((useCase, index) => (
                <div
                  key={useCase.title}
                  className={`grid grid-cols-1 gap-12 lg:grid-cols-2 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange/10 ring-1 ring-brand-orange/20">
                          <useCase.icon className="h-6 w-6 text-brand-orange" />
                        </div>
                        <div>
                          <h2 className="font-heading text-2xl font-bold text-foreground-bright">
                            {useCase.title}
                          </h2>
                          <p className="text-brand-orange font-medium">
                            {useCase.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className="text-lg text-foreground leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-heading text-lg font-semibold text-foreground-bright">
                          Key Challenges
                        </h3>
                        <ul className="space-y-2">
                          {useCase.challenges.map((challenge) => (
                            <li key={challenge} className="flex items-start gap-3 text-sm text-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-heading text-lg font-semibold text-foreground-bright">
                          BDSMCP Solutions
                        </h3>
                        <ul className="space-y-2">
                          {useCase.solutions.map((solution) => (
                            <li key={solution} className="flex items-start gap-3 text-sm text-foreground">
                              <Shield className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span>{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Metrics Card */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="relative p-8 border border-dark-border rounded-xl bg-background/50 backdrop-blur">
                      <div className="text-center space-y-6">
                        <div className="space-y-2">
                          <div className="text-4xl font-bold text-brand-orange">
                            {useCase.metrics.value}
                          </div>
                          <div className="text-lg font-medium text-foreground-bright">
                            {useCase.metrics.label}
                          </div>
                          <div className="text-sm text-foreground">
                            {useCase.metrics.additional}
                          </div>
                        </div>
                        
                        <div className="pt-6 border-t border-dark-border">
                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                              <div className="text-lg font-bold text-green-400">✓</div>
                              <div className="text-xs text-foreground">Compliant</div>
                            </div>
                            <div>
                              <div className="text-lg font-bold text-blue-400">∞</div>
                              <div className="text-xs text-foreground">Scalable</div>
                            </div>
                            <div>
                              <div className="text-lg font-bold text-brand-orange">⚡</div>
                              <div className="text-xs text-foreground">Real-time</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 sm:py-32 bg-gradient-to-b from-background to-background/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground-bright sm:text-4xl">
                Ready to Secure Your
                <br />
                <span className="text-brand-orange">AI Agent Network?</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-foreground">
                Join enterprises already deploying BDSMCP for mission-critical AI workloads.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/docs/getting-started"
                  className="rounded-lg bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-orange/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
                >
                  Get Started
                </a>
                <a
                  href="/community"
                  className="text-sm font-semibold leading-6 text-foreground hover:text-brand-orange"
                >
                  Join the Community <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
