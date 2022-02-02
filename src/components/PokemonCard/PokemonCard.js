

import  './index.css'

function PokemonCard ({pokemon, toggleFavourite}){
  return (
  <div className={pokemon.isFavourite ? "card favourite" : "card"} onClick={()=>toggleFavourite(pokemon.name)}> 
    <img src={pokemon.image} alt={pokemon.name} />
    <span className='card__text'>{pokemon.name}</span>
  </div>)
}

export default PokemonCard