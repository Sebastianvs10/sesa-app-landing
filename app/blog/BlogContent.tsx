"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight, Tag } from "lucide-react";

const CATEGORIES = ["Todos", "Facturación", "Glosas", "Normativa", "Tecnología", "Operación"];

const POSTS = [
  {
    slug: "rips-automatico-2025",
    title: "RIPS automático en 2025: cómo eliminar el reproceso manual con IA",
    excerpt: "La generación manual de RIPS es la principal causa de glosas en Colombia. Te explicamos cómo automatizarla completamente desde tu HIS con SESA.",
    category: "Facturación",
    categoryColor: "var(--sesa-accent)",
    date: "12 mayo, 2026",
    readTime: "7 min",
    featured: true,
    author: "Ing. Sofía Martínez",
    authorRole: "Head of Engineering",
  },
  {
    slug: "glosas-sector-salud-colombia",
    title: "¿Por qué el sector salud colombiano pierde $4.2B en glosas evitables cada año?",
    excerpt: "Análisis de las causas raíz de las glosas en Colombia: errores de codificación CUPS, vencimiento de términos y falta de seguimiento sistemático.",
    category: "Glosas",
    categoryColor: "var(--sesa-warning)",
    date: "5 mayo, 2026",
    readTime: "10 min",
    featured: true,
    author: "Dra. Camila Torres",
    authorRole: "CPO",
  },
  {
    slug: "resolucion-dian-fev-2025",
    title: "Resolución DIAN 2025: todo lo que cambia en la factura electrónica de salud",
    excerpt: "Guía completa de los cambios normativos en FEV para el sector salud. Plazos, formatos y cómo SESA te mantiene siempre en cumplimiento.",
    category: "Normativa",
    categoryColor: "var(--sesa-danger)",
    date: "28 abril, 2026",
    readTime: "12 min",
    featured: false,
    author: "Dra. Camila Torres",
    authorRole: "CPO",
  },
  {
    slug: "hl7-fhir-colombia-integracion",
    title: "Guía práctica de integración HL7 FHIR R4 para sistemas HIS en Colombia",
    excerpt: "Paso a paso para integrar tu sistema clínico con SESA usando el estándar internacional HL7 FHIR R4. Casos reales y código de ejemplo.",
    category: "Tecnología",
    categoryColor: "var(--sesa-accent-2)",
    date: "20 abril, 2026",
    readTime: "15 min",
    featured: false,
    author: "Ing. Sofía Martínez",
    authorRole: "Head of Engineering",
  },
  {
    slug: "cartera-hospitales-colombia",
    title: "Cómo reducir los días de cartera de tu hospital en menos de 90 días",
    excerpt: "Estrategia probada con 30 instituciones colombianas: priorización por score EPS, automatización de comunicaciones y seguimiento sistemático.",
    category: "Operación",
    categoryColor: "var(--sesa-success)",
    date: "14 abril, 2026",
    readTime: "8 min",
    featured: false,
    author: "Lic. Andrés Quintero",
    authorRole: "Head of Customer Success",
  },
  {
    slug: "habeas-data-sector-salud",
    title: "Habeas data y protección de datos en salud: obligaciones de las IPS en Colombia",
    excerpt: "Guía legal para gerentes y directores de TI sobre las obligaciones de la Ley 1581 de 2012 en el manejo de datos clínicos y financieros.",
    category: "Normativa",
    categoryColor: "var(--sesa-danger)",
    date: "7 abril, 2026",
    readTime: "9 min",
    featured: false,
    author: "Dra. Camila Torres",
    authorRole: "CPO",
  },
  {
    slug: "saas-vs-on-premise-salud",
    title: "SaaS vs on-premise para facturación hospitalaria: el análisis definitivo 2026",
    excerpt: "TCO, seguridad, actualizaciones normativas y escalabilidad: comparamos ambos modelos con datos reales del mercado colombiano de salud.",
    category: "Tecnología",
    categoryColor: "var(--sesa-accent-2)",
    date: "1 abril, 2026",
    readTime: "11 min",
    featured: false,
    author: "Ing. J. Sebastian Vargas S.",
    authorRole: "CEO & CTO",
  },
  {
    slug: "kpis-facturacion-hospitales",
    title: "Los 12 KPIs de facturación que toda IPS debería medir en tiempo real",
    excerpt: "Desde la tasa de rechazo en primera presentación hasta los días de cartera por EPS: los indicadores clave que miden la salud financiera de tu institución.",
    category: "Operación",
    categoryColor: "var(--sesa-success)",
    date: "24 marzo, 2026",
    readTime: "6 min",
    featured: false,
    author: "Lic. David Escobar",
    authorRole: "VP de Ventas & Clientes",
  },
];

const featured = POSTS.filter((p) => p.featured);
const rest = POSTS.filter((p) => !p.featured);

