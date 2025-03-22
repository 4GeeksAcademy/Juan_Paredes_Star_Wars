import React,{useContext} from "react";
import planetData from "../../json/planets.json"
// import {Context} from "../store/appContext"
import { useNavigate } from "react-router-dom";




const CardPlanets= ({name,terrain,population,id}) => {
    const navigate = useNavigate();
    const handlerDetail=(id)=>{
         navigate(`/planets/${id}`); 
    }
    const planetImage = planetData.planets.find(p => p.id === id)?.image || "https://via.placeholder.com/300";
    return (
        <div className="card" style={{width: "18rem",flex:"none",margin:"10px"}}>
            <img src={planetImage} className="card-img-top" alt={name} style={{height:"25rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Terrain : {terrain}</p>
                    <p className="card-text">Population: {population}</p>
                    <button className="btn btn-primary"onClick={handlerDetail} >Learn more!</button>
                    <button className="favorite-btn">
                        <i className="fa-solid fa-heart"></i>
                    </button>
                </div>
        </div>
    )

}
export default CardPlanets;