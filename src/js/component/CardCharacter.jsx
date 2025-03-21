import React from "react";
import peopleData from "../../json/people.json"




const CardCharacter = ({name,hairColor,eyeColor,gender,id}) => {
    const peopleImage = peopleData.people.find(p => p.id === id)?.image || "https://via.placeholder.com/300";
    return (
        <div className="card" style={{width: "18rem",flex:"none",margin:"10px"}}>
            <img src={peopleImage} className="card-img-top" alt={name} style={{height:"25rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Gender : {gender}</p>
                    <p className="card-text">Hair Color: {hairColor}</p>
                    <p className="card-text">Eye color : {eyeColor}</p>
               
                    <button className="btn btn-primary" onClick={()=>handlerDetail()}>Learn more!</button>
                    <button className="favorite-btn">
                    <i className="fa-solid fa-heart"></i>
                     </button>
                </div>
        </div>
    )

}
export default CardCharacter;