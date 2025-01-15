let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo Secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function exibirMensagemNoConsole() {
    console.log('O botão foi clicado');
}

function exibirAlerta() {
alert('Eu amo Js');
}

function exibirPrompt() {

    let nomeCidade = prompt('Qual a sua cidade preferida?');
    alert(`Estive em ${nomeCidade} e lembrei de você`);
}

function somaDoisnumeros() {

    let primeiroNumero = prompt('Escolha um número');
    let segundoNumero = prompt('Escolha outro número');
    let somaDoisnumeros = primeiroNumero + segundoNumero;

    alert(`A soma de ${primeiroNumero} e ${segundoNumero} é igual a ${somaDoisnumeros}`);
}
