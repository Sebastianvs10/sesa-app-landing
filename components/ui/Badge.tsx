"use client";

type BadgeVariant = "default" | "success" | "warning" | "danger" | "info" | "accent" | "accent2";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: "sm" | "md";
}

const variants: Record<BadgeVariant, React.CSSProperties> = {
  default: {
    backgroundColor: "var(--sesa-surface-hover)",
    color: "var(--sesa-text-secondary)",
  },
  success: {
    backgroundColor: "var(--sesa-success-muted)",
    color: "var(--sesa-success)",
  },
  warning: {
    backgroundColor: "var(--sesa-warning-muted)",
    color: "var(--sesa-warning)",
  },
  danger: {
    backgroundColor: "var(--sesa-danger-muted)",
    color: "var(--sesa-danger)",
  },
  info: {
    backgroundColor: "var(--sesa-info-muted)",
    color: "var(--sesa-info)",
  },
  accent: {
    backgroundColor: "var(--sesa-accent-muted)",
    color: "var(--sesa-accent)",
  },
  accent2: {
    backgroundColor: "var(--sesa-accent-2-muted)",
    color: "var(--sesa-accent-2)",
  },
};

export function Badge({ children, variant = "default", size = "md" }: BadgeProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        padding: size === "sm" ? "2px 8px" : "4px 10px",
        borderRadius: "var(--sesa-radius-full)",
        fontSize: size === "sm" ? "11px" : "12px",
        fontWeight: 500,
        letterSpacing: "0.01em",
        ...variants[variant],
      }}
    >
      {children}
    </span>
  );
}
