"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Cambiar a tema ${theme === "light" ? "oscuro" : "claro"}`}
      style={{
        width: "36px",
        height: "36px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "var(--sesa-radius-md)",
        border: "1px solid var(--sesa-border)",
        background: "transparent",
        color: "var(--sesa-text-secondary)",
        cursor: "pointer",
        transition: "all var(--sesa-motion-fast) var(--sesa-ease-standard)",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = "var(--sesa-surface-hover)";
        (e.currentTarget as HTMLElement).style.color = "var(--sesa-text-primary)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
        (e.currentTarget as HTMLElement).style.color = "var(--sesa-text-secondary)";
      }}
    >
      {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
