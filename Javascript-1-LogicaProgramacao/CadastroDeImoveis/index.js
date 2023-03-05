// ## Cadastro de Imóveis

// Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

// - Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
// - O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
// - O menu deve ter a opção de salvar um imóvel.
// - Para salvar um novo imóvel o programa deve pedir as seguintes informações:
//     - Nome do proprietário.
//     - Quantidade de quartos.
//     - Quantidade de banheiros.
//     - Se possui garagem.
// - O menu também deve ter a opção de mostrar todos os imóveis salvos.

const imoveis = [];
let opcaoMenu = "";

do {
  opcaoMenu = prompt(`
Imóveis cadastrados: ${imoveis.length}

1. Salvar um imóvel
2. Mostrar todos os imóveis salvos
3. Sair
`);

  switch (opcaoMenu) {
    case "1":
      const imovel = {
        nomePropietario: "",
        quantidadeDeQuartos: "",
        quantidadeDeBanheiros: "",
        possuiGaragem: "",
      };

      imovel.nomePropietario = prompt("Qual o nome do proprietário do imóvel?");
      imovel.quantidadeDeQuartos = prompt("Quantos quartos tem o imóvel?");
      imovel.quantidadeDeBanheiros = prompt("Quantos banheiros tem o imóvel?");
      imovel.possuiGaragem = prompt("O imóvel possui garagem? (Sim/Nao)");

      const confirmacao = confirm(`
      Salvar este imóvel? 
      
      Proprietário: ${imovel.nomePropietario}
      Quantidade de Quartos: ${imovel.quantidadeDeQuartos}
      Quantidade de banheiros: ${imovel.quantidadeDeBanheiros}
      Possui Garagem: ${imovel.possuiGaragem}
      `);

      if (confirmacao) {
        imoveis.push(imovel);
        alert("Imóvel salvo com secesso!");
      } else {
        alert("Voltando ao menu.");
      }
      break;
    case "2":
      const temImoveisSalvos = imoveis.length > 0;

      if (temImoveisSalvos) {
        for (i = 0; i < imoveis.length; i++) {
          alert(`
          Imóveis salvos:
          
          Imóvel ${i + 1} -

          Nome do propriétario: ${imoveis[i].nomePropietario}
            Quantidade de quartos: ${imoveis[i].quantidadeDeQuartos}
            Quantidade de banheiros: ${imoveis[i].quantidadeDeBanheiros}
            Possui garagem? ${imoveis[i].possuiGaragem}
          `);
        }
      } else {
        alert(`Não há nenhum imóvel salvo!`);
      }
      break;
    case "3":
      alert("saindo...");
      break;
    default:
      alert("Opção invalida!");
  }
} while (opcaoMenu !== "3");
