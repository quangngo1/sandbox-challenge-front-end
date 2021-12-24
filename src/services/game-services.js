const GAME_API = 'http://localhost:8080';

export const findAllGames = () =>
    fetch(`${GAME_API}/gameNumbers`)
    .then(response => response.json());

export const findGameById = (id) => {
  console.log("id:" + id);
  return fetch(`${GAME_API}/game?gameNumber=${id}`)
  .then(response => response.json());
}

export const createNewGame = (game) => {
  console.log(game);
  return fetch(`${GAME_API}/game`, {
    method: 'POST',
    body: JSON.stringify(game),
    headers: {
      'content-type': 'application/json'
    }
  }).then((response) => response.status)
}

export default {
  findAllGames, findGameById, createNewGame
}