"use client";

import { forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  children: React.ReactNode;
}

const styles: Record<Variant, React.CSSProperties> = {
  primary: {
    backgroundColor: "var(--sesa-accent)",
    color: "white",
    border: "1px solid transparent",
    boxShadow: "var(--sesa-shadow-sm)",
  },
  secondary: {
    backgroundColor: "transparent",
    color: "var(--sesa-text-primary)",
    border: "1px solid var(--sesa-border-strong)",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "var(--sesa-text-secondary)",
    border: "1px solid transparent",
  },
  danger: {
    backgroundColor: "var(--sesa-danger)",
    color: "white",
    border: "1px solid transparent",
  },
};

const sizes: Record<Size, React.CSSProperties> = {
  sm: { height: "32px", padding: "0 12px", fontSize: "13px" },
  md: { height: "38px", padding: "0 16px", fontSize: "14px" },
  lg: { height: "46px", padding: "0 24px", fontSize: "15px" },
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", loading, children, style, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        disabled={loading || props.disabled}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          borderRadius: "var(--sesa-radius-md)",
          fontWeight: 500,
          cursor: props.disabled || loading ? "not-allowed" : "pointer",
          opacity: props.disabled || loading ? 0.6 : 1,
          transition: "all var(--sesa-motion-fast) var(--sesa-ease-standard)",
          whiteSpace: "nowrap",
          userSelect: "none",
          ...styles[variant],
          ...sizes[size],
          ...style,
        }}
        onMouseEnter={(e) => {
          if (props.disabled || loading) return;
          const el = e.currentTarget;
          if (variant === "primary") el.style.filter = "brightness(1.1)";
          if (variant === "secondary" || variant === "ghost") el.style.backgroundColor = "var(--sesa-surface-hover)";
          if (variant === "ghost") el.style.color = "var(--sesa-text-primary)";
          props.onMouseEnter?.(e);
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.filter = "";
          if (variant === "secondary" || variant === "ghost") el.style.backgroundColor = "transparent";
          if (variant === "ghost") el.style.color = "var(--sesa-text-secondary)";
          props.onMouseLeave?.(e);
        }}
      >
        {loading ? (
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83">
                <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="0.8s" repeatCount="indefinite" />
              </path>
            </svg>
            Cargando...
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
