function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   const palabrasConA = arrayOfStrings.filter(value => value.startsWith('a'))
   return palabrasConA;
}

module.exports = filter;
