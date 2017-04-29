/**
 * Write by wdiasvargas on 29/04/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'
//Capitulo 19
function funcaoAssincrona (arg1, callback) {
  //faz request e afins
  //e no final da execucao executamos o callback
  callback();
}

function callback () {
  //operacao que quero fazer depois que tiver a resposta da request
}