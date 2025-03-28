const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters:[],
			planets:[],
			vehicles:[],
			favorites:[],
		},
		actions: {
			getCharacters: async () => {
				try {
					const response=  await fetch("https://swapi.dev/api/people")
					console.log(response)
					const data=await response.json()
					console.log("ESTA ES LA DATAAAAAAAA",data.results)
					setStore({characters:data.results})					
				} catch (error) {
					console.log(error)
					
				}
			
				
			},
			getPlanets:async()=>{
				try {
					const response=  await fetch("https://swapi.dev/api/planets")
					console.log(response)
					const data=await response.json()
					console.log(data.results)
					setStore({planets:data.results})
				} catch (error) {
					console.log(error)
					
				}


			},
			getVehicles:async()=>{
				try {
					const response=  await fetch("https://swapi.dev/api/starships")
					console.log(response)
					const data=await response.json()
					console.log("ESTA ES LA DATA DE LOS VEHICULOS",data.results)
					setStore({vehicles:data.results})					
				} catch (error) {
					console.log(error)
					
				}

			},
			addFavorite: (item) => {
				const store = getStore();
		
				const isAlreadyFavorite = store.favorites.some(fav => fav.name === item.name);
				
				if (!isAlreadyFavorite) {
					setStore({ favorites: [...store.favorites, item] });
				}
			},
			removeFavorite: (favName) => {
				const store = getStore();
				const updatedFavorites = store.favorites.filter(fav => fav.name !== favName);
				setStore({ favorites: updatedFavorites });
			},
			


			
			
		}
	};
};

export default getState;
