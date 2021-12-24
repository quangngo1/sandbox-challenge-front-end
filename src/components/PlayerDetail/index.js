import React, {useEffect, useState} from "react";
import playerServices from '../../services/player-services'
import {useParams} from "react-router";

import GameStatsForPlayer from "./GameStatsForPlayer";
import PlayerList from "../PlayersList";
import NavBar from "../NavBar";

const PlayerDetail = () => {
  const {playerId} = useParams();
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
      },
      {
        "gameNumber": 2,
        "takes": [
          11,
          3,
          3,
          0,
          13
        ]
      }
    ]
  });

  const findPlayerById = (id) =>
      playerServices.findPlayerById(id)
      .then(player => setPlayer(player));

  useEffect(() => findPlayerById(playerId), []);

  return (
      <>
        <NavBar/>
        <div className='container'>
          <h1 className='text-center mt-4 mb-4'>{player.playerName}'s Profile</h1>
          <h3>{player.playerName}'s quick glance</h3>
          <p><span className='fw-bold'>Total Score: </span>{player.totalScore}</p>
          <p><span className='fw-bold'>Average Score: </span>{player.averageScore}</p>
          <p><span className='fw-bold'>Total Wins: </span>{player.totalWins}</p>

          <h3 className='mt-4'>Detail</h3>
          <div>
            {player.allPlayerTakes.map(eachTake => {
                  return (
                      <div className='float-left me-2 mb-3'>
                        <GameStatsForPlayer detail={eachTake}/>
                      </div>
                  );

                }
            )}
          </div>
        </div>
      </>

  );
}

export default PlayerDetail;