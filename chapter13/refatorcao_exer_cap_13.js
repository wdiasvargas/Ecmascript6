/**
 * Created by williamdias on 27/04/17.
 */
//ES6
'use strict'
function montaQuerySelect (tabela, ...cols) {
  let colsQuery = '';
  if(cols.length > 0){
    colsQuery = cols.reduce((colsQuery, coluna) => {
      return colsQuery += `${coluna}, `;
    }, '');
    colsQuery = colsQuery.substring(, colsQuery.length -2);
  } else{
    colsQuery = '*';
  }

  return `SELECT ${colsQuery} FROM ${tabela}`;
}

const query1 = montaQuerySelect('tabela');
const query2 = montaQuerySelect('tabela','col1');
const query3 = montaQuerySelect('tabela','col1','col2');








