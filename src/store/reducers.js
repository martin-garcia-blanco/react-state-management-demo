import { combineReducers } from 'redux'
import pokemonsMock from '../services/pokemonsMock'
import { FETCH_POKEMONS } from './actions'

function pokemonsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_POKEMONS:
      return pokemonsMock
    default:
      return state
  }
}


const pokemonStore = combineReducers({
  pokemons: pokemonsReducer
})

export default pokemonStore