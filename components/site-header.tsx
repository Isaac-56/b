"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader({ light = false }: { light?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={`site-header ${light ? "site-header--light" : ""} ${scrolled ? "is-scrolled" : ""}`}>
      <Link href="/" className="monogram" aria-label="Bemnet Seifu home">B</Link>
      <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
        <span />
        <span />
      </button>
      <nav className={open ? "is-open" : ""} aria-label="Main navigation">
        <Link href="/#work" onClick={() => setOpen(false)}>Work</Link>
        <Link href="/#about" onClick={() => setOpen(false)}>About</Link>
        <a href="mailto:bemnetseifu@gmail.com" onClick={() => setOpen(false)}>Let’s talk <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}
