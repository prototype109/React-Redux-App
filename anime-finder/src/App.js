import React from 'react';
import SearchForm from './components/SearchForm';
import AnimeCards from './components/AnimeCards';
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchForm />
      <AnimeCards />
    </div>
  );
}

export default App;
