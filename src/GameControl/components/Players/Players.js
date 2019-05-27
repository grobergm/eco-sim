import React from 'react';
import Player from './Player';

import { connect } from 'react-redux';


function Players({allPlayers , currentTurn}){
	
	const layout={
		display:'flex',
		justifyContent:'space-around'
	}

	return (
		<div style={layout}>
			{
				allPlayers.map((player,index)=>{
					return (
						<Player 
							key={index} 
							player={player}
							turn={currentTurn} />
						)
				})
			}
		</div>
	)
}

const mapStateToProps=state=>{
	return{
		allPlayers:state.game.players,
		currentTurn:state.game.turn
	}
}

export default connect(mapStateToProps)(Players);