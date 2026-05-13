"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/Badge";

const STATS = [
  {
    value: 40,
    suffix: "%",
    label: "Reducción de glosas",
    description: "Promedio en instituciones que usan SESA vs sistemas tradicionales",
    color: "var(--sesa-accent)",
  },
  {
    value: 85,
    suffix: "%",
    label: "Tasa de recuperación",
    description: "De glosas respondidas dentro del término legal con flujos guiados",
    color: "var(--sesa-accent-2)",
  },
  {
    value: 2,
    suffix: "× más rápido",
    label: "Ciclo de radicación",
    description: "Velocidad de radicación vs proceso manual en papel y correo",
    color: "var(--sesa-success)",
  },
  {
    value: 48,
    suffix: "h",
    label: "Onboarding completo",
    description: "Desde contrato hasta primera factura electrónica generada",
    color: "var(--sesa-warning)",
  },
];

function useCountUp(target: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);

  return count;
}

function StatCard({ stat, index }: { stat: (typeof STATS)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCountUp(stat.value, 1600, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        backgroundColor: "var(--sesa-surface)",
        border: "1px solid var(--sesa-border)",
        borderRadius: "var(--sesa-radius-xl)",
        padding: "32px 28px",
        borderLeft: `3px solid ${stat.color}`,
        boxShadow: "var(--sesa-shadow-sm)",
      }}
    >
      <div
        style={{
          fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          color: stat.color,
          fontVariantNumeric: "tabular-nums",
          lineHeight: 1,
          marginBottom: "4px",
        }}
      >
        {count}
        <span style={{ fontSize: "0.55em", fontWeight: 700 }}>{stat.suffix}</span>
      </div>
      <div
        style={{
          fontSize: "15px",
          fontWeight: 600,
          color: "var(--sesa-text-primary)",
          marginBottom: "8px",
        }}
      >
        {stat.label}
      </div>
      <p
        style={{
          fontSize: "13px",
          color: "var(--sesa-text-secondary)",
          lineHeight: 1.55,
          margin: 0,
        }}
      >
        {stat.description}
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
        backgroundColor: "var(--sesa-surface)",
        borderTop: "1px solid var(--sesa-border)",
        borderBottom: "1px solid var(--sesa-border)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <Badge variant="success" size="sm">
            Impacto medible
          </Badge>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--sesa-text-primary)",
              margin: "16px 0 16px",
              lineHeight: 1.15,
            }}
          >
            Resultados que hablan{" "}
            <span className="gradient-text">por sí solos</span>
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--sesa-text-secondary)",
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Métricas reales de instituciones de salud que operan con SESA en
            Colombia.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
