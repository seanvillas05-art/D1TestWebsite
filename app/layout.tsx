import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DataOne Asia PH — Managed IT & Data Center",
  description: "In-country data center & cloud services for PH enterprises.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-800">
        <header className="border-b">
          <nav className="mx-auto max-w-6xl p-4 flex items-center justify-between">
            <a href="/" className="font-semibold">DataOne</a>
            <div className="flex gap-4 text-sm">
              <a href="/services">Services</a>
              <a href="/about">About</a>
              <a href="/contact" className="px-3 py-1 rounded-lg bg-sky-600 text-white">Contact</a>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl p-4">{children}</main>
        <footer className="mt-16 border-t">
          <div className="mx-auto max-w-6xl p-4 text-sm text-slate-600">
            © {new Date().getFullYear()} DataOne Asia (PH) Inc. · Quezon City · (02) 3491 7300
          </div>
        </footer>
      </body>
    </html>
  );
}
