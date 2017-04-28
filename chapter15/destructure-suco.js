/**
 * Created by williamdias on 27/04/17.
 */


'use strict'
//ES6
const suco = {
  sabor:  'uva',
  quantidade:'500ml'
}

function descreveSuco({sabor, quantidade}){
  return `Este suco é de sabor ${sabor} e possui ${quantidade}`;
};
console.log(descreveSuco(suco));
