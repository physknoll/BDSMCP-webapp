import Link from "next/link";
import { Github, Twitter, MessageCircle } from "lucide-react";

const navigation = {
  main: [
    { name: "Protocol", href: "/docs/spec" },
    { name: "Use Cases", href: "/use-cases" },
    { name: "Documentation", href: "/docs" },
    { name: "Community", href: "/community" },
  ],
  docs: [
    { name: "Getting Started", href: "/docs/getting-started" },
    { name: "API Reference", href: "/docs/api" },
    { name: "Examples", href: "/docs/examples" },
    { name: "Specification", href: "/docs/spec" },
  ],
  community: [
    { name: "GitHub", href: "#", icon: Github },
    { name: "Discord", href: "#", icon: MessageCircle },
    { name: "Twitter", href: "#", icon: Twitter },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-dark-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground-bright">
                BDSMCP
              </h3>
              <p className="mt-2 text-sm leading-6 text-foreground">
                The unbreakable handshake for AI agents. Secure your agent conversations 
                with mutual attestation, capability attenuation, and cryptographic SafeWords.
              </p>
            </div>
            <div className="flex space-x-6">
              {navigation.community.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-brand-orange transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground-bright">
                Resources
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-foreground hover:text-brand-orange transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground-bright">
                Documentation
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.docs.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-foreground hover:text-brand-orange transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-dark-border pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-foreground">
              &copy; 2024 BDSMCP Protocol. All rights reserved.
            </p>
            <p className="mt-4 text-xs leading-5 text-foreground sm:mt-0">
              Built for the security of AI agent communication.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
