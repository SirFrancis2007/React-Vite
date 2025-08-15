import React, { useState } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <div className="App">
      <h1>Rick & Morty</h1>
      {selectedCharacter ? (
        <CharacterDetail character={selectedCharacter} onBack={() => setSelectedCharacter(null)} />
      ) : (
        <CharacterList onSelectCharacter={setSelectedCharacter} />
      )}
    </div>
  );
}

export default App
