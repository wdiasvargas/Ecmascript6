/**
 * Created by williamdias on 27/04/17.
 */
'use strict'
//ES5

function soma (a, b) {
  console.log(a + b);
}
soma(1, 2);

//ES6

function soma (a, b) {
  console.log(a + b);
}
const numeros = [1,2];
soma(...numeros);