/**
 * Created by williamdias on 27/04/17.
 */


'use strict'
const Usuario = {
  nome: ' Elliot',
  sobrenome:  'Alderson',
  senha:  'mrrobot',
  confirmacaoSenha: 'mrrobot',
  email:  'elliot.alderson@gmail.com',
  profissao:  'Engenheiro de Cibersegurança',
  github: 'https://github.com/ElliotAlderson'
}

//ES6
//const email = Usuario.email;
//validarEmail(email);
//..

const { email } = Usuario;
const {senha, confirmacaoSenha} = Usuario;
console.log(senha);
console.log(confirmacaoSenha);
