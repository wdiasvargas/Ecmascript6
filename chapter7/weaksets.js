/**
 * Created by williamdias on 26/04/17.
 */


"use strict";

var musica1 = {
    titulo : 'O amor nao tem rollback',
    autor:'SQL'
}

var musicas = new WeakSet([musica1]);
console.log(musicas);
musica1 = null;
console.log(musicas);
