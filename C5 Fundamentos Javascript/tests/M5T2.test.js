const nuevoNumero = require("../ejercicios/02");

test('Debe ser un número', function (nuevoNumero) {
  expect(typeof nuevoNumero).toBe('number');
});