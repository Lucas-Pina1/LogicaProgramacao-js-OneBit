/*

Escreva um programa em js que permita salvar informações de um recruta. As informações a serem salvas são:

- o primeiro nome
- o sobrenome
- o campo de estudo
- o ano de nascimento

Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de nascimento).

*/

const anoAtual = 2023;

const nome = prompt("Digite primeiro nome do recruta:");
const sobreNome = prompt("Digite seu sobrenome:");
const campoDeEstudo = prompt("Digite seu campo de estudo:");
const anoDeNascimento = parseFloat(prompt("Digite seu ano de nascimento:"));

const idadeDoRecruta = anoAtual - anoDeNascimento;

alert(
  `informações do recruta: 
    - nome completo: ${nome} ${sobreNome}
    - Campo de estudo: ${campoDeEstudo}
    - idade: ${idadeDoRecruta}
`
);
