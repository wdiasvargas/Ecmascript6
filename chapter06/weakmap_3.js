/**
 * Created by William on 21/04/2017.
 */

//WEAKMAPS

"use strict";
var Pessoa = (function () {
    var dadosPrivados = new WeakMap();
    
    function Pessoa(nome) {
        dadosPrivados.set(this,{nome : nome});
    }
    Pessoa.prototype.getNome = function () {
        return dadosPrivados.get(this).nome;
    };
    return Pessoa;
}());

var william = new Pessoa('William');

console.log(william.getNome())
console.log(william.nome);