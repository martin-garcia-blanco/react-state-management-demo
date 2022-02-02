import { useEffect, useState } from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard/PokemonCard';
import { getPokemons, toggleFavourite } from './services/pokemon';


function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(()=>{
    getPokemons()
    .then(setPokemons)
  }, [])

  const togggleFavouritePokemon = (pokemonName) => {
    setPokemons(toggleFavourite(pokemons, pokemonName))
  }

  return (
    <div className="App">
      {
        pokemons.map((pokemon, index) => <PokemonCard key={index} pokemon={pokemon} toggleFavourite={togggleFavouritePokemon}/> )
      }
    </div>
  );
}

export default App;
