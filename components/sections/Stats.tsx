"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

const STATS = [
  { value: 35, suffix: "+", prefix: "", label: "Módulos clínicos", desc: "historia clínica, urgencias, hospitalización, farmacia, laboratorios y más", color: "var(--sesa-accent)", trend: "up-good" },
  { value: 40, suffix: "%", prefix: "−", label: "Reducción de glosas", desc: "comparado con facturación y gestión manual tradicional", color: "var(--sesa-accent-2)", trend: "down-good" },
  { value: 85, suffix: "%", prefix: "", label: "Tasa de recuperación", desc: "de glosas respondidas dentro del término legal normativo", color: "var(--sesa-success)", trend: "up-good" },
  { value: 48, suffix: "h", prefix: "<", label: "Onboarding completo", desc: "desde contrato hasta primera atención clínica registrada", color: "var(--sesa-warning)", trend: "down-good" },
  { value: 99, suffix: ".9% uptime", prefix: "", label: "SLA garantizado", desc: "infraestructura cloud de alta disponibilidad y trazabilidad", color: "var(--sesa-info)", trend: "up-good" },
  { value: 120, suffix: "+", prefix: "", label: "IPS activas", desc: "hospitales, clínicas y centros de salud en Colombia", color: "var(--sesa-accent)", trend: "up-good" },
];

function useCountUp(target: number, duration = 1500, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf: number;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setCount(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, active]);
  return count;
}

function StatCard({ stat, index }: { stat: typeof STATS[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useCountUp(stat.value, 1400, inView);
  const isGoodDown = stat.trend === "down-good";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      style={{
        backgroundColor: "var(--sesa-surface)",
        border: "1px solid var(--sesa-border)",
        borderRadius: "var(--sesa-radius-xl)",
        padding: "28px",
        position: "relative",
        overflow: "hidden",
        boxShadow: "var(--sesa-shadow-sm)",
      }}
    >
      {/* Background accent glow */}
      <div aria-hidden style={{
        position: "absolute", top: 0, right: 0,
        width: "120px", height: "120px",
        background: `radial-gradient(circle, ${stat.color}12, transparent 70%)`,
        pointerEvents: "none",
      }} />

      {/* Accent bar top-left */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "2px",
        background: `linear-gradient(90deg, ${stat.color}, transparent)`,
      }} />

      {/* Trend indicator */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: "4px",
        backgroundColor: isGoodDown ? "var(--sesa-success-muted)" : "var(--sesa-success-muted)",
        color: "var(--sesa-success)",
        fontSize: "10px", fontWeight: 700, letterSpacing: "0.03em",
        padding: "3px 8px", borderRadius: "var(--sesa-radius-full)",
        marginBottom: "16px",
      }}>
        {isGoodDown
          ? <TrendingDown size={10} />
          : <TrendingUp size={10} />}
        {isGoodDown ? "Reducción" : "Mejora"} comprobada
      </div>

      {/* Main number */}
      <div style={{
        fontSize: "clamp(2rem, 4vw, 3rem)",
        fontWeight: 900,
        letterSpacing: "-0.05em",
        color: stat.color,
        fontVariantNumeric: "tabular-nums",
        lineHeight: 1,
        marginBottom: "10px",
      }}>
        <span style={{ fontSize: "0.6em", fontWeight: 700, opacity: 0.8 }}>{stat.prefix}</span>
        {count}
        <span style={{ fontSize: "0.55em", fontWeight: 800 }}>{stat.suffix}</span>
      </div>

      <div style={{ fontSize: "14px", fontWeight: 650, color: "var(--sesa-text-primary)", marginBottom: "6px", letterSpacing: "-0.01em" }}>
        {stat.label}
      </div>
      <p style={{ fontSize: "12px", color: "var(--sesa-text-muted)", lineHeight: 1.55, margin: 0 }}>
        {stat.desc}
      </p>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section
      id="stats"
      style={{
        padding: "100px 24px",
        backgroundColor: "var(--sesa-bg)",
        borderTop: "1px solid var(--sesa-border)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <h2 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800, letterSpacing: "-0.03em",
            color: "var(--sesa-text-primary)",
            marginBottom: "16px",
            lineHeight: 1.12,
          }}>
            Resultados <span className="gradient-text">verificables</span>
          </h2>
          <p style={{ fontSize: "15px", color: "var(--sesa-text-secondary)", maxWidth: "480px", margin: "0 auto" }}>
            Indicadores clínicos, operativos y financieros de IPS colombianas que gestionan su operación completa con SESA.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }} className="stats-grid">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
      <style>{`
        .stats-grid { grid-template-columns: repeat(3,1fr) !important; }
        @media(max-width:900px){.stats-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:480px){.stats-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}
