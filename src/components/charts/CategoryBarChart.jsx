import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from 'recharts'
import { Card } from '../ui/Card'

const COLORES = ['#4f46e5', '#0891b2', '#059669', '#d97706', '#e11d48', '#7c3aed']

function TooltipPersonalizado({ active, payload, darkMode }) {
  if (!active || !payload?.length) return null
  const { categoria, ventas, porcentaje } = payload[0].payload

  return (
    <div
      className={`rounded-lg border px-3 py-2 shadow-lg ${
        darkMode
          ? 'border-slate-600 bg-slate-800 text-white'
          : 'border-slate-200 bg-white text-slate-900'
      }`}
    >
      <p className="text-sm font-medium">{categoria}</p>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        ${Math.round(ventas).toLocaleString('es-AR')}
      </p>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        {porcentaje}%
      </p>
    </div>
  )
}

export function CategoryBarChart({ datos, darkMode }) {
  return (
    <Card>
      <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
        Ventas por Categoría
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={datos} layout="vertical" margin={{ left: 20 }}>
          <XAxis
            type="number"
            hide
          />
          <YAxis
            type="category"
            dataKey="categoria"
            tick={{ fill: darkMode ? '#94a3b8' : '#64748b', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            width={90}
          />
          <Tooltip
            content={<TooltipPersonalizado darkMode={darkMode} />}
            cursor={{ fill: darkMode ? '#1e293b' : '#f1f5f9' }}
          />
          <Bar dataKey="ventas" radius={[0, 6, 6, 0]} barSize={24}>
            {datos.map((_, i) => (
              <Cell key={i} fill={COLORES[i % COLORES.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}
