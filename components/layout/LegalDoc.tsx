"use client";

import React from "react";

interface SectionProps {
  number?: string;
  title: string;
  children: React.ReactNode;
}

export function LegalSection({ number, title, children }: SectionProps) {
  return (
    <section style={{ marginBottom: "44px" }}>
      <h2
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "10px",
          fontSize: "1.1rem",
          fontWeight: 700,
          color: "var(--sesa-text-primary)",
          letterSpacing: "-0.015em",
          marginBottom: "16px",
          paddingBottom: "10px",
          borderBottom: "1px solid var(--sesa-border)",
        }}
      >
        {number && (
          <span
            style={{
              fontSize: "12px",
              fontWeight: 800,
              color: "var(--sesa-accent)",
              backgroundColor: "var(--sesa-accent-muted)",
              border: "1px solid var(--sesa-border-accent)",
              borderRadius: "var(--sesa-radius-sm)",
              padding: "2px 8px",
              flexShrink: 0,
            }}
          >
            {number}
          </span>
        )}
        {title}
      </h2>
      <div
        style={{
          fontSize: "14px",
          lineHeight: 1.8,
          color: "var(--sesa-text-secondary)",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {children}
      </div>
    </section>
  );
}

export function LegalP({ children }: { children: React.ReactNode }) {
  return <p style={{ margin: 0 }}>{children}</p>;
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul style={{ paddingLeft: "20px", margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
      {items.map((item, i) => (
        <li key={i} style={{ fontSize: "14px", color: "var(--sesa-text-secondary)", lineHeight: 1.7 }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function LegalAlert({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warning" }) {
  const color = type === "warning" ? "var(--sesa-warning)" : "var(--sesa-accent)";
  const bg = type === "warning" ? "var(--sesa-warning-muted)" : "var(--sesa-accent-muted)";
  return (
    <div
      style={{
        padding: "14px 18px",
        backgroundColor: bg,
        border: `1px solid ${color}30`,
        borderLeft: `3px solid ${color}`,
        borderRadius: "var(--sesa-radius-md)",
        fontSize: "13.5px",
        color: "var(--sesa-text-secondary)",
        lineHeight: 1.7,
      }}
    >
      {children}
    </div>
  );
}

export function LegalTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div style={{ overflowX: "auto", borderRadius: "var(--sesa-radius-md)", border: "1px solid var(--sesa-border)" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
        <thead>
          <tr style={{ backgroundColor: "var(--sesa-surface)" }}>
            {headers.map((h) => (
              <th
                key={h}
                style={{
                  padding: "10px 16px",
                  textAlign: "left",
                  fontWeight: 600,
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--sesa-text-muted)",
                  borderBottom: "1px solid var(--sesa-border)",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: i < rows.length - 1 ? "1px solid var(--sesa-border)" : "none" }}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: "10px 16px", color: "var(--sesa-text-secondary)", verticalAlign: "top" }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
