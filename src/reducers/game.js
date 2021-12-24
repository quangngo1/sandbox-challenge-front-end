import React from "react";

let game = {
  "game": {
    "gameNumber": 1,
    "players": [1, 2, 3],
    "takes": {
      "1": [4, 8, 1, 10, 5],
      "2": [6, 5, 7, 1, 3],
      "3": [10, 3, 8, 4, 7]
    }
  },
  "players": [
    {"id": 1, "name": "Masayoshi Soken"},
    {"id": 2, "name": "Michael-Cristopher Koji Fox"},
    {"id": 3, "name": "Naoki Yoshida"}]
}


const games = (state = game, action) => {
  switch (action.type) {
    case 'fetch-all-games':
      return (
          action.games
      );
    case 'like-game':
      return (state.map(game => {
            if (game._id === action.game._id) {
              if (game.liked === true) {
                game.liked = false;
                game.stats.likes--;
              } else {
                game.liked = true;
                game.stats.likes++;
              }
              return game;
            } else {
              return game;
            }
          })
      );
    case 'delete-game':
      return game;
    case 'update-id':
      break;
    case 'update-takes-for-id':
      break;
    default:
      return (state);
  }
};

export default games;