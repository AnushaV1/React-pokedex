import React from "react";
import PokeList from "./PokeList";
import Pokecard from "./Pokecard"

const imageSource = (id) => 
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;


function Pokedex(props = PokeList) {
    return PokeList.map((poke, k) => (
        <Pokecard key = {k} name={poke.name} type={poke.type} exp = {poke.base_experience} image = {imageSource(poke.id)} />
        ))

}

export default Pokedex;