/**
 * Created by williamdias on 27/04/17.
 */


'use strict'
//ES6
const contatos = [
  {
    nome: 'Alex Junior',
    numero: '1234-5678'
  },
  {
    nome: 'Carolina Moya',
    numero: '1234-6789'
  },
  {
    nome: 'Fernando Jorge',
    numero:'1234-5567'
  }
];

const [,Carol] = contatos;

function mostrarNumero ({numero}) {
  console.log(numero);
}

mostrarNumero(Carol);
