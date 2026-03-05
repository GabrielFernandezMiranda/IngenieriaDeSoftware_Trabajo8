import calcularPrecioNeto from "./netPrice.js";

const cantidadItemsInput = document.querySelector("#cantidad-items");
const precioItemInput = document.querySelector("#precio-item");
const precioNetoForm = document.querySelector("#precio-neto-form");
const resultadoPrecioNetoInput = document.querySelector("#resultado-precio-neto");

precioNetoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadItems = cantidadItemsInput.value;
  const precioItem = precioItemInput.value;
  const precioNeto = calcularPrecioNeto(cantidadItems, precioItem);

  resultadoPrecioNetoInput.value = "Precio neto (" + cantidadItems + "*$" + precioItem + "): $" + precioNeto;
});
