import registrarCantidadItems from "./sales.js";

describe("Registrar Cantidad de Items", () => {
  it("deberia registrar la cantidad de items ingresados", () => {
    expect(registrarCantidadItems("5")).toEqual(5);
  });

  it("deberia retornar 0 si la cantidad es vacia", () => {
    expect(registrarCantidadItems("")).toEqual(0);
  });

  it("deberia convertir string a numero", () => {
    expect(registrarCantidadItems("10")).toEqual(10);
  });
});
