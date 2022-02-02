import './App.css';
import PokemonCard from './components/PokemonCard/PokemonCard';


function App() {
  const pokemons = []
  const toggleFavouritePokemon = () => {}

  return (
    <div className="App">
      {
        pokemons.map((pokemon, index) => <PokemonCard key={index} pokemon={pokemon} toggleFavourite={toggleFavouritePokemon}/> )
      }
    </div>
  );
}

export default App;
