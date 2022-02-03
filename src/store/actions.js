/*
 * Action types
 */

export const FETCH_POKEMONS = 'FETCH_POKEMONS'
export const TOGGLE_FAVOURITE_POKEMON = 'TOGGLE_FAVOURITE_POKEMON'

/*
 * Actions
 */

export const fetchPokemons = () => {
  return { type: FETCH_POKEMONS}
}

export const toggleFavouritePokemon = (pokemonName) => {
  return { type: TOGGLE_FAVOURITE_POKEMON, payload: pokemonName }
}
