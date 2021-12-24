import React from "react";
import {Link} from "react-router-dom";
import NavBar from "../NavBar";
import img from './894615.jpg';

const HomePage = () => {

  return (
      <div style={{ backgroundImage:`url(require(${img}))` }}>
        <NavBar/>
        <div className='container homepage-width centered'>
          <div className='card pt-4 ps-3 pe-2 pb-4'>
            <p>Welcome to <span className='fw-bold'>GratitudeNU</span>. Psychology researchers used this game to further
              understand greedy behaviour through simulating resource scarcity.
              The purpose of the game is to study the dilemma of maximizing
              self-interest vs conserving resources for the public for long-term
              gain.</p>

            <p>Each game consists of several players, and for every round in the
              game, each player chooses to take a finite amount of points from a
              shared pool. We have some initial seeding data that contains a
              games list and a playerInfo list. A Player in playerInfo is a
              participant in the study, each player has a name and id. A game
              summary will consist of a list of playerIds containing everyone
              who participated in the game and an object representing each
              player's takes during each round, which maps each player's id to a
              list containing their take values in each round.</p>

            <p>We are looking to understand player's behavioral tendencies
              across multiple games. Specifically, we want to quantify greediness in
              players when taking from the shared pool.</p>
          </div>
        </div>
        {/*<div className='container'>
          <div>
            <Link to={`/players`}>
              Get all the players
            </Link>
          </div>

          <div>
            <Link to={`/games`}>
              Get all the games
            </Link>
          </div>

        </div>*/}
      </div>
  );
}

export default HomePage;