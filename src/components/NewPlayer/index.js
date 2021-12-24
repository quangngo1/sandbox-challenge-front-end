import React from "react";
import {useState} from "react";
import playerService from '../../services/player-services'
import NavBar from "../NavBar";

const NewPlayer = () => {
  const [player, setPlayer] = useState({"name": ''});

  const createPlayer = (player) =>
      playerService.createNewPlayer(player).then(status => status === 201? alert(`Player ${player.name} created successfully!`) : alert(`Could not create player!`));

  return (
      <>
        <NavBar/>
        <div className="container new-player-width">
          <h2 className="text-center fs-1 fw-bolder mb-4">Create Player</h2>
          {/*{JSON.stringify(player)}*/}

          <div className="form-group mb-3">
            <label htmlFor='newName'>New Player Name</label>
            <input type="text" className="form-control"
                   onChange={(event) =>
                       setPlayer({
                         ...player,
                         "name": event.target.value
                       })}
                   id='newName' aria-label="Please enter the new player name"/>
          </div>


          {/*<button className="btn btn-warning" onClick={() => {
          history.back()
        }}>
          Cancel
        </button>*/}

          <button className="btn btn-success"
                  onClick={() => createPlayer(player)}>
            Create Player
          </button>
        </div>
      </>
  )
}

export default NewPlayer;