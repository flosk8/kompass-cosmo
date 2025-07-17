import Link from "next/link";
import { Logo } from "../logo";
import { KompassLogo } from "../kompass-logo";

export const KompassFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      href: "https://studio.prod.kompass.gg",
      label: "ARD Kompass Studio",
    },
    {
      href: "https://kompass.guide",
      label: "Kompass Guide",
    },
    {
      href: "https://wundergraph.com",
      label: "Cosmo Wundergraph",
    },
    {
      href: "https://cosmo-docs.wundergraph.com/overview",
      label: "Cosmo Wundergraph Documentation",
    },
  ];

  return (
    <footer className="border-t border-gray-800 bg-gray-950/80 px-4 text-gray-400 xl:px-0">
      <div className="mx-auto max-w-screen-xl py-8">
        <div className="flex flex-col items-start space-y-4">
          <nav className="flex flex-col gap-y-2 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2">
            <div className="flex items-center">
              <KompassLogo width={24} height={24} />
            </div>
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="text-sm">
            © {currentYear} WunderGraph, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
