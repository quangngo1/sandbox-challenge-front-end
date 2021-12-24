const PLAYER_API = 'http://localhost:8080';

export const findAllPlayers = () =>
    fetch(`${PLAYER_API}/playerIds`)
    .then(response => response.json());

export const findPlayerById = (id) =>
    fetch(`${PLAYER_API}/player?playerId=${id}`)
    .then(response => response.json());

export const createNewPlayer = (player) => {
  console.log(player);
  return fetch(`${PLAYER_API}/player`, {
    method: 'POST',
    body: JSON.stringify(player),
    headers: {
      'content-type': 'application/json'
    }
  }).then((response) => response.status)
}

export default {
  findAllPlayers, findPlayerById, createNewPlayer
}

