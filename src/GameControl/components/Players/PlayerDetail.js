import React from 'react';
import Plant from '../../../Populations/components/Plant';
import PlantDetail from './PlantDetail';
import { connect } from 'react-redux';
import { updateOrganism , removeOrganism } from '../../../Populations/redux/actionCreator';
import { changeTurn , selectOrganism, updatePlayer, removePlayer} from '../../redux/actionCreator';



function PlayerDetail({game,dispatch,environment,populations}){
	const currentPlayer=game.players[game.turn];

	const turnChanger=()=>{
		updateStats(currentPlayer)
		checkPlayerLoss(currentPlayer)
		if (game.day===game.length){
			dispatch(changeTurn('lastTurn'))
		} else if(game.turn===game.players.length-1){
			dispatch(changeTurn('lastPlayer'));
		} else {
			dispatch(changeTurn('changeTurn'));
		}
	}

	const checkPlayerLoss=(player)=>{
		if (player.score<=0){
			dispatch(removePlayer(game.turn))
		}
	}

	const checkForWater=(x,y)=>{
		if(populations[`X${x}Y${y}`]){
				// this needs to be scaled by distance
				return -populations[`X${x}Y${y}`].roots
		} else if(environment[`X${x}Y${y}`]){
			if (environment[`X${x}Y${y}`].substrate==='water'){
				console.log('found water',x,y);
				return 1
			} else {
				return 0
			}
		} else {
			return 0
		}
	}

	const absorbWater=(x,y,plant)=>{
		let water=0;
		for(var i = 1;i<=plant.roots;i++){
			water+=checkForWater(x+i,y);
			water+=checkForWater(x-i,y);
			water+=checkForWater(x,y+i);
			water+=checkForWater(x,y-i);
			water+=checkForWater(x+i,y+i);
			water+=checkForWater(x-i,y-i);
			water+=checkForWater(x-i,y+i);
			water+=checkForWater(x+i,y-i);
		}
		return water;
	}
	
	const removeLeaf=plant=>{
		dispatch(updateOrganism(plant.locID,'leaves',plant.leaves-1));
		if(plant.leaves<=0){
			dispatch(removeOrganism(plant.locID));
		}
	}

	const plantRecUptake=plant=>{
		let sugarChange=plant.sugar+plant.leaves;
		let waterChange=absorbWater(plant.x,plant.y,plant)+plant.water-plant.leaves;
		dispatch(updateOrganism(plant.locID,'sugar',sugarChange));
		dispatch(updateOrganism(plant.locID,'water',waterChange));
		if(plant.water<=plant.leaves){
			removeLeaf(plant)
		}
	}

	const updateStats=(player)=>{
		dispatch(selectOrganism(null))
		let plantScore=0;
		for (const locID in populations){
			let plant=populations[locID];
			if(plant){
				if(plant.playerID===player.id){
					plantRecUptake(plant);
					plantScore+=plant.leaves;
					if(plant.flowers>0){
						dispatch(updatePlayer(
							game.turn,
							player,
							'seed',
							player.seed+plant.species.seedProduction
						))
						if(plant.species.name==='forb'){
							dispatch(removeOrganism(locID));
						} else if (plant.species.name==='shrub'){
							dispatch(updateOrganism(locID,'flowers',0));
						}
					}
				}
			}
		}
		dispatch(updatePlayer(
			game.turn,
			player,
			'score',
			player.seed+plantScore
		))
	}



	const grid={
		position:'fixed',
		bottom:'0',
		left:'0',
		zIndex:'2',
		backgroundColor:'white',
		borderRadius:'1rem',
		padding:'1rem',
		margin:'1rem',
		width:'50%',
		display:'grid',
		gridTemplateColumns:'50% 50%'
	}
	return (
		<div style={grid}>
			<div>
				<h2>Day:{game.day} of {game.length}</h2>
				<p>{currentPlayer.name}</p>
				<p>Seed:{currentPlayer.seed}</p>
				<p>Score:{currentPlayer.score}</p>
				<button onClick={turnChanger}>Change Turn</button>
			</div>
			{
				game.selectOrg ? 
				<PlantDetail locID={game.selectOrg} />: 
				<div>
					<h2>How To Play</h2>
					<p>Click soil to plant seed</p>
					<p>Plants compete for water, so find a good spot</p>
					<p>Click plants to select them</p>
					<p>Spend sugar to grow</p>
				</div>
			}
		</div>
	)
}

const mapStateToProps=state=>{
	return{
		...state
	}
}

export default connect(mapStateToProps)(PlayerDetail)