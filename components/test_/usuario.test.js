const usuario = require('../usuario');

test('usuario tem nome, idade e email', () => {
  expect(usuario).toHaveProperty('nome');
  expect(usuario).toHaveProperty('idade');
  expect(usuario).toHaveProperty('email');
});