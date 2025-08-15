import React from 'react';
import './styles/CharacterDetail.css';

function CharacterDetail({ character, onBack }) {
  return (
    <div className="detail">
      <button onClick={onBack} className="back-button">⬅ Volver</button>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <ul>
        <li><strong>Estado:</strong> {character.status}</li>
        <li><strong>Especie:</strong> {character.species}</li>
        <li><strong>Género:</strong> {character.gender}</li>
        <li><strong>Origen:</strong> {character.origin.name}</li>
      </ul>
    </div>
  );
}

export default CharacterDetail;
