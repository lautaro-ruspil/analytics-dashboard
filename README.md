<div align="center">

# Analytics Dashboard

**Dashboard de analytics para e-commerce, construido con React y Recharts.**

Visualizacion de datos en tiempo real, graficos interactivos, modo oscuro y diseno responsive.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Recharts](https://img.shields.io/badge/Recharts-2-FF6384?style=flat-square)](https://recharts.org/)
[![Firebase](https://img.shields.io/badge/Firebase-Hosting-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com/)

[Demo en vivo](https://dashboard-analytics-lr.web.app) · [Ver codigo en GitHub](https://github.com/lautaro-ruspil/analytics-dashboard)

</div>

---

## Funcionalidades

- **KPIs con comparacion** — Tarjetas con metricas clave y variacion porcentual respecto al periodo anterior
- **Graficos interactivos** — Area, Barras y Donut con tooltips y animaciones via Recharts
- **Modo oscuro** — Toggle manual con soporte completo en todos los componentes
- **Filtro por periodo** — Selector de rango temporal (3M / 6M / 12M)
- **Tabla de transacciones** — Ordenable por columnas con indicadores de estado
- **Responsive** — Layout adaptable desde mobile hasta desktop

## Stack Tecnologico

| Categoria | Tecnologia |
|-----------|-----------|
| UI Library | React 18 |
| Build Tool | Vite 6 |
| Estilos | Tailwind CSS v4 |
| Graficos | Recharts |
| Iconos | lucide-react |
| Fechas | date-fns |
| Utilidades | clsx |
| Deploy | Firebase Hosting |

## Inicio Rapido

```bash
# Clonar el repositorio
git clone https://github.com/lautaro-ruspil/analytics-dashboard.git

# Entrar al directorio
cd analytics-dashboard

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La app estara disponible en `http://localhost:5173`.

## Estructura del Proyecto

```
src/
├── components/
│   ├── ui/          # Componentes genericos (Card, Badge, Button)
│   ├── charts/      # Un componente por cada grafico
│   └── layout/      # Header, Layout
├── data/
│   └── mockData.js  # Datos mockeados de e-commerce
├── hooks/
│   └── useDashboard.js  # Estado global (filtros, dark mode)
└── utils/
    └── formatters.js    # Formateo de moneda, numeros, fechas
```

## Deploy

El proyecto esta desplegado en Firebase Hosting con CI/CD automatico.

```bash
npm run build
firebase deploy
```

---

<div align="center">

Hecho por [Lautaro Ruspil](https://github.com/lautaro-ruspil)

</div>
