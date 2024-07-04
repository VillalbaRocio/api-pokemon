import React, { useState } from 'react';
import './App.css';

function App() {
  const [listaPokemon, setlistaPokemon] = useState([]);

  const fetchPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => {
        return response.json()
      }).then(data => {
        const pokemonNombres = data.results.map(pokemon => pokemon.name);
        setlistaPokemon(pokemonNombres);
      }).catch(err => {
        console.log('Ocurrió un error', err)
      })
  };

return (
  <div class= "App">
    <div className="contenedor-pokemon">
      <button className= "btn" onClick={fetchPokemon}>Fetch Pokemon</button>
      <ul>
        {listaPokemon.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </div>
  </div>
  );
}

export default App;