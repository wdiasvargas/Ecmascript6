/**
 * Created by williamdias on 27/04/17.
 */
//ES6
'use strict'
function parametroObrigatorio (parametro) {
  throw new Error(`O parâmetro "${parametro}" é obrigatorio!`);
}

function inserirNaTela (objeto = parametroObrigatorio('objeto')) {
  //logica de implementacao
}

inserirNaTela()