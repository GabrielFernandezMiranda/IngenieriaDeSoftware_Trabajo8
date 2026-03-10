import calcularDescuentoCategoria from './categoryDiscount.js';

describe('Calcular Descuento Adicional por Categoría', () => {
  it('deberia aplicar 2% de descuento adicional para categoria Alimentos', () => {
    expect(calcularDescuentoCategoria(1000, 'Alimentos')).toEqual(20);
  });

  it('deberia aplicar 1.5% de descuento adicional para categoria Material de escritorio', () => {
    expect(calcularDescuentoCategoria(1000, 'Material de escritorio')).toEqual(15);
  });

  it('deberia aplicar 1% de descuento adicional para categoria Electronicos', () => {
    expect(calcularDescuentoCategoria(1000, 'Electronicos')).toEqual(10);
  });

  it('deberia aplicar 0% de descuento adicional para categoria Bebidas alcoholicas', () => {
    expect(calcularDescuentoCategoria(1000, 'Bebidas alcoholicas')).toEqual(0);
  });

  it('deberia aplicar 0% de descuento adicional para categoria Muebles', () => {
    expect(calcularDescuentoCategoria(1000, 'Muebles')).toEqual(0);
  });

  it('deberia aplicar 0% de descuento adicional para categoria Vestimenta', () => {
    expect(calcularDescuentoCategoria(1000, 'Vestimenta')).toEqual(0);
  });

  it('deberia aplicar 0% de descuento adicional para categoria Varios (default)', () => {
    expect(calcularDescuentoCategoria(1000, 'Varios')).toEqual(0);
  });

  it('deberia retornar 0 si no se especifica categoria', () => {
    expect(calcularDescuentoCategoria(1000)).toEqual(0);
  });

  it('deberia manejar valores string y convertirlos a numero', () => {
    expect(calcularDescuentoCategoria('2000', 'Alimentos')).toEqual(40);
  });

  it('deberia retornar 0 para precio 0', () => {
    expect(calcularDescuentoCategoria(0, 'Alimentos')).toEqual(0);
  });
});