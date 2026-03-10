const descuentoEnvioPorCliente = {
  'Normal': 0,
  'Recurrente': 0.5,
  'Antiguo Recurrente': 1,
  'Especial': 1.5,
};

function calcularDescuentoEnvio(costoEnvio, tipoCliente = 'Normal') {
  const costo = parseFloat(costoEnvio) || 0;
  const tasa = descuentoEnvioPorCliente[tipoCliente] ?? 0;
  const descuento = costo * (tasa / 100);
  return parseFloat(descuento.toFixed(2));
}

export default calcularDescuentoEnvio;
export { descuentoEnvioPorCliente };