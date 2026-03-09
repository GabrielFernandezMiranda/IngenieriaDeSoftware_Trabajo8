import calcularPrecioNeto from "./netPrice.js";
import calcularDescuento from "./discount.js";
import calcularImpuestos from "./impuestos.js";

const cantidadItemsInput = document.querySelector("#cantidad-items");
const precioItemInput = document.querySelector("#precio-item");
const estadoSelect = document.querySelector("#estado");
const precioNetoForm = document.querySelector("#precio-neto-form");
const resultadoPrecioNetoInput = document.querySelector("#resultado-precio-neto");
const resultadoDescuentoInput = document.querySelector("#resultado-descuento");
const resultadoImpuestosInput = document.querySelector("#resultado-impuestos");
const resultadoTotalInput = document.querySelector("#resultado-total");

precioNetoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadItems = cantidadItemsInput.value;
  const precioItem = precioItemInput.value;
  const estado = estadoSelect.value;
  
  // Calcular precio neto
  const precioNeto = calcularPrecioNeto(cantidadItems, precioItem);
  
  // Calcular descuento
  const descuento = calcularDescuento(precioNeto);
  
  // Calcular precio con descuento
  const precioConDescuento = precioNeto - descuento;
  
  // Calcular impuestos sobre precio con descuento
  const impuestos = calcularImpuestos(precioConDescuento, estado, "Varios");
  
  // Calcular total
  const total = precioConDescuento + impuestos;

  resultadoPrecioNetoInput.value = "Precio neto: $" + precioNeto;
  resultadoDescuentoInput.value = "Descuento: -$" + descuento;
  resultadoImpuestosInput.value = "Impuestos (" + estado + "): $" + impuestos;
  resultadoTotalInput.value = "Total: $" + parseFloat(total.toFixed(2));
});
