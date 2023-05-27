import React,{useEffect, useState} from "react"
import {getPokemons} from "../services"
import { Link } from "react-router-dom"

//pokemon.sprites.official_artwork.front_default
export const Home = (props) => {
    const [pokemons, setPokemon] = useState([])
    useEffect( () =>{
        getPokemons.then((data)=>{
            setPokemon(data);
        });
    }, []);
    return (
        <>
            <h1>Os Pikomon</h1>
            <ul>
                {pokemons.map((pokemon, index) => {
                    return(
                    <li key={index}>
                        <Link to={`/info/${pokemon.id}`}>
                            <h2>{pokemon.name}</h2>
                            <img src={""}/>
                        </Link>
                    </li>
                    )
                })}
              
            </ul>
        </>
    )
}