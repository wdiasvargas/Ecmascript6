/**
 * Created by williamdias on 27/04/17.
 */
//ES6
'use strict'

const v = 'valor 1';
function funcao (x = v) {
  const v = 'valor 2';
  console.log(x);
}

funcao()