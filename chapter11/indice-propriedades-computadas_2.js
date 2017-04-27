/**
 * Created by williamdias on 26/04/17.
 */
'use strict'

const nomeFuncao = 'mostrar';
const propriedade = 'Nome';
const objeto = {
  Nome : 'Objeto',
  [`${nomeFuncao}${propriedade}`](){
    console.log(this[propriedade]);
  }
}
objeto.mostrarNome()