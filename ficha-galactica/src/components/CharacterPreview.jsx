import "../styles/CharacterPreview.css"

export default function CharacterPreview({ character }) {
    return (
      <div className="CharacterPreview">
        <h2 className="text-xl font-semibold mb-2">Vista previa</h2>
        <p><strong>Nombre:</strong> {character.name}</p>
        <p><strong>Altura:</strong> {character.height} cm</p>
        <p><strong>Año de nacimiento:</strong> {character.birth_year}</p>
        <p><strong>Planeta natal:</strong> {character.homeworldName}</p>
      </div>
    );
  }
  