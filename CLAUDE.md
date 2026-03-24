# Analytics Dashboard — Contexto para Claude Code

## Stack

- React 18 + Vite
- Tailwind CSS v4 (via @tailwindcss/vite — sin tailwind.config.js, sin postcss.config.js)
- Recharts para todos los gráficos
- lucide-react para íconos
- date-fns para formateo de fechas
- clsx para clases condicionales

## Configuración de Tailwind v4

- El plugin está en vite.config.js como: import tailwindcss from '@tailwindcss/vite'
- En src/index.css solo hay: @import "tailwindcss";
- NO existe tailwind.config.js ni postcss.config.js — no crearlos
- Dark mode en v4 se activa con la variante "dark:" igual que v3
- Para dark mode por clase agregar esto en index.css debajo del import:
  @custom-variant dark (&:where(.dark, .dark \*));

## Estructura de carpetas

src/
components/
ui/ → componentes genéricos (Card, Badge, Button)
charts/ → un componente por cada gráfico
layout/ → Header, Layout
data/
mockData.js → todos los datos mockeados aquí
hooks/
useDashboard.js → estado global (filtro de fechas, dark mode)
utils/
formatters.js → formateo de moneda ARS, números, fechas

## Convenciones

- Idioma del código: español (variables, funciones, componentes)
- Idioma de la UI: español (textos visibles al usuario)
- Tailwind puro, sin estilos inline salvo que Recharts lo requiera
- Colores principales: indigo-600 como acento, slate para grises
- Dark mode: toggle manual aplicando clase "dark" en el elemento raíz del Layout
- Responsive: mobile-first, breakpoints md: y lg:
- Todos los gráficos deben ser ResponsiveContainer de Recharts
- Los datos mockeados simulan una empresa de e-commerce argentina

## Lo que NO hacer

- No crear tailwind.config.js ni postcss.config.js
- No usar @tailwind base/components/utilities (eso es sintaxis v3)
- No usar CSS Modules
- No instalar librerías extra sin consultar
- No usar colores hardcodeados fuera de Tailwind
