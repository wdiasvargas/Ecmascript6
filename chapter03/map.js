/**
 * Created by williamdias on 19/04/17.
 */
"use strict";
var numeros = [1,2,3];
var dobro = [];

for(var i = 0; i < numeros.length;i++){
    dobro.push(numeros[i] * 2);
}
console.log(numeros);
console.log(dobro);

//es6

var numeros = [1,2,3];
var dobro = numeros.map(function (numero) {
    return numero * 2;
});

console.log(numeros);
console.log(dobro);