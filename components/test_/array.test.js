const { filtrarPares } = require('../array');

test('filtrarPares de [1, 2, 3, 4, 5, 6] deve retornar [2, 4, 6]', () => {
  expect(filtrarPares([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
});