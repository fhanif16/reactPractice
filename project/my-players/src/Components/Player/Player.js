import React from 'react';
import './Player.css'

const Player = (props) => {
    console.log(props)
    const {id,name,picture,price, goals} = props.player
    const addPlayers = props.addPlayers;
    
    return (
        <div className='player-style'>
            <img src= {picture}alt="" srcset="" />
          <div className='player-info'>
          <h4>{name}</h4>
           <p>Goals:{goals}</p>
           <p>Price: ${price}</p>
          </div>
          <button onClick={() => addPlayers(props.player)}> Add Players</button>
        </div>
    );
};

export default Player;