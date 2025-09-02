import { useState, useEffect } from "react";

export default function FichaForm({ character }) {
  const [apodo, setApodo] = useState("");
  const [favorito, setFavorito] = useState(false);
  const [resumen, setResumen] = useState(null);

  // Recuperar ficha guardada en localStorage
  useEffect(() => {
    const saved = localStorage.getItem("fichaGalactica");
    if (saved) {
      setResumen(JSON.parse(saved));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (apodo.trim().length < 2) {
      alert("El apodo debe tener al menos 2 caracteres.");
      return;
    }

    const ficha = {
      personaje: character.name,
      altura: character.height,
      nacimiento: character.birth_year,
      planeta: character.homeworldName,
      apodo,
      favorito,
    };

    setResumen(ficha);
    localStorage.setItem("fichaGalactica", JSON.stringify(ficha));
  };

  return (
    <div className="p-4 bg-gray-800 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-2">📝 Crear ficha</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Apodo en tu ficha:</label>
          <input
            type="text"
            value={apodo}
            onChange={(e) => setApodo(e.target.value)}
            className="block w-full text-black p-2 rounded mt-1"
          />
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={favorito}
              onChange={(e) => setFavorito(e.target.checked)}
              className="mr-2"
            />
            ¿Es tu favorito?
          </label>
        </div>

        <button type="submit">Guardar ficha</button>
      </form>

      {resumen && (
        <div>
          <h3> Resumen de ficha</h3>
          <p><strong>Personaje:</strong> {resumen.personaje}</p>
          <p><strong>Altura:</strong> {resumen.altura}</p>
          <p><strong>Nacimiento:</strong> {resumen.nacimiento}</p>
          <p><strong>Planeta:</strong> {resumen.planeta}</p>
          <p><strong>Apodo:</strong> {resumen.apodo}</p>
          <p><strong>Favorito:</strong> {resumen.favorito ? "Sí" : "No"}</p>
        </div>
      )}
    </div>
  );
}
