"use client";
import { useEffect, useState } from "react";
import { profile } from "@/app/content";

const links = [
  { href: "#services", label: "Automation" },
  { href: "#freelance", label: "Freelance" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? "bg-paper/90 backdrop-blur border-b border-line" : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight text-ink">
          Ahmet Tarık BOSTAN<span className="text-signal"></span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline font-mono text-xs uppercase tracking-label text-slate hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        {/* <a
          href={profile.cv}
          className="rounded-full border border-ink px-4 py-1.5 font-mono text-xs uppercase tracking-label text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          CV
        </a> */ }
      </div>
    </header>
  );
}
