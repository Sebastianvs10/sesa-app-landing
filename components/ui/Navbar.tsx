"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./Button";

const NAV_LINKS = [
  {
    label: "Producto",
    href: "#features",
    children: [
      { label: "Facturación electrónica", href: "#features", desc: "RIPS, FEV, DIAN" },
      { label: "Gestión de glosas", href: "#features", desc: "Alertas y recuperación" },
      { label: "Cartera y recaudo", href: "#features", desc: "Priorización inteligente" },
      { label: "Integraciones", href: "#integrations", desc: "DIAN, EPS, HIS/RIS" },
    ],
  },
  { label: "Precios", href: "#pricing" },
  { label: "Clientes", href: "#testimonials" },
  { label: "Recursos", href: "#" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
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
          borderBottom: scrolled ? "1px solid var(--sesa-border)" : "1px solid transparent",
          backgroundColor: scrolled ? "var(--sesa-surface)" : "transparent",
          backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          transition: "all var(--sesa-motion-base) var(--sesa-ease-standard)",
        }}
      >
        <nav
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          {/* Logo */}
          <a href="#" style={{ textDecoration: "none", flexShrink: 0, display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "30px", height: "30px",
              borderRadius: "7px",
              background: "linear-gradient(135deg, var(--sesa-accent) 0%, var(--sesa-accent-2) 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "var(--sesa-shadow-glow-accent)",
            }}>
              <span style={{ color: "white", fontWeight: 800, fontSize: "13px", letterSpacing: "-0.02em" }}>S</span>
            </div>
            <span style={{ fontWeight: 700, fontSize: "16px", color: "var(--sesa-text-primary)", letterSpacing: "-0.03em" }}>
              SESA
            </span>
            <span style={{
              fontSize: "10px", fontWeight: 600, letterSpacing: "0.08em",
              textTransform: "uppercase", color: "var(--sesa-accent)",
              backgroundColor: "var(--sesa-accent-muted)",
              padding: "2px 6px", borderRadius: "4px",
              border: "1px solid var(--sesa-border-accent)",
            }}>
              Enterprise
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="nav-desktop" style={{
            display: "flex", listStyle: "none", gap: "2px", margin: 0, padding: 0, flex: 1, justifyContent: "center",
          }}>
            {NAV_LINKS.map((link) => (
              <li key={link.label} style={{ position: "relative" }}
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  style={{
                    display: "flex", alignItems: "center", gap: "4px",
                    padding: "6px 12px",
                    borderRadius: "var(--sesa-radius-md)",
                    color: "var(--sesa-text-secondary)",
                    textDecoration: "none", fontSize: "13.5px", fontWeight: 500,
                    transition: "all var(--sesa-motion-fast)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--sesa-text-primary)";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--sesa-surface-hover)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--sesa-text-secondary)";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  }}
                >
                  {link.label}
                  {link.children && <ChevronDown size={13} style={{ opacity: 0.6 }} />}
                </a>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      style={{
                        position: "absolute", top: "calc(100% + 6px)", left: "50%",
                        transform: "translateX(-50%)",
                        backgroundColor: "var(--sesa-surface-elevated)",
                        border: "1px solid var(--sesa-border)",
                        borderRadius: "var(--sesa-radius-lg)",
                        boxShadow: "var(--sesa-shadow-lg)",
                        padding: "8px",
                        minWidth: "220px", zIndex: 200,
                      }}
                    >
                      {link.children.map((child) => (
                        <a key={child.label} href={child.href} style={{
                          display: "block", padding: "9px 12px",
                          borderRadius: "var(--sesa-radius-md)",
                          textDecoration: "none",
                          transition: "background var(--sesa-motion-fast)",
                        }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--sesa-surface-hover)")}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                        >
                          <div style={{ fontSize: "13px", fontWeight: 500, color: "var(--sesa-text-primary)", marginBottom: "2px" }}>{child.label}</div>
                          <div style={{ fontSize: "11px", color: "var(--sesa-text-muted)" }}>{child.desc}</div>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
            <ThemeToggle />
            <a href="#" className="nav-desktop" style={{ textDecoration: "none" }}>
              <Button variant="ghost" size="sm">Iniciar sesión</Button>
            </a>
            <a href="#pricing" style={{ textDecoration: "none" }}>
              <Button variant="primary" size="sm">Solicitar demo</Button>
            </a>
            <button className="nav-mobile-btn" onClick={() => setMobileOpen(!mobileOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--sesa-text-primary)", padding: "6px", borderRadius: "var(--sesa-radius-md)" }}
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
              position: "fixed", top: "60px", left: 0, right: 0, zIndex: 99,
              backgroundColor: "var(--sesa-surface)", borderBottom: "1px solid var(--sesa-border)",
              padding: "16px 24px 24px",
            }}
          >
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={() => setMobileOpen(false)} style={{
                    display: "block", padding: "10px 12px", borderRadius: "var(--sesa-radius-md)",
                    color: "var(--sesa-text-secondary)", textDecoration: "none", fontSize: "15px", fontWeight: 500,
                  }}>{link.label}</a>
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
