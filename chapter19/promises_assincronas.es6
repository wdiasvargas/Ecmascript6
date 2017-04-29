/**
 * Write by wdiasvargas on 29/04/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'
//Capitulo 19

let promise = new Promise((resolve, reject) => {
  let resultado = false;
  let tempo = 2000; // ms
  setTimeout(() => {
    if(resultado) {
        resolve("deu tudo certo!");
    } else {
        reject("deu tudo errado!");
    }
  }, tempo)
});

promise.then((data) => console.log(`resultado positivo: ${data}`))
promise.catch((data) => console.log(`resultado negativo: ${data}`))
console.log('fui executado antes!');
