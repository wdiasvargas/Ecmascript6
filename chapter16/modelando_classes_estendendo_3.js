/**
 * Created by williamdias on 27/04/17.
 */
//ES6
'use strict'
class Carro {
  //implementacao do carro
  constructor (modelo, chassi, qtdPortas){
    this.modelo = modelo;
    this.chassi = chassi;
    this.qtdPortas = qtdPortas;
  }
  andar(){
    console.log("vrum vrum");
  }

}

class Sonix extends Carro{
  constructor (modelo,chassi,qtdPortas){
    super(modelo, chassi, qtdPortas);
  }
  abrirTetoSolar(){
    console.log('abrindo teto solar');
  }
}
const sonix = new Sonix();
sonix.abrirTetoSolar();
sonix.andar();




const basico = new Carro('Basico','123123',2);
console.log(basico.modelo);
console.log(basico.chassi);
console.log(basico.qtdPortas);
basico.andar();