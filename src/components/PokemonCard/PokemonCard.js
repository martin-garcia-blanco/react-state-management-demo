

import  './index.css'

function PokemonCard ({pokemon}){
  return (
  <div className="card"> 
    <img src={pokemon.image} alt={pokemon.name} />
    <span className='card__text'>{pokemon.name}</span>
  </div>)
}

export default PokemonCard