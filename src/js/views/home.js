import React, {useContext,useEffect}from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/index.css";
import {Context} from "../store/appContext"
import CardCharacter from "../component/CardCharacter.jsx";
import CardPlanets from "../component/CardPlanets.jsx";
import CardVehicles from "../component/CardVehicles.jsx";
import Navbar from "../component/Navbar.jsx";

export const Home = () => {
	const {actions,store}=useContext(Context)
	useEffect(()=>{
		actions.getCharacters()
		actions.getPlanets()
		actions.getVehicles()
	},[]);
	return (

		<div className="text-center mt-5">
			<Navbar/>
	
			<h2> Characters </h2>
				<div className="d-flex flex-row overflow-scroll">
					{
						store.characters.map((personaje,index)=>(
							<CardCharacter
								key={index}
								name={personaje.name}
								hairColor={personaje.hair_color}
								eyeColor={personaje.eye_color}
								gender={personaje.gender}
								id={index}
							/>
						))
					}
				</div>
				<h2> Planets </h2>
				<div className="d-flex flex-row overflow-scroll">
					{
						store.planets.map((planeta,index)=>(
							<CardPlanets
								key={index}
								name={planeta.name}
								terrain={planeta.terrain}
								population={planeta.population}
								id={index}
							/>
						))
					}
				</div>
				<h2> Vehicles </h2>
				<div className="d-flex flex-row overflow-scroll">
					{
						store.vehicles.map((vehiculo,index)=>(
							<CardVehicles
								key={index}
								name={vehiculo.name}
								model={vehiculo.model}
								manufacturer={vehiculo.manufacturer}
								id={index}
							/>
						))
					}
				</div>






		</div>
	)
}



