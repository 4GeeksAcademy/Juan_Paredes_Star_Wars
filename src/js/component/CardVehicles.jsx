import React from "react";
import vehicleData from "../../json/vehiculos.json"




const CardVehicles = ({ name, model, manufacturer, id }) => {
    const vehicleImage = vehicleData.vehiculos.find(p => p.id === id)?.image || "https://via.placeholder.com/300";
    return (
        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
            <img src={vehicleImage} className="card-img-top" alt={name} style={{ height: "25rem" }} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text"> Model : {model}</p>
                <p className="card-text"> Manufacturer: {manufacturer}</p>
                <button className="btn btn-primary">Learn more!</button>
                <button className="favorite-btn">
                    <i className="fa-solid fa-heart"></i>
                </button>

            </div>
        </div>
    )

}
export default CardVehicles;