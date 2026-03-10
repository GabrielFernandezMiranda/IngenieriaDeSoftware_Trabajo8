import calcularImpuestos from "./impuestos.js";

describe("Calcular Impuestos por Estado y Categoría", () => {
  // Pruebas con estado UT (6.65%)
  it("deberia aplicar 6.65% de impuesto para estado UT sin categoría adicional", () => {
    expect(calcularImpuestos(1000, "UT", "Varios")).toEqual(66.5);
  });

  // Pruebas con estado NV (8.00%)
  it("deberia aplicar 8% de impuesto para estado NV sin categoría adicional", () => {
    expect(calcularImpuestos(1000, "NV", "Varios")).toEqual(80);
  });

  // Pruebas con estado TX (6.25%)
  it("deberia aplicar 6.25% de impuesto para estado TX sin categoría adicional", () => {
    expect(calcularImpuestos(1000, "TX", "Varios")).toEqual(62.5);
  });

  // Pruebas con estado AL (4.00%)
  it("deberia aplicar 4% de impuesto para estado AL sin categoría adicional", () => {
    expect(calcularImpuestos(1000, "AL", "Varios")).toEqual(40);
  });

  // Pruebas con estado CA (8.25%)
  it("deberia aplicar 8.25% de impuesto para estado CA sin categoría adicional", () => {
    expect(calcularImpuestos(1000, "CA", "Varios")).toEqual(82.5);
  });

  // Pruebas con categorías que tienen impuesto adicional
  it("deberia aplicar impuesto base + 7% adicional para Bebidas alcohólicas", () => {
    // CA (8.25%) + Bebidas alcohólicas (7%) = 15.25%
    expect(calcularImpuestos(1000, "CA", "Bebidas alcohólicas")).toEqual(152.5);
  });

  it("deberia aplicar impuesto base + 3% adicional para Muebles", () => {
    // CA (8.25%) + Muebles (3%) = 11.25%
    expect(calcularImpuestos(1000, "CA", "Muebles")).toEqual(112.5);
  });

  it("deberia aplicar impuesto base + 4% adicional para Electrónicos", () => {
    // CA (8.25%) + Electrónicos (4%) = 12.25%
    expect(calcularImpuestos(1000, "CA", "Electrónicos")).toEqual(122.5);
  });

  it("deberia aplicar impuesto base + 2% adicional para Vestimenta", () => {
    // CA (8.25%) + Vestimenta (2%) = 10.25%
    expect(calcularImpuestos(1000, "CA", "Vestimenta")).toEqual(102.5);
  });

  // Pruebas con categorías sin impuesto adicional
  it("deberia aplicar solo impuesto base para Alimentos (0% adicional)", () => {
    // CA (8.25%) + Alimentos (0%) = 8.25%
    expect(calcularImpuestos(1000, "CA", "Alimentos")).toEqual(82.5);
  });

  it("deberia aplicar solo impuesto base para Material de escritorio (0% adicional)", () => {
    // CA (8.25%) + Material de escritorio (0%) = 8.25%
    expect(calcularImpuestos(1000, "CA", "Material de escritorio")).toEqual(82.5);
  });

  // Pruebas por defecto
  it("deberia usar CA como estado por defecto si no se especifica", () => {
    // CA (8.25%) + Varios (0%) = 8.25%
    expect(calcularImpuestos(1000)).toEqual(82.5);
  });

  it("deberia usar Varios como categoría por defecto si no se especifica", () => {
    // Al (4%) + Varios (0%) = 4%
    expect(calcularImpuestos(1000, "AL")).toEqual(40);
  });

  // Pruebas con valores decimales
  it("deberia calcular impuestos correctamente con precios decimales", () => {
    // CA (8.25%) de 1500.50 = 123.79125
    expect(calcularImpuestos(1500.50, "CA", "Varios")).toEqual(123.79);
  });

  it("deberia calcular impuestos correctamente con precios decimales y categoría", () => {
    // CA (8.25%) + Electrónicos (4%) = 12.25% de 2000.75
    expect(calcularImpuestos(2000.75, "CA", "Electrónicos")).toEqual(245.09);
  });

  // Pruebas con strings
  it("deberia convertir string a numero", () => {
    expect(calcularImpuestos("1000", "CA", "Varios")).toEqual(82.5);
  });

  it("deberia retornar 0 impuesto para precio 0", () => {
    expect(calcularImpuestos(0, "CA", "Varios")).toEqual(0);
  });

  it("deberia retornar 0 impuesto para string vacio", () => {
    expect(calcularImpuestos("", "CA", "Varios")).toEqual(0);
  });

  // Pruebas con estado inválido (defaultear a CA)
  it("deberia usar CA como valor por defecto si estado no existe", () => {
    // CA (8.25%) + Varios (0%) = 8.25%
    expect(calcularImpuestos(1000, "XX", "Varios")).toEqual(82.5);
  });

  it("deberia usar Varios como valor por defecto si categoría no existe", () => {
    // CA (8.25%) + Varios (0%) = 8.25%
    expect(calcularImpuestos(1000, "CA", "Inexistente")).toEqual(82.5);
  });
});
