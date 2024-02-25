const nuevoString = require('../ejercicios/01');

//test ('Debe ser un string', 
function string(nuevoString) {
  if (typeof nuevoString === 'String') {
      return 'Tu string es ' + nuevoString.toUpperCase();
  } else {
    return 'Tu valor no es una string'
  }
};