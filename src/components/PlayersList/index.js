import React, {useEffect, useState} from 'react';
import playerServices from '../../services/player-services'
import PlayersListItem from "./PlayersListItem";
import {Link} from "react-router-dom";
import NavBar from "../NavBar";

const PlayerList = () => {
  const [players, setPlayers] = useState([]);

  const findAllPlayers = () =>
      playerServices.findAllPlayers()
      .then(players => setPlayers(players['ids']));

  useEffect(findAllPlayers, []);

  return (
      <>
        <NavBar/>
        <div className='container list-screen-width'>
          <h1 className='mt-4 mb-4 text-center'>
            List of all players
          </h1>
          <div>
            <div className='row'>
              <div className='col-1'>
                <h6>id</h6>
              </div>
              <div className='col-5'>
                <h6>Name</h6>
              </div>
              <div className='col-2'>
                <h6>Total Score</h6>
              </div>
              <div className='col-2'>
                <h6>Average Score</h6>
              </div>
              <div className='col-2'>
                <h6>Total Wins</h6>
              </div>
            </div>
            {
              players.map(player => {
                return (
                    <Link to={`/players/${player}`}
                          style={{textDecoration: 'none'}}>
                      <PlayersListItem id={player}/>
                    </Link>
                )
              })
            }
          </div>
        </div>
      </>
  );
}

export default PlayerList;