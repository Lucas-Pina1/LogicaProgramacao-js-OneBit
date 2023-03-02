// Menu Interativo

// Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.

let opcao = 5;

do {
  opcao = parseFloat(
    prompt(
      `Menu
    Escolha a opção desejada:
      1 - Frango
      2 - Carne
      3 - Peixe
      4 - Ovo
      5 - Encerrar
    `
    )
  );

  switch (opcao) {
    case 1:
      alert("Foi escolhido a opção 1 - Frango");
      break;
    case 2:
      alert("Foi escolhido a opção 2 - Carne");
      break;
    case 3:
      alert("Foi escolhido a opção 3 - Peixe");
      break;
    case 4:
      alert("Foi escolhido a opção 4 - Ovo");
      break;
    case 5:
      alert("Voçe escolheu encerrar")
      alert("O sistema está sendo encerrado...");
      break;
    default:
      alert("Opção invalida!");
      break;
  }
} while (opcao != 5);
