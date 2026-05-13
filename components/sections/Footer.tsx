"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const FOOTER_LINKS = {
  Producto: [
    { label: "Facturación electrónica", href: "/#features" },
    { label: "Gestión de glosas", href: "/#features" },
    { label: "Cartera y recaudo", href: "/#features" },
    { label: "Reportes e indicadores", href: "/#features" },
    { label: "Integraciones", href: "/#integrations" },
    { label: "Changelog", href: "/changelog" },
  ],
  Empresa: [
    { label: "Sobre SESA", href: "/sobre-sesa" },
    { label: "Blog", href: "/blog" },
    { label: "Casos de éxito", href: "/casos-de-exito" },
    { label: "Equipo", href: "/sobre-sesa#equipo" },
    { label: "Carreras", href: "#", badge: "Hiring" },
  ],
  Recursos: [
    { label: "Documentación API", href: "#" },
    { label: "Guía de integración", href: "#" },
    { label: "Normativa DIAN", href: "#" },
    { label: "Estado del sistema", href: "#" },
    { label: "Centro de ayuda", href: "#" },
  ],
  Legal: [
    { label: "Términos de servicio", href: "/legal/terminos" },
    { label: "Política de privacidad", href: "/legal/privacidad" },
    { label: "Política de cookies", href: "/legal/cookies" },
    { label: "Habeas data", href: "/legal/habeas-data" },
    { label: "SLA", href: "/legal/terminos#5" },
  ],
};

export function Footer() {
  return (
    <footer style={{
      backgroundColor: "var(--sesa-surface)",
      borderTop: "1px solid var(--sesa-border)",
    }}>
      {/* Main footer */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 24px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "280px repeat(4, 1fr)", gap: "48px" }} className="footer-grid">
          {/* Brand column */}
          <div>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{
                width: "30px", height: "30px", borderRadius: "7px",
                background: "linear-gradient(135deg, var(--sesa-accent), var(--sesa-accent-2))",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "var(--sesa-shadow-glow-accent)",
              }}>
                <span style={{ color: "white", fontWeight: 800, fontSize: "13px" }}>S</span>
              </div>
              <span style={{ fontWeight: 700, fontSize: "16px", color: "var(--sesa-text-primary)", letterSpacing: "-0.03em" }}>SESA</span>
            </div>

            <p style={{ fontSize: "13px", color: "var(--sesa-text-secondary)", lineHeight: 1.7, marginBottom: "24px", maxWidth: "220px" }}>
              Plataforma SaaS líder para la gestión integral del ciclo de ingresos en el sector salud colombiano.
            </p>

            {/* Newsletter mini */}
            <div style={{ marginBottom: "24px" }}>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--sesa-text-muted)", marginBottom: "10px" }}>
                Novedades del producto
              </p>
              <div style={{ display: "flex", gap: "6px" }}>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  style={{
                    flex: 1, height: "32px", padding: "0 10px",
                    backgroundColor: "var(--sesa-input-bg)",
                    border: "1px solid var(--sesa-input-border)",
                    borderRadius: "var(--sesa-radius-md)",
                    fontSize: "12px", color: "var(--sesa-text-primary)",
                    outline: "none",
                  }}
                />
                <button style={{
                  width: "32px", height: "32px",
                  backgroundColor: "var(--sesa-accent)",
                  border: "none", borderRadius: "var(--sesa-radius-md)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", flexShrink: 0,
                }}>
                  <ArrowRight size={13} style={{ color: "white" }} />
                </button>
              </div>
            </div>

            {/* Contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { icon: Mail, text: "contacto@sesa.com.co" },
                { icon: Phone, text: "+57 (1) 234 5678" },
                { icon: MapPin, text: "Bogotá, Colombia" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "12px", color: "var(--sesa-text-secondary)" }}>
                  <Icon size={12} style={{ color: "var(--sesa-accent)", flexShrink: 0 }} />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 style={{
                fontSize: "10px", fontWeight: 700,
                color: "var(--sesa-text-muted)",
                textTransform: "uppercase", letterSpacing: "0.1em",
                marginBottom: "16px",
              }}>
                {title}
              </h4>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "9px" }}>
                {links.map((link) => (
                  <li key={link.label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <a
                      href={link.href}
                      style={{
                        fontSize: "13px", color: "var(--sesa-text-secondary)",
                        textDecoration: "none",
                        transition: "color var(--sesa-motion-fast)",
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--sesa-text-primary)")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--sesa-text-secondary)")}
                    >
                      {link.label}
                    </a>
                    {"badge" in link && link.badge && (
                      <span style={{
                        fontSize: "9px", fontWeight: 700,
                        padding: "1px 5px", borderRadius: "3px",
                        backgroundColor: "var(--sesa-accent-muted)",
                        color: "var(--sesa-accent)",
                      }}>
                        {link.badge}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: "1px solid var(--sesa-border)",
        backgroundColor: "var(--sesa-bg)",
      }}>
        <div style={{
          maxWidth: "1200px", margin: "0 auto", padding: "16px 24px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: "12px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <p style={{ fontSize: "12px", color: "var(--sesa-text-muted)", margin: 0 }}>
              © 2026 SESA — Bogotá, Colombia
            </p>
            <div style={{ display: "flex", gap: "4px" }}>
              {[
                { label: "SOC 2", color: "var(--sesa-success)" },
                { label: "ISO 27001", color: "var(--sesa-info)" },
                { label: "Habeas Data", color: "var(--sesa-accent)" },
              ].map(({ label, color }) => (
                <span key={label} style={{
                  fontSize: "9px", fontWeight: 700,
                  padding: "2px 6px", borderRadius: "3px",
                  backgroundColor: `${color}18`, color,
                }}>
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* Social */}
            <div style={{ display: "flex", gap: "4px" }}>
              {["in", "X", "gh"].map((label) => (
                <a key={label} href="#" style={{
                  width: "28px", height: "28px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  borderRadius: "var(--sesa-radius-sm)",
                  color: "var(--sesa-text-muted)",
                  textDecoration: "none",
                  fontSize: "11px", fontWeight: 700,
                  border: "1px solid var(--sesa-border)",
                  transition: "all var(--sesa-motion-fast)",
                }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--sesa-text-primary)";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--sesa-surface-hover)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--sesa-text-muted)";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  }}
                >
                  {label}
                </a>
              ))}
            </div>

            <span style={{ fontSize: "12px", color: "var(--sesa-text-muted)" }}>
              SESA · Bogotá, Colombia
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid { display: grid !important; }
        @media(max-width:1100px){.footer-grid{grid-template-columns:1fr repeat(2,1fr)!important;gap:32px!important}}
        @media(max-width:640px){.footer-grid{grid-template-columns:1fr!important}}
      `}</style>
    </footer>
  );
}
