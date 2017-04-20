/**
 * Created by williamdias on 19/04/17.
 */
"use strict";

//jeito antigo
var nomes = ['maria','jose','joao'];

for(var i = 0; i < nomes.length;i++){
    console.log(nomes[i]);
}
console.log("__________________");
//uma função	anônima	de	retorno,	que	costumamos	chamar	de	função	de callback

//es6
var nomes = ['maria','jose','joao'];

nomes.forEach(function (nome) {
    console.log(nome)
});
console.log("__________________");

var nomes = ['maria','jose','joao'];

function imprimeNome(nome) {
 console.log(nome)
}
nomes.forEach(imprimeNome);
