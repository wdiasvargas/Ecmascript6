/**
 * Created by williamdias on 26/04/17.
 */
"use strict";

function mostrarPropriedadeDoContexto(nomePropriedade){
    console.log(this[nomePropriedade]);
};

var mockLocation = {
    //location ='fake-location'
}

var funcao = mostrarPropriedadeDoContexto.bind(mockLocation)