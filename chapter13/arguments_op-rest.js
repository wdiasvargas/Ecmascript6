/**
 * Created by williamdias on 27/04/17.
 */
//ES6
'use strict'
function somar (...valores) {
  let soma = 0;
  const qtd = valores.length;
  for (let i = 0; i < qtd; i++) {
    soma += valores[i]
  }

  return soma;
}
console.log(somar(1,2));
console.log(somar(1,2,3));
console.log(somar(1,2,3,4));

