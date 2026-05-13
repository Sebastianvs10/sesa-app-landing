import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { LegalSection, LegalP, LegalList, LegalAlert, LegalTable } from "@/components/layout/LegalDoc";

export const metadata: Metadata = {
  title: "Términos de Servicio — SESA",
  description: "Términos y condiciones de uso de la plataforma SESA de Sphaira Tech SAS.",
};

export default function TerminosPage() {
  return (
    <PageLayout
      badge="Legal"
      badgeColor="var(--sesa-text-secondary)"
      title="Términos de Servicio"
      subtitle="Condiciones que rigen el acceso y uso de la plataforma SESA."
      lastUpdated="1 de enero de 2026"
      maxWidth="820px"
    >
      <LegalAlert>
        Este documento es un contrato legal vinculante entre <strong>Sphaira Tech SAS</strong> (NIT 901.234.567-8, en adelante "SESA") y la institución de salud o persona natural que accede a la plataforma ("Cliente"). Al activar su cuenta, el Cliente acepta estos términos en su totalidad.
      </LegalAlert>

      <br />

      <LegalSection number="1" title="Definiciones">
        <LegalList items={[
          "Plataforma SESA: software como servicio (SaaS) accesible vía web en app.sesa.com.co para la gestión de facturación electrónica, glosas y cartera en el sector salud colombiano.",
          "Cliente: IPS, EPS, clínica, hospital, consultorio o cualquier institución del sector salud que contrate los servicios de SESA.",
          "Usuario: persona natural autorizada por el Cliente para acceder a la plataforma.",
          "Datos del Cliente: información ingresada por el Cliente, incluyendo datos financieros, de pacientes y transacciones de facturación.",
          "Suscripción: el plan contratado (Starter, Professional o Enterprise) que determina los límites de uso y características disponibles.",
        ]} />
      </LegalSection>

      <LegalSection number="2" title="Objeto del contrato">
        <LegalP>Sphaira Tech SAS se obliga a prestar al Cliente acceso a la plataforma SESA para la gestión del ciclo de ingresos en salud, conforme al plan de suscripción contratado. Los servicios incluyen:</LegalP>
        <LegalList items={[
          "Generación, validación y radicación de facturas electrónicas de venta (FEV) ante la DIAN.",
          "Generación automática de RIPS según normativa vigente del Ministerio de Salud.",
          "Gestión de glosas y conciliación con EPS.",
          "Módulo de cartera y seguimiento de recaudo.",
          "Reportes e indicadores de gestión financiera.",
          "Integraciones con sistemas HIS/RIS y portales EPS (según plan).",
        ]} />
      </LegalSection>

      <LegalSection number="3" title="Condiciones de suscripción y pago">
        <LegalP>El Cliente selecciona un plan de suscripción con las condiciones económicas publicadas en sesa.com.co/precios. Las condiciones son:</LegalP>
        <LegalList items={[
          "Los valores son expresados en pesos colombianos (COP) y no incluyen IVA.",
          "La facturación es mensual o anual según el plan elegido.",
          "El pago debe realizarse dentro de los primeros 5 días hábiles del período facturado.",
          "El incumplimiento de pago por más de 15 días calendario genera la suspensión del servicio.",
          "SESA se reserva el derecho de modificar tarifas con un aviso previo de 60 días calendario.",
          "No se realizan reembolsos por períodos parciales excepto en caso de falla imputable a SESA.",
        ]} />
      </LegalSection>

      <LegalSection number="4" title="Uso aceptable">
        <LegalP>El Cliente se compromete a utilizar la plataforma SESA exclusivamente para fines legítimos relacionados con su actividad de salud en Colombia. Están expresamente prohibidos:</LegalP>
        <LegalList items={[
          "Usar la plataforma para generar facturas fraudulentas o de servicios no prestados.",
          "Compartir credenciales de acceso entre usuarios distintos.",
          "Intentar acceder, modificar o extraer datos de otras instituciones clientes de SESA.",
          "Realizar ingeniería inversa, descompilar o modificar el software.",
          "Usar la plataforma para actividades que violen la legislación colombiana vigente.",
          "Transferir o sublicenciar el acceso a la plataforma a terceros no autorizados.",
        ]} />
      </LegalSection>

      <LegalSection number="5" title="Niveles de servicio (SLA)">
        <LegalTable
          headers={["Métrica", "Starter", "Professional", "Enterprise"]}
          rows={[
            ["Disponibilidad mensual", "99.5%", "99.9%", "99.99%"],
            ["Tiempo de respuesta soporte", "48 h hábiles", "4 h hábiles", "1 h (24/7)"],
            ["Ventana de mantenimiento", "Domingos 2–6 AM", "Domingos 2–4 AM", "Acordada"],
            ["Compensación por incumplimiento", "Crédito 10%", "Crédito 25%", "Crédito 50%"],
          ]}
        />
      </LegalSection>

      <LegalSection number="6" title="Propiedad intelectual">
        <LegalP>Todo el software, diseño, algoritmos, modelos de datos y documentación de SESA son propiedad exclusiva de Sphaira Tech SAS y están protegidos por la Ley 23 de 1982 y normativa internacional de derechos de autor.</LegalP>
        <LegalP>Los Datos del Cliente son propiedad exclusiva del Cliente. SESA no revendará, compartirá ni usará estos datos para fines distintos a la prestación del servicio contratado.</LegalP>
      </LegalSection>

      <LegalSection number="7" title="Confidencialidad">
        <LegalP>Ambas partes se obligan a mantener la más estricta confidencialidad sobre la información intercambiada en el marco de este contrato, incluyendo datos de pacientes, información financiera y detalles de configuración del sistema. Esta obligación persiste por 5 años después de la terminación del contrato.</LegalP>
      </LegalSection>

      <LegalSection number="8" title="Limitación de responsabilidad">
        <LegalP>La responsabilidad máxima de Sphaira Tech SAS frente al Cliente no excederá el valor de 3 mensualidades del plan contratado en el momento del evento. SESA no será responsable por:</LegalP>
        <LegalList items={[
          "Pérdidas de negocio, lucro cesante o daños indirectos.",
          "Errores en la información ingresada por el Cliente o sus usuarios.",
          "Interrupciones causadas por proveedores de nube (AWS, GCP) o telecomunicaciones.",
          "Cambios normativos de la DIAN o el MSPS que requieran adaptaciones no programadas.",
          "Accesos no autorizados provocados por negligencia del Cliente en el manejo de credenciales.",
        ]} />
      </LegalSection>

      <LegalSection number="9" title="Vigencia y terminación">
        <LegalP>El contrato entra en vigencia desde la activación de la cuenta y permanece activo mientras el Cliente mantenga una suscripción vigente. Cualquiera de las partes puede terminarlo:</LegalP>
        <LegalList items={[
          "El Cliente: en cualquier momento, con aviso de 30 días. No se genera reembolso por el período no utilizado.",
          "SESA: por incumplimiento del Cliente (pago, uso aceptable) con aviso de 15 días.",
          "De mutuo acuerdo: en las condiciones que las partes establezcan por escrito.",
        ]} />
        <LegalP>Tras la terminación, SESA conservará los Datos del Cliente por 90 días adicionales para permitir su exportación, luego serán eliminados de forma segura.</LegalP>
      </LegalSection>

      <LegalSection number="10" title="Ley aplicable y jurisdicción">
        <LegalP>Este contrato se rige por las leyes de la República de Colombia. Cualquier controversia que no pueda resolverse amigablemente en un plazo de 30 días será sometida a la jurisdicción de los jueces civiles de la ciudad de Bogotá, D.C., Colombia.</LegalP>
      </LegalSection>

      <LegalSection number="11" title="Contacto">
        <LegalP>Para cualquier consulta sobre estos términos, contacte a:</LegalP>
        <LegalList items={[
          "Correo: legal@sesa.com.co",
          "Dirección: Calle 93 # 13-24, Piso 8, Bogotá, D.C., Colombia",
          "Teléfono: +57 (1) 234 5678",
        ]} />
      </LegalSection>
    </PageLayout>
  );
}
