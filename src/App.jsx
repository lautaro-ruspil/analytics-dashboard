import { DollarSign, ShoppingCart, Receipt, TrendingUp } from 'lucide-react'
import { Layout } from './components/layout/Layout'
import { KpiCard } from './components/ui/KpiCard'
import { SalesLineChart } from './components/charts/SalesLineChart'
import { CategoryBarChart } from './components/charts/CategoryBarChart'
import { AcquisitionPieChart } from './components/charts/AcquisitionPieChart'
import { TransactionsTable } from './components/TransactionsTable'
import { useDashboard } from './hooks/useDashboard'
import { ventasPorCategoria, canalesAdquisicion } from './data/mockData'
import { formatCurrency, formatNumber, formatPercentage } from './utils/formatters'

function App() {
  const {
    darkMode,
    toggleDarkMode,
    periodoSeleccionado,
    setPeriodoSeleccionado,
    ventasFiltradas,
    kpisCalculados,
  } = useDashboard()

  const tarjetas = [
    {
      titulo: 'Ventas Totales',
      valor: formatCurrency(kpisCalculados.ventasTotales),
      variacion: kpisCalculados.variacionVentas,
      icono: DollarSign,
    },
    {
      titulo: 'Órdenes',
      valor: formatNumber(kpisCalculados.ordenes),
      variacion: kpisCalculados.variacionOrdenes,
      icono: ShoppingCart,
    },
    {
      titulo: 'Ticket Promedio',
      valor: formatCurrency(kpisCalculados.ticketPromedio),
      variacion: kpisCalculados.variacionTicket,
      icono: Receipt,
    },
    {
      titulo: 'Tasa de Conversión',
      valor: formatPercentage(kpisCalculados.tasaConversion).replace('+', ''),
      variacion: kpisCalculados.variacionConversion,
      icono: TrendingUp,
    },
  ]

  return (
    <Layout
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
      periodoSeleccionado={periodoSeleccionado}
      setPeriodoSeleccionado={setPeriodoSeleccionado}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tarjetas.map((kpi) => (
          <KpiCard key={kpi.titulo} {...kpi} />
        ))}
      </div>

      <div className="mt-6">
        <SalesLineChart datos={ventasFiltradas} darkMode={darkMode} />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <CategoryBarChart datos={ventasPorCategoria} darkMode={darkMode} />
        <AcquisitionPieChart datos={canalesAdquisicion} darkMode={darkMode} />
      </div>

      <div className="mt-6">
        <TransactionsTable />
      </div>
    </Layout>
  )
}

export default App
