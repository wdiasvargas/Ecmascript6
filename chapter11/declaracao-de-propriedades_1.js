/**
 * Created by williamdias on 26/04/17.
 */
'use strict'

//ES5
// var nome = 'Maria';
// var sobrenome = 'Madalena';
//
// var pessoa = {
//   nome : nome,
//   sobrenome : sobrenome
// }

//ES6

const nome = 'Maria'
const sobrenome = 'Madalena'
//const pessoa = {nome, sobrenome};

const seApresentar = function () {
  console.log(`Olá! Sou a ${this.nome} ${this.sobrenome} ${this.sobrenome2[0]}`);
}

const pessoa = {
  nome,
  sobrenome,
  seApresentar(){
    console.log(`Olá! Sou a ${this.nome} ${this.sobrenome}`);
  }};
pessoa.seApresentar();