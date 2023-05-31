import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPokemonById } from '../../services'

const Info = (props) => {
  const [pokemon, setPokemon] = useState({})
  const { id } = useParams()
  useEffect(() => {
    // agora fazer o codigo em getPokemon que adicione as habilidades, types e moves
    getPokemonById(id).then((pokemon) => setPokemon(pokemon))
  })

  return (
    <div>
      <Link to="/">Voltar</Link>
      <img src={pokemon.image} />
      <h1>{pokemon.name}</h1>
      <h3>Movies</h3>
      <ul>
        <li></li>
      </ul>
      <h3>Abilities</h3>
      <ul>
        <li>
          <div>
          {/* <h4>{pokemon.abilities.map((ability) => (
              ability.name
            ))}</h4> */}

            <p>Descrição</p>
          </div>
        </li>
      </ul>
      <h3>Type</h3>
      <ul>
        <li></li>
      </ul>
    </div>
  )
}

export default Info
