/**
 * Created by williamdias on 27/04/17.
 */


'use strict'
//ES6
function recuperarDadosDaAPI () {
  //Realiza GET para o http://temperatura.com/api/temperatura/sp
  //Retorna JSON que veio na response
  return response.json;
}
const {temperatura} = recuperarDadosDaAPI();
console.log(temperatura);

const {temperatura, maxima, minima} = recuperarDadosDaAPI();
console.log(temperatura);
console.log(maxima);
console.log(minima);
