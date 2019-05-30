import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

import { modifySeed , selectOrganism  } from '../../GameControl/redux/actionCreator';

import Habitat from './Habitat'
import { makeGrid } from '../redux/actionCreator';

import Plant from '../../Populations/components/Plant';
import { addOrganism } from '../../Populations/redux/actionCreator';



function Environment(props){
	let playerTurn=props.game.players[props.game.turn];
	function handlePlantSeed(location,substrate){
		if (substrate==='soil'
			&& playerTurn.seed>0
			&& !props.populations[location]){
			const id=v4();
			const organism={
				id:id,
				location:location,
				x:parseInt(location[1]),
				y:parseInt(location[3]),
				playerID:playerTurn.id,
				leaves:1,
				roots:1,
				water:1,
				sugar:1,
				species:playerTurn.species,
			}
			props.dispatch(addOrganism(location,organism));
			props.dispatch(modifySeed(-1,playerTurn.id));
		}
	}

	function handleSelect(locID){
		console.log(locID);
		if(playerTurn.id=== props.populations[locID].playerID){
			props.dispatch(selectOrganism(locID))
		}
	}

	function handleHighlight(plant){
		if(plant.playerID===playerTurn.id){
			return true
		} else return false
	}

	const grid={
		display:'grid',
		gridTemplateColumns:`repeat(${props.game.mapSize},1fr)`,
	}
	const habitat={
		position:'relative',
		width:'100%',
		height:'100%'
	}

	// function handleDisplayPlant(location){
	// 	Object.keys(props.populations).map(id=>{
	// 		console.log(id,props.populations[id].location,location)
	// 		if(props.populations[id].location === location){
	// 			console.log('match');
	// 			return props.populations[id]
	// 		}
	// 	})
	// }
	return (
		<div style={grid}>
			{
				Object.keys(props.environment).map(location=>{
					return (
					<div key={location} style={habitat}>
						<Habitat 
							habitat={props.environment[location]}
							location={location}
							onPlantSeed={handlePlantSeed}
							/>
							{
								props.populations[location] ? 
								<Plant 
									plant={props.populations[location]}
									onSelect={handleSelect} 
									onHighlight={handleHighlight}/>
								:
								null
							}
					</div>
					)
				})
			}
		</div>
	)
}

const mapStateToProps=state=>{
	return {...state}
}

export default connect(mapStateToProps)(Environment)