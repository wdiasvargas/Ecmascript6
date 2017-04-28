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
const basico = new Carro('Basico','123123',2);
console.log(basico.modelo);
console.log(basico.chassi);
console.log(basico.qtdPortas);
basico.andar();