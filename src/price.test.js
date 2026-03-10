import registrarPrecioPorItem from "./price.js";

describe("Registrar Precio por Item", () => {
  it("deberia registrar el precio por item ingresado", () => {
    expect(registrarPrecioPorItem("50.5")).toEqual(50.5);
  });

  it("deberia retornar 0 si el precio es vacio", () => {
    expect(registrarPrecioPorItem("")).toEqual(0);
  });

  it("deberia convertir string a numero", () => {
    expect(registrarPrecioPorItem("100")).toEqual(100);
  });
});
