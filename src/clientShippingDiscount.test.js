import calcularDescuentoEnvio from './clientShippingDiscount.js.js';

describe('Calcular Descuento en Costo de Envio por Tipo de Cliente', () => {
  it('deberia aplicar 0% de descuento para cliente Normal', () => {
    expect(calcularDescuentoEnvio(10, 'Normal')).toEqual(0);
  });

  it('deberia aplicar 0.5% de descuento para cliente Recurrente', () => {
    expect(calcularDescuentoEnvio(10, 'Recurrente')).toEqual(0.05);
  });

  it('deberia aplicar 1% de descuento para cliente Antiguo Recurrente', () => {
    expect(calcularDescuentoEnvio(10, 'Antiguo Recurrente')).toEqual(0.1);
  });

  it('deberia aplicar 1.5% de descuento para cliente Especial', () => {
    expect(calcularDescuentoEnvio(10, 'Especial')).toEqual(0.15);
  });

  it('deberia usar cliente Normal por defecto si no se especifica', () => {
    expect(calcularDescuentoEnvio(10)).toEqual(0);
  });

  it('deberia retornar 0 para costo de envio 0', () => {
    expect(calcularDescuentoEnvio(0, 'Especial')).toEqual(0);
  });

  it('deberia manejar string y convertirlo a numero', () => {
    expect(calcularDescuentoEnvio('8', 'Recurrente')).toEqual(0.04);
  });

  it('deberia retornar 0 para tipo de cliente desconocido', () => {
    expect(calcularDescuentoEnvio(10, 'Desconocido')).toEqual(0);
  });
});