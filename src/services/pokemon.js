const POKEMON_API_URL = process.env.REACT_APP_POKEMON_API

export async function getPokemons () {
  const response = await fetch(`${POKEMON_API_URL}pokemon`)
  const data = await response.json()

  let pokemons = await Promise.all(data.results.map(async(pokemon) => await getPokemonByUrl(pokemon.url)))
  return pokemons
}

async  function getPokemonByUrl (pokemonUrl) {
  const response = await fetch(pokemonUrl)
  const pokemon = await response.json()
  return sanitizePokemonData(pokemon)
}

function sanitizePokemonData(pokemon) {
  return {...pokemon, image: pokemon.sprites.front_default}
}

