"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Zap, Shield, Users, TrendingUp, Award } from "lucide-react";

const VALUES = [
  { icon: Shield, title: "Seguridad primero", desc: "Cada decisión de arquitectura prioriza la protección de datos sensibles de pacientes e instituciones. Cumplimos ISO 27001 y normativa colombiana." },
  { icon: Target, title: "Impacto medible", desc: "No construimos features. Construimos resultados: menos glosas, más recaudo, menos tiempo operativo. Si no mejora un KPI, no lo hacemos." },
  { icon: Zap, title: "Velocidad con calidad", desc: "Iteramos rápido pero sin sacrificar robustez. El sector salud no admite tiempo de inactividad ni errores de datos." },
  { icon: Heart, title: "Empatía con el usuario", desc: "Diseñamos con operadores reales de facturación, no con suposiciones. Cada flujo ha sido validado con usuarios en clínicas colombianas." },
  { icon: Users, title: "Equipo multidisciplinar", desc: "Ingenieros de software, expertos en normativa de salud, diseñadores UX y especialistas en facturación trabajan juntos en cada sprint." },
  { icon: TrendingUp, title: "Innovación aplicada", desc: "No innovamos por innovar. Cada tecnología que adoptamos resuelve un problema real del ciclo de ingresos en salud." },
];

const MILESTONES = [
  { year: "2020", title: "El origen", desc: "SESA nace en Bogotá con una misión clara: modernizar la facturación hospitalaria en Colombia, que seguía siendo 90% manual." },
  { year: "2021", title: "Primera versión", desc: "SESA v1 entra en producción con 3 instituciones piloto. El módulo de facturación electrónica reduce el tiempo de radicación de 3 días a 6 horas." },
  { year: "2022", title: "Gestión de glosas", desc: "Lanzamos el módulo de gestión de glosas. La tasa de recuperación de las instituciones que lo adoptan supera el 80% en el primer trimestre." },
  { year: "2023", title: "Expansión nacional", desc: "SESA llega a 50 instituciones en 12 departamentos. Lanzamos el módulo de cartera inteligente y los tableros ejecutivos en tiempo real." },
  { year: "2024", title: "Ecosistema conectado", desc: "Integraciones nativas con DIAN (FEV), ADRES y portales de las principales EPS de Colombia. SESA procesa más de $20B COP en facturación anual." },
  { year: "2025", title: "Enterprise y redes", desc: "Lanzamos el plan Enterprise para redes hospitalarias. Superamos las 100 instituciones activas y $40B COP procesados. SESA v3 con IA integrada." },
];

const TEAM = [
  { name: "Ing. J. Sebastian Vargas S.", role: "CEO & CTO", desc: "Ingeniero de sistemas con 12 años en desarrollo de software para el sector salud. Fundador y líder técnico de SESA.", initials: "SV", color: "var(--sesa-accent)" },
  { name: "Dra. Camila Torres", role: "CPO — Chief Product Officer", desc: "Especialista en normativa de salud colombiana (RIPS, DIAN, Ley 100). Líder de diseño de producto centrado en el usuario operativo.", initials: "CT", color: "var(--sesa-accent-2)" },
  { name: "Ing. Marcela Rodríguez", role: "CTO Infra & Seguridad", desc: "Arquitecta cloud con experiencia en sistemas críticos de salud. Responsable del SLA del 99.9% y la certificación ISO 27001.", initials: "MR", color: "var(--sesa-success)" },
  { name: "Lic. David Escobar", role: "VP de Ventas & Clientes", desc: "Experto en gestión de cuentas enterprise en el sector salud colombiano. Construyó la red de 120+ instituciones activas.", initials: "DE", color: "var(--sesa-warning)" },
  { name: "Ing. Sofía Martínez", role: "Head of Engineering", desc: "Tech lead con expertise en integraciones HL7 FHIR y sistemas de facturación electrónica. 8 años en fintech y healthtech.", initials: "SM", color: "var(--sesa-info)" },
  { name: "Lic. Andrés Quintero", role: "Head of Customer Success", desc: "Responsable de que cada institución alcance el ROI prometido. NPS promedio del equipo: 78.", initials: "AQ", color: "var(--sesa-accent)" },
];

export function SobreSesaContent() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>

      {/* Mission & Vision */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="about-2col">
        {[
          {
            icon: Target,
            label: "Misión",
            color: "var(--sesa-accent)",
            text: "Eliminar las fricciones del ciclo de ingresos en el sector salud colombiano mediante tecnología SaaS de clase mundial, ayudando a las instituciones a radicar más rápido, recuperar más glosas y cobrar con inteligencia.",
          },
          {
            icon: Eye,
            label: "Visión",
            color: "var(--sesa-accent-2)",
            text: "Ser la plataforma de referencia para la gestión financiera del ecosistema de salud en Latinoamérica, conectando instituciones, aseguradoras y reguladores en un solo ecosistema interoperable.",
          },
        ].map(({ icon: Icon, label, color, text }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundColor: "var(--sesa-surface)",
              border: "1px solid var(--sesa-border)",
              borderRadius: "var(--sesa-radius-xl)",
              padding: "32px",
              borderTop: `3px solid ${color}`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "var(--sesa-radius-md)", backgroundColor: `${color}18`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={18} style={{ color }} />
              </div>
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color }}>{label}</span>
            </div>
            <p style={{ fontSize: "15px", color: "var(--sesa-text-secondary)", lineHeight: 1.8, margin: 0 }}>{text}</p>
          </motion.div>
        ))}
      </div>

      {/* Metrics */}
      <div>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--sesa-text-primary)", marginBottom: "32px" }}>
          SESA en <span className="gradient-text">números</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }} className="about-4col">
          {[
            { val: "120+", label: "Instituciones activas", color: "var(--sesa-accent)" },
            { val: "$48B+", label: "Procesado en COP", color: "var(--sesa-accent-2)" },
            { val: "40%", label: "Reducción de glosas", color: "var(--sesa-success)" },
            { val: "99.9%", label: "Uptime garantizado", color: "var(--sesa-info)" },
          ].map(({ val, label, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              style={{
                backgroundColor: "var(--sesa-surface)",
                border: "1px solid var(--sesa-border)",
                borderRadius: "var(--sesa-radius-xl)",
                padding: "24px",
                textAlign: "center",
                borderLeft: `3px solid ${color}`,
              }}
            >
              <div style={{ fontSize: "2rem", fontWeight: 900, letterSpacing: "-0.04em", color, fontVariantNumeric: "tabular-nums" }}>{val}</div>
              <div style={{ fontSize: "12px", color: "var(--sesa-text-muted)", marginTop: "6px" }}>{label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--sesa-text-primary)", marginBottom: "32px" }}>
          Nuestros <span className="gradient-text">valores</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }} className="about-3col">
          {VALUES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
              style={{
                backgroundColor: "var(--sesa-surface)",
                border: "1px solid var(--sesa-border)",
                borderRadius: "var(--sesa-radius-xl)",
                padding: "24px",
              }}
            >
              <div style={{ width: "36px", height: "36px", borderRadius: "var(--sesa-radius-md)", backgroundColor: "var(--sesa-accent-muted)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
                <Icon size={17} style={{ color: "var(--sesa-accent)" }} />
              </div>
              <h3 style={{ fontSize: "14px", fontWeight: 700, color: "var(--sesa-text-primary)", marginBottom: "8px" }}>{title}</h3>
              <p style={{ fontSize: "13px", color: "var(--sesa-text-secondary)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--sesa-text-primary)", marginBottom: "40px" }}>
          Nuestra <span className="gradient-text">historia</span>
        </h2>
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{ position: "absolute", left: "60px", top: 0, bottom: 0, width: "2px", backgroundColor: "var(--sesa-border)" }} className="timeline-line" />
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {MILESTONES.map(({ year, title, desc }, i) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                style={{ display: "flex", gap: "32px", paddingBottom: "32px", position: "relative" }}
                className="timeline-item"
              >
                {/* Year badge */}
                <div style={{ width: "60px", flexShrink: 0, display: "flex", justifyContent: "flex-end", paddingRight: "16px", paddingTop: "4px" }} className="timeline-year-col">
                  <span style={{ fontSize: "12px", fontWeight: 800, color: "var(--sesa-accent)", letterSpacing: "-0.01em" }}>{year}</span>
                </div>
                {/* Dot */}
                <div style={{
                  position: "absolute", left: "52px", top: "8px",
                  width: "18px", height: "18px", borderRadius: "50%",
                  backgroundColor: "var(--sesa-bg)",
                  border: "2px solid var(--sesa-accent)",
                  zIndex: 1,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }} className="timeline-dot">
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--sesa-accent)" }} />
                </div>
                {/* Content */}
                <div style={{ flex: 1, paddingLeft: "24px" }} className="timeline-content">
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "var(--sesa-text-primary)", marginBottom: "6px" }}>{title}</div>
                  <p style={{ fontSize: "14px", color: "var(--sesa-text-secondary)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--sesa-text-primary)", marginBottom: "32px" }}>
          El <span className="gradient-text">equipo</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }} className="about-3col">
          {TEAM.map(({ name, role, desc, initials, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
              style={{
                backgroundColor: "var(--sesa-surface)",
                border: "1px solid var(--sesa-border)",
                borderRadius: "var(--sesa-radius-xl)",
                padding: "24px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "50%",
                  background: `linear-gradient(135deg, ${color}, var(--sesa-accent-2))`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "white", fontSize: "13px", fontWeight: 800, flexShrink: 0,
                }}>
                  {initials}
                </div>
                <div>
                  <div style={{ fontSize: "13.5px", fontWeight: 700, color: "var(--sesa-text-primary)" }}>{name}</div>
                  <div style={{ fontSize: "11px", color, fontWeight: 600 }}>{role}</div>
                </div>
              </div>
              <p style={{ fontSize: "13px", color: "var(--sesa-text-secondary)", lineHeight: 1.65, margin: 0 }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Awards */}
      <div style={{
        backgroundColor: "var(--sesa-surface)",
        border: "1px solid var(--sesa-border)",
        borderRadius: "var(--sesa-radius-xl)",
        padding: "32px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
          <Award size={20} style={{ color: "var(--sesa-warning)" }} />
          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--sesa-text-primary)", margin: 0 }}>Reconocimientos</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }} className="about-3col">
          {[
            { year: "2025", award: "Top SaaS Healthtech Colombia", org: "iNNpulsa Colombia" },
            { year: "2024", award: "Startup del año — Salud Digital", org: "Colombia Productiva · MinTIC" },
            { year: "2023", award: "Mejor solución de facturación electrónica", org: "Congreso Nacional de Salud" },
          ].map(({ year, award, org }) => (
            <div key={award} style={{ padding: "16px", backgroundColor: "var(--sesa-bg)", borderRadius: "var(--sesa-radius-lg)", border: "1px solid var(--sesa-border)" }}>
              <div style={{ fontSize: "10px", fontWeight: 800, color: "var(--sesa-warning)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "6px" }}>{year}</div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--sesa-text-primary)", marginBottom: "4px" }}>{award}</div>
              <div style={{ fontSize: "11px", color: "var(--sesa-text-muted)" }}>{org}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .about-2col { grid-template-columns: 1fr 1fr !important; }
        .about-3col { grid-template-columns: repeat(3,1fr) !important; }
        .about-4col { grid-template-columns: repeat(4,1fr) !important; }
        .timeline-line { display: block !important; }
        @media(max-width:900px){
          .about-3col { grid-template-columns: 1fr 1fr !important; }
          .about-4col { grid-template-columns: 1fr 1fr !important; }
        }
        @media(max-width:640px){
          .about-2col { grid-template-columns: 1fr !important; }
          .about-3col { grid-template-columns: 1fr !important; }
          .about-4col { grid-template-columns: 1fr 1fr !important; }
          .timeline-line { left: 0 !important; }
          .timeline-year-col { display: none !important; }
          .timeline-dot { left: -8px !important; }
          .timeline-content { padding-left: 16px !important; }
        }
      `}</style>
    </div>
  );
}
