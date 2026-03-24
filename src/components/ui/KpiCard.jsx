import { TrendingUp, TrendingDown } from 'lucide-react'
import { Card } from './Card'
import { formatPercentage } from '../../utils/formatters'
import clsx from 'clsx'

export function KpiCard({ titulo, valor, variacion, icono: Icono }) {
  const esPositivo = variacion >= 0

  return (
    <Card>
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {titulo}
          </p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">
            {valor}
          </p>
          <div className="flex items-center gap-1">
            {esPositivo ? (
              <TrendingUp className="h-4 w-4 text-green-500" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500" />
            )}
            <span
              className={clsx(
                'text-sm font-medium',
                esPositivo ? 'text-green-500' : 'text-red-500'
              )}
            >
              {formatPercentage(variacion)}
            </span>
            <span className="text-sm text-slate-400 dark:text-slate-500">
              vs mes anterior
            </span>
          </div>
        </div>
        <div className="rounded-lg bg-indigo-50 p-3 dark:bg-indigo-900/30">
          <Icono className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
        </div>
      </div>
    </Card>
  )
}
