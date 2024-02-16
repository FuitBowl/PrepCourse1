const nuevoBoolean = require("../ejercicios/03");

test('Debe ser un booleano', function (nuevoBoolean) {
  expect(typeof nuevoBoolean).toBe('boolean');
});