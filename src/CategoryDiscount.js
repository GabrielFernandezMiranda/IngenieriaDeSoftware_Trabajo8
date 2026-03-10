const descuentosPorCategoria = {
  'Alimentos': 2,
  'Bebidas alcoholicas': 0,
  'Material de escritorio': 1.5,
  'Muebles': 0,
  'Electronicos': 1,
  'Vestimenta': 0,
  'Varios': 0,
};

function calcularDescuentoCategoria(precioNeto, categoria = 'Varios') {
  const precio = parseFloat(precioNeto) || 0;
  const tasa = descuentosPorCategoria[categoria] ?? 0;
  const descuento = precio * (tasa / 100);
  return parseFloat(descuento.toFixed(2));
}

export default calcularDescuentoCategoria;
export { descuentosPorCategoria };