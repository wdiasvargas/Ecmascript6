/**
 * Created by William on 21/04/2017.
 */

//WEAKMAPS

"use strict";
var estantes = new Map();

for(var livro of livros) {
    estantes.set(livro.getTitulo(), livro.getEstante());
}


function getLocalizacaoDoLivro(titulodoLivro) {
    var estante = estantes.get(titulodoLivro);
    if(estante === undefined){
        return 'Livro nao encontrado no acervo!';
    }
    return estantes.get(titulodoLivro);
}



