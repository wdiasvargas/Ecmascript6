/**
 * Write by wdiasvargas on 29/04/17.
 *   www.williamdiasvargas.com.br
 *
 **/
'use strict'
const equipe = {
  quantidade: 3,
  maturidade: 'alta',
  senior: 'Luis',
  pleno: 'Marcia',
  junior: 'Christian',
  [Symbol.iterator]:function* () {
      yield this.senior;
      yield this.pleno;
      yield this.junior;
  }
};
for(let integrante of equipe) {
  console.log(integrante)
}

