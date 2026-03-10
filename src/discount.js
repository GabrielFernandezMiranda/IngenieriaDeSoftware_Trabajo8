import { descuentosPorCategoria } from './CategoryDiscount.js';

function calcularDescuento(precioTotal, categoria = 'Varios') {
  const precio = parseFloat(precioTotal) || 0;
  let descuento = 0;

  // Descuento base por monto
  if (precio >= 30000) {
    descuento = precio * 0.15;
  } else if (precio >= 10000) {
    descuento = precio * 0.1;
  } else if (precio >= 7000) {
    descuento = precio * 0.07;
  } else if (precio >= 3000) {
    descuento = precio * 0.05;
  } else if (precio >= 1000) {
    descuento = precio * 0.03;
  }

  // Descuento adicional por categoría
  const tasaCategoria = descuentosPorCategoria[categoria] ?? 0;
  const descuentoCategoria = precio * (tasaCategoria / 100);

  return parseFloat((descuento + descuentoCategoria).toFixed(2));
}

export default calcularDescuento;
