/**
 * Write by wdiasvargas on 29/04/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'
//Capitulo 19

let promise = new Promise((resolve, reject) => {
  let resultado = false;
  if(resultado) {
    resolve("deu tudo certo!");
  } else {
    reject("deu tudo errado!");
  }
});

promise.then((data) => console.log(`resultado positivo: ${data}`));
promise.catch((data) => console.log(`resultado negativo: ${data}`));
