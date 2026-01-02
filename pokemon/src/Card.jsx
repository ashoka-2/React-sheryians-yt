import React from 'react'

const Card = ({ pokemon, colors, mainTypes }) => {

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

  const id = pokemon.id

  const pokeTypes = pokemon.types.map(
    t => t.type.name
  )

  const image =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`

  const type = mainTypes.find(t =>
    pokeTypes.includes(t)
  )
  const color = colors[type]

  return (
    <div
      className="pokemon"
      style={{ border: `2px solid ${color}` }}
    >

     

      <div className="img-container">
        <img
          loading="lazy"
          src={image}
          alt={name}
          
        />
      </div>

      <div className="info">
        <h3 className="name">{name}</h3>

        <div className="extra-info">
          <div>
            <small>Weight</small> 
            <h5>{pokemon.weight / 10} kg</h5>
          </div>

          <div>
            <small>Height</small>
            <h5>{pokemon.height / 10} m</h5>
          </div>
        </div>

        <div className="type-data">
          <small>Type:</small>
          <h5>
            {pokeTypes
              .map(t => t[0].toUpperCase() + t.slice(1))
              .join(" / ")}
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Card
