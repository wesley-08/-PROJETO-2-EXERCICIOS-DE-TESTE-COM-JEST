const { subtrai, ehPar, contarCaracteres } = require('../calculadora');

test('subtrai 5 - 3 para ser 2', () => {
  expect(subtrai(5, 3)).toBe(2);
});

test('4 é par', () => {
  expect(ehPar(4)).toBe(true);
});

test('7 não é par', () => {
  expect(ehPar(7)).toBe(false);
});

test('contarCaracteres de "hello" é 5', () => {
  expect(contarCaracteres("hello")).toBe(5);
});