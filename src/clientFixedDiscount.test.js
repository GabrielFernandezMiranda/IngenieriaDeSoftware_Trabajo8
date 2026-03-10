import calcularDescuentoFijoCliente from './clientFixedDiscount.js';

describe('Calcular Descuento Fijo por Tipo de Cliente', () => {
  // Cliente Recurrente: >3000 + Alimentos = $100
  it('deberia aplicar $100 de descuento para cliente Recurrente con precio > 3000 y categoria Alimentos', () => {
    expect(calcularDescuentoFijoCliente(3001, 'Recurrente', 'Alimentos')).toEqual(100);
  });

  it('deberia NO aplicar descuento para cliente Recurrente con precio <= 3000 y categoria Alimentos', () => {
    expect(calcularDescuentoFijoCliente(3000, 'Recurrente', 'Alimentos')).toEqual(0);
  });

  it('deberia NO aplicar descuento para cliente Recurrente con precio > 3000 y categoria Electronicos', () => {
    expect(calcularDescuentoFijoCliente(5000, 'Recurrente', 'Electronicos')).toEqual(0);
  });

  // Cliente Especial: >7000 + Electronicos = $200
  it('deberia aplicar $200 de descuento para cliente Especial con precio > 7000 y categoria Electronicos', () => {
    expect(calcularDescuentoFijoCliente(7001, 'Especial', 'Electronicos')).toEqual(200);
  });

  it('deberia NO aplicar descuento para cliente Especial con precio <= 7000 y categoria Electronicos', () => {
    expect(calcularDescuentoFijoCliente(7000, 'Especial', 'Electronicos')).toEqual(0);
  });

  it('deberia NO aplicar descuento para cliente Especial con precio > 7000 y categoria Alimentos', () => {
    expect(calcularDescuentoFijoCliente(8000, 'Especial', 'Alimentos')).toEqual(0);
  });

  // Cliente Normal y Antiguo Recurrente no tienen descuento fijo
  it('deberia retornar 0 para cliente Normal', () => {
    expect(calcularDescuentoFijoCliente(5000, 'Normal', 'Alimentos')).toEqual(0);
  });

  it('deberia retornar 0 para cliente Antiguo Recurrente', () => {
    expect(calcularDescuentoFijoCliente(5000, 'Antiguo Recurrente', 'Alimentos')).toEqual(0);
  });

  it('deberia retornar 0 si no se especifica tipo de cliente', () => {
    expect(calcularDescuentoFijoCliente(5000)).toEqual(0);
  });

  it('deberia manejar string y convertirlo a numero', () => {
    expect(calcularDescuentoFijoCliente('4000', 'Recurrente', 'Alimentos')).toEqual(100);
  });
});