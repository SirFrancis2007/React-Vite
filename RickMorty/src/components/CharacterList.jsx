import React, { useEffect, useState } from 'react';
import './styles/CharacterList.css';

function CharacterList({ onSelectCharacter }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  return (
    <div className="grid">
      {characters.map(char => (
        <div key={char.id} className="card" onClick={() => onSelectCharacter(char)}>
          <img src={char.image} alt={char.name} />
          <h3>{char.name}</h3>
          <p>{char.species}</p>
        </div>
      ))}
    </div>
  );
}

export default CharacterList