import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext"
import peopleData from "../../json/people.json"



const CharacterDetail = () => {
    const peopleImage = peopleData.people.find(p => p.id === id)?.image || "https://via.placeholder.com/300";
    const { characterId } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await fetch(`https://swapi.dev/api/people/${characterId}/`);
                const data = await response.json();
                setCharacter(data);
            } catch (error) {
                console.error("Error fetching character:", error);
            }
        };

        fetchCharacter();
    }, [characterId]);

    if (!character) {
        return (
            <div>
                <p>Loading character...</p>
                <img src="https://i.gifer.com/4V0b.gif" alt="Loading..." width="50" />
            </div>
        );
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow-lg" style={{ maxWidth: "720px", width: "100%" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img 
                        src={peopleImage}
                        className="img-fluid rounded-start" 
                        alt={name}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h2 className="card-title text-center">{character?.name || "Loading..."}</h2>
                        <p className="card-text">
                            This is a wider card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </p>
                        <p className="card-text">
                            <small className="text-body-secondary">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    )
}
export default CharacterDetail;