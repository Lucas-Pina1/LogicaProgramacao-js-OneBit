// Conversor de Medidas

// Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:

// - milímetro (mm)
// - centímetro (cm)
// - decímetro (dm)
// - decâmetro (dam)
// - hectômetro (hm)
// - quilômetro (km)

// O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

// O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso)

const valorDeEntrada = parseFloat(
  prompt("Digite o medida(em metros) que deseja converter:")
);

const escolhaMedidaDeConversao = parseFloat(
  prompt(
    "Para qual medida deseja converter: \n [1] - milímetro (mm) \n [2] - centímetro (cm) \n [3] - decímetro (dm) \n [4] - decâmetro (dam) \n [5] - hectômetro (hm) \n [6] - quilômetro (km)"
  )
);

let resultado = 0;

switch (escolhaMedidaDeConversao) {
  case 1:
    resultado = valorDeEntrada * 1000;

    alert(
      `a conversão de ${valorDeEntrada} metros para milímetro é: ${resultado} mm`
    );
    break;
  case 2:
    resultado = valorDeEntrada * 100;

    alert(
      `a conversão de ${valorDeEntrada} metros para centímetro é: ${resultado} cm`
    );
    break;
  case 3:
    resultado = valorDeEntrada * 10;

    alert(
      `a conversão de ${valorDeEntrada} metros para decímetro é: ${resultado} dm`
    );
    break;
  case 4:
    resultado = valorDeEntrada / 10;

    alert(
      `a conversão de ${valorDeEntrada} metros para decâmetro é: ${resultado} dam`
    );
    break;
  case 5:
    resultado = valorDeEntrada / 100;

    alert(
      `a conversão de ${valorDeEntrada} metros para hectômetro é: ${resultado} hm`
    );
  case 6:
    resultado = valorDeEntrada / 1000;

    alert(
      `a conversão de ${valorDeEntrada} metros para quilômetro é: ${resultado} km`
    );
    break;
  default:
    alert("Opção inválida");
    break;
}
