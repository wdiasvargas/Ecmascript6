/**
 * Created by williamdias on 19/04/17.
 */
var alunos = [
    {nome:'joao', idade: 10},
    {nome:'jose', idade: 20},
    {nome:'marcos', idade:30}
];

var nomes = alunos.reduce(function (arrayNomes, aluno) {
    arrayNomes.push(aluno.nome);
    return arrayNomes;
},[]);

console.log(nomes);
