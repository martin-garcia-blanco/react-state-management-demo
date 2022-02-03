import { combineReducers } from 'redux'
import { toggleFavourite } from '../services/pokemon'
import pokemonsMock from '../services/pokemonsMock'
import { FETCH_POKEMONS, TOGGLE_FAVOURITE_POKEMON } from './actions'

function pokemonsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_POKEMONS:
      return pokemonsMock
    case TOGGLE_FAVOURITE_POKEMON:
      return toggleFavourite(state, action.payload)
    default:
      return state
  }
}


const pokemonStore = combineReducers({
  pokemons: pokemonsReducer
})

export default pokemonStore