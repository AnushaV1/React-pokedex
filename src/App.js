import React from 'react';
import logo from './logo.svg';
import PokeList from './PokeList';
import Pokedex from './Pokedex'
import './App.css';

function App() {
  return (
    <Pokedex list={PokeList} />
  );
}

export default App;
