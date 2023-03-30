// Sistema de Vagas de Emprego

// Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

// - Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema
//     - Listar vagas disponíveis
//     - Criar um nova vaga
//     - Visualizar uma vaga
//     - Inscrever um candidato em uma vaga
//     - Excluir uma vaga
//     - Sair
// - A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
// - A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
// - A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
// - A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
// - A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

// Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções.

const vagas = [];

function listarVagas() {
  const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
    textoFinal += `${indice}. `;
    textoFinal += vaga.nome;
    textoFinal += ` (${vaga.candidatos.length} candidatos)\n`;
    return textoFinal;
  }, "");

  alert(vagasEmTexto);
}

function novaVaga() {
  const nome = prompt("Informe um nome para a vaga:");
  const descricao = prompt("Informe uma descrição a vaga:");
  const dataLimite = prompt(
    "Informe uma data limite (dd/mm/aaaa) para a vaga:"
  );

  const confirmacao = confirm(`Deseja criar uma nova vaga com essas informações?
  Nome: ${nome}
  Descrição: ${descricao}
  Data limite: ${dataLimite}`);

  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
    alert("Vaga criada");
  }
}

function exivirVaga() {
  const indice = prompt("Informe o índice da vaga ue deseja exibir:");
  const vaga = vagas[indice];

  const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => {
    return `${textoFinal}\n - ${candidato}`;
  }, "");

  alert(
    `Vaga n ${indice}
    Nome: ${vaga.nome}
    Descrição: ${vaga.descricao}
    Data limite: ${vaga.dataLimite}
    Quantidade de candidatos: ${vaga.candidatos.length}
    Candidatos inscritos: ${candidatosEmTexto}`
  );
}

function inscreverCandidato() {
  const canditato = prompt("Informe o nome do(a) candidato(a):");
  const indice = prompt(
    "Informe o índice da vaga a qual o(a) candidato(a) deseja se inscrever:"
  );
  const vaga = vagas[indice];

  const confirmacao =
    confirme(`Deseja inscrever o candidato ${candidato} na vaga ${indice}?\n
  Nome: ${vaga.nome}
  Descrição: ${vaga.descricao}
  Data limite: ${vaga.dataLimite}`);

  if (confirmacao) {
    vaga.candidatos.push(candidato);
    alert("Inscrição realizada.");
  }
}

function excluirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja excluir:");
  const vaga = vagas[indice];

  const confirmacao = confirm(`Tem certeza que deseja excluir a vaga ${indice}?
  Nome: ${vaga.nome}
  Descrição: ${vaga.descricao}
  Data limite: ${vaga.dataLimite}`);

  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("Vaga excluída");
  }
}

function exibirMenu() {
  const opcao = prompt(
    "Cadastro de vagas de Emprego\n\n" +
      "Escolha uma das opções:\n" +
      "1. Listar vagas disponíveis" +
      "2. Criar nova vaga\n" +
      "3. Visualizar um(a) candidato(a)\n" +
      "4. Inscrever um(a) candidato(a)\n" +
      "5. Excluir uma vaga\n" +
      "6. Sair"
  );

  return opcao;
}
