// Robô da Tabuada

// Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número (de 1 a 20). O programa deve começar pedindo o número a ser usado nos cálculos e então salvar todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma variável do tipo string. Depois o programa deve exibir esses resultados e finalizar.

const numero = prompt("Digite o numero que deseja a tabuada: ");

let resultado = "";

for (let fator = 1; fator <= 20; fator++) {
  const resultadoMultiplicacao = numero * fator;
  resultado += `${numero} * ${fator} = ${resultadoMultiplicacao}\n`;
}

alert(`A tabuada do numero ${numero} é :\n\n${resultado}`);
