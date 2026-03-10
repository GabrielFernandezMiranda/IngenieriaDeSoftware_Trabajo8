const reglasDescuentoFijo = [
  { tipoCliente: 'Recurrente', precioMinimo: 3000, categoria: 'Alimentos', descuento: 100 },
  { tipoCliente: 'Especial', precioMinimo: 7000, categoria: 'Electronicos', descuento: 200 },
];

function calcularDescuentoFijoCliente(precioNeto, tipoCliente = 'Normal', categoria = 'Varios') {
  const precio = parseFloat(precioNeto) || 0;

  for (const regla of reglasDescuentoFijo) {
    if (
      regla.tipoCliente === tipoCliente &&
      precio > regla.precioMinimo &&
      regla.categoria === categoria
    ) {
      return regla.descuento;
    }
  }

  return 0;
}

export default calcularDescuentoFijoCliente;