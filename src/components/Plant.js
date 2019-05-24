import React from 'react';

import shrub0 from '../img/plants/shrub/shrub0.png';
import shrub1 from '../img/plants/shrub/shrub1.png';
import shrub2 from '../img/plants/shrub/shrub2.png';
import shrub3 from '../img/plants/shrub/shrub3.png';
import shrub4 from '../img/plants/shrub/shrub4.png';
import forb0 from '../img/plants/forb/forb0.png';
import forb1 from '../img/plants/forb/forb1.png';
import forb2 from '../img/plants/forb/forb2.png';

const shrubLeaves=[shrub0,shrub1,shrub2,shrub3,shrub4];
const forbLeaves=[forb0,forb1,forb2];

function Plant(props){
	function returnImage(){
		switch(props.plant.type){
			case 'forb':
				return forbLeaves[props.plant.leaves] 
			case 'shrub':
				return shrubLeaves[props.plant.leaves] 
		}
	}
	let image=returnImage();
	const highlight={
		backgroundColor:props.turn===props.plant.player?'yellow':'transparent',
		width:'100%',
		height:'100%'
	}
	const leaves={
		position:'absolute',
		top:'30%',
		left:'50%',
		transform:'translate(-50%,-50%)',
		zIndex:'1'
	}
	const roots={
		position:'absolute',
		top:'50%',
		left:'50%',
		transform:'translate(-50%,-50%)',
		backgroundColor:'rgba(0,0,0,0.5)',
		borderRadius:'50%',
		width:`${props.plant.roots*2}vw`,
		height:`${props.plant.roots*2}vw`
	}
	return (
		<div style={highlight}>
			<img style={leaves} src={image} />
			<span style={roots}></span>
		</div>
	)
}

export default Plant