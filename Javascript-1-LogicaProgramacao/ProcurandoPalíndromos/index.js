// Procurando Palíndromos

// Escreva um programa em javascript que seja capaz de identificar se uma palavra é um palíndromo. Um palíndromo é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem. O programa deve iniciar pedindo que seja informada uma palavra e então deve exibir uma mensagem dizendo se aquela palavra é ou não um palíndromo. Caso não seja um palíndromo, o programa deve mostrar a palavra lida da esquerda para direita e da direita para esquerda.

const palavra = prompt("Digite a palavra desejada : ");

let palavraInvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
  console.log(palavraInvertida);
}

const Palidromo = palavra === palavraInvertida;

if (Palidromo) {
  alert(
    `A plavra informada é um Palídromo\n
    Palavra digitada: ${palavra}
    Palavra de trás para frente: ${palavraInvertida}`
  );
} else {
  alert(
    `A plavra informada não é um Palídromo\n
    Palavra digitada: ${palavra}
    Palavra de trás para frente: ${palavraInvertida}`
  );
}
