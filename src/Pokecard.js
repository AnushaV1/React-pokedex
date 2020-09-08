import React from "react";
import './Pokecard.css';


function Pokecard ({name, image, type, exp}){

    return (
        <div className="pokecard">
            <h3 className="pokecard-name">{name}</h3>
            <img className="pokecard-img" src={image} />
            <p>Type:  {type}</p>
            <p>Exp: {exp}</p>
        </div>
    )
}

export default Pokecard;