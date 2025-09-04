import "../styles/CharacterSelect.css"

export default function CharacterSelect({ characters, onSelect }) {
    const handleChange = (e) => {
      onSelect(e.target.value);
    };
  
    return (
      <div className="mb-6">
        <label className="block mb-2">Selecciona un personaje:</label>
        <select
          onChange={handleChange}
          className="text-black p-2 rounded"
          defaultValue=""
        >
          <option value="" disabled>-- Elige uno --</option>
          {characters.map((char, i) => (
            <option key={i} value={char.url}>
              {char.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
  