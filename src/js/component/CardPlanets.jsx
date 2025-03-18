import React from "react";

import planetData from "../../json/planets.json"




const CardPlanets= ({name,terrain,population,id}) => {
    const peopleImage = planetData.planets.find(p => p.id === id)?.image || "https://via.placeholder.com/300";
    return (
        <div className="card" style={{width: "18rem",flex:"none",margin:"10px"}}>
            <img src={peopleImage} className="card-img-top" alt={name} style={{height:"25rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Terrain : {terrain}</p>
                    <p className="card-text">Population: {population}</p>
                    <button className="btn btn-primary">Learn more!</button>
                    <button className="favorite-btn">
                        <i className="fa-solid fa-heart"></i>
                    </button>
                </div>
        </div>
    )

}
export default CardPlanets;