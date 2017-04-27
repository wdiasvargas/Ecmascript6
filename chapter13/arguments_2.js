/**
 * Created by williamdias on 27/04/17.
 */
//ES5
'use strict'
function somar () {
  let soma = 0;
  const qtd = arguments.length;
  for (let i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }

  return soma;
}
console.log(somar(1,2));
console.log(somar(1,2,3));
console.log(somar(1,2,3,4));
