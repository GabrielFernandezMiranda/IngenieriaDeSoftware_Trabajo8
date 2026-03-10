function validarEntradas(cantidad, precio, _estado, _categoria, _tipoCliente, pesoVolumetrico) {
  // Validar cantidad de items
  if (!cantidad || cantidad.trim() === '') {
    return 'La cantidad de items es requerida';
  }
  if (isNaN(cantidad)) {
    return 'La cantidad de items debe ser un numero valido';
  }
  if (parseFloat(cantidad) <= 0) {
    return 'La cantidad de items debe ser mayor a 0';
  }

  // Validar precio por item
  if (!precio || precio.trim() === '') {
    return 'El precio por item es requerido';
  }
  if (isNaN(precio)) {
    return 'El precio por item debe ser un numero valido';
  }
  if (parseFloat(precio) <= 0) {
    return 'El precio por item debe ser mayor a 0';
  }

  // Validar peso volumetrico
  if (!pesoVolumetrico || pesoVolumetrico.toString().trim() === '') {
    return 'El peso volumetrico es requerido';
  }
  if (isNaN(pesoVolumetrico)) {
    return 'El peso volumetrico debe ser un numero valido';
  }
  if (parseFloat(pesoVolumetrico) < 0) {
    return 'El peso volumetrico no puede ser negativo';
  }

  return null;
}

export default validarEntradas;