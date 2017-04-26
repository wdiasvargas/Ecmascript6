/**
 * Created by williamdias on 26/04/17.
 */
"use strict";


const equipe = {
    nome: 'Guerreiros Z',
    membros: ['Goku','Kuririn','Vegeta'],
    membrosDaEquipe: function() {
        const that = this;
        this.membros.forEach(function (membro) {
            console.log(`${membro} é da equipe ${that.nome}`);
        });
    }
};
console.log(equipe.membrosDaEquipe())

