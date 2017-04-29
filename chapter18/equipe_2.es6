/**
 * Write by wdiasvargas on 29/04/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'
const timeDesenvolvimento = {
  quantidade: 3,
  senior: 'Luis',
  pleno: 'Marcia',
  junior: 'Christian',
  [Symbol.iterator]: function* () {
      yield this.senior;
      yield this.pleno;
      yield this.junior;
  }
};

const timeNegocios = {
  quantidade: 2,
  diretor: 'Marcelo',
  vice: 'Guilherme',
  [Symbol.iterator]: function* () {
      yield this.diretor;
      yield this.vice;
  }
};

const equipe = {
  timeDesenvolvimento,
  timeNegocios,
  [Symbol.iterator]:function* () {
      yield*  timeDesenvolvimento;
      yield*  timeNegocios
  }
};

for (let integrante of equipe) {
  console.log(integrante)
}
//Ler denovo essa capitulo q isso foi muito loco