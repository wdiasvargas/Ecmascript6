/**
 * Created by William Dias on 29/04/17.
 *    www.williamdiasvargas.com.br
 */

'use strict'
class Usuario {
  constructor (login, senha) {
    this.login = login;
    this.senha = senha;
  }
}
const validator = {
  set(alvo, propriedade, valor) {
    if(propriedade === 'idade') {
      if (!Number.isInteger()){
        throw new TypeError('A idade nao é um numero!')
      }
    }

    alvo[propriedade] = valor;
  }
}


const usuario = new Proxy({}, validator);
//usuario.idade = 'dez';
//usuario.idade = {};
//usuario.idade = true;
usuario.idade = 10;

const proxy = new Proxy(usuario, {
  get(alvo, propriedade) {
    console.log(`${propriedade} foi solicitada`);

    return alvo[propriedade];
  }
});

const {proxy, revoke} = Proxy.revocable({}, {});
proxy.teste = 'teste';

console.log(proxy.teste);
revoke();
console.log(proxy.teste);
revoke();
console.log(proxy.teste);
