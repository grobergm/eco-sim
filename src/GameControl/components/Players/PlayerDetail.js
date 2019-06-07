import React from 'react';
import Player from './Player';
import PlantDetail from './PlantDetail';
import './Players.css'
import { connect } from 'react-redux';
import { updateOrganism , removeOrganism } from '../../../Populations/redux/actionCreator';
import { changeTurn , selectOrganism, updatePlayer, removePlayer} from '../../redux/actionCreator';



function PlayerDetail({
	game,
	dispatch,
	environment,
	populations,
	onToggleMenu,
	open}){
	const currentPlayer=game.players[game.turn];

	const turnChanger=()=>{
		dispatch(selectOrganism(null))
		if (game.day===game.length){
			dispatch(changeTurn('lastTurn'))
		} else if(game.turn===game.players.length-1){
			updateStats()
			dispatch(changeTurn('lastPlayer'));
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
		if (currentPlayer.genetics.environment.airMoisture){
			water+=2;
		}
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
		return water
	}
	
	const removeLeaf=plant=>{
		dispatch(updateOrganism(plant.locID,'leaves',plant.leaves-1));
		if(plant.leaves<=0||plant.water<0){
			dispatch(removeOrganism(plant.locID));
		}
	}

	const plantRecUptake=plant=>{
		if(plant.sugar<=plant.leaves+plant.roots){
			let sugarChange=plant.sugar+plant.leaves;
			dispatch(updateOrganism(plant.locID,'sugar',sugarChange));
		}
		if(plant.water<=plant.leaves+plant.roots){
			let waterChange=absorbWater(plant.x,plant.y,plant)+plant.water-plant.leaves;
			dispatch(updateOrganism(plant.locID,'water',waterChange));
		}
		if(plant.water<plant.leaves){
			removeLeaf(plant);
		}
	}

	const updateStats=()=>{
		game.players.forEach(player=>{
			let newSeed=player.seed;
			for (const locID in populations){
				let plant=populations[locID];
				if(plant){
					if(plant.playerID===player.id){
						plantRecUptake(plant);
						if(plant.flowers>0){
							newSeed+=plant.flowers*plant.genetics.flowers.seed.value
							dispatch(updateOrganism(locID,'flowers',0));
						}
					}
				}
			}
			dispatch(updatePlayer(game.turn,player,'seed',newSeed))
		})
	}

	const openMenu={
		position:'fixed',
		bottom:'0',
		left:'0',
		zIndex:'2',
		backgroundColor:'rgba(0,0,0,0.9)',
		color:'white',
		borderRadius:'1rem',
		padding:'1rem',
		margin:'1rem',
		display:'grid',
		gridTemplateColumns:'50% 50%'
	}

	const collapsedMenu={
		position:'fixed',
		top:'0',
		left:'0',
		zIndex:'2',
		backgroundColor:'var(--red)',
		color:'white',
		borderRadius:'1rem',
		padding:'1rem',
		margin:'1rem'
	}

	if(open){
		return (
			<div className='player-detail' style={openMenu}>
				<div>
					<h3 onClick={onToggleMenu}>Hide Menu</h3>
					<h3>Day: {game.day} of {game.length}</h3>
					<Player player={currentPlayer} />
					<h3>Seed:{currentPlayer.seed}</h3>
					<button onClick={turnChanger}>Change Turn</button>
				</div>
				{
					game.selectOrg ? 
					<PlantDetail locID={game.selectOrg} />: 
					<div>
						<h3>How To Play</h3>
						<p>Click soil to plant seed</p>
						<p>Plants compete for water, so find a good spot</p>
						<p>Click plants to select them</p>
						<p>Spend sugar to grow</p>
					</div>
				}
			</div>
		)
	} else{
		return(
			<div 
			style={collapsedMenu}
			onClick={onToggleMenu}>Open Menu</div>
		)
	}
	
}

const mapStateToProps=state=>{
	return{
		...state
	}
}

export default connect(mapStateToProps)(PlayerDetail)