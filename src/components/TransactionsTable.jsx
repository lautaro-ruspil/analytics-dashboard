import { useState } from 'react'
import { ArrowUpDown } from 'lucide-react'
import { Card } from './ui/Card'
import { Badge } from './ui/Badge'
import { formatCurrency, formatDate } from '../utils/formatters'
import { ultimasTransacciones } from '../data/mockData'

export function TransactionsTable() {
  const [ordenAsc, setOrdenAsc] = useState(false)

  const transaccionesOrdenadas = [...ultimasTransacciones].sort((a, b) =>
    ordenAsc ? a.monto - b.monto : b.monto - a.monto
  )

  return (
    <Card>
      <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
        Últimas transacciones
      </h3>

      {/* Desktop: tabla */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700">
              <th className="pb-3 font-medium text-slate-500 dark:text-slate-400">ID</th>
              <th className="pb-3 font-medium text-slate-500 dark:text-slate-400">Cliente</th>
              <th className="pb-3 font-medium text-slate-500 dark:text-slate-400">Producto</th>
              <th
                className="cursor-pointer pb-3 font-medium text-slate-500 select-none transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                onClick={() => setOrdenAsc((prev) => !prev)}
              >
                <span className="inline-flex items-center gap-1">
                  Monto
                  <ArrowUpDown className="h-3.5 w-3.5" />
                </span>
              </th>
              <th className="pb-3 font-medium text-slate-500 dark:text-slate-400">Fecha</th>
              <th className="pb-3 font-medium text-slate-500 dark:text-slate-400">Estado</th>
            </tr>
          </thead>
          <tbody>
            {transaccionesOrdenadas.map((trx) => (
              <tr
                key={trx.id}
                className="border-b border-slate-100 last:border-0 dark:border-slate-700/50"
              >
                <td className="py-3 font-mono text-xs text-slate-500 dark:text-slate-400">
                  {trx.id}
                </td>
                <td className="py-3 text-slate-900 dark:text-white">{trx.cliente}</td>
                <td className="py-3 text-slate-600 dark:text-slate-300">{trx.producto}</td>
                <td className="py-3 font-medium text-slate-900 dark:text-white">
                  {formatCurrency(trx.monto)}
                </td>
                <td className="py-3 text-slate-500 dark:text-slate-400">
                  {formatDate(trx.fecha)}
                </td>
                <td className="py-3">
                  <Badge estado={trx.estado} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: cards */}
      <div className="space-y-3 md:hidden">
        {transaccionesOrdenadas.map((trx) => (
          <div
            key={trx.id}
            className="rounded-lg border border-slate-200 p-4 dark:border-slate-700"
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                {trx.id}
              </span>
              <Badge estado={trx.estado} />
            </div>
            <p className="font-medium text-slate-900 dark:text-white">{trx.cliente}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">{trx.producto}</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="font-semibold text-slate-900 dark:text-white">
                {formatCurrency(trx.monto)}
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {formatDate(trx.fecha)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
