/*
 * Action types
 */

export const FETCH_POKEMONS = 'FETCH_POKEMONS'

/*
 * Actions
 */

export const fetchPokemons = () => {
  return { type: FETCH_POKEMONS}
}
