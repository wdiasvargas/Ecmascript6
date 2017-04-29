/**
 * Write by wdiasvargas on 29/04/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'
let promise = new Promise((resolve, reject) => {
  throw new Error('erro!');
  resolve('Ok!');
});

promise
  .then((data) => console.log(`sucesso: ${data}`))
  .catch((data) => console.log(`falha: ${data}`));