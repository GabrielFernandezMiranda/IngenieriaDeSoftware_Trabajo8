// Totalizador de Ventas - Cantidad de Items
const cantidadItemsInput = document.querySelector("#cantidad-items");
const ventasForm = document.querySelector("#ventas-form");
const resultadoItemsInput = document.querySelector("#resultado-items");

ventasForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadItems = cantidadItemsInput.value;

  resultadoItemsInput.value = cantidadItems;
});

// Totalizador de Ventas - Precio por Item
const precioItemInput = document.querySelector("#precio-item");
const precioForm = document.querySelector("#precio-form");
const resultadoPrecioInput = document.querySelector("#resultado-precio");

precioForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const precioItem = precioItemInput.value;

  resultadoPrecioInput.value = precioItem;
});
