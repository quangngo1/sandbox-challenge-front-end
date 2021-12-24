import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import gameServices from '../../services/game-services';
import PlayerDetail from "../PlayerDetail";
import {Link} from "react-router-dom";
import NavBar from "../NavBar";

const GameDetail = () => {
  const {gameId} = useParams();
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

  useEffect(() => findGameById(gameId), []);

  const getAllPlayers = () =>
      game.players.map(player => player.name);

  return (
      <>
        <NavBar/>
        <div className='container'>
          <h1 className={'text-center'}>Game {gameId} Details</h1>
          <p><span className='fw-bold'>Game Number:</span> {game.game.gameNumber}</p>
          <p><span className='fw-bold'>Players:</span> {
            getAllPlayers().join(', ')
          }</p>
          <h3 className='mt-4'>Player Details</h3>
          {
            game.players.map(player => {
              let currPlayer = player.id.toString();
              return (
                  <div className='float-left me-2 mb-3'>
                    <div className="card" style={{"width": '12rem'}}>
                      <div className="card-body text-center">
                        {
                          game.game.takes[currPlayer].map((round, idx) => {
                            return (
                                <p><span className='fw-bold'>Round {idx
                                + 1}:</span> {round} points</p>
                            )
                          })
                        }
                        <hr/>
                        <Link to={`/players/${player.id}`}
                              className='btn btn-info'>{player.name}</Link>
                      </div>
                    </div>
                  </div>
              )
            })
          }
        </div>
      </>

  );
}

export default GameDetail;