/**
 * Created by williamdias on 27/04/17.
 */
'use strict'
//ES5

const listaMae = ['leite','ovos','papel'];
const listaNamorada = ['arroz','feijao','suco'];
const listaEscritorio = ['adesivos','canetas','fita adesiva'];

//const listaCompras = listaMae.concat(listaNamorada,listaEscritorio);


//ES6

const listaCompras = [...listaMae,...listaNamorada,...listaEscritorio];
console.log(listaCompras);
console.log(listaCompras.length);
