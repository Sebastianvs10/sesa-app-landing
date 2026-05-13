"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PageLayoutProps {
  children: React.ReactNode;
  badge?: string;
  badgeColor?: string;
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  maxWidth?: string;
  variant?: "default" | "legal" | "wide";
}

export function PageLayout({
  children,
  badge,
  badgeColor = "var(--sesa-accent)",
  title,
  subtitle,
  lastUpdated,
  maxWidth = "820px",
  variant = "default",
}: PageLayoutProps) {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--sesa-bg)" }}>
      {/* Hero header */}
      <div
        style={{
          backgroundColor: "var(--sesa-surface)",
          borderBottom: "1px solid var(--sesa-border)",
          padding: "100px 24px 56px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle bg gradient */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0, bottom: 0,
            background: `radial-gradient(ellipse 80% 60% at 30% 50%, ${badgeColor}0A 0%, transparent 60%)`,
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--sesa-text-secondary)",
              textDecoration: "none",
              marginBottom: "24px",
              transition: "color var(--sesa-motion-fast)",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--sesa-text-primary)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--sesa-text-secondary)")}
          >
            <ArrowLeft size={14} />
            Volver al inicio
          </Link>

          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 12px",
                borderRadius: "var(--sesa-radius-full)",
                backgroundColor: `${badgeColor}15`,
                border: `1px solid ${badgeColor}30`,
                color: badgeColor,
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              {badge}
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--sesa-text-primary)",
              marginBottom: subtitle ? "14px" : "0",
            }}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontSize: "1.05rem",
                color: "var(--sesa-text-secondary)",
                lineHeight: 1.7,
                maxWidth: "560px",
              }}
            >
              {subtitle}
            </motion.p>
          )}

          {lastUpdated && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              style={{
                marginTop: "16px",
                fontSize: "12px",
                color: "var(--sesa-text-muted)",
              }}
            >
              Última actualización: {lastUpdated}
            </motion.p>
          )}
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        style={{ maxWidth, margin: "0 auto", padding: "56px 24px 100px" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
