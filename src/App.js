import './App.css';
import PokemonCard from './components/PokemonCard/PokemonCard';


function App() {
  const pokemons = []


  return (
    <div className="App">
      {
        pokemons.map(pokemon => <PokemonCard pokemon={pokemon} toggleFavourite={()=>{}}/> )
      }
    </div>
  );
}

export default App;
