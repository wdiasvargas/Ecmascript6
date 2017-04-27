/**
 * Created by williamdias on 26/04/17.
 */
function Livro(titulo){
    this.titulo = titulo;
};

var livro = new Livro('Entendendo ES6');
console.log(livro)

var livro = {
    titulo : 'Anjos e Demonios'
}

console.log(livro.titulo);

var outroLivro = livro;
livro.titulo = 'O Codigo da Vinci';

console.log(outroLivro.titulo);
console.log(livro.titulo)

livro.autor = 'Dan Brown';
livro['mostrarLivro'] = function () {
    console.log(this.titulo + ', '+ this.autor);
}

livro.mostrarLivro()
