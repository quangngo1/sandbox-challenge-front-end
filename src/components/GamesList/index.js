import React, {useEffect, useState} from 'react';
import gameServices from '../../services/game-services'
import GamesListItem from "./GamesListItem";
import {Link} from "react-router-dom";
import NavBar from "../NavBar";

const GameList = () => {
  const [games, setGames] = useState([]);

  const findAllGames = () =>
      gameServices.findAllGames()
      .then(games => setGames(games['ids']));

  useEffect(findAllGames, []);

  return (
      <>
        <NavBar/>
        <div className='container game-list-width'>
          <h1 className='mt-4 mb-4 text-center'>
            List of all games
          </h1>
          <div>
            <div className='row'>
              <div className='col-1'>
                <h6>id</h6>
              </div>
              <div className='col-11'>
                <h6>Game Number</h6>
              </div>
            </div>
            {
              games.map(game => {
                return (
                    <Link to={`/games/${game}`}
                          style={{textDecoration: 'none'}}>
                      <GamesListItem id={game}/>
                    </Link>
                )
              })
            }
          </div>
        </div>
      </>
  );
}

export default GameList;