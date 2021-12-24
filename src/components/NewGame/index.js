import React, {useEffect, useState} from 'react';
import NavBar from "../NavBar";
import gameService from '../../services/game-services'
import {Link} from "react-router-dom";

const NewGame = () => {
  const [numPlayers, setNumPlayers] = useState(0);

  return (
      <div>
        <NavBar/>
        <div className='container new-player-width'>
          <h1 className='text-center'>Create new game</h1>
          <label className='mt-4' htmlFor='newName'>Please enter number of
            players in this
            game</label>
          <input type="number" className="form-control"
                 onChange={(event) =>
                     setNumPlayers(event.target.value)
                 }
                 id='newName'
                 aria-label="Please enter the number of players for this game "/>
          <Link className='btn btn-danger mt-4'
                to={numPlayers > 0 ? `/createNewGame/${numPlayers}`
                    : `/games/newGame`}>Input data for this game</Link>


        </div>
      </div>
  )
}

export default NewGame;
