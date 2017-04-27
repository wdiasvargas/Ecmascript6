/**
 * Created by williamdias on 27/04/17.
 */
'use strict'
//ES5

const produtoSelecionado = {
  descricao : 'Blusa de Lã',
  preco : 'R$ 59,90'
};
const carrinho = [
  {descricao: 'Bota de Cano Médio', preco:  'R$ 199,90'},
  {descricao: 'Saia Colorida', preco:  'R$ 29,90'},
  {descricao: 'Vestido Longo', preco:  'R$ 399,90'},
];
const carrinhoAtualizado = [...carrinho,produtoSelecionado];

for (let produto of carrinhoAtualizado) {
  console.log(produto.descricao);
}
