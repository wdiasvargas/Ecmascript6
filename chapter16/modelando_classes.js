/**
 * Created by williamdias on 27/04/17.
 */
//ES5
'use strict'
function Carro (modelo, chassi, qtdPortas) {
  this.modelo = modelo;
  this.chassi = chassi;
  this.qtdPortas = qtdPortas;
}
Carro.prototype.andar = function () {
  console.log("vrum vrum");
}


const prototipo = new Carro('prototipo', '1290381209', 2);
console.log(prototipo.modelo);
console.log(prototipo.chassi);
console.log(prototipo.qtdPortas);
prototipo.andar()

// const sonix = new Carro('Sonix','9120219',4);
// console.log(sonix.modelo);
// sonix.andar();


function Sonix (modelo, chassi, qtdPortas) {
  Carro.call(this, modelo, chassi, qtdPortas);
}

Sonix.prototype = Object.create(Carro.prototype);
Sonix.prototype.constructor = Sonix;

// const sonix = new Sonix('Sonix','9120219', 4);
// console.log(sonix.modelo)
// sonix.andar()

Sonix.prototype.abrirTetoSolar = function () {
  console.log('abrindo teto solar');
}


const sonix = new Sonix('Sonix','9120219', 4);
sonix.abrirTetoSolar();