/**
 * Created by williamdias on 27/04/17.
 */
'use strict'
//ES6
function contaQuatidadeDeVogaisNaoAcentuadas (...palavras) {
  let qtdVogais = 0;
  for (let palavra of palavras) {
    let palavraLowerCase = palavra.toLowerCase();
    const letras = [...palavraLowerCase];
    for (let letra of letras) {
      if("aeiou".indexOf(letra) !== -1){
        qtdVogais++;
      }
    }
  }


  return qtdVogais;
}

contaQuatidadeDeVogaisNaoAcentuadas('ecmascript');
contaQuatidadeDeVogaisNaoAcentuadas('javascript')
contaQuatidadeDeVogaisNaoAcentuadas('SWIFT')
contaQuatidadeDeVogaisNaoAcentuadas('jAvA');