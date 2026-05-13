"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./Button";

const NAV_LINKS = [
  { label: "Características", href: "#features" },
  { label: "Estadísticas", href: "#stats" },
  { label: "Precios", href: "#pricing" },
  { label: "Testimonios", href: "#testimonials" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "60px",
          borderBottom: scrolled
            ? "1px solid var(--sesa-border)"
            : "1px solid transparent",
          backgroundColor: scrolled
            ? "var(--sesa-surface)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "all var(--sesa-motion-base) var(--sesa-ease-standard)",
        }}
      >
        <nav
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, var(--sesa-accent) 0%, var(--sesa-accent-2) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span style={{ color: "white", fontWeight: 700, fontSize: "14px" }}>S</span>
            </div>
            <span
              style={{
                fontWeight: 700,
                fontSize: "18px",
                color: "var(--sesa-text-primary)",
                letterSpacing: "-0.02em",
              }}
            >
              SESA
            </span>
          </a>

          {/* Desktop links */}
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              gap: "4px",
              margin: 0,
              padding: 0,
            }}
            className="nav-desktop"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "var(--sesa-radius-md)",
                    color: "var(--sesa-text-secondary)",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                    transition: "all var(--sesa-motion-fast) var(--sesa-ease-standard)",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "var(--sesa-text-primary)";
                    (e.target as HTMLElement).style.backgroundColor = "var(--sesa-surface-hover)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = "var(--sesa-text-secondary)";
                    (e.target as HTMLElement).style.backgroundColor = "transparent";
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <ThemeToggle />
            <a href="#pricing" className="nav-desktop">
              <Button variant="ghost" size="sm">Iniciar sesión</Button>
            </a>
            <a href="#pricing">
              <Button variant="primary" size="sm">Solicitar demo</Button>
            </a>
            <button
              className="nav-mobile-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--sesa-text-primary)",
                padding: "6px",
                borderRadius: "var(--sesa-radius-md)",
              }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            style={{
              position: "fixed",
              top: "60px",
              left: 0,
              right: 0,
              zIndex: 99,
              backgroundColor: "var(--sesa-surface)",
              borderBottom: "1px solid var(--sesa-border)",
              padding: "16px 24px 24px",
            }}
          >
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: "block",
                      padding: "10px 12px",
                      borderRadius: "var(--sesa-radius-md)",
                      color: "var(--sesa-text-secondary)",
                      textDecoration: "none",
                      fontSize: "15px",
                      fontWeight: 500,
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-desktop { display: flex !important; }
        .nav-mobile-btn { display: none !important; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
