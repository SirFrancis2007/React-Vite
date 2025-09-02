import { useState, useEffect } from "react";
import CharacterSelect from "./components/CharacterSelect";
import CharacterPreview from "./components/CharacterPreview";
import FichaForm from "./components/FichaForm";

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [selectedUrl, setSelectedUrl] = useState("");
  const [characterData, setCharacterData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await fetch("https://swapi.dev/api/people/?page=1");
        const data = await res.json();
        setCharacters(data.results);
      } catch (err) {
        console.error("Error cargando personajes:", err);
      }
    };
    fetchCharacters();
  }, []);

  // Cargar detalle del personaje seleccionado
  useEffect(() => {
    if (!selectedUrl) return;
    const fetchCharacter = async () => {
      setLoading(true);
      try {
        const res = await fetch(selectedUrl);
        const data = await res.json();

        const planetRes = await fetch(data.homeworld);
        const planet = await planetRes.json();

        setCharacterData({ ...data, homeworldName: planet.name });
      } catch (err) {
        console.error("Error cargando detalle:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacter();
  }, [selectedUrl]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">🌌 Ficha Galáctica</h1>

      <CharacterSelect
        characters={characters}
        onSelect={setSelectedUrl}
      />

      {characterData && (
        <>
          <CharacterPreview character={characterData} />
          <FichaForm character={characterData} />
        </>
      )}
    </div>
  );
}
