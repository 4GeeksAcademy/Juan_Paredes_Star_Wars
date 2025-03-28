import React, { useContext } from "react";
import planetData from "../../json/planets.json"
import { Context } from "../store/appContext"
import { useNavigate } from "react-router-dom";




const CardPlanets = ({ name, terrain, population, id }) => {
    const { actions } = useContext(Context); 
    const navigate = useNavigate();
    const handlerDetail = (id) => {
        navigate(`/planet/${id}`); //
    };

    const planetImage = planetData.planets.find(p => p.id === id)?.image || "https://via.placeholder.com/300";
    return (
        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
            <img src={planetImage} className="card-img-top" alt={name} style={{ height: "25rem" }} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Terrain : {terrain}</p>
                <p className="card-text">Population: {population}</p>
                <button className="btn btn-primary" onClick={() => handlerDetail(id+1)} >Learn more!</button>
                <button
                    className="btn btn-outline-warning"
                    onClick={() => actions.addFavorite({
                        name: name,
                        url: `/planet/${id+1}`,
                        type: "Planet"
                    })}
                >
                    ❤️
                </button>
            </div>
        </div>
    )

}
export default CardPlanets;