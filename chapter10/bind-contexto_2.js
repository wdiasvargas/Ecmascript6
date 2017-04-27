/**
 * Created by williamdias on 26/04/17.
 */
"use strict";

const	equipe	=	{
    nome:	'Guerreiros	Z',
    membros:	['Goku',	'Kuririn',	'Vegeta'],
    membrosDaEquipe:	function() {
        this.membros.forEach(function(membro) {
            console.log(`${membro}	é	da	equipe	${this.nome}`);
        }.bind(this));
    }
}
console.log(equipe.membrosDaEquipe())