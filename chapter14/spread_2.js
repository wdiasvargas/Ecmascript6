/**
 * Created by williamdias on 27/04/17.
 */
'use strict'
//ES6
function contaQuatidadeDeVogaisNaoAcentuadas (palavra) {
  let qtdVogais = 0;
  const palavraLowerCase = palavra.toLowerCase();
  const letras = [...palavra];
  for (let letra of letras) {
    if("aeiou".indexOf(letra) !== -1){
      qtdVogais++;
    }
  }

  return qtdVogais;
}

contaQuatidadeDeVogaisNaoAcentuadas('ecmascript');
contaQuatidadeDeVogaisNaoAcentuadas('javascript')
contaQuatidadeDeVogaisNaoAcentuadas('SWIFT')
contaQuatidadeDeVogaisNaoAcentuadas('jAvA');