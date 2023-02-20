/*

Escreva um programa em js que permita inserir o nome e o poder de uma personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

- Se o poder de ataque for maior que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa

- Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa

- Se o poder de ataque for menor ou igual a defesa, odano causado será 0.

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informaç~es atualizadas de ambos os personagen.

*/

const personagemAtacante = prompt("Digite o nome do personagem atacante:");
const poderAtaquePersonagemAtacante = parseFloat(
  prompt("Digite o poder de ataque do personagem atacante:")
);

const personagemDefensor = prompt("Digite o nome do personagem defensor:");
let pontosVidaPersonagemDefensor = parseFloat(
  prompt("Digite os pontos de vida do personagem defensor:")
);

const poderDefesaDefensor = parseFloat(
  prompt("Digite o poder de defesa do personagem defensor:")
);

const escudoPersonagem = prompt("Defensor possui escudo?:");


const atacanteGanhaDefensorSemEscudo =
personagemAtacante > poderDefesaDefensor && escudoPersonagem === "Não";
const atacanteGanhaDefensorTemEscudo =
personagemAtacante > poderDefesaDefensor && escudoPersonagem === "Sim";
const naoCausaDano = personagemAtacante === poderDefesaDefensor;

const dano = 0;

if (atacanteGanhaDefensorSemEscudo) {
  dano = personagemAtacante - poderDefesaDefensor;
  alert(`
    informações personagens :

    personagem atacante(${personagemAtacante}):
    ataque: ${poderAtaquePersonagemAtacante}

    -------------------------------------------
    personagem defensor(${personagemDefensor}):
    vida: ${pontosVidaPersonagemDefensor}
    defesa: ${poderDefesaDefensor}
    dano sofrido: ${dano}
  `);
} else if (atacanteGanhaDefensorTemEscudo) {
  dano = personagemAtacante - poderDefesaDefensor / 2;
  alert(`
  informações personagens :

  personagem atacante(${personagemAtacante}):
  ataque: ${poderAtaquePersonagemAtacante}

  -------------------------------------------
  personagem defensor(${personagemDefensor}):
  vida: ${pontosVidaPersonagemDefensor - dano}
  defesa: ${poderDefesaDefensor}
  dano sofrido: ${dano}
`);
} else if (naoCausaDano) {
  dano = 0;
  alert(`
  informações personagens :

  personagem atacante(${personagemAtacante}):
  ataque: ${poderAtaquePersonagemAtacante}

  -------------------------------------------
  personagem defensor(${personagemDefensor}):
  vida: ${pontosVidaPersonagemDefensor - dano}
  defesa: ${poderDefesaDefensor}
  dano sofrido: ${dano}
`);
}
