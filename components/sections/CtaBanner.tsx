"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section style={{ padding: "0 24px 100px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          style={{
            position: "relative",
            borderRadius: "var(--sesa-radius-2xl)",
            overflow: "hidden",
            padding: "64px 48px",
            background: "linear-gradient(135deg, var(--sesa-accent) 0%, #0a7a70 30%, var(--sesa-accent-2) 100%)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "32px",
          }}
        >
          {/* Background glow */}
          <div aria-hidden style={{
            position: "absolute", top: "-40%", right: "-10%",
            width: "500px", height: "500px",
            background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%)",
            pointerEvents: "none",
          }} />
          <div aria-hidden style={{
            position: "absolute", bottom: "-30%", left: "10%",
            width: "300px", height: "300px",
            background: "radial-gradient(circle, rgba(0,0,0,0.1) 0%, transparent 60%)",
            pointerEvents: "none",
          }} />
          {/* Grid overlay */}
          <div aria-hidden style={{
            position: "absolute", inset: 0,
            backgroundImage: `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", zIndex: 1, maxWidth: "520px" }}>
            <h2 style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
              fontWeight: 800,
              color: "white",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              marginBottom: "16px",
            }}>
              Transforma tu operación en salud hoy mismo
            </h2>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}>
              Demo gratuito de 30 minutos con un especialista. Sin compromiso. Te mostramos cómo SESA funciona con el flujo real de tu institución.
            </p>
          </div>

          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
            <a href="#pricing" style={{ textDecoration: "none" }}>
              <Button
                style={{
                  backgroundColor: "white",
                  color: "var(--sesa-accent)",
                  fontWeight: 700,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                  height: "44px",
                  padding: "0 24px",
                  fontSize: "14px",
                }}
              >
                <CalendarDays size={16} />
                Agendar demo gratuito
                <ArrowRight size={15} />
              </Button>
            </a>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.65)", paddingLeft: "4px" }}>
              Sin tarjeta de crédito · Onboarding en 48h
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
