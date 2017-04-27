/**
 * Created by williamdias on 27/04/17.
 */
//ES6
'use strict'
function somar (...valores) {
  return valores.reduce((soma, valor) => {
    return soma + valor;
  }, 0);
}

console.log(somar(1,2));
console.log(somar(1,2,3));
console.log(somar(1,2,3,4));

