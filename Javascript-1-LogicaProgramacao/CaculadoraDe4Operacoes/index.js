/*

Escreva um programa em js que permita inserir dois valores numéricos e então calcule o resultado das quatro operações basicas (soma, subtração , multiplicação e divisão).

Após calcular os resultados o programa deve exíbi-los na tela 
*/

const primeiraEntrada = prompt("Digite primeiro numero");
const segundaEntrada = prompt("Digite segundo numero");

const primeiroNumero = parseFloat(primeiraEntrada);
const segundoNumero = parseFloat(segundaEntrada);

const soma = primeiroNumero + segundoNumero;
const subtracao = primeiroNumero - segundoNumero;
const multiplicacao = primeiroNumero * segundoNumero;
const divisao = primeiroNumero / segundoNumero;

alert(`
    o Resultados das operações sao:
    soma: ${soma}
    subtração: ${subtracao}
    multiplicação: ${multiplicacao}
    divião: ${divisao}
`);
