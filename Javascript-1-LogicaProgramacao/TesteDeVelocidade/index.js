/*

Escreva um programa em js que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rapido ( ou que as velocidades são iguais se este for o caso).

*/

const nomePrimeiroVeiculo = prompt("Digite o nome do primeiro veículo:");
const velocidadePrimeiroVeiculo = parseFloat(
  prompt("Digite a velocidade do primeiro veículo:")
);

const nomeSegundoVeiculo = prompt("Digite o nome do segundo veículo:");
const velocidadeSegundoVeiculo = parseFloat(
  prompt("Digite a velocidade do segundo veículo:")
);

if (velocidadePrimeiroVeiculo > velocidadeSegundoVeiculo) {
  alert(
    `A velocidade do veículo ${nomePrimeiroVeiculo} é maior que ${nomeSegundoVeiculo}`
  );
} else if (velocidadeSegundoVeiculo > velocidadePrimeiroVeiculo) {
  alert(
    `A velocidade do veículo ${nomeSegundoVeiculo} é maior que ${nomePrimeiroVeiculo}`
  );
} else if (velocidadePrimeiroVeiculo === velocidadeSegundoVeiculo) {
  alert(
    `Os veículos ${nomePrimeiroVeiculo} e ${nomeSegundoVeiculo} possuem a mesma velocidade`
  );
} else {
  alert("Informações invalidas, repita a operação");
}
