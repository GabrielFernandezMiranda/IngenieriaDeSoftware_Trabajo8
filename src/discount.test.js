import calcularDescuento from "./discount.js";

describe("Calcular Descuento por Precio Total", () => {
  it("deberia aplicar 3% de descuento para precio total >= 1000", () => {
    expect(calcularDescuento(1000)).toEqual(30);
  });

  it("deberia aplicar 5% de descuento para precio total >= 3000", () => {
    expect(calcularDescuento(3000)).toEqual(150);
  });

  it("deberia aplicar 7% de descuento para precio total >= 7000", () => {
    expect(calcularDescuento(7000)).toEqual(490);
  });

  it("deberia aplicar 10% de descuento para precio total >= 10000", () => {
    expect(calcularDescuento(10000)).toEqual(1000);
  });

  it("deberia aplicar 15% de descuento para precio total >= 30000", () => {
    expect(calcularDescuento(30000)).toEqual(4500);
  });

  it("deberia retornar 0 descuento para precio total menor a 1000", () => {
    expect(calcularDescuento(500)).toEqual(0);
  });

  it("deberia retornar 0 descuento para precio total igual a 0", () => {
    expect(calcularDescuento(0)).toEqual(0);
  });

  it("deberia calcular descuento correctamente con decimales", () => {
    expect(calcularDescuento(3500)).toEqual(175);
  });

  it("deberia manejar valores string y convertirlos a numero", () => {
    expect(calcularDescuento("5000")).toEqual(250);
  });

  it("deberia retornar 0 descuento para string vacio", () => {
    expect(calcularDescuento("")).toEqual(0);
  });
});
