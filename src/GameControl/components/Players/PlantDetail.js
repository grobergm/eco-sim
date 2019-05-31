import React from 'react';
import { connect } from 'react-redux';
import { updateOrganism } from '../../../Populations/redux/actionCreator';

function PlantDetail({
	locID,
	environment,
	populations,
	dispatch
}){
const plant=populations[locID];
// Below could be refactored to be more generic (for other competition).
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

	const absorbWater=(x,y)=>{
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
		dispatch(updateOrganism(locID,'water',plant.water+water))
	}
	
	const photosynthesis=()=>{
		let sugarChange=0;
		let waterChange=0;
		if(plant.water>=(plant.leaves*2)){
			sugarChange+=plant.leaves;
			waterChange+=(plant.leaves*2);
		}
		dispatch(updateOrganism(locID,'sugar',plant.sugar+sugarChange));
		dispatch(updateOrganism(locID,'water',plant.water-waterChange));
	}

	const growOrgan=(organ,limit,cost)=>{
		if(plant.sugar>cost&&plant[organ]<limit){
			dispatch(updateOrganism(locID,'sugar',plant.sugar-cost))
			dispatch(updateOrganism(locID,organ,plant[organ]+1))
		}
	}

	const growLeaf=()=>{
		growOrgan(
			'leaves',
			plant.species.leafLimit,
			plant.leaves*2,
		)
	}

	const growRoot=()=>{
		growOrgan(
			'roots',
			plant.species.rootLimit,
			plant.roots*2,
		)
	}

	const growFlower=()=>{
		growOrgan('flowers',1,6)
	}

	const grid={
		display:'grid',
		gridTemplateColumns:'50% 50%'
	}

	return(
			<div style={grid}>
				<div>
					<h2>Leaves</h2>
					<p>Stage: {plant.leaves}</p>
					<p onClick={photosynthesis}>Photosynthesis</p>
					{
						(plant.species.name==='forb'&& plant.leaves<3) ||
						(plant.species.name==='shrub'&& plant.leaves<5) ?
						<p onClick={growLeaf}>Grow Leaf</p> :
						<p onClick={growFlower}>Grow Flower</p>
					}
				</div>
				<div>
					<h2>Roots</h2>
					<p>Stage: {plant.roots}</p>
					<p onClick={()=>{absorbWater(plant.x,plant.y)}}>Water Uptake</p>
					<p onClick={growRoot} >Grow Roots</p>
				</div>
				<p>Water: {plant.water}</p>
				<p>Sugar: {plant.sugar}</p>
			</div> : null
		)

}

const mapStateToProps=state=>{
	return{...state}
}

export default connect(mapStateToProps)(PlantDetail)