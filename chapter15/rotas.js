/**
 * Created by williamdias on 27/04/17.
 */
'use strict'
//ES6
//
// const rotas = {
//   rapidas:['Rodovia','Estrada X', 'Estrada Y']
// };
// const { rapidas:[rapida] } = rotas;
// console.log(rapida)
//
const frutas = {
  vermelhas:['maçã','morango','amora'],
  amarelas:['ameixa','banana','abacaxi'],
  roxas:['jabuticaba','uva','framboesa']
}
const { vermelhas:[apple],amarelas:[yellow],roxas:[purple] } = frutas;
console.log(apple,yellow,purple)