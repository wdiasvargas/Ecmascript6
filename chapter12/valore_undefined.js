/**
 * Created by williamdias on 27/04/17.
 */
//ES6
'use strict'

function multiplicaPor (valor, multiplicador = 2) {
  return valor * multiplicador;
}

const valor = multiplicaPor(2,undefined);
console.log(valor);

function print (valor = '') {
  console.log(valor)
}
print()
print(null)