import { useEffect, useState } from "react"
import axios from "axios"
import PokemonCard from "./Card"

const colors = {
  fire: "orange",
  grass: "lightgreen",
  electric: "yellow",
  water: "#70ffea",
  ground: "darkgrey",
  rock: "grey",
  fairy: "pink",
  poison: "greenyellow",
  bug: "#94ecbe",
  dragon: "orange",
  psychic: "#7c7db6",
  flying: "#fcca46",
  fighting: "darkgrey",
  normal: "lightgrey",
  ice: "#00f2f2",
  dark: "#4f7ecf",
  ghost: "#7685a7",
  steel: "steelblue",
}

const mainTypes = Object.keys(colors)

const App = () => {
  const [pokemons, setPokemons] = useState([])
  

  const getPokemon = async (id) => {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    )
    
    return res.data 
  }

  
  const fetchPokemonBatch = async () => {
    const batch = [] 
    for (let i = 1; i <= 100; i++) {
      try {
        const pokemon = await getPokemon(i)
        batch.push(pokemon)
      } catch (err) {
        console.error("Failed to load Pokémon", i)
      }
    }

    setPokemons(batch) 
  }

  useEffect(() => {
    fetchPokemonBatch()
  },[])

  return (
    <div>
      <div className="poke-container">
        {pokemons.map((elem,idx) => (
          <div key={idx}>
            <PokemonCard
            pokemon={elem}
            colors={colors}
            mainTypes={mainTypes}
          />  
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
