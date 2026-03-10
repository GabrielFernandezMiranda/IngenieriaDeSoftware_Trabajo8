import calcularCostoEnvio from './shipping.js';

describe('Calcular Costo de Envio por Peso Volumetrico', () => {
  it('deberia retornar $0 para peso entre 0 y 10', () => {
    expect(calcularCostoEnvio(0)).toEqual(0);
  });

  it('deberia retornar $0 para peso igual a 10', () => {
    expect(calcularCostoEnvio(10)).toEqual(0);
  });

  it('deberia retornar $3.5 para peso entre 11 y 20', () => {
    expect(calcularCostoEnvio(11)).toEqual(3.5);
  });

  it('deberia retornar $3.5 para peso igual a 20', () => {
    expect(calcularCostoEnvio(20)).toEqual(3.5);
  });

  it('deberia retornar $5 para peso entre 21 y 40', () => {
    expect(calcularCostoEnvio(21)).toEqual(5);
  });

  it('deberia retornar $5 para peso igual a 40', () => {
    expect(calcularCostoEnvio(40)).toEqual(5);
  });

  it('deberia retornar $6 para peso entre 41 y 80', () => {
    expect(calcularCostoEnvio(41)).toEqual(6);
  });

  it('deberia retornar $6 para peso igual a 80', () => {
    expect(calcularCostoEnvio(80)).toEqual(6);
  });

  it('deberia retornar $6.5 para peso entre 81 y 100', () => {
    expect(calcularCostoEnvio(81)).toEqual(6.5);
  });

  it('deberia retornar $6.5 para peso igual a 100', () => {
    expect(calcularCostoEnvio(100)).toEqual(6.5);
  });

  it('deberia retornar $8 para peso entre 101 y 200', () => {
    expect(calcularCostoEnvio(101)).toEqual(8);
  });

  it('deberia retornar $8 para peso igual a 200', () => {
    expect(calcularCostoEnvio(200)).toEqual(8);
  });

  it('deberia retornar $9 para peso mayor a 200', () => {
    expect(calcularCostoEnvio(201)).toEqual(9);
  });

  it('deberia manejar string y convertirlo a numero', () => {
    expect(calcularCostoEnvio('15')).toEqual(3.5);
  });

  it('deberia retornar 0 para peso negativo', () => {
    expect(calcularCostoEnvio(-5)).toEqual(0);
  });
});