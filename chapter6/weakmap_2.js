/**
 * Created by William on 21/04/2017.
 */

//WEAKMAPS

"use strict";

function Pessoa(nome) {
    this._nome = nome;
}

Pessoa.prototype.getNome = function () {
    return this._nome;
};

var roberto = new Pessoa('Roberto');
console.log(roberto.getNome());
console.log(roberto._nome);