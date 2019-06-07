import React from 'react';
import Leaf from './Leaf';
import Flower from './Flower';
import './Plant.css';

function Plant({plant, onSelect, onHighlight, selected}){

	const leaves={
		position:'absolute',
		top:'40%',
		left:'50%',
		transform:'translate(-50%,-50%)',
		zIndex:'1',
		backgroundColor: selected === plant.locID ? 
			'yellow':'transparent',
		borderRadius:'50%',
		padding:'1.5rem'
	}
	const roots={
		position:'absolute',
		top:'50%',
		left:'35%',
		transform:'translate(-50%,-50%)',
		backgroundColor:'rgba(0,0,0,0.5)',
		borderRadius:'50%',
		width:`${plant.roots*2}vw`,
		height:`${plant.roots*2}vw`
	}
	const flowers={
		position:'absolute',
		top:'-10%',
		left:'30%',
		zIndex:'2',
		transform:'translate(-50%,-50%)',
	}
	const allLeaves=[];
	const allFlowers=[];
	for (var i=1;i<=plant.leaves;i++){
		allLeaves.push(<Leaf color={plant.color} key={i} />)
	}
	for (var i=1;i<=plant.flowers;i++){
		allFlowers.push(<Flower color={plant.color} key={i} />)
	}
	return (
		<div onClick={()=>{onSelect(plant.locID)}}>
			<span style={flowers} className='flowers'>
			{allFlowers}
			</span>
			<span className='rosette' style={leaves}>
			{allLeaves}
			</span>
			<span style={roots}></span>
		</div>
	)
}

export default Plant