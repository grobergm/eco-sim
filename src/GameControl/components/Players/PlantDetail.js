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
					<h2>Shoots</h2>
					<p>Leaves: {plant.leaves}</p>
					<p>Sugar: {plant.sugar}</p>
					{
						(plant.species.name==='forb'&& plant.leaves<3) ||
						(plant.species.name==='shrub'&& plant.leaves<5) ?
						<p onClick={growLeaf}>
							Grow Leaf ({plant.leaves*2} sugar)
						</p> :
						<p onClick={growFlower}>
							Grow Flower (6 sugar)</p>
					}
				</div>
				<div>
					<h2>Roots</h2>
					<p>Stage: {plant.roots}</p>
					<p>Water: {plant.water}</p>
					<p onClick={growRoot}>
						Grow Roots (cost {plant.roots*2} sugar)</p>
				</div>
				
				
			</div> : null
		)

}

const mapStateToProps=state=>{
	return{...state}
}

export default connect(mapStateToProps)(PlantDetail)