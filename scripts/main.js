/*
    O querySelector recebe uma string contendo um ou mais seletores CSS separados por virgulas
    ele retorna o primeiro elemento dentro do documento que corresponde ao grupo especificado de seletores.
    No exemplo abaixo estamos retornando o primeiro h1 da pagina para a const meuCabecalho, na linha abaixo
    definimos o valor da propriedade para 'Ola mundo!'
*/
//const meuCabecalho = document.querySelector('h1');
//meuCabecalho.textContent = 'Ola mundo!';

//Funcao engracada:
/*
document.querySelector('html').onclick = function() {
    alert('Ai! Pare de me cutucar!');
}
*/

/*
    Voce armazena uma referencia ao seu elemento <img> na variavel minhaImagem. 
    Depois, voce faz a propriedade do manipulador de evento onclick dessa variavel 
    igual a uma funcao sem nome (uma funcao "anonima"). Agora, toda vez que esse elemento de imagem eh clicado:

    1)Voce recupera o valor do atributo src da imagem.
    2)Voce usa uma condicional para checar se o valor src eh igual ao caminho da imagem original:
    2.1)Se for, voce muda o valor de src para o caminho da segunda imagem, forcando a outra imagem a ser carregada dentro do elemento <img>.
    2.2)Se nao eh (significando que jA mudou), nOs mudamos o valor src de volta ao caminho da imagem, para o estado original.
*/
/*
let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if (meuSrc === 'imagens/firefox-icon.png') {
        minhaImagem.setAttribute('src', 'imagens/firefox2.png');
    } else {
        minhaImagem.setAttribute('src', 'imagens/firefox-icon.png');
    }
}
*/

/* 
    Primeiro trago botao e o cabecalho para dentro do meu programa
*/
let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

/*
    Agora crio uma funcao. essa funcao chama um prompt que exibe uma msg e pede uma entrada de dados
    esse prompt recebe um nome e armazena ele. Chamamos a api localStorage para salvar dados no navegador
    e podermos usar mais tarde, e trocamos o texto do h1.

    Caso o user cancele ou clique em ok sem inserir nada, teremos null:

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    localStorage.setItem('nome', meuNome);
    meuCabecalho.textContent = 'Mozilla é legal, ' + meuNome;
}
*/

/*
    Funcao corrigida (sem null):
    se meuNome nao tiver valor ou seu valor for null, execute defineNomeUsuario() 
    novamente desde o inicio. Se ele tiver um valor (se as instrucoes acima nao forem verdadeiras), 
    armazene o valor em localStorage e defina-o como o texto do cabecalho.
 */
function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if (!meuNome || meuNome === null) {
        defineNomeUsuario();
    } else {
        localStorage.setItem('nome', meuNome);
        meuCabecalho.innerHTML = 'Mozilla é legal, ' + meuNome;
    }
}

/*
    Se localStorage nao tiver o item nome eh pq nao existe nome salvo, nesse caso chamamos a funcao
    defineNomeUsuario, se tiver eu recupero o nome salvo e exibo como deve ser 
*/
if (!localStorage.getItem('nome')) {
    defineNomeUsuario();
} else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Mozilla é legal, ' + nomeGuardado;
}

/*
    Se alguem clicar no botao, chamo a funcao sem nome (anonima) para trocar o nome
*/
meuBotao.onclick = function() { defineNomeUsuario(); }