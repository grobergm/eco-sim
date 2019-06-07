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
		if(plant.sugar>=cost&&plant[organ]<limit){
			dispatch(updateOrganism(locID,'sugar',plant.sugar-cost))
			dispatch(updateOrganism(locID,organ,plant[organ]+1))
		}
	}

	const growLeaf=()=>{
		growOrgan(
			'leaves',
			plant.genetics.leaves.max.value,
			plant.genetics.leaves.cost.value,
		)
	}

	const growRoot=()=>{
		growOrgan(
			'roots',
			plant.genetics.roots.max.value,
			plant.genetics.leaves.cost.value,
		)
	}

	const growFlower=()=>{
		if(plant.leaves>=plant.genetics.flowers.minLeaves.value){
			growOrgan(
				'flowers',
				3,
				plant.genetics.flowers.cost.value
			)
		}
	}

	const grid={
		display:'grid',
		gridTemplateColumns:'repeat(3,1fr)'
	}

	return(
			<div style={grid}>
				<div>
					<h3>Leaves</h3>
					<h3>{plant.leaves}</h3>
					<p>cost {plant.genetics.leaves.cost.value} sugar</p>
					<button onClick={growLeaf}>Grow</button> 
				</div>
				<div>
					<h3>Roots</h3>
					<h3>{plant.roots}</h3>
					<p>cost {plant.genetics.roots.cost.value} sugar</p>
					<button onClick={growRoot}>Grow</button>
				</div>
				<div>
					<h3>Flowers</h3>
					<h3>{plant.flowers}</h3>
					<p>cost {plant.genetics.flowers.cost.value} sugar</p>
					<button onClick={growFlower}>Grow</button>
				</div>
				<div>
					<h3>Sugar</h3>
					<h3>{plant.sugar}</h3>
				</div>
				<div>
					<h3>Water</h3>
					<h3>{plant.water}</h3>
				</div>
			</div>
		)

}

const mapStateToProps=state=>{
	return{...state}
}

export default connect(mapStateToProps)(PlantDetail)