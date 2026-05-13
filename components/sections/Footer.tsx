"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const FOOTER_LINKS = {
  Producto: [
    { label: "Facturación electrónica", href: "#features" },
    { label: "Gestión de glosas", href: "#features" },
    { label: "Cartera y recaudo", href: "#features" },
    { label: "Reportes e indicadores", href: "#features" },
    { label: "Integraciones", href: "#features" },
  ],
  Empresa: [
    { label: "Sobre SESA", href: "#" },
    { label: "Casos de éxito", href: "#testimonials" },
    { label: "Blog", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  Legal: [
    { label: "Términos de servicio", href: "#" },
    { label: "Política de privacidad", href: "#" },
    { label: "Política de cookies", href: "#" },
    { label: "Habeas data", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--sesa-surface)",
        borderTop: "1px solid var(--sesa-border)",
        padding: "64px 24px 32px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr repeat(3, 1fr)",
            gap: "48px",
            marginBottom: "56px",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(135deg, var(--sesa-accent) 0%, var(--sesa-accent-2) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
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
            </div>
            <p
              style={{
                fontSize: "14px",
                color: "var(--sesa-text-secondary)",
                lineHeight: 1.7,
                marginBottom: "24px",
                maxWidth: "280px",
              }}
            >
              Plataforma SaaS para la gestión integral del ciclo de ingresos en
              el sector salud colombiano.
            </p>

            {/* Contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { icon: Mail, text: "contacto@sesa.com.co" },
                { icon: Phone, text: "+57 (1) 234 5678" },
                { icon: MapPin, text: "Bogotá, Colombia" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "13px",
                    color: "var(--sesa-text-secondary)",
                  }}
                >
                  <Icon size={14} style={{ color: "var(--sesa-accent)", flexShrink: 0 }} />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "var(--sesa-text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "16px",
                  margin: "0 0 16px",
                }}
              >
                {title}
              </h4>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontSize: "14px",
                        color: "var(--sesa-text-secondary)",
                        textDecoration: "none",
                        transition: "color var(--sesa-motion-fast)",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "var(--sesa-text-primary)")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color = "var(--sesa-text-secondary)")
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--sesa-border)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "13px", color: "var(--sesa-text-muted)", margin: 0 }}>
            © 2026 Sphaira Tech SAS — Todos los derechos reservados.
          </p>
          <a
            href="https://sphairatech.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "13px",
              color: "var(--sesa-text-muted)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--sesa-accent)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--sesa-text-muted)")
            }
          >
            Desarrollado por Sphaira Tech
            <ExternalLink size={12} />
          </a>
        </div>
      </div>

      <style>{`
        .footer-grid {
          grid-template-columns: 2fr repeat(3, 1fr) !important;
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
