import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from 'recharts'
import { Card } from '../ui/Card'

const COLORES = ['#4f46e5', '#0891b2', '#e11d48', '#d97706', '#059669', '#7c3aed']

function TooltipPersonalizado({ active, payload, darkMode }) {
  if (!active || !payload?.length) return null
  const { canal, usuarios, porcentaje } = payload[0].payload

  return (
    <div
      className={`rounded-lg border px-3 py-2 shadow-lg ${
        darkMode
          ? 'border-slate-600 bg-slate-800 text-white'
          : 'border-slate-200 bg-white text-slate-900'
      }`}
    >
      <p className="text-sm font-medium">{canal}</p>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        {usuarios.toLocaleString('es-AR')} usuarios
      </p>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        {porcentaje}%
      </p>
    </div>
  )
}

export function AcquisitionPieChart({ datos, darkMode }) {
  return (
    <Card>
      <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
        Canales de Adquisición
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={datos}
            dataKey="usuarios"
            nameKey="canal"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={3}
            strokeWidth={0}
          >
            {datos.map((_, i) => (
              <Cell key={i} fill={COLORES[i % COLORES.length]} />
            ))}
          </Pie>
          <Tooltip content={<TooltipPersonalizado darkMode={darkMode} />} />
          <Legend
            formatter={(value) => (
              <span className="text-sm text-slate-600 dark:text-slate-300">
                {value}
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  )
}
