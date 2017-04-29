/**
 * Write by wdiasvargas on 29/04/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'
const objeto = {
  valor: 10,
  [Symbol("simbolo")]: "Oi, sou um simbolo",
};
console.log(objeto.valor);
console.log(objeto.simbolo);
