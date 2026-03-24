import clsx from 'clsx'

const variantes = {
  completado: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  pendiente: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  cancelado: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
}

export function Badge({ estado }) {
  return (
    <span
      className={clsx(
        'inline-block rounded-full px-2.5 py-0.5 text-xs font-medium capitalize',
        variantes[estado]
      )}
    >
      {estado}
    </span>
  )
}
