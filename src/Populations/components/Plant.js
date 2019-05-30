import React from 'react';
import { connect } from 'react-redux';
import { addWater , addSugar, growLeaf } from '../redux/actionCreator';
import shrub1 from '../img/shrub/shrub1.png';
import shrub2 from '../img/shrub/shrub2.png';
import shrub3 from '../img/shrub/shrub3.png';
import shrub4 from '../img/shrub/shrub4.png';
import shrub5 from '../img/shrub/shrub5.png';
import forb1 from '../img/forb/forb1.png';
import forb2 from '../img/forb/forb2.png';
import forb3 from '../img/forb/forb3.png';

const shrubLeaves=[shrub1,shrub2,shrub3,shrub4,shrub5];
const forbLeaves=[forb1,forb2,forb3];

function Plant(
{plant,
 environment,
 game,
 populations,
 dispatch,
 onSelect,
 onHighlight}){

	function checkForWater(x,y){
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

	function absorbWater(x,y){
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
		return water;
	}
	
	function photosynthesis(){
		let sugarChange=0;
		let waterChange=0;
		if(plant.water>=(plant.leaves*2)){
			sugarChange+=plant.leaves;
			waterChange-=(plant.leaves*2);
		}
		return {
			sugarChange,
			waterChange,
		}
	}

	function returnImage(){
		switch(plant.species){
			case "forb":
				return forbLeaves[plant.leaves-1] 
			case "shrub":
				return shrubLeaves[plant.leaves-1] 
		}
	}

	let image=returnImage();

	const leaves={
		position:'absolute',
		top:'30%',
		left:'50%',
		transform:'translate(-50%,-50%)',
		zIndex:'1',
		backgroundColor:onHighlight(plant)? 
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
	return (

		<div onClick={
			()=>{
			onSelect(plant);
			dispatch(addWater(`X${plant.x}Y${plant.y}`,absorbWater(plant.x,plant.y)));
			dispatch(addSugar(`X${plant.x}Y${plant.y}`,photosynthesis().sugarChange))
			dispatch(addWater(`X${plant.x}Y${plant.y}`,photosynthesis().waterChange));
				if (plant.sugar>=plant.leaves*2){
				dispatch((growLeaf(plant.location)))
			}
			}
		}>
			<img style={leaves} src={image} />
			<span style={roots}></span>
		</div>
	)
}

const mapStateToProps=state=>{
	return{
		...state
	}
}

export default connect(mapStateToProps)(Plant)