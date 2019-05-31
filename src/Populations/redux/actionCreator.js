export const addOrganism=(id,organism)=>{
	return {
		type:'ADD_ORGANISM',
		id:id,
		organism:organism
	}
}

export const addWater=(id,water)=>{
	return{
		type:'WATER_UPTAKE',
		id:id,
		water:water
	}
}

export const addSugar=(id,sugar)=>{
	return{
		type:'ADD_SUGAR',
		id:id,
		sugar:sugar
	}
}

export const growLeaf=(id)=>{
	return{
		type:'GROW_LEAF',
		id:id,
	}
}

export const growRoot=(id)=>{
	return{
		type:'GROW_ROOT',
		id:id,
	}
}

export const growFlower=(id)=>{
	return{
		type:'GROW_FLOWER',
		id:id,
	}
}