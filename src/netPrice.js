function calcularPrecioNeto(cantidad, precio) {
  const cant = parseFloat(cantidad) || 0;
  const prec = parseFloat(precio) || 0;
  return cant * prec;
}

export default calcularPrecioNeto;
