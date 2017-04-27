/**
 * Created by williamdias on 26/04/17.
 */
'use strict'

const nomeMetodo = 'invocar';
const objeto = {
  [nomeMetodo](){
    console.log('executou método');
  }
}
objeto[nomeMetodo]();
