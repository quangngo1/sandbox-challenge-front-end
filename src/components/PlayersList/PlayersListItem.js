import React, {useEffect, useState} from "react";
import playerServices from '../../services/player-services'

const PlayersListItem = (id) => {

  const [player, setPlayer] = useState({
    "playerName": "Woody",
    "totalScore": 29,
    "averageScore": 4.83,
    "totalWins": 0,
    "allPlayerTakes": [
      {
        "gameNumber": 1,
        "takes": [
          8,
          3,
          7,
          3,
          8
        ]
      }
    ]
  });

  const findPlayerById = (id) =>
      playerServices.findPlayerById(id)
      .then(player => setPlayer(player));

  useEffect(() => findPlayerById(id.id), []);

  return (
      <div className='border border-light rounded mb-2 list-screen-background text-dark pt-3'>
        <div className='row'>
          <div className='col-1'>
            <p>{id.id}</p>
          </div>
          <div className='col-5'>
            <p>{player.playerName}</p>
          </div>
          <div className='col-2'>
            <p>{player.totalScore}</p>
          </div>
          <div className='col-2'>
            <p>{player.averageScore}</p>
          </div>
          <div className='col-2'>
            <p>{player.totalWins}</p>
          </div>
        </div>
      </div>
  );
}

export default PlayersListItem;