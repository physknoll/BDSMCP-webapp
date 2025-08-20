import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Github, MessageCircle, Mail, Users, BookOpen, Code } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BDSMCP Community | Join the Secure AI Movement",
  description: "Connect with developers, security engineers, and AI researchers building the future of secure agent communication.",
};

const communityLinks = [
  {
    icon: Github,
    title: "GitHub",
    description: "Contribute to the protocol, SDKs, and reference implementations",
    href: "#",
    stats: "500+ stars",
    action: "View Repository"
  },
  {
    icon: MessageCircle,
    title: "Discord",
    description: "Real-time chat with the core team and community members",
    href: "#",
    stats: "1,200+ members",
    action: "Join Server"
  },
  {
    icon: Mail,
    title: "Mailing List",
    description: "Stay updated with protocol releases and security advisories",
    href: "#",
    stats: "800+ subscribers",
    action: "Subscribe"
  }
];

const resources = [
  {
    icon: BookOpen,
    title: "Protocol Specification",
    description: "The complete technical specification with security proofs",
    href: "/docs/spec"
  },
  {
    icon: Code,
    title: "SDK Documentation",
    description: "Implementation guides for Python, JavaScript, Go, and Rust",
    href: "/docs/sdk"
  },
  {
    icon: Users,
    title: "Working Groups",
    description: "Join specialized groups for different use cases and industries",
    href: "/docs/working-groups"
  }
];

export default function CommunityPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-4xl py-24 sm:py-32">
            <div className="text-center">
              <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground-bright sm:text-6xl">
                Join the
                <br />
                <span className="text-brand-orange">Secure AI Movement</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-foreground sm:text-xl">
                Connect with developers, security engineers, and AI researchers building 
                the future of secure agent communication.
              </p>
            </div>
          </div>
        </section>

        {/* Community Links */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground-bright sm:text-4xl">
                Connect &amp; Collaborate
              </h2>
              <p className="mt-6 text-lg leading-8 text-foreground">
                Multiple ways to engage with the BDSMCP community
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {communityLinks.map((link) => (
                <div
                  key={link.title}
                  className="relative p-8 border border-dark-border rounded-xl bg-background/50 backdrop-blur hover:bg-background/80 transition-all group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange/10 ring-1 ring-brand-orange/20 group-hover:bg-brand-orange/20 transition-colors">
                    <link.icon className="h-6 w-6 text-brand-orange" />
                  </div>
                  
                  <h3 className="mt-6 font-heading text-xl font-bold text-foreground-bright">
                    {link.title}
                  </h3>
                  
                  <p className="mt-4 text-foreground leading-relaxed">
                    {link.description}
                  </p>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm text-brand-orange font-medium">
                      {link.stats}
                    </span>
                    <a
                      href={link.href}
                      className="inline-flex items-center text-sm font-medium text-foreground hover:text-brand-orange transition-colors"
                    >
                      {link.action}
                      <span className="ml-1">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Developer Resources */}
        <section className="py-24 sm:py-32 bg-gradient-to-b from-background/50 to-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground-bright sm:text-4xl">
                Developer Resources
              </h2>
              <p className="mt-6 text-lg leading-8 text-foreground">
                Everything you need to start building with BDSMCP
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {resources.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.href}
                  className="relative p-8 border border-dark-border rounded-xl bg-background/50 backdrop-blur hover:bg-background/80 transition-all group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 ring-1 ring-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                    <resource.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  
                  <h3 className="mt-6 font-heading text-xl font-bold text-foreground-bright">
                    {resource.title}
                  </h3>
                  
                  <p className="mt-4 text-foreground leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <div className="mt-6 flex items-center text-sm font-medium text-foreground group-hover:text-brand-orange transition-colors">
                    Learn more
                    <span className="ml-1">→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contributing */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground-bright sm:text-4xl">
                  Contributing to BDSMCP
                </h2>
                <p className="mt-6 text-lg leading-8 text-foreground">
                  Help shape the future of secure AI agent communication
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <h3 className="font-heading text-xl font-bold text-foreground-bright">
                    Core Protocol Development
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Code className="h-5 w-5 text-brand-orange mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-foreground-bright">Reference Implementations</div>
                        <div className="text-sm text-foreground">Python, JavaScript, Go, and Rust SDKs</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-brand-orange mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-foreground-bright">Documentation</div>
                        <div className="text-sm text-foreground">API docs, tutorials, and examples</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-brand-orange mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-foreground-bright">Testing &amp; Validation</div>
                        <div className="text-sm text-foreground">Security audits and interoperability testing</div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h3 className="font-heading text-xl font-bold text-foreground-bright">
                    Community Initiatives
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <MessageCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-foreground-bright">Working Groups</div>
                        <div className="text-sm text-foreground">Industry-specific implementation groups</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Github className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-foreground-bright">Open Source Tools</div>
                        <div className="text-sm text-foreground">Debugging, monitoring, and deployment tools</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-foreground-bright">Educational Content</div>
                        <div className="text-sm text-foreground">Workshops, talks, and training materials</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 text-center">
                <a
                  href="#"
                  className="inline-flex items-center rounded-lg bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-orange/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Start Contributing
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-24 sm:py-32 bg-gradient-to-b from-background to-background/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground-bright sm:text-4xl">
                Stay in the Loop
              </h2>
              <p className="mt-6 text-lg leading-8 text-foreground">
                Get updates on protocol releases, security advisories, and community events.
              </p>
              <div className="mt-10 flex max-w-md mx-auto gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border border-dark-border bg-background/50 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-dark-border placeholder:text-foreground/60 focus:ring-2 focus:ring-inset focus:ring-brand-orange sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-brand-orange px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-orange/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
