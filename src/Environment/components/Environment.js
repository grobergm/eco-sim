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
	function handlePlantSeed(locID,x,y,substrate){
		if (substrate==='soil'
			&& playerTurn.seed>0
			&& !props.populations[locID]){
			const id=v4();
			const organism={
				id:id,
				locID:locID,
				x:x,
				y:y,
				playerID:playerTurn.id,
				leaves:1,
				roots:1,
				water:0,
				sugar:0,
				flowers:0,
				species:playerTurn.species,
			}
			props.dispatch(addOrganism(locID,organism));
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

	return (
		<div style={grid}>
			{
				Object.keys(props.environment).map(locID=>{
					return (
					<div key={locID} style={habitat}>
						<Habitat 
							habitat={props.environment[locID]}
							x={props.environment[locID].x}
							y={props.environment[locID].y}
							locID={locID}
							onPlantSeed={handlePlantSeed}
							/>
							{
								props.populations[locID] ? 
								<Plant 
									plant={props.populations[locID]}
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