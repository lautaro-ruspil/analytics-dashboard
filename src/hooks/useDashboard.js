import { useState, useMemo } from 'react'
import { ventasMensuales } from '../data/mockData'

const MESES_POR_PERIODO = {
  '3m': 3,
  '6m': 6,
  '12m': 12,
}

export function useDashboard() {
  const [darkMode, setDarkMode] = useState(false)
  const [periodoSeleccionado, setPeriodoSeleccionado] = useState('12m')

  const toggleDarkMode = () => setDarkMode((prev) => !prev)

  const ventasFiltradas = useMemo(() => {
    const cantidad = MESES_POR_PERIODO[periodoSeleccionado]
    return ventasMensuales.slice(-cantidad)
  }, [periodoSeleccionado])

  const kpisCalculados = useMemo(() => {
    const ventasTotales = ventasFiltradas.reduce((sum, m) => sum + m.ventas, 0)
    const ordenes = ventasFiltradas.reduce((sum, m) => sum + m.ordenes, 0)
    const visitantes = ventasFiltradas.reduce((sum, m) => sum + m.visitantes, 0)
    const ticketPromedio = Math.round(ventasTotales / ordenes)
    const tasaConversion = Math.round((ordenes / visitantes) * 100 * 100) / 100

    const cantidad = MESES_POR_PERIODO[periodoSeleccionado]
    const indiceFin = ventasMensuales.length
    const indiceInicio = indiceFin - cantidad
    const mesAnterior = indiceInicio > 0 ? ventasMensuales[indiceInicio - 1] : null
    const ultimoMes = ventasFiltradas[ventasFiltradas.length - 1]

    let variacionVentas = 0
    let variacionOrdenes = 0
    let variacionTicket = 0
    let variacionConversion = 0

    if (mesAnterior) {
      const ticketAnterior = mesAnterior.ventas / mesAnterior.ordenes
      const conversionAnterior = (mesAnterior.ordenes / mesAnterior.visitantes) * 100
      const ticketActual = ultimoMes.ventas / ultimoMes.ordenes
      const conversionActual = (ultimoMes.ordenes / ultimoMes.visitantes) * 100

      variacionVentas = Math.round(((ultimoMes.ventas - mesAnterior.ventas) / mesAnterior.ventas) * 100 * 10) / 10
      variacionOrdenes = Math.round(((ultimoMes.ordenes - mesAnterior.ordenes) / mesAnterior.ordenes) * 100 * 10) / 10
      variacionTicket = Math.round(((ticketActual - ticketAnterior) / ticketAnterior) * 100 * 10) / 10
      variacionConversion = Math.round((conversionActual - conversionAnterior) * 100) / 100
    }

    return {
      ventasTotales,
      ordenes,
      ticketPromedio,
      tasaConversion,
      variacionVentas,
      variacionOrdenes,
      variacionTicket,
      variacionConversion,
    }
  }, [ventasFiltradas, periodoSeleccionado])

  return {
    darkMode,
    toggleDarkMode,
    periodoSeleccionado,
    setPeriodoSeleccionado,
    ventasFiltradas,
    kpisCalculados,
  }
}
