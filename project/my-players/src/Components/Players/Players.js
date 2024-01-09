import React, { useEffect, useState } from 'react';
import './Players.css'
import Player from '../Player/Player';
import Order from '../Order/Order';

const Players = () => {
    const [players, setPlayers] = useState([]);
    useEffect( () => {
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])

   // const [playerInfo , setplayerInfo] = useState([])
   const [cart , setCart] = useState([]);
    const addPlayers =(product) =>{
       // console.log('click' , props)
       const newCart =[...cart ,product];
       setCart(newCart);

       
    }

   

   
    return (

        <div className='players-container'>
           <div className='players'> 
          {
            players.map(player => <Player player={player} addPlayers={addPlayers}> </Player>)

          }
           </div>
           <div>
            {/* <Order player={player}></Order> */}
            <Order playerInfo={cart}></Order>
            

           </div>
        </div>
    );
};

export default Players;