/**
 * Created by williamdias on 28/04/17.
 * www.williamdiasvargas.com.br
 *
 **/
'use strict'

const propriedades  = new WeakMap();

class VideoGame {
  constructor (nome, controles, saida, midia){
    propriedades.set(this,{
      nome, controles, saida, midia
    });
  }

  recuperarPropriedade(propriedade) {
    return propriedades.get(this)[propriedade];
  }
}

const caixa360 = new VideoGame('caixa360',4,'hdmi','dvd');
console.log(caixa360.recuperarPropriedade('nome'));