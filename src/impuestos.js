// Tabla de impuestos por estado
const impuestosPorEstado = {
  "UT": 6.65,
  "NV": 8.00,
  "TX": 6.25,
  "AL": 4.00,
  "CA": 8.25
};

// Impuesto adicional por categoría
const impuestosAdicionales = {
  "Alimentos": 0,
  "Bebidas alcohólicas": 7,
  "Material de escritorio": 0,
  "Muebles": 3,
  "Electrónicos": 4,
  "Vestimenta": 2,
  "Varios": 0
};

function calcularImpuestos(precioDespuesDescuento, estado = "CA", categoria = "Varios") {
  const precio = parseFloat(precioDespuesDescuento) || 0;
  const estadoUpper = (estado || "CA").toUpperCase();
  
  // Obtener tasa base por estado (por defecto CA si no existe)
  const tasaBase = impuestosPorEstado[estadoUpper] || impuestosPorEstado["CA"];
  
  // Obtener impuesto adicional por categoría
  const impuestoAdicional = impuestosAdicionales[categoria] || 0;
  
  // Tasa total de impuesto
  const tasaTotal = tasaBase + impuestoAdicional;
  
  // Calcular impuesto
  const impuesto = precio * (tasaTotal / 100);
  
  return parseFloat(impuesto.toFixed(2));
}

export default calcularImpuestos;
export { impuestosPorEstado, impuestosAdicionales };
