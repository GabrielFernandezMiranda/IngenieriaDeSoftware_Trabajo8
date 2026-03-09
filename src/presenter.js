import calcularPrecioNeto from "./netPrice.js";
import calcularImpuestos from "./impuestos.js";

const cantidadItemsInput = document.querySelector("#cantidad-items");
const precioItemInput = document.querySelector("#precio-item");
const estadoSelect = document.querySelector("#estado");
const precioNetoForm = document.querySelector("#precio-neto-form");
const resultadoPrecioNetoInput = document.querySelector("#resultado-precio-neto");
const resultadoImpuestosInput = document.querySelector("#resultado-impuestos");

precioNetoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadItems = cantidadItemsInput.value;
  const precioItem = precioItemInput.value;
  const estado = estadoSelect.value;
  const precioNeto = calcularPrecioNeto(cantidadItems, precioItem);
  const impuestos = calcularImpuestos(precioNeto, estado, "Varios");

  resultadoPrecioNetoInput.value = "Precio neto (" + cantidadItems + "*$" + precioItem + "): $" + precioNeto;
  resultadoImpuestosInput.value = "Impuestos (" + estado + "): $" + impuestos;
});
