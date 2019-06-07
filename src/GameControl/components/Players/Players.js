import React from 'react';
import Player from './Player';

import { connect } from 'react-redux';


function Players({populations, allPlayers , currentTurn, view}){
	
	const layout={
		display:'flex',
		justifyContent:'space-around'
	}

	function handleScore(player){
		if(view==='game-end'){
			let playerScore=player.seed;
			for (const locID in populations){
				let plant=populations[locID];
				if(plant){
					if (player.id===plant.playerID){
						playerScore+=plant.leaves
					}
				}
			}
			return playerScore
		}
	}

	return (
		<div style={layout}>
		<h3>Players</h3>
			{
				allPlayers.map((player,index)=>{
					return (
						<Player 
							key={index} 
							player={player}
							turn={currentTurn} 
							onScore={handleScore}
							view={view}/>
						)
				})
			}
		</div>
	)
}

const mapStateToProps=state=>{
	return{
		allPlayers:state.game.players,
		currentTurn:state.game.turn,
		view:state.view,
		populations:state.populations
	}
}

export default connect(mapStateToProps)(Players);