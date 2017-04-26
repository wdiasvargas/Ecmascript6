/**
 * Created by williamdias on 26/04/17.
 */


"use strict";
//ES5 Modo
//function Set() {
//    var array = [];
//    this.add = function (valor) {
//        if(array.indexOf(valor) === -1){
//            array.push(valor);
//        }
//    },
//        this.mostrarValores = function () {
//            console.log(array);
//        }
//}
//
//var set = new Set();
//set.add(2);
//set.add(1);
//set.add(2);
//set.mostrarValores();

//ES6 modo
function Set() {
    var array = [];
    this.add = function (valor) {
        if(array.indexOf(valor) === -1){
            array.push(valor);
        }
    }
}

var set = new Set();
set.add(2);
set.add(1);
set.add(2);

for(const valor of set ){
    console.log(valor)
}


var set = new Set([2,1,2]);
for(const valor of set){
    console.log(valor);
}