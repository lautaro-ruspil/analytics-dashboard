import { Sun, Moon } from 'lucide-react'
import clsx from 'clsx'

const periodos = ['3m', '6m', '12m']

export function Header({
  darkMode,
  toggleDarkMode,
  periodoSeleccionado,
  setPeriodoSeleccionado,
}) {
  return (
    <header className="flex flex-col gap-4 border-b border-slate-200 bg-white px-6 py-4 sm:flex-row sm:items-center sm:justify-between dark:border-slate-700 dark:bg-slate-800">
      <div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-xs text-slate-400 dark:text-slate-500">
          Datos simulados — Demo Portfolio
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex rounded-lg border border-slate-200 dark:border-slate-600">
          {periodos.map((p) => (
            <button
              key={p}
              onClick={() => setPeriodoSeleccionado(p)}
              className={clsx(
                'cursor-pointer px-3 py-1.5 text-sm font-medium uppercase transition-colors',
                p === periodoSeleccionado
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700',
                p === periodos[0] && 'rounded-l-lg',
                p === periodos[periodos.length - 1] && 'rounded-r-lg'
              )}
            >
              {p}
            </button>
          ))}
        </div>

        <button
          onClick={toggleDarkMode}
          className="cursor-pointer rounded-lg border border-slate-200 p-2 text-slate-600 transition-colors hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
        >
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </div>
    </header>
  )
}
