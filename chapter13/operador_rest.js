/**
 * Created by williamdias on 27/04/17.
 */
//ES5

function montaQuerySelect () {
  const tabela = arguments[0];
  const qtdArgs = arguments.length;
  let cols  = '';
  if(qtdArgs > 1){
    for(let index = 1; index < qtdArgs; index++){
      cols +=`${arguments[index]}, `;
    }
    cols = cols.substring(0, cols.length - 2);
  }else {
    cols = '*';
  }
  return `SELECT ${cols} from ${tabela}`;
}

const query1 = montaQuerySelect('tabela');
const query2 = montaQuerySelect('tabela','col1');
const query3 = montaQuerySelect('tabela','col1','col2');

