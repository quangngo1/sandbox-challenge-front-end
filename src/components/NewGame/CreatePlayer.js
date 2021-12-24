import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import CreateRoundsData from "./CreateRoundsData";
import NavBar from "../NavBar";
import gameService from '../../services/game-services';

const CreatePlayer = () => {
  const {numPlayers} = useParams();
  const createList = () => {
    let result = [];
    for (let i = 1; i <= numPlayers; i++) {
      result.push(i);
    }
    return result;
  }

  const [game, setGame] = useState({
    "players": [
      1,
      2,
      3
    ],
    "takes": {
      "1": [
        3,
        4,
        1,
        8,
        5,
        6
      ],
      "2": [
        2,
        4,
        5,
        7,
        1,
        4
      ],
      "3": [
        5,
        6,
        9,
        9,
        2,
        2
      ]
    }
  })

  const createGame = (game) => {
    gameService.createNewGame(game)
    .then(
        status => status === 200 ? alert('Game successfully created!') : alert(
            `Game cannot be created! ${JSON.stringify(status)}`));
  }

  const numberList = createList();

  useEffect(() => createList, []);
  return (
      <>
        <NavBar/>
        <div className='container'>
          <h1 className='text-center mb-4'>Please enter data for each user</h1>
          {
            numberList.map(i =>
                <CreateRoundsData idx={i}/>
            )
          }
          <button onClick={() => createGame(game)}
                  className='btn btn-danger'>Create New Game
          </button>
        </div>
      </>
  )
}

export default CreatePlayer;