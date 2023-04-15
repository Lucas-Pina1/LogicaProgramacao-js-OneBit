function addPlayer() {
  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value;
  const playerNumber = document.getElementById("playerNumber").value;

  const confirmation = confirm(
    `Escalar ${name} - camisa ${playerNumber} como ${position} ?`
  );

  if (confirmation) {
    const teamList = document.getElementById("teamList");
    const playerItem = document.createElement("li");

    playerItem.id = `player-${playerNumber}`;
    playerItem.innerHTML = `${position} : ${name} (camisa - ${playerNumber})`;
    teamList.appendChild(playerItem);

    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("playerNumber").value = "";
  }
}

function removePlayer() {
  const numberToRemove = document.getElementById("numberToRemove").value;
  const playerToRemove = document.getElementById(`player-${numberToRemove}`);

  const confirmation = confirm(`Remover o jogador ${playerToRemove} ?`);

  if (confirmation) {
    // document.getElementById("teamList").removeChild(playerToRemove);
    playerToRemove.remove();
    document.getElementById("numberToRemove").value = "";
  }
}
