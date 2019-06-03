export const addOrganism=(id,organism)=>{
	return {
		type:'ADD_ORGANISM',
		id:id,
		organism:organism
	}
}

export const removeOrganism=(id)=>{
	return{
		type:'REMOVE_ORGANISM',
		id:id
	}
}

export const updateOrganism=(id,key,value)=>{
	return{
		type:'UPDATE_ORGANISM',
		id:id,
		key:key,
		value:value
	}
}
