// Exercício 4

// Visitando Novas Cidades

// Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.

const nomeTurista = prompt("Qual o seu nome? ")


let cidades = '';
let contagem = 0;

let seVisitouAlgumaCidade = prompt("Já visitou alguma cidade? \n sim ou não")

while(seVisitouAlgumaCidade === "sim") {
  let cidade = prompt("Qual o nome da cidade? ")
  cidades += `- cidade \n`
  contagem++
  seVisitouAlgumaCidade = prompt("Visitou alguma outra cidade? \n sim ou não")
}