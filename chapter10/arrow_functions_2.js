/**
 * Created by williamdias on 26/04/17.
 */

//template string simples
//ES6
//arrow functions
"use strict";

var boasVindas = function  (nome){
    return "Seja bem-vindo, "+nome;
};

boasVindas("Luiz");

//ES6
var boasVindas = (nome) => {
    return "Seja bem-vindo, "+ nome;
}
var boasVindas = nome => { return "Seja bem-vindo, "+nome;  }

boasVindas("William");


var boasVindas = nome => "Seja bem-vindo, "+nome;

boasVindas("William")
const  boasVindas = nome => `Seja bem-vindo, ${nome}`;
boasVindas("William");

