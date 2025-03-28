import React, { useContext } from "react";
import peopleData from "../../json/people.json"
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext"




const CardCharacter = ({ name, hairColor, eyeColor, gender, id }) => {
    const peopleImage = peopleData.people.find(p => p.id === id)?.image || "https://via.placeholder.com/300";
    const { actions, store } = useContext(Context)
    const navigate = useNavigate();
    const handlerDetail = (id) => {
        navigate(`/character/${id}`); //
    };


    return (
        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
            <img src={peopleImage} className="card-img-top" alt={name} style={{ height: "25rem" }} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Gender : {gender}</p>
                <p className="card-text">Hair Color: {hairColor}</p>
                <p className="card-text">Eye color : {eyeColor}</p>

                <button className="btn btn-primary" onClick={() => handlerDetail(id + 1)}>Learn more!</button>
                <button
                    className="btn btn-outline-warning"
                    onClick={() => actions.addFavorite({
                        name: name,
                        url: `/character/${id+1}`,
                        type: "Character"
                    })}
                >
                    ❤️
                </button>
            </div>
        </div>
    )

}
export default CardCharacter;