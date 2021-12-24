import React from "react";
import {Link} from "react-router-dom";

const GameStatsForPlayer = ({
  detail =
      {
        "gameNumber": 1,
        "takes": [
          8,
          3,
          7,
          3,
          790
        ]
      }
}) => {
  return (
      <div className="card" style={{"width": '12rem'}}>
        <div className="card-body text-center">
          {/*<Link to={`/games/${detail.gameNumber}`} className="card-title">Game {detail.gameNumber}</Link>*/}
          {
            detail.takes.map((take, idx) => {
              return (
                  <>
                    <p><span className='fw-bold'>Round {idx + 1}:</span> {take} points</p>
                  </>
              );
            })
          }
          <hr/>
          <Link to={`/games/${detail.gameNumber}`} className="btn btn-info">Game {detail.gameNumber}</Link>
        </div>
      </div>
  );
}

export default GameStatsForPlayer;