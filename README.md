# SESA — Landing Page

Landing page institucional para **SESA** (Sistema de Gestión en Salud), plataforma SaaS B2B para el sector salud colombiano.

## Stack

| Tecnología | Versión | Propósito |
|---|---|---|
| **Next.js** | 15 (App Router) | Framework React con SSR/SSG |
| **TypeScript** | 5 | Tipado estático |
| **Tailwind CSS** | v4 | Utilidades CSS |
| **Framer Motion** | latest | Animaciones y microinteracciones |
| **Lucide React** | latest | Iconografía |
| **Vercel** | — | Deploy y CDN |

## Secciones

- **Hero** — Headline + CTA + Dashboard mockup animado
- **Features** — 6 módulos del producto con cards interactivas
- **Stats** — Métricas con contadores animados al hacer scroll
- **Pricing** — 3 planes con toggle Mensual/Anual
- **Testimonials** — Casos de clientes reales
- **Footer** — Links, contacto, créditos legales

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Deploy

El proyecto está configurado para **Vercel**. Conecta el repositorio en [vercel.com](https://vercel.com) y el CI/CD queda automático desde la rama `main`.

## Tema light / dark

- Toggle en la navbar.
- Estrategia: `data-theme="light|dark"` en `<html>` (consistente con el sistema SESA).
- Variables CSS en `app/globals.css`.

## Autor

Ing. J Sebastian Vargas S — SESA
