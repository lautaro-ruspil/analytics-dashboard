import clsx from 'clsx'
import { Header } from './Header'

export function Layout({
  children,
  darkMode,
  toggleDarkMode,
  periodoSeleccionado,
  setPeriodoSeleccionado,
}) {
  return (
    <div
      className={clsx(
        'min-h-screen bg-slate-50 dark:bg-slate-900',
        darkMode && 'dark'
      )}
    >
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        periodoSeleccionado={periodoSeleccionado}
        setPeriodoSeleccionado={setPeriodoSeleccionado}
      />
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  )
}
