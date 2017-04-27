/**
 * Created by williamdias on 27/04/17.
 */
//ES6
'use strict'
function somaTudoEMultiplicaPor (multiplicador, ...valores) {
  return valores.reduce((soma, valor) => {
    return soma + (valor * multiplicador);
  }, 0);
}

console.log(somaTudoEMultiplicaPor(2,1,2));
console.log(somaTudoEMultiplicaPor(2,6,7));
