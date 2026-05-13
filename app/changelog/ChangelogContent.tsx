"use client";

import { motion } from "framer-motion";

type ChangeType = "new" | "improved" | "fixed" | "security" | "breaking";

interface Change { type: ChangeType; text: string; }
interface Release { version: string; date: string; tag: string; tagColor: string; summary: string; changes: Change[]; }

const TYPE_STYLE: Record<ChangeType, { label: string; bg: string; color: string }> = {
  new: { label: "Nuevo", bg: "var(--sesa-accent-muted)", color: "var(--sesa-accent)" },
  improved: { label: "Mejora", bg: "var(--sesa-accent-2-muted)", color: "var(--sesa-accent-2)" },
  fixed: { label: "Fix", bg: "var(--sesa-success-muted)", color: "var(--sesa-success)" },
  security: { label: "Seguridad", bg: "var(--sesa-warning-muted)", color: "var(--sesa-warning)" },
  breaking: { label: "Breaking", bg: "var(--sesa-danger-muted)", color: "var(--sesa-danger)" },
};

const RELEASES: Release[] = [
  {
    version: "3.4.0",
    date: "12 mayo, 2026",
    tag: "Último",
    tagColor: "var(--sesa-accent)",
    summary: "Motor de IA para priorización de cartera y mejoras en el dashboard ejecutivo.",
    changes: [
      { type: "new", text: "Motor de score de cartera con IA: prioriza automáticamente qué facturas cobrar primero según historial de pago por EPS." },
      { type: "new", text: "Dashboard ejecutivo v2: nuevos widgets de tendencia de recaudo y proyección de cartera a 30/60/90 días." },
      { type: "new", text: "Exportación de RIPS a formato XML 2025 según resolución MSPS vigente." },
      { type: "improved", text: "Velocidad de generación de reportes de cartera mejorada en 3x para instituciones con >50.000 facturas." },
      { type: "improved", text: "Integración con portal Nueva EPS actualizada a la versión 2025 del esquema de radicación." },
      { type: "fixed", text: "Error en la validación de códigos CUPS en servicios de urgencias de tercer nivel." },
      { type: "fixed", text: "Cálculo incorrecto de intereses de mora en facturas con fecha de vencimiento en fin de semana." },
    ],
  },
  {
    version: "3.3.0",
    date: "28 abril, 2026",
    tag: "Estable",
    tagColor: "var(--sesa-success)",
    summary: "Integración nativa con ADRES para consulta de afiliados y nuevo módulo de conciliación EPS.",
    changes: [
      { type: "new", text: "Integración en tiempo real con ADRES: consulta de estado de afiliación directamente desde la pantalla de registro de factura." },
      { type: "new", text: "Módulo de conciliación EPS: tablero para gestionar el intercambio de documentos de glosa con Sura, Sanitas y Compensar." },
      { type: "new", text: "Webhooks para notificaciones de cambio de estado: integra SESA con Slack, Teams o cualquier sistema propio." },
      { type: "improved", text: "Flujo de respuesta a glosas rediseñado con asistente paso a paso que reduce el tiempo de respuesta en 40%." },
      { type: "improved", text: "API REST v2: nuevos endpoints para consulta de cartera por rangos de fecha y filtros combinados." },
      { type: "security", text: "Actualización de dependencias de seguridad. TLS 1.3 obligatorio en todas las conexiones." },
      { type: "fixed", text: "Error de zona horaria en el cálculo de fechas límite de glosa para instituciones en zona horaria UTC-5." },
    ],
  },
  {
    version: "3.2.0",
    date: "7 abril, 2026",
    tag: "Estable",
    tagColor: "var(--sesa-success)",
    summary: "Nuevo módulo de reportes ejecutivos con exportación a Power BI y mejoras de rendimiento.",
    changes: [
      { type: "new", text: "Conector nativo para Power BI: exporta tableros de KPIs directamente a tu workspace de Power BI con actualización automática." },
      { type: "new", text: "Informe de cierre mensual automático: generación y envío programado de resumen financiero a correos configurados." },
      { type: "improved", text: "Tiempo de carga del tablero principal reducido de 4s a 800ms para instituciones enterprise." },
      { type: "improved", text: "Búsqueda de facturas: soporte para búsqueda por múltiples campos simultáneos (paciente, EPS, número de factura, fecha)." },
      { type: "fixed", text: "Error en exportación de RIPS cuando el número de registros supera 100.000 por período." },
      { type: "fixed", text: "Botón de 'Marcar como pagada' inactivo para facturas radicadas hace más de 180 días." },
    ],
  },
  {
    version: "3.1.0",
    date: "17 marzo, 2026",
    tag: "Estable",
    tagColor: "var(--sesa-success)",
    summary: "Soporte completo para FEV resolución DIAN 2025-001 y multi-empresa.",
    changes: [
      { type: "new", text: "Soporte completo para el nuevo formato de Factura Electrónica de Venta (FEV) según Resolución DIAN 2025-001 vigente desde el 1 de marzo." },
      { type: "new", text: "Multi-empresa: un usuario puede gestionar varias IPS con cambio de contexto instantáneo desde el selector en la navbar." },
      { type: "new", text: "Auditoría de acciones: log completo de cada operación realizada por usuario para fines de auditoría interna." },
      { type: "improved", text: "Validador de RIPS actualizado con los nuevos códigos de procedimiento CUPS publicados en enero 2026." },
      { type: "security", text: "Implementación de MFA (autenticación multifactor) disponible para todos los planes. Obligatorio para plan Enterprise." },
      { type: "breaking", text: "API v1 deprecated. Los clientes con integraciones en API v1 deben migrar a API v2 antes del 1 de julio de 2026." },
    ],
  },
  {
    version: "3.0.0",
    date: "1 febrero, 2026",
    tag: "Major",
    tagColor: "var(--sesa-accent-2)",
    summary: "SESA v3: rediseño completo de la interfaz, nueva arquitectura multi-tenant y módulo de IA.",
    changes: [
      { type: "new", text: "Rediseño completo de la interfaz: nuevo sistema de diseño SESA con soporte nativo light/dark y accesibilidad WCAG 2.1 AA." },
      { type: "new", text: "Nueva arquitectura multi-tenant: soporte para redes hospitalarias con gestión centralizada de múltiples sedes y EPS." },
      { type: "new", text: "SESA AI: primer módulo de inteligencia artificial para detección temprana de facturas con alto riesgo de glosa." },
      { type: "new", text: "API REST v2 con documentación OpenAPI 3.0 completa y sandbox de pruebas." },
      { type: "new", text: "Integración HL7 FHIR R4: interoperabilidad estándar con sistemas HIS/RIS." },
      { type: "improved", text: "Rendimiento general: 5x más rápido en generación de RIPS y 3x en carga de tableros de cartera." },
    ],
  },
];

export function ChangelogContent() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
      {/* RSS hint */}
      <div style={{
        display: "flex", justifyContent: "flex-end", marginBottom: "32px",
      }}>
        <a href="#" style={{
          fontSize: "12px", fontWeight: 500,
          color: "var(--sesa-text-muted)", textDecoration: "none",
          display: "flex", alignItems: "center", gap: "5px",
          padding: "5px 10px", borderRadius: "var(--sesa-radius-md)",
          border: "1px solid var(--sesa-border)",
          transition: "all var(--sesa-motion-fast)",
        }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = "var(--sesa-accent)";
            (e.currentTarget as HTMLElement).style.borderColor = "var(--sesa-border-accent)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = "var(--sesa-text-muted)";
            (e.currentTarget as HTMLElement).style.borderColor = "var(--sesa-border)";
          }}
        >
          ⊕ Suscribirse al changelog
        </a>
      </div>

      {RELEASES.map((release, i) => (
        <motion.div
          key={release.version}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: i * 0.06 }}
          style={{
            display: "flex",
            gap: "32px",
            paddingBottom: "48px",
            position: "relative",
          }}
          className="cl-item"
        >
          {/* Left: version column */}
          <div style={{ width: "140px", flexShrink: 0, paddingTop: "4px" }} className="cl-version-col">
            <div style={{ position: "relative" }}>
              {/* Timeline connector */}
              {i < RELEASES.length - 1 && (
                <div style={{
                  position: "absolute", left: "50%", top: "32px", bottom: "-48px",
                  width: "1px", backgroundColor: "var(--sesa-border)",
                  transform: "translateX(-50%)",
                }} />
              )}

              <div style={{
                backgroundColor: "var(--sesa-surface)",
                border: "1px solid var(--sesa-border)",
                borderRadius: "var(--sesa-radius-lg)",
                padding: "12px",
                textAlign: "center",
                position: "relative", zIndex: 1,
              }}>
                <div style={{ fontSize: "18px", fontWeight: 900, color: "var(--sesa-text-primary)", letterSpacing: "-0.03em", fontVariantNumeric: "tabular-nums" }}>
                  v{release.version}
                </div>
                <div style={{
                  fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em",
                  padding: "2px 7px", borderRadius: "var(--sesa-radius-full)", display: "inline-block", marginTop: "6px",
                  backgroundColor: `${release.tagColor}18`, color: release.tagColor,
                  border: `1px solid ${release.tagColor}30`,
                }}>
                  {release.tag}
                </div>
                <div style={{ fontSize: "11px", color: "var(--sesa-text-muted)", marginTop: "8px" }}>{release.date}</div>
              </div>
            </div>
          </div>

          {/* Right: changes */}
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "15px", color: "var(--sesa-text-secondary)", lineHeight: 1.7, marginBottom: "20px", marginTop: "4px" }}>
              {release.summary}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {release.changes.map((change, ci) => {
                const s = TYPE_STYLE[change.type];
                return (
                  <div key={ci} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <span style={{
                      fontSize: "9px", fontWeight: 800, letterSpacing: "0.06em",
                      textTransform: "uppercase", padding: "3px 7px",
                      borderRadius: "var(--sesa-radius-sm)", flexShrink: 0, marginTop: "2px",
                      backgroundColor: s.bg, color: s.color, minWidth: "60px", textAlign: "center",
                    }}>
                      {s.label}
                    </span>
                    <p style={{ fontSize: "13.5px", color: "var(--sesa-text-secondary)", lineHeight: 1.65, margin: 0 }}>
                      {change.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      ))}

      <style>{`
        .cl-version-col { display: block !important; }
        @media(max-width:600px){
          .cl-item { flex-direction: column !important; gap: 16px !important; }
          .cl-version-col { width: 100% !important; }
          .cl-version-col > div > div:last-child { display: none !important; }
        }
      `}</style>
    </div>
  );
}
