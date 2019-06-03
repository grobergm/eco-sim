import React from 'react';
import Plant from '../../../Populations/components/Plant';
import PlantDetail from './PlantDetail';
import { connect } from 'react-redux';
import { updateOrganism } from '../../../Populations/redux/actionCreator';
import { changeTurn , selectOrganism, modifySeed } from '../../redux/actionCreator';



function PlayerDetail({game,dispatch,environment,populations}){

	const turnChanger=()=>{
		dispatch(selectOrganism(null))
		if (game.day===game.length){
			dispatch(changeTurn('lastTurn'))
		} else if(game.turn===game.players.length-1){
			dispatch(changeTurn('lastPlayer'));
			newDayUpdates()
		} else {
			dispatch(changeTurn('changeTurn'));
		}
	}

	const checkForWater=(x,y)=>{
		if(populations[`X${x}Y${y}`]){
				// this needs to be scaled by distance
				return -populations[`X${x}Y${y}`].roots
		} else if(environment[`X${x}Y${y}`]){
			if (environment[`X${x}Y${y}`].substrate==='water'){
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
		dispatch(updateOrganism(plant.locID,'water',plant.water+water))
	}
	
	const photosynthesis=(plant)=>{
		let sugarChange=0;
		let waterChange=0;
		if(plant.water>=(plant.leaves*2)){
			sugarChange+=plant.leaves;
			waterChange+=(plant.leaves*2);
		}
		dispatch(updateOrganism(plant.locID,'sugar',plant.sugar+sugarChange));
		dispatch(updateOrganism(plant.locID,'water',plant.water-waterChange));
	}

	const newDayUpdates=()=>{
		for (const locID in populations){
			let plant=populations[locID];
	 		photosynthesis(plant);
			absorbWater(plant.x,plant.y,plant)
			if(plant.flowers>0){
				dispatch(modifySeed(plant.species.seedProduction,plant.playerID))
				if(plant.species.name==='forb'){
					dispatch(updateOrganism(locID,'leaves',0));
				} else if (plant.species.name==='shrub'){
					dispatch(updateOrganism(locID,'flowers',0));
				}
			}
		}
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
				<p>{game.players[game.turn].name}</p>
				<p>Seed:{game.players[game.turn].seed}</p>
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