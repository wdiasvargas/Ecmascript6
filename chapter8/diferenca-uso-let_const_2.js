/**
 * Created by williamdias on 26/04/17.
 */

//pagina 77

const arrayVar = [];
for(var i ; i< 5; i++){
    arrayVar.push(function () {
        console.log(i)
    })
}

i= 10;

arrayVar.forEach(function (funcao) {
    funcao();
});
