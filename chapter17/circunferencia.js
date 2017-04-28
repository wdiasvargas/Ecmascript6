/**
 * Write by wdiasvargas on 28/04/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'
export const PI = 3.14;

function comprimento (raio) {
  return 2 * PI * raio;
}

function area (raio) {
  return PI * (raio * raio);
}
export default comprimento;//padrao
export {area, PI};//nomeado