import { useState } from "react";

function Form() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que recargue la página
    alert(`Tu comentario: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Comentario:
        <input
          placeholder="Comentario"
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Enviar</button>
      <button type="reset" onClick={() => setInputValue("")}>
        Limpiar
      </button>
    </form>
  );
}

export default Form;

