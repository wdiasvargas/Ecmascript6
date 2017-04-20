/**
 * Created by williamdias on 19/04/17.
 */
"use strict";
var alunos = [
    {nome:'joao', idade:15},
    {nome:'jose', idade:18},
    {nome:'maria', idade:20},
];
var aluno;
for(var i = 0; i < alunos.length;i++){
    if(alunos[i].nome === 'jose'){
        aluno = alunos[i];
        break;
    }
}

console.log(aluno);

var alunos = [
    {nome:'joao', idade:15},
    {nome:'jose', idade:18},
    {nome:'maria', idade:20},
];

var aluno = alunos.find(function (aluno) {
    return aluno.nome === 'jose';
});
console.log(aluno)