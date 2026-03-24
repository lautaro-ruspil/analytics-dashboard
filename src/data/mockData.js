export const ventasMensuales = [
  { mes: 'Ene', ventas: 980000, ordenes: 312, visitantes: 18400 },
  { mes: 'Feb', ventas: 870000, ordenes: 278, visitantes: 16200 },
  { mes: 'Mar', ventas: 1250000, ordenes: 398, visitantes: 21500 },
  { mes: 'Abr', ventas: 1180000, ordenes: 372, visitantes: 20100 },
  { mes: 'May', ventas: 1420000, ordenes: 445, visitantes: 24300 },
  { mes: 'Jun', ventas: 1350000, ordenes: 421, visitantes: 22800 },
  { mes: 'Jul', ventas: 1580000, ordenes: 489, visitantes: 26100 },
  { mes: 'Ago', ventas: 1720000, ordenes: 534, visitantes: 28400 },
  { mes: 'Sep', ventas: 1890000, ordenes: 587, visitantes: 30200 },
  { mes: 'Oct', ventas: 2150000, ordenes: 668, visitantes: 34500 },
  { mes: 'Nov', ventas: 3850000, ordenes: 1195, visitantes: 58200 },
  { mes: 'Dic', ventas: 4200000, ordenes: 1305, visitantes: 62800 },
]

export const ventasPorCategoria = [
  { categoria: 'Electrónica', ventas: 8450000, porcentaje: 35.2 },
  { categoria: 'Ropa', ventas: 4320000, porcentaje: 18.0 },
  { categoria: 'Hogar', ventas: 3610000, porcentaje: 15.0 },
  { categoria: 'Deportes', ventas: 3130000, porcentaje: 13.0 },
  { categoria: 'Belleza', ventas: 2650000, porcentaje: 11.0 },
  { categoria: 'Alimentos', ventas: 1880000, porcentaje: 7.8 },
]

export const canalesAdquisicion = [
  { canal: 'Orgánico', usuarios: 34200, porcentaje: 32.5 },
  { canal: 'Google Ads', usuarios: 24800, porcentaje: 23.6 },
  { canal: 'Instagram', usuarios: 18600, porcentaje: 17.7 },
  { canal: 'Email', usuarios: 12400, porcentaje: 11.8 },
  { canal: 'Directo', usuarios: 9800, porcentaje: 9.3 },
  { canal: 'Referidos', usuarios: 5400, porcentaje: 5.1 },
]

export const ultimasTransacciones = [
  { id: 'TRX-001', cliente: 'María González', producto: 'MacBook Air M3', monto: 1850000, fecha: '2026-03-24', estado: 'completado' },
  { id: 'TRX-002', cliente: 'Carlos Rodríguez', producto: 'Zapatillas Nike Air Max', monto: 189000, fecha: '2026-03-24', estado: 'completado' },
  { id: 'TRX-003', cliente: 'Ana Martínez', producto: 'Cafetera Nespresso', monto: 245000, fecha: '2026-03-23', estado: 'pendiente' },
  { id: 'TRX-004', cliente: 'Lucas Fernández', producto: 'Set de Sartenes Tramontina', monto: 95000, fecha: '2026-03-23', estado: 'completado' },
  { id: 'TRX-005', cliente: 'Valentina López', producto: 'Samsung Galaxy S25', monto: 1200000, fecha: '2026-03-22', estado: 'cancelado' },
  { id: 'TRX-006', cliente: 'Martín Díaz', producto: 'Bicicleta MTB Raleigh', monto: 420000, fecha: '2026-03-22', estado: 'completado' },
  { id: 'TRX-007', cliente: 'Sofía Ruiz', producto: 'Perfume Carolina Herrera', monto: 78000, fecha: '2026-03-21', estado: 'pendiente' },
  { id: 'TRX-008', cliente: 'Diego Morales', producto: 'Monitor LG UltraWide 34"', monto: 680000, fecha: '2026-03-21', estado: 'completado' },
]

export const kpis = {
  ventasTotales: 4200000,
  ordenes: 1305,
  ticketPromedio: 3218,
  tasaConversion: 2.08,
  variacionVentas: 9.1,
  variacionOrdenes: 8.4,
  variacionTicket: -2.3,
  variacionConversion: 0.15,
}
