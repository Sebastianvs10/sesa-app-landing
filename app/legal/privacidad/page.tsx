import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { LegalSection, LegalP, LegalList, LegalAlert, LegalTable } from "@/components/layout/LegalDoc";

export const metadata: Metadata = {
  title: "Política de Privacidad — SESA",
  description: "Cómo SESA recopila, usa y protege tus datos personales. Cumplimiento Ley 1581 de 2012 Colombia.",
};

export default function PrivacidadPage() {
  return (
    <PageLayout
      badge="Legal"
      badgeColor="var(--sesa-text-secondary)"
      title="Política de Privacidad"
      subtitle="Cómo recopilamos, usamos y protegemos tu información personal según la Ley 1581 de 2012."
      lastUpdated="1 de enero de 2026"
      maxWidth="820px"
    >
      <LegalAlert>
        Sphaira Tech SAS, identificada con NIT 901.234.567-8, actúa como <strong>Responsable del Tratamiento</strong> de los datos personales recopilados a través de la plataforma SESA, conforme a lo establecido en la <strong>Ley 1581 de 2012</strong> (Ley de Protección de Datos Personales de Colombia) y el Decreto 1377 de 2013.
      </LegalAlert>

      <br />

      <LegalSection number="1" title="Datos que recopilamos">
        <LegalP>Recopilamos los siguientes tipos de datos según la interacción con la plataforma:</LegalP>
        <LegalTable
          headers={["Categoría", "Datos específicos", "Finalidad"]}
          rows={[
            ["Identidad del usuario", "Nombre, correo, cargo, teléfono", "Autenticación y soporte"],
            ["Datos institucionales", "NIT, razón social, dirección, RUT", "Facturación y contratos"],
            ["Datos de pacientes (tratamiento)", "Número de documento, nombre, fecha de nacimiento", "Generación de RIPS y facturas"],
            ["Datos financieros", "Valores de servicios, facturas, estados de cuenta", "Gestión del ciclo de ingresos"],
            ["Datos de uso", "IP, logs de acceso, funciones utilizadas", "Seguridad y mejora del servicio"],
            ["Datos de dispositivo", "Navegador, sistema operativo, resolución", "Optimización de la plataforma"],
          ]}
        />
      </LegalSection>

      <LegalSection number="2" title="Finalidades del tratamiento">
        <LegalP>Los datos personales son tratados para las siguientes finalidades:</LegalP>
        <LegalList items={[
          "Prestar los servicios contratados de facturación electrónica, gestión de glosas y cartera.",
          "Cumplir obligaciones legales ante la DIAN, el MSPS y otras entidades regulatorias.",
          "Brindar soporte técnico y atención al cliente.",
          "Enviar comunicaciones sobre el servicio, actualizaciones y mantenimientos programados.",
          "Mejorar la plataforma mediante análisis agregado y anonimizado del comportamiento de uso.",
          "Prevenir fraudes y garantizar la seguridad de los datos almacenados.",
          "Facturar y cobrar los servicios contratados.",
        ]} />
      </LegalSection>

      <LegalSection number="3" title="Base legal del tratamiento">
        <LegalP>El tratamiento de datos se fundamenta en:</LegalP>
        <LegalList items={[
          "Ejecución del contrato de suscripción celebrado con el Cliente.",
          "Cumplimiento de obligaciones legales (Ley 100 de 1993, normativa DIAN, RIPS).",
          "Consentimiento expreso del titular para comunicaciones comerciales.",
          "Interés legítimo de SESA en garantizar la seguridad de la plataforma.",
        ]} />
      </LegalSection>

      <LegalSection number="4" title="Derechos de los titulares">
        <LegalP>De conformidad con el artículo 8 de la Ley 1581 de 2012, los titulares tienen derecho a:</LegalP>
        <LegalList items={[
          "Conocer, actualizar y rectificar los datos personales almacenados.",
          "Solicitar prueba de la autorización otorgada para el tratamiento.",
          "Ser informado sobre el uso que se ha dado a sus datos.",
          "Presentar quejas ante la Superintendencia de Industria y Comercio (SIC).",
          "Revocar la autorización y/o solicitar la supresión de sus datos cuando no exista obligación legal de conservarlos.",
          "Acceder gratuitamente a sus datos personales tratados.",
        ]} />
        <LegalP>Para ejercer estos derechos, comuníquese a: <strong>privacidad@sesa.com.co</strong></LegalP>
      </LegalSection>

      <LegalSection number="5" title="Transferencia y transmisión de datos">
        <LegalP>Los datos pueden ser compartidos con:</LegalP>
        <LegalList items={[
          "DIAN: datos de facturación electrónica obligatoriamente conforme a la normativa tributaria.",
          "Ministerio de Salud (MSPS): datos RIPS según obligación legal.",
          "Proveedores de infraestructura cloud (AWS): almacenamiento con contratos de procesamiento de datos conforme a la Ley 1581.",
          "Entidades financieras: exclusivamente para el procesamiento de pagos de la suscripción.",
        ]} />
        <LegalP>No vendemos datos personales a terceros bajo ninguna circunstancia.</LegalP>
      </LegalSection>

      <LegalSection number="6" title="Medidas de seguridad">
        <LegalP>Implementamos medidas técnicas y organizativas para proteger sus datos:</LegalP>
        <LegalList items={[
          "Cifrado de datos en tránsito (TLS 1.3) y en reposo (AES-256).",
          "Autenticación multifactor (MFA) disponible para todos los usuarios.",
          "Controles de acceso basados en roles (RBAC) con principio de mínimo privilegio.",
          "Monitoreo continuo de eventos de seguridad con alertas automatizadas.",
          "Pruebas de penetración realizadas semestralmente por terceros independientes.",
          "Backups diarios con cifrado y retención de 90 días.",
        ]} />
      </LegalSection>

      <LegalSection number="7" title="Retención de datos">
        <LegalTable
          headers={["Tipo de dato", "Período de retención", "Fundamento"]}
          rows={[
            ["Facturas y registros contables", "10 años", "Artículo 60 Código de Comercio"],
            ["Datos de pacientes (RIPS)", "15 años", "Resolución 1995 de 1999 - Historia clínica"],
            ["Logs de acceso y seguridad", "2 años", "Mejores prácticas ISO 27001"],
            ["Datos de cuenta tras baja", "90 días", "Período de exportación para el Cliente"],
            ["Comunicaciones de soporte", "3 años", "Interés legítimo / trazabilidad"],
          ]}
        />
      </LegalSection>

      <LegalSection number="8" title="Cambios en esta política">
        <LegalP>Sphaira Tech SAS se reserva el derecho de modificar esta política. Los cambios materiales serán comunicados con al menos 30 días de antelación por correo electrónico al responsable de cuenta del Cliente. La versión vigente siempre estará disponible en sesa.com.co/legal/privacidad.</LegalP>
      </LegalSection>

      <LegalSection number="9" title="Contacto y reclamaciones">
        <LegalP>Responsable del tratamiento: Sphaira Tech SAS, NIT 901.234.567-8. Para consultas o solicitudes sobre el tratamiento de sus datos:</LegalP>
        <LegalList items={[
          "Correo electrónico: privacidad@sesa.com.co",
          "Dirección: Calle 93 # 13-24, Piso 8, Bogotá, D.C., Colombia",
          "Teléfono: +57 (1) 234 5678",
          "Horario de atención: lunes a viernes 8:00 a.m. – 5:30 p.m. (COT)",
        ]} />
        <LegalP>Si su solicitud no es atendida satisfactoriamente, puede acudir a la Superintendencia de Industria y Comercio (SIC): www.sic.gov.co</LegalP>
      </LegalSection>
    </PageLayout>
  );
}
