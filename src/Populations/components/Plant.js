import React from 'react';
import Leaf from './Leaf';
import Flower from './Flower';
import './Plant.css';

import shrub1 from '../img/shrub/shrub1.png';
import shrub2 from '../img/shrub/shrub2.png';
import shrub3 from '../img/shrub/shrub3.png';
import shrub4 from '../img/shrub/shrub4.png';
import shrub5 from '../img/shrub/shrub5.png';
import shrubFlower from '../img/shrub/shrubFlower.png';
import forb1 from '../img/forb/forb1.png';
import forb2 from '../img/forb/forb2.png';
import forb3 from '../img/forb/forb3.png';
import forbFlower from '../img/forb/forbFlower.png';

const shrubLeaves=[shrub1,shrub2,shrub3,shrub4,shrub5];
const forbLeaves=[forb1,forb2,forb3];

function Plant({plant, onSelect, onHighlight, selected}){

	const leaves={
		position:'absolute',
		top:'40%',
		left:'50%',
		transform:'translate(-50%,-50%)',
		zIndex:'1',
		border:onHighlight(plant)? 
			'2px solid yellow':'none',
		backgroundColor: selected === plant.locID ? 
			'yellow':'transparent',
		borderRadius:'50%',
		padding:'1rem'
	}
	const roots={
		position:'absolute',
		top:'50%',
		left:'50%',
		transform:'translate(-50%,-50%)',
		backgroundColor:'rgba(0,0,0,0.5)',
		borderRadius:'50%',
		width:`${plant.roots*2}vw`,
		height:`${plant.roots*2}vw`
	}
	const flowers={
		position:'absolute',
		top:'0',
		left:'40%',
		transform:'translate(-50%,-50%)',
	}
	const allLeaves=[];
	const allFlowers=[];
	for (var i=1;i<=plant.leaves;i++){
		allLeaves.push(<Leaf key={i} />)
	}
	for (var i=1;i<=plant.flowers;i++){
		allFlowers.push(<Flower key={i} />)
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