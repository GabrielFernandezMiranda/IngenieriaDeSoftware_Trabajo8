import validarEntradas from './validations.js';

describe('Validar Entradas del Usuario', () => {
  it('deberia retornar null si todos los datos son validos', () => {
    expect(validarEntradas('5', '100', 'CA', 'Varios', 'Normal', '10')).toBeNull();
  });

  it('deberia retornar error si cantidad de items esta vacia', () => {
    expect(validarEntradas('', '100', 'CA', 'Varios', 'Normal', '10')).toBe('La cantidad de items es requerida');
  });

  it('deberia retornar error si cantidad de items es 0', () => {
    expect(validarEntradas('0', '100', 'CA', 'Varios', 'Normal', '10')).toBe('La cantidad de items debe ser mayor a 0');
  });

  it('deberia retornar error si cantidad de items es negativa', () => {
    expect(validarEntradas('-1', '100', 'CA', 'Varios', 'Normal', '10')).toBe('La cantidad de items debe ser mayor a 0');
  });

  it('deberia retornar error si cantidad de items no es un numero', () => {
    expect(validarEntradas('abc', '100', 'CA', 'Varios', 'Normal', '10')).toBe('La cantidad de items debe ser un numero valido');
  });

  it('deberia retornar error si precio por item esta vacio', () => {
    expect(validarEntradas('5', '', 'CA', 'Varios', 'Normal', '10')).toBe('El precio por item es requerido');
  });

  it('deberia retornar error si precio por item es 0', () => {
    expect(validarEntradas('5', '0', 'CA', 'Varios', 'Normal', '10')).toBe('El precio por item debe ser mayor a 0');
  });

  it('deberia retornar error si precio por item es negativo', () => {
    expect(validarEntradas('5', '-10', 'CA', 'Varios', 'Normal', '10')).toBe('El precio por item debe ser mayor a 0');
  });

  it('deberia retornar error si precio por item no es un numero', () => {
    expect(validarEntradas('5', 'xyz', 'CA', 'Varios', 'Normal', '10')).toBe('El precio por item debe ser un numero valido');
  });

  it('deberia retornar error si peso volumetrico esta vacio', () => {
    expect(validarEntradas('5', '100', 'CA', 'Varios', 'Normal', '')).toBe('El peso volumetrico es requerido');
  });

  it('deberia retornar error si peso volumetrico es negativo', () => {
    expect(validarEntradas('5', '100', 'CA', 'Varios', 'Normal', '-1')).toBe('El peso volumetrico no puede ser negativo');
  });

  it('deberia retornar error si peso volumetrico no es un numero', () => {
    expect(validarEntradas('5', '100', 'CA', 'Varios', 'Normal', 'abc')).toBe('El peso volumetrico debe ser un numero valido');
  });
});