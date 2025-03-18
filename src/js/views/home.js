import React, {useContext,useEffect}from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Context} from "../store/appContext"
import CardCharacter from "../component/CardCharacter.jsx";
export const Home = () => {
	const {actions,store}=useContext(Context)
	useEffect(()=>{
		actions.getCharacters()
	},[]);
	return (

		<div className="text-center mt-5">
			<h1>Star Wars</h1>
			<h2> Characters </h2>
				<div className="d-flex flex-row overflow-scroll">
					{
						store.characters.map((personaje,index)=>(
							<CardCharacter
								key={index}
								name={personaje.name}
								eyeColor={personaje.eye_color}
								gender={personaje.gender}
								id={index}
							/>
						))
					}
				</div>
				<h2> Planets </h2>


		</div>
	)
}



