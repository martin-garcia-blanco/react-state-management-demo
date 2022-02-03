import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import PokemonCard from './components/PokemonCard/PokemonCard';
import { fetchPokemons } from './store/actions';


function App() {
  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.pokemons)

  useEffect(()=>{
    dispatch(fetchPokemons())
  }, [dispatch])

  const togggleFavouritePokemon = () => {
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
