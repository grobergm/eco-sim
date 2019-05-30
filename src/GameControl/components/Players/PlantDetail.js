import React from 'react';
import { connect } from 'react-redux';
import { addWater , addSugar, growLeaf, growRoot } from '../../../Populations/redux/actionCreator';

function PlantDetail({
	locID,
	environment,
	populations,
	dispatch
}){
const plant=populations[locID];
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
		dispatch(addWater(locID,water))
	}
	
	const photosynthesis=()=>{
		let sugarChange=0;
		let waterChange=0;
		if(plant.water>=(plant.leaves*2)){
			sugarChange+=plant.leaves;
			waterChange-=(plant.leaves*2);
		}
		dispatch(addSugar(locID,sugarChange));
		dispatch(addWater(locID,waterChange));
	}

	const growNewLeaf=()=>{
		if (plant.sugar>=plant.leaves*2){
			dispatch(growLeaf(locID))
		}
	}

	const growNewRoot=()=>{
		if (plant.sugar>=plant.roots*2){
			dispatch(growRoot(locID))
		}
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
					<p onClick={growNewLeaf}>Grow Leaf</p>
				</div>
				<div>
					<h2>Roots</h2>
					<p>Stage: {plant.roots}</p>
					<p onClick={()=>{absorbWater(plant.x,plant.y)}}>Water Uptake</p>
					<p onClick={growNewRoot} >Grow Roots</p>
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