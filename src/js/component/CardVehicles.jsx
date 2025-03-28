
import React,{useContext} from "react";
import {Context} from "../store/appContext"
import { useNavigate } from "react-router-dom";
import vehicleData from "../../json/vehiculos.json"




const CardVehicles = ({ name, model, manufacturer, id}) => {
    const { actions } = useContext(Context); 
        const navigate = useNavigate();
    const vehicleImage = vehicleData.vehiculos.find(p => p.id === id)?.image || "https://via.placeholder.com/300";
    const handlerDetail = (id) => {
        navigate(`/vehicle/${id}`); //
      };
    return (
        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
            <img src={vehicleImage} className="card-img-top" alt={name} style={{ height: "25rem" }} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text"> Model : {model}</p>
                <p className="card-text"> Manufacturer: {manufacturer}</p>
                <button className="btn btn-primary"onClick={()=>handlerDetail(id+1)}>Learn more!</button>
                <button
                    className="btn btn-outline-warning"
                    onClick={() => actions.addFavorite({
                        name:name,
                        url: `/vehicle/${id+1}`,
                        type: "Vehicle"
                    })}
                >
                    ❤️
                </button>

            </div>
        </div>
    )

}
export default CardVehicles;