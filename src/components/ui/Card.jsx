import clsx from 'clsx'

export function Card({ children, className }) {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md',
        'dark:border-slate-700 dark:bg-slate-800',
        className
      )}
    >
      {children}
    </div>
  )
}
