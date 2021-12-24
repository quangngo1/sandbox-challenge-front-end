import React, {useEffect, useState} from "react";
import gameServices from '../../services/game-services'

const GamesListItem = (id) => {

  const [game, setGame] = useState({
    "players": [
      {
        "id": 1,
        "name": "Woody"
      },
      {
        "id": 2,
        "name": "Buzz"
      }
    ],
    "game": {
      "gameNumber": 3,
      "players": [
        1,
        2
      ],
      "takes": {
        "1": [
          1,
          2,
          3
        ],
        "2": [
          3,
          4,
          6
        ]
      }
    }
  });

  const findGameById = (id) =>
      gameServices.findGameById(id)
      .then(game => setGame(game));

  useEffect(() => findGameById(id.id), []);

  return (
      <div
          className='border border-light rounded mb-2 list-screen-background text-dark pt-3'>
        <div className='row'>
          <div className='col-1'>
            <p>{id.id}</p>
          </div>
          <div className='col-11'>
            <p>{JSON.stringify(game.game.gameNumber)}</p>
          </div>
        </div>
      </div>
  );
}

export default GamesListItem;