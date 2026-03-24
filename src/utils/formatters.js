export function formatCurrency(amount) {
  return '$' + Math.round(amount).toLocaleString('es-AR')
}

export function formatNumber(num) {
  return num.toLocaleString('es-AR')
}

export function formatDate(dateStr) {
  const [year, month, day] = dateStr.split('-')
  return `${day}/${month}/${year}`
}

export function formatPercentage(num) {
  const signo = num >= 0 ? '+' : ''
  return signo + num.toLocaleString('es-AR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }) + '%'
}
