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

const usuario = new Usuario('SuperJS', '123');
console.log(usuario.login); //SuperJS
console.log(usuario.senha);//123

const proxy = new Proxy(usuario, {
  get(alvo, propriedade) {
    console.log(`${propriedade} foi solicitada`);

    return alvo[propriedade];
  }
});

console.log(proxy.login);
console.log(proxy.senha);