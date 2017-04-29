/**
 * Write by wdiasvargas on 29/04/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'
export let	promise	=	new	Promise((resolve,	reject)	=>	{
  let	resultado	=	true;
  let	tempo	=	2000;	//	milisegundos
  setTimeout(()	=>	{
    if(resultado)	{
      resolve("deu	tudo	certo!");
    }	else	{
      reject("deu	tudo	errado!");
    }
  },	tempo)
});

//Capitulo 19
promise

  .then((data) => {
    console.log(`resultado positivo: ${data}`);
    return data;
  })
  .then((data) => console.log(`resultado positivo 2: ${data}`))
  .catch((data) => console.log(`resultado negativo: ${data}`));