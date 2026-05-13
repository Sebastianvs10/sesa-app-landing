import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { LegalSection, LegalP, LegalList, LegalAlert, LegalTable } from "@/components/layout/LegalDoc";

export const metadata: Metadata = {
  title: "Habeas Data — SESA",
  description: "Derechos de protección de datos personales según la Ley 1581 de 2012 de Colombia. Cómo ejercer sus derechos ante SESA.",
};

export default function HabeasDataPage() {
  return (
    <PageLayout
      badge="Legal"
      badgeColor="var(--sesa-text-secondary)"
      title="Habeas Data"
      subtitle="Sus derechos sobre datos personales conforme a la Ley 1581 de 2012 de la República de Colombia."
      lastUpdated="1 de enero de 2026"
      maxWidth="820px"
    >
      <LegalAlert type="warning">
        El <strong>Habeas Data</strong> es un derecho fundamental consagrado en el artículo 15 de la Constitución Política de Colombia y desarrollado por la <strong>Ley Estatutaria 1581 de 2012</strong>. Le permite a usted como titular de datos personales conocer, actualizar, rectificar y suprimir la información que Sphaira Tech SAS trate sobre usted.
      </LegalAlert>

      <br />

      <LegalSection number="1" title="Responsable del tratamiento">
        <LegalTable
          headers={["Campo", "Información"]}
          rows={[
            ["Razón social", "Sphaira Tech SAS"],
            ["NIT", "901.234.567-8"],
            ["Domicilio", "Calle 93 # 13-24, Piso 8, Bogotá, D.C., Colombia"],
            ["Correo habeas data", "habeasdata@sesa.com.co"],
            ["Teléfono", "+57 (1) 234 5678"],
            ["Horario de atención", "Lunes a viernes 8:00 a.m. – 5:30 p.m. (COT)"],
            ["Delegado de Protección de Datos", "Dra. Camila Torres — dpo@sesa.com.co"],
          ]}
        />
      </LegalSection>

      <LegalSection number="2" title="Derechos que puede ejercer">
        <LegalP>Conforme a los artículos 8 y 21 de la Ley 1581 de 2012, usted tiene los siguientes derechos:</LegalP>
        <LegalList items={[
          "Derecho de acceso: conocer qué datos personales suyos están siendo tratados por SESA, con qué finalidad y bajo qué base legal.",
          "Derecho de rectificación: solicitar la corrección de datos inexactos, incompletos o desactualizados.",
          "Derecho de actualización: mantener sus datos al día conforme a cambios en su situación.",
          "Derecho de supresión ('derecho al olvido'): solicitar que sus datos sean eliminados cuando no exista obligación legal de conservarlos.",
          "Derecho de revocación del consentimiento: retirar el consentimiento otorgado para el tratamiento, cuando este sea la base legal.",
          "Derecho de portabilidad: obtener una copia de sus datos en formato estructurado, de uso común y lectura mecánica.",
          "Derecho de queja: presentar reclamaciones ante la Superintendencia de Industria y Comercio (SIC).",
          "Derecho a no ser objeto de decisiones automatizadas: que no se tomen decisiones que le afecten exclusivamente con base en tratamiento automatizado sin intervención humana.",
        ]} />
      </LegalSection>

      <LegalSection number="3" title="Titulares que pueden ejercer estos derechos">
        <LegalList items={[
          "El titular de los datos (usuario registrado en la plataforma, contacto de la institución cliente).",
          "Causahabientes del titular, en caso de fallecimiento.",
          "El representante legal o apoderado del titular.",
          "Las organizaciones de consumidores, en representación de sus afiliados.",
          "La Superintendencia de Industria y Comercio, en el ejercicio de sus funciones.",
        ]} />
      </LegalSection>

      <LegalSection number="4" title="Procedimiento para ejercer sus derechos">
        <LegalP>Para ejercer cualquiera de los derechos anteriores, siga estos pasos:</LegalP>
        <LegalList items={[
          "Envíe una solicitud escrita al correo habeasdata@sesa.com.co con el asunto: 'Solicitud Habeas Data — [Tipo de solicitud]'.",
          "Incluya en su solicitud: (a) nombre completo y documento de identidad, (b) tipo de derecho que desea ejercer, (c) descripción clara de la solicitud, (d) datos de contacto para respuesta.",
          "Si actúa como representante, adjunte poder notarial o documento que acredite la representación.",
          "SESA confirmará la recepción de su solicitud en un plazo máximo de 5 días hábiles.",
          "La respuesta de fondo será remitida en un plazo máximo de 10 días hábiles (consultas) o 15 días hábiles (reclamos) conforme al artículo 22 de la Ley 1581 de 2012.",
          "Si el plazo no puede cumplirse, SESA le informará los motivos y la nueva fecha de respuesta, que no puede superar el doble del plazo inicial.",
        ]} />
      </LegalSection>

      <LegalSection number="5" title="Plazos legales de respuesta">
        <LegalTable
          headers={["Tipo de solicitud", "Plazo de respuesta", "Base legal"]}
          rows={[
            ["Consulta de datos", "10 días hábiles", "Art. 14, Ley 1581 de 2012"],
            ["Reclamo (rectificación, actualización, supresión)", "15 días hábiles", "Art. 15, Ley 1581 de 2012"],
            ["Ampliación de plazo (máximo)", "5 días hábiles adicionales", "Art. 14 y 15, Ley 1581"],
          ]}
        />
      </LegalSection>

      <LegalSection number="6" title="Tratamiento de datos sensibles">
        <LegalP>En la plataforma SESA se tratan datos que pueden incluir información de salud de pacientes (nombres, documentos de identidad, diagnósticos en formato codificado). Estos datos son considerados datos sensibles por el artículo 5 de la Ley 1581 de 2012 y reciben protección reforzada:</LegalP>
        <LegalList items={[
          "Solo son accesibles por usuarios con rol autorizado dentro de la institución cliente.",
          "Están cifrados en tránsito y en reposo (AES-256, TLS 1.3).",
          "No son compartidos con terceros distintos a las autoridades regulatorias (DIAN, MSPS) y proveedores de infraestructura bajo contratos de procesamiento.",
          "Son retenidos por los períodos legalmente obligatorios (ver Política de Privacidad, sección 7).",
          "Su tratamiento está justificado por la obligación legal de las IPS de generar RIPS conforme a la Resolución 3374 de 2000.",
        ]} />
      </LegalSection>

      <LegalSection number="7" title="Transferencias internacionales de datos">
        <LegalP>Los datos pueden ser procesados en servidores ubicados fuera de Colombia (AWS us-east-1, ubicado en Estados Unidos) bajo las garantías establecidas en el artículo 26 de la Ley 1581 de 2012 y el Decreto 1377 de 2013. Sphaira Tech SAS garantiza que:</LegalP>
        <LegalList items={[
          "Amazon Web Services cumple con normas de protección de datos equivalentes (certificaciones SOC 2, ISO 27001).",
          "Se ha celebrado el Data Processing Agreement (DPA) correspondiente con AWS.",
          "Los datos nunca son transferidos a jurisdicciones que no ofrezcan un nivel adecuado de protección.",
        ]} />
      </LegalSection>

      <LegalSection number="8" title="Presentación de queja ante la SIC">
        <LegalP>Si Sphaira Tech SAS no atiende satisfactoriamente su solicitud dentro de los plazos legales, puede presentar una queja ante la <strong>Superintendencia de Industria y Comercio (SIC)</strong>, entidad que actúa como autoridad de protección de datos en Colombia:</LegalP>
        <LegalList items={[
          "Sitio web: www.sic.gov.co",
          "Correo: contactenos@sic.gov.co",
          "Dirección: Carrera 13 # 27-00, Piso 1, Bogotá, D.C.",
          "Teléfono: +57 (1) 587 0000",
          "Línea gratuita: 01800-910165",
        ]} />
      </LegalSection>

      <LegalSection number="9" title="Actualización de esta política">
        <LegalP>Esta política de Habeas Data puede ser actualizada para reflejar cambios normativos o en nuestras prácticas de tratamiento de datos. La versión vigente siempre estará publicada en <strong>sesa.com.co/legal/habeas-data</strong>. Los cambios materiales serán comunicados con al menos 30 días de antelación al correo registrado del responsable de cuenta de cada institución cliente.</LegalP>
      </LegalSection>
    </PageLayout>
  );
}
