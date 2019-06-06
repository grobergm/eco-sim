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
		growOrgan(
			'flowers',
			plant.genetics.flowers.max.value,
			plant.genetics.flowers.cost.value
		)
	}

	const grid={
		display:'grid',
		gridTemplateColumns:'repeat(4,1fr)'
	}

	return(
			<div style={grid}>
				<div>
					<h3 style={{marginTop:'4rem'}}>Sugar</h3>
					<p>{plant.sugar}</p>
					<h3>Water</h3>
					<p>{plant.water}</p>
				</div>
				<div>
					<h2>Leaves</h2>
					<p>{plant.leaves}</p>
					<p>cost {plant.genetics.leaves.cost.value} sugar</p>
					<button onClick={growLeaf}>Grow</button> 
				</div>
				<div>
					<h2>Roots</h2>
					<p>{plant.roots}</p>
					<p>cost {plant.genetics.roots.cost.value} sugar</p>
					<button onClick={growRoot}>Grow</button>
				</div>
				<div>
					<h2>Flowers</h2>
					<p>{plant.flowers}</p>
					<p>cost {plant.genetics.flowers.cost.value} sugar</p>
					<button onClick={growFlower}>Grow</button>
				</div>
			</div>
		)

}

const mapStateToProps=state=>{
	return{...state}
}

export default connect(mapStateToProps)(PlantDetail)