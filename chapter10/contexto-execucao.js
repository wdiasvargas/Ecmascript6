/**
 * Created by williamdias on 26/04/17.
 */

//template string simples
//ES6
//contexto de execucao

//console.log(this);
//
//function imprimeMeuContextoDeExecucao (){
//    console.log(this)
//};
//imprimeMeuContextoDeExecucao()

var objeto = {
    meuContexto : function () {
        console.log(this);
    }
};
objeto.meuContexto();