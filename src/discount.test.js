import calcularDescuento from './discount.js';

describe('Calcular Descuento por Precio Total', () => {
  // Tests originales (sin categoría = Varios, sin descuento adicional)
  it('deberia aplicar 3% de descuento para precio total >= 1000', () => {
    expect(calcularDescuento(1000)).toEqual(30);
  });

  it('deberia aplicar 5% de descuento para precio total >= 3000', () => {
    expect(calcularDescuento(3000)).toEqual(150);
  });

  it('deberia aplicar 7% de descuento para precio total >= 7000', () => {
    expect(calcularDescuento(7000)).toEqual(490);
  });

  it('deberia aplicar 10% de descuento para precio total >= 10000', () => {
    expect(calcularDescuento(10000)).toEqual(1000);
  });

  it('deberia aplicar 15% de descuento para precio total >= 30000', () => {
    expect(calcularDescuento(30000)).toEqual(4500);
  });

  it('deberia retornar 0 descuento para precio total menor a 1000', () => {
    expect(calcularDescuento(500)).toEqual(0);
  });

  it('deberia retornar 0 descuento para precio total igual a 0', () => {
    expect(calcularDescuento(0)).toEqual(0);
  });

  it('deberia calcular descuento correctamente con decimales', () => {
    expect(calcularDescuento(3500)).toEqual(175);
  });

  it('deberia manejar valores string y convertirlos a numero', () => {
    expect(calcularDescuento('5000')).toEqual(250);
  });

  it('deberia retornar 0 descuento para string vacio', () => {
    expect(calcularDescuento('')).toEqual(0);
  });

  // Tests con categoría
  it('deberia aplicar descuento base + 2% adicional para categoria Alimentos', () => {
    // 3% base + 2% Alimentos = 5% de 1000 = 50
    expect(calcularDescuento(1000, 'Alimentos')).toEqual(50);
  });

  it('deberia aplicar descuento base + 1.5% adicional para Material de escritorio', () => {
    // 3% base + 1.5% = 4.5% de 1000 = 45
    expect(calcularDescuento(1000, 'Material de escritorio')).toEqual(45);
  });

  it('deberia aplicar descuento base + 1% adicional para Electronicos', () => {
    // 3% base + 1% = 4% de 1000 = 40
    expect(calcularDescuento(1000, 'Electronicos')).toEqual(40);
  });

  it('deberia aplicar solo descuento base para Bebidas alcoholicas (0% adicional)', () => {
    expect(calcularDescuento(1000, 'Bebidas alcoholicas')).toEqual(30);
  });

  it('deberia aplicar solo descuento base para Varios (0% adicional)', () => {
    expect(calcularDescuento(1000, 'Varios')).toEqual(30);
  });
  
});