// Totalizador de Ventas
const cantidadItemsInput = document.querySelector("#cantidad-items");
const ventasForm = document.querySelector("#ventas-form");
const resultadoItemsInput = document.querySelector("#resultado-items");

ventasForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadItems = cantidadItemsInput.value;

  resultadoItemsInput.value = cantidadItems;
});
