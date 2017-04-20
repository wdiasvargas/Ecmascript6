/**
 * Created by williamdias on 19/04/17.
 */

"use strict";
var perfilDoFacebook = {
    nome:'Carlos',
    idade: 22
    //others properties
}

for(var propriedade in perfilDoFacebook){
    var info = perfilDoFacebook[propriedade];
    console.log(info)
}