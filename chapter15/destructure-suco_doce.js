/**
 * Created by williamdias on 27/04/17.
 */


'use strict'
//ES6
const	suco	=	{
  sabor:	'uva',
  quantidade:	'500ml'
}

const	doce	=	{
  tipo:	'açucar'
}

function	descreveSuco({sabor,	quantidade},	{tipo})	{
  return	`Este	suco	é	de	sabor	${sabor}	e	possui	${quantidade}	adocicado	com	${tipo}`;
}

console.log(descreveSuco(suco, doce));
