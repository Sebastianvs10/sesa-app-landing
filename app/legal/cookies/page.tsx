import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { LegalSection, LegalP, LegalList, LegalAlert, LegalTable } from "@/components/layout/LegalDoc";

export const metadata: Metadata = {
  title: "Política de Cookies — SESA",
  description: "Información sobre el uso de cookies en la plataforma SESA y cómo gestionarlas.",
};

export default function CookiesPage() {
  return (
    <PageLayout
      badge="Legal"
      badgeColor="var(--sesa-text-secondary)"
      title="Política de Cookies"
      subtitle="Cómo usamos cookies y tecnologías similares para mejorar tu experiencia en SESA."
      lastUpdated="1 de enero de 2026"
      maxWidth="820px"
    >
      <LegalAlert>
        Al acceder a <strong>sesa.com.co</strong> o <strong>app.sesa.com.co</strong>, usted acepta el uso de cookies esenciales para el funcionamiento del servicio. Las cookies analíticas y de preferencias requieren su consentimiento explícito, que puede otorgar o revocar en cualquier momento desde el panel de configuración de la plataforma.
      </LegalAlert>

      <br />

      <LegalSection number="1" title="¿Qué son las cookies?">
        <LegalP>Las cookies son pequeños archivos de texto que los sitios web almacenan en su navegador o dispositivo cuando los visita. Permiten que el sitio recuerde sus preferencias, mantenga su sesión activa y mejore la experiencia de uso. También pueden utilizarse para recopilar datos analíticos sobre el comportamiento de navegación.</LegalP>
      </LegalSection>

      <LegalSection number="2" title="Tipos de cookies que utilizamos">
        <LegalTable
          headers={["Tipo", "Nombre", "Duración", "Finalidad"]}
          rows={[
            ["Esenciales", "sesa_session", "Sesión", "Mantiene activa la sesión autenticada del usuario"],
            ["Esenciales", "sesa_csrf", "Sesión", "Protección contra ataques CSRF en formularios"],
            ["Esenciales", "sesa_theme", "1 año", "Recuerda la preferencia de tema light/dark"],
            ["Esenciales", "sesa_tenant", "Sesión", "Identifica el tenant activo en sesiones multi-empresa"],
            ["Analíticas", "_ga", "2 años", "Google Analytics: análisis de uso agregado y anonimizado"],
            ["Analíticas", "_ga_*", "2 años", "Google Analytics 4: métricas de rendimiento de la plataforma"],
            ["Preferencias", "sesa_lang", "1 año", "Preferencia de idioma del usuario"],
            ["Preferencias", "sesa_density", "1 año", "Densidad de visualización de tablas (compacta/normal)"],
          ]}
        />
      </LegalSection>

      <LegalSection number="3" title="Cookies esenciales">
        <LegalP>Las cookies esenciales son estrictamente necesarias para el funcionamiento de la plataforma SESA. Sin ellas, no es posible autenticarse, mantener la sesión activa ni garantizar la seguridad de las transacciones. Estas cookies no pueden desactivarse.</LegalP>
        <LegalList items={[
          "Gestión de sesión autenticada (JWT/cookie de sesión segura).",
          "Protección CSRF para todas las operaciones de escritura en la plataforma.",
          "Balanceo de carga y sticky sessions para garantizar consistencia en entornos multi-servidor.",
          "Preferencia de tema visual (light/dark), almacenada localmente.",
        ]} />
      </LegalSection>

      <LegalSection number="4" title="Cookies analíticas">
        <LegalP>Utilizamos Google Analytics 4 de forma anonimizada para entender cómo los usuarios interactúan con la plataforma y mejorar la experiencia. Toda la información recopilada es agregada y no permite identificar a usuarios individuales. La IP se anonimiza en la configuración de GA4.</LegalP>
        <LegalP>Puede optar por no participar activando el modo de privacidad en la configuración de su cuenta en SESA o instalando el complemento de inhabilitación de Google Analytics en su navegador.</LegalP>
      </LegalSection>

      <LegalSection number="5" title="Cookies de terceros">
        <LegalP>La plataforma SESA puede cargar los siguientes servicios de terceros que establecen sus propias cookies:</LegalP>
        <LegalTable
          headers={["Servicio", "Proveedor", "Finalidad", "Política de privacidad"]}
          rows={[
            ["Google Analytics", "Google LLC", "Análisis de uso anonimizado", "policies.google.com"],
            ["Intercom (soporte)", "Intercom Inc.", "Chat de soporte en línea", "intercom.com/privacy"],
            ["Stripe", "Stripe Inc.", "Procesamiento de pagos", "stripe.com/privacy"],
          ]}
        />
      </LegalSection>

      <LegalSection number="6" title="Cómo gestionar las cookies">
        <LegalP>Puede controlar el uso de cookies de las siguientes formas:</LegalP>
        <LegalList items={[
          "Panel de privacidad SESA: en Configuración > Privacidad > Gestión de cookies puede activar o desactivar cookies no esenciales.",
          "Configuración del navegador: puede bloquear o eliminar cookies desde la configuración de su navegador. Tenga en cuenta que bloquear cookies esenciales puede impedir el acceso al servicio.",
          "Modo incógnito: el uso del modo de navegación privada elimina las cookies al cierre de la ventana.",
          "Complemento de inhabilitación GA: disponible en tools.google.com/dlpage/gaoptout.",
        ]} />
        <LegalP>Instrucciones para navegadores principales:</LegalP>
        <LegalList items={[
          "Google Chrome: Configuración > Privacidad y seguridad > Cookies y otros datos de sitios",
          "Mozilla Firefox: Opciones > Privacidad y seguridad > Cookies y datos del sitio",
          "Microsoft Edge: Configuración > Cookies y permisos del sitio > Cookies y datos del sitio",
          "Safari: Preferencias > Privacidad > Gestionar datos del sitio web",
        ]} />
      </LegalSection>

      <LegalSection number="7" title="Almacenamiento local (localStorage)">
        <LegalP>Además de cookies, SESA utiliza el almacenamiento local del navegador (localStorage) para guardar preferencias no sensibles como el tema visual y el estado de paneles colapsados. Esta información nunca se transmite a servidores de SESA y permanece exclusivamente en su dispositivo.</LegalP>
      </LegalSection>

      <LegalSection number="8" title="Contacto">
        <LegalP>Para consultas sobre el uso de cookies: <strong>privacidad@sesa.com.co</strong></LegalP>
      </LegalSection>
    </PageLayout>
  );
}
