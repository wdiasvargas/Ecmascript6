/**
 * Write by wdiasvargas on 29/04/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'
const primos = [2,3,5];
const iterador = primos[Symbol.iterator]();

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());

console.log(iterador.next());
