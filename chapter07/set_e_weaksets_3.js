/**
 * Created by williamdias on 26/04/17.
 */


"use strict";
var musicas = new Set;
musicas.add('musica1');

for (var musica of musicas){
    console.log(musica);
}

var musicas = new Set(['musica1','musica2']);
musicas.delete('musica1');

for (var musica of musicas){
    console.log(musica);
}

var musicas = new Set([
    'musica1','musica2','musica3'
]);

musicas.clear();

for (var musica of musicas){
    console.log(musica)
}

var musicas = new Set(['musica1']);
if(musicas.has('musica1')){
    console.log('ja esta na lista!');
}

var musica = new Set([
    'musica1','musica2','musica3'
]);

var qtdMusicas = musica.size;
console.log("Há "+ qtdMusicas + " musicas na lista");
//implementar isso com frutas