export function BlogContent() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>

      {/* Featured posts */}
      <div>
        <h2 style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--sesa-text-muted)", marginBottom: "20px" }}>
          Destacados
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="blog-2col">
          {featured.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                backgroundColor: "var(--sesa-surface)",
                border: "1px solid var(--sesa-border)",
                borderRadius: "var(--sesa-radius-xl)",
                overflow: "hidden",
                cursor: "pointer",
                transition: "box-shadow var(--sesa-motion-fast), transform var(--sesa-motion-fast)",
              }}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
            >
              {/* Accent top */}
              <div style={{ height: "3px", background: `linear-gradient(90deg, ${post.categoryColor}, var(--sesa-accent-2))` }} />
              <div style={{ padding: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                  <span style={{
                    fontSize: "10px", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase",
                    padding: "3px 9px", borderRadius: "var(--sesa-radius-full)",
                    backgroundColor: `${post.categoryColor}15`, color: post.categoryColor,
                  }}>{post.category}</span>
                  <span style={{ fontSize: "11px", color: "var(--sesa-text-muted)", display: "flex", alignItems: "center", gap: "4px" }}>
                    <Clock size={11} /> {post.readTime}
                  </span>
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--sesa-text-primary)", lineHeight: 1.4, marginBottom: "12px", letterSpacing: "-0.01em" }}>
                  {post.title}
                </h3>
                <p style={{ fontSize: "13px", color: "var(--sesa-text-secondary)", lineHeight: 1.7, marginBottom: "20px" }}>{post.excerpt}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--sesa-text-primary)" }}>{post.author}</span>
                    <span style={{ fontSize: "11px", color: "var(--sesa-text-muted)" }}>{post.date}</span>
                  </div>
                  <button style={{
                    display: "inline-flex", alignItems: "center", gap: "4px",
                    background: "none", border: "none", cursor: "pointer",
                    color: post.categoryColor, fontSize: "12px", fontWeight: 600,
                    padding: 0,
                  }}>
                    Leer <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* All posts */}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--sesa-text-muted)" }}>
            Todos los artículos
          </h2>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {CATEGORIES.map((cat) => (
              <button key={cat} style={{
                fontSize: "12px", fontWeight: 500, padding: "4px 12px",
                borderRadius: "var(--sesa-radius-full)",
                border: "1px solid var(--sesa-border)",
                backgroundColor: cat === "Todos" ? "var(--sesa-accent-muted)" : "transparent",
                color: cat === "Todos" ? "var(--sesa-accent)" : "var(--sesa-text-secondary)",
                cursor: "pointer",
                transition: "all var(--sesa-motion-fast)",
              }}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {rest.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              style={{
                display: "flex", gap: "20px", alignItems: "flex-start",
                padding: "20px 0",
                borderBottom: "1px solid var(--sesa-border)",
                cursor: "pointer",
                transition: "background var(--sesa-motion-fast)",
              }}
            >
              <div style={{ width: "36px", height: "36px", borderRadius: "var(--sesa-radius-md)", backgroundColor: `${post.categoryColor}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                <Tag size={14} style={{ color: post.categoryColor }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px", flexWrap: "wrap" }}>
                  <span style={{
                    fontSize: "10px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
                    padding: "2px 7px", borderRadius: "var(--sesa-radius-full)",
                    backgroundColor: `${post.categoryColor}15`, color: post.categoryColor,
                  }}>{post.category}</span>
                  <span style={{ fontSize: "11px", color: "var(--sesa-text-muted)" }}>{post.date}</span>
                  <span style={{ fontSize: "11px", color: "var(--sesa-text-muted)", display: "flex", alignItems: "center", gap: "3px" }}>
                    <Clock size={10} /> {post.readTime}
                  </span>
                </div>
                <h3 style={{ fontSize: "14.5px", fontWeight: 700, color: "var(--sesa-text-primary)", lineHeight: 1.4, marginBottom: "6px", letterSpacing: "-0.01em" }}>
                  {post.title}
                </h3>
                <p style={{ fontSize: "13px", color: "var(--sesa-text-secondary)", lineHeight: 1.65, margin: 0 }}>{post.excerpt}</p>
              </div>
              <button style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: "32px", height: "32px", flexShrink: 0,
                background: "none", border: "1px solid var(--sesa-border)", borderRadius: "var(--sesa-radius-md)",
                cursor: "pointer", color: "var(--sesa-text-muted)",
                transition: "all var(--sesa-motion-fast)",
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--sesa-accent)";
                  (e.currentTarget as HTMLElement).style.color = "var(--sesa-accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--sesa-border)";
                  (e.currentTarget as HTMLElement).style.color = "var(--sesa-text-muted)";
                }}
              >
                <ArrowRight size={14} />
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        .blog-2col { grid-template-columns: 1fr 1fr !important; }
        @media(max-width:768px){ .blog-2col { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
