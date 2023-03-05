// ## Fila de Espera

// Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

let baralho = [];
let opcaoMenu = "";

do {
  opcaoMenu = prompt(`
Cartas no baralho: ${baralho.length}

1. Adicionar uma carta
2. Puxar uma carta
3. Sair
`);

  switch (opcaoMenu) {
    case "1":
      const novaCarta = prompt("Qqual é a carta?");
      baralho.push(novaCarta);
      break;
    case "2":
      const cartaPuxada = baralho.pop();
      if (!cartaPuxada) {
        alert(`Não há nenhuma carta no  baralho!`);
      } else {
        alert(`Você puxou um(a) ${cartaPuxada}`);
      }
      break;
    case "3":
      alert("saindo...");
      break;
    default:
      alert("Opção invalida!");
  }
} while (opcaoMenu !== "3");
