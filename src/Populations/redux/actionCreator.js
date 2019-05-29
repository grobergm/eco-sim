export const addOrganism=(location,organism)=>{
	return {
		type:'ADD_ORGANISM',
		location:location,
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