/**
 * Created by williamdias on 19/04/17.
 */
var numeros = [1,2,3,4,5];

var soma = 0;

for(var i = 0; i < numeros.length; i++){
    soma+= numeros[i];
}
console.log(soma);
//es6
var numeros = [1,2,3,4,5];
var soma = 0;
soma = numeros.reduce(function (soma, numero) {
    return soma + numero;
}, 0)

console.log(soma);
