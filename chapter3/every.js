/**
 * Created by williamdias on 19/04/17.
 */
// "use strict";
// var alunos = [
//     {nome:'joao', idade:18},
//     {nome:'jose', idade:20},
//     {nome:'maria', idade:24},
// ];
//
// var todosAlunosDeMaior = true;
// for(var i = 0; i< alunos.length; i++){
//     if(alunos[i].idade < 18){
//         todosAlunosDeMaior = false;
//         break;
//     }
// }
// console.log(todosAlunosDeMaior)

var alunos = [
    {nome:'joao', idade:18},
    {nome:'jose', idade:20},
    {nome:'maria', idade:24},
];

var todosAlunosDeMaior = alunos.every(function (aluno) {
    return aluno.idade > 18;
});

console.log(todosAlunosDeMaior)