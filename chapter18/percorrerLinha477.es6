/**
 * Write by wdiasvargas on 29/04/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'
function* percorrerLinha477(){
    console.log('Passei pela rua 1');
    yield 'Fim da linha'
}
percorrerLinha477();

const linha = percorrerLinha477();
linha.next();
const parada = linha.next();
console.log(parada);
