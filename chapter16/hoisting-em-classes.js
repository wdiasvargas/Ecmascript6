/**
 * Created by williamdias on 27/04/17.
 */
//ES5
//HOISTING
// const carro
// carro = new Carro('sonix')
// console.log(carro.modelo);
//
// function Carro (modelo) {
//   this.modelo = modelo;
// }

const carro = new Carro('sonix');

class Carro {
  constructor (modelo){
    this.modelo = modelo;
  }
}