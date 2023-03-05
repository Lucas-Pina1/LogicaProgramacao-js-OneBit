// ## Fila de Espera

// Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

let ordemDeEspera = [];
let opcaoMenu = "";

do {
  let pacientes = "";
  for (i = 0; i < ordemDeEspera.length; i++) {
    pacientes += `${i + 1} - ${ordemDeEspera[i]}\n`;
  }

  opcaoMenu = prompt(`
Pacientes:
${pacientes}
  
Escolha uma opção:
  1 - Novo paciente
  2 - Consultar paciente
  3 - Sair
  `);

  switch (opcaoMenu) {
    case "1":
      const novoPaciente = prompt("Digite nome do paciente a ser adicionado:");
      ordemDeEspera.push(novoPaciente);
      break;
    case "2":
      const consultarPaciente = ordemDeEspera.shift();

      const temPacientesEsperando = ordemDeEspera.length > 0;
      if (temPacientesEsperando) {
        alert(`O paciente ${consultarPaciente} pode entrar`);
      } else {
        alert("Não há pacientes na fila de espera");
      }
      break;
    case "3":
      alert("saindo...");
      break;
    default:
      alert("Opção invalida!");
      break;
  }
} while (opcaoMenu !== "3");
