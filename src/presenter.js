import calcularPrecioNeto from './netPrice.js';
import calcularDescuento from './discount.js';
import calcularImpuestos from './impuestos.js';
import calcularCostoEnvio from './shipping.js';
import calcularDescuentoEnvio from './clientShippingDiscount.js';
import calcularDescuentoFijoCliente from './clientFixedDiscount.js';
import validarEntradas from './validations.js';

const cantidadItemsInput = document.querySelector('#cantidad-items');
const precioItemInput = document.querySelector('#precio-item');
const estadoSelect = document.querySelector('#estado');
const categoriaSelect = document.querySelector('#categoria');
const tipoClienteSelect = document.querySelector('#tipo-cliente');
const pesoVolumetricoInput = document.querySelector('#peso-volumetrico');
const precioNetoForm = document.querySelector('#precio-neto-form');
const mensajeErrorDiv = document.querySelector('#mensaje-error');

const resultadoPrecioNetoInput = document.querySelector('#resultado-precio-neto');
const resultadoDescuentoInput = document.querySelector('#resultado-descuento');
const resultadoImpuestosInput = document.querySelector('#resultado-impuestos');
const resultadoCostoEnvioInput = document.querySelector('#resultado-costo-envio');
const resultadoTotalInput = document.querySelector('#resultado-total');
const resultadoDetalleInput = document.querySelector('#resultado-detalle');

precioNetoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const cantidadItems = cantidadItemsInput.value;
  const precioItem = precioItemInput.value;
  const estado = estadoSelect.value;
  const categoria = categoriaSelect.value;
  const tipoCliente = tipoClienteSelect.value;
  const pesoVolumetrico = pesoVolumetricoInput.value;

  // Validar entradas
  const error = validarEntradas(cantidadItems, precioItem, estado, categoria, tipoCliente, pesoVolumetrico);
  if (error) {
    mensajeErrorDiv.textContent = '⚠️ ' + error;
    mensajeErrorDiv.style.display = 'block';
    return;
  }
  mensajeErrorDiv.style.display = 'none';

  // Calcular precio neto
  const precioNeto = calcularPrecioNeto(cantidadItems, precioItem);

  // Calcular descuento (base + por categoría)
  const descuento = calcularDescuento(precioNeto, categoria);

  // Descuento fijo por tipo de cliente
  const descuentoFijo = calcularDescuentoFijoCliente(precioNeto, tipoCliente, categoria);

  // Precio con descuentos
  const precioConDescuento = precioNeto - descuento - descuentoFijo;

  // Calcular impuestos sobre precio con descuento
  const impuestos = calcularImpuestos(precioConDescuento, estado, categoria);

  // Costo de envío por unidad × cantidad
  const costoEnvioPorUnidad = calcularCostoEnvio(pesoVolumetrico);
  const costoEnvioTotal = costoEnvioPorUnidad * parseFloat(cantidadItems);

  // Descuento en envío por tipo de cliente
  const descuentoEnvio = calcularDescuentoEnvio(costoEnvioTotal, tipoCliente);
  const costoEnvioFinal = costoEnvioTotal - descuentoEnvio;

  // Total final
  const total = precioConDescuento + impuestos + costoEnvioFinal;

  // Mostrar resultados
  resultadoPrecioNetoInput.value = `Precio neto: $${precioNeto.toFixed(2)}`;
  resultadoDescuentoInput.value = `Descuento: -$${(descuento + descuentoFijo).toFixed(2)}`;
  resultadoImpuestosInput.value = `Impuestos (${estado}): $${impuestos.toFixed(2)}`;
  resultadoCostoEnvioInput.value = `Costo de envío: $${costoEnvioFinal.toFixed(2)}`;
  resultadoTotalInput.value = `Total: $${total.toFixed(2)}`;

  resultadoDetalleInput.value =
    `--- DETALLE ---\n` +
    `Cantidad: ${cantidadItems} items\n` +
    `Precio por item: $${parseFloat(precioItem).toFixed(2)}\n` +
    `Precio neto: $${precioNeto.toFixed(2)}\n` +
    `Descuento por monto/categoría: -$${descuento.toFixed(2)}\n` +
    `Descuento fijo cliente (${tipoCliente}): -$${descuentoFijo.toFixed(2)}\n` +
    `Precio con descuentos: $${precioConDescuento.toFixed(2)}\n` +
    `Impuestos (${estado}): $${impuestos.toFixed(2)}\n` +
    `Envío (${cantidadItems} × $${costoEnvioPorUnidad}): $${costoEnvioTotal.toFixed(2)}\n` +
    `Descuento envío (${tipoCliente}): -$${descuentoEnvio.toFixed(2)}\n` +
    `Costo envío final: $${costoEnvioFinal.toFixed(2)}\n` +
    `TOTAL FINAL: $${total.toFixed(2)}`;
});