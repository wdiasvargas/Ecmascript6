/**
 * Created by williamdias on 26/04/17.
 */
function obterDadosDaTela () {
  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;
  const sexo = document.getElementById('sexo').value;
  const convenio = document.getElementById('convenio').value;

  return {nome,idade,sexo,convenio};
}

const url = 'https://sistemasaude.com.br/api/cadastros/paciente';
const dados = obterDadosDaTela();

//transformamos nosso obejto em JSON
const dadosJSON = JSON.stringify(dados);
$.ajax({
  url         : url,
  datatype    : 'json',
  contentType : 'application/json; charset=UTF-8',
  data        : dadosJson,
  type        :'Post',
  complete    :callback
});