import { useEffect, useState } from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard/PokemonCard';
import { getPokemons } from './services/pokemon';


function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(()=>{
    getPokemons()
    .then(setPokemons)
  }, [])

  return (
    <div className="App">
      {
        pokemons.map((pokemon, index) => <PokemonCard key={index} pokemon={pokemon} toggleFavourite={()=>{}}/> )
      }
    </div>
  );
}

export default App;
