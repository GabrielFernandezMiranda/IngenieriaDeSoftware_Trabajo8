function calcularDescuento(precioTotal) {
  const precio = parseFloat(precioTotal) || 0;
  let descuento = 0;

  if (precio >= 30000) {
    descuento = precio * 0.15;
  } else if (precio >= 10000) {
    descuento = precio * 0.1;
  } else if (precio >= 7000) {
    descuento = precio * 0.07;
  } else if (precio >= 3000) {
    descuento = precio * 0.05;
  } else if (precio >= 1000) {
    descuento = precio * 0.03;
  }

  return parseFloat(descuento.toFixed(2));
}

export default calcularDescuento;
