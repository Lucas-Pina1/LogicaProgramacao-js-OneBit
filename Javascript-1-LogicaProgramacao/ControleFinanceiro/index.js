// Controle Financeiro

// Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.

let opcaoMenu = 3;

let saldo = parseFloat(prompt("Qual e a quantidade de dinheiro disponível?"));

do {
  opcaoMenu = parseFloat(
    prompt(`
Dinheiro disponivel : R$ ${saldo}

- Escolha uma opção:
  1 - Adicionar dinehiro
  2 - remover dinehiro
  3 - Encerrar
`)
  );

  switch (opcaoMenu) {
    case 1:
      let adicionarValorEmDinheiro = parseFloat(
        prompt("Deseja adicionar qual quantia em dinheiro?")
      );
      saldo += adicionarValorEmDinheiro;
      break;
    case 2:
      let removerValorEmDinheiro = parseFloat(
        prompt("Deseja remover qual quantia em dinheiro?")
      );
      saldo -= removerValorEmDinheiro;
      break;
    case 3:
      alert("Voçe escolheu encerrar");
      alert("O sistema está sendo encerrado...");
      break;
    default:
      alert("Opção invalida!");
      break;
  }
} while (opcaoMenu !== 3);
