import calcularPrecioNeto from "./netPrice.js";

const cantidadItemsInput = document.querySelector("#cantidad-items");
const ventasForm = document.querySelector("#ventas-form");
const resultadoItemsInput = document.querySelector("#resultado-items");

ventasForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadItems = cantidadItemsInput.value;

  resultadoItemsInput.value = cantidadItems;
});


const precioItemInput = document.querySelector("#precio-item");
const precioForm = document.querySelector("#precio-form");
const resultadoPrecioInput = document.querySelector("#resultado-precio");

precioForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const precioItem = precioItemInput.value;

  resultadoPrecioInput.value = precioItem;
});

// Precio Neto
const precioNetoForm = document.querySelector("#precio-neto-form");
const resultadoPrecioNetoInput = document.querySelector("#resultado-precio-neto");

precioNetoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadItems = document.querySelector("#resultado-items").value;
  const precioItem = document.querySelector("#resultado-precio").value;
  const precioNeto = calcularPrecioNeto(cantidadItems, precioItem);

  resultadoPrecioNetoInput.value = "Precio neto (" + cantidadItems + "*$" + precioItem + "): $" + precioNeto;
});
