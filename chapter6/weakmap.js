/**
 * Created by William on 21/04/2017.
 */

//WEAKMAPS

//"use strict";

var weakMap = new WeakMap();
var elemento1 = window;
var elemento2 = document.querySelector('body');

weakMap.set(elemento1,'sou o elemento1');
weakMap.set(elemento2,'sou o elemento2');

console.log(weakMap.get(elemento1));
console.log(weakMap.get(elemento2));

elemento2.parentNode.removeChild(elemento2);
elemento2 = null;


var weakMap = new WeakMap();
function() {};
var objeto = {};

weakMap.set("string", "isso é uma string");
weakMap.set(funcao,	"isso	é	uma	função");
weakMap.set(objeto,	"isso	é	um	objeto");