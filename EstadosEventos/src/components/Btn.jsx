import { useState } from "react";
import viteLogo from '/vite.svg'
import './styles/Btn.css'

function Btn() {
  const [contador, setCount] = useState(0);

  // Funciones para manejar los clics
  const incrementar = () => setCount(contador + 1);
  const decrementar = () => setCount(contador - 1);
  const reiniciar = () => setCount(0);

  return (
    <>
      <button onClick={incrementar}>Incremento</button>
      <button onClick={decrementar}>Decremento</button>
      <button onClick={reiniciar}>Reinicio</button>
      <span> N° {contador}</span>
    </>
  );
}

export default Btn;
