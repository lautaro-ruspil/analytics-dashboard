import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'
import { Card } from '../ui/Card'

function formatearEjeY(valor) {
  if (valor >= 1_000_000) return `$${(valor / 1_000_000).toLocaleString('es-AR', { maximumFractionDigits: 1 })}M`
  if (valor >= 1_000) return `$${(valor / 1_000).toLocaleString('es-AR', { maximumFractionDigits: 0 })}K`
  return `$${valor}`
}

function TooltipPersonalizado({ active, payload, label, darkMode }) {
  if (!active || !payload?.length) return null

  return (
    <div
      className={`rounded-lg border px-3 py-2 shadow-lg ${
        darkMode
          ? 'border-slate-600 bg-slate-800 text-white'
          : 'border-slate-200 bg-white text-slate-900'
      }`}
    >
      <p className="text-sm font-medium">{label}</p>
      <p className="text-sm text-indigo-500">
        ${Math.round(payload[0].value).toLocaleString('es-AR')}
      </p>
    </div>
  )
}

export function SalesLineChart({ datos, darkMode }) {
  return (
    <Card>
      <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
        Ventas Mensuales
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={datos}>
          <defs>
            <linearGradient id="gradienteVentas" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4f46e5" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#4f46e5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={darkMode ? '#334155' : '#e2e8f0'}
          />
          <XAxis
            dataKey="mes"
            tick={{ fill: darkMode ? '#94a3b8' : '#64748b', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={formatearEjeY}
            tick={{ fill: darkMode ? '#94a3b8' : '#64748b', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            width={60}
          />
          <Tooltip content={<TooltipPersonalizado darkMode={darkMode} />} />
          <Area
            type="monotone"
            dataKey="ventas"
            stroke="#4f46e5"
            strokeWidth={2.5}
            fill="url(#gradienteVentas)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  )
}
