const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  var i = 0;
  for (propiedades in objeto) {
    i++
  }
  return i;
};

module.exports = contarPropiedades;
