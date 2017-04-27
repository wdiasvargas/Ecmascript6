/**
 * Created by williamdias on 27/04/17.
 */
//ES5
'use strict'

function imprimeNomeCompleto (nome, sobrenome, nomeDoMeio) {
  let sobrenomeTratado = sobrenome || '';
  let nomeDoMeioTratado = nomeDoMeio || '';
  console.log(`${nome} ${nomeDoMeio} ${sobrenome}`);
}

imprimeNomeCompleto('Joao')


