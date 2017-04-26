/**
 * Created by williamdias on 26/04/17.
 */

var mensagem = 'ola';
{
    var mensagem = 'adeus';
}
console.log(mensagem);

var mensagem = 'Ola';

function mensagem() {
    var mensagem = 'adeus';
}



const arrayVar = [];

for (var i = 1; i < 5; i++){
    ArrayVar.push(function () {
        console.log(i)
    });
}


const arrayLet = [];

for (let i = 1; i < 5; i++){
    arrayLet.push(function () {
        console.log(i)
    })
}

ArrayVar.forEach(function (funcao) {
    funcao();
});

arrayLet.forEach(function (funcao) {
    funcao();
});

//pagina 77