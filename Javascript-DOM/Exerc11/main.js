function addPlayer() {
  const lineupPlayersSection = document.getElementById("lineup-players");

  const h3 = document.createElement("h3");
  h3.innerText = "jogadores";

  const ul = document.createElement("ul");

  const playerPositionsLi = document.createElement("li");
  playerPositionsLi.innerText = "posição: ";

  const playerPositionsInput = document.createElement("input");
  playerPositionsInput.type = "text";
  playerPositionsInput.name = "posição";
  playerPositionsLi.appendChild(playerPositionsInput);
  ul.appendChild(playerPositionsLi);
  ul.appendChild(document.createElement("br"));
}

// function createCustomElement(elemnt, text) {
//   document.createElement(`${elemnt}`);
//   elemnt.innerText = `${text}`
// }
