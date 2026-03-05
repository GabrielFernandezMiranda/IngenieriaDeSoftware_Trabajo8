import calcularPrecioNeto from "./netPrice.js";

describe("Calcular Precio Neto", () => {
  it("deberia calcular el precio neto multiplicando cantidad por precio", () => {
    expect(calcularPrecioNeto("20", "3")).toEqual(60);
  });

  it("deberia retornar 0 si cantidad o precio son vacios", () => {
    expect(calcularPrecioNeto("", "")).toEqual(0);
  });

  it("deberia calcular correctamente con decimales", () => {
    expect(calcularPrecioNeto("10", "5.5")).toEqual(55);
  });
});
