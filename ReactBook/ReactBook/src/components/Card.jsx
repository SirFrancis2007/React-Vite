import { useState } from 'react'
import './styles/Card.css';


function Card () {
    const [likes, setLikes] = useState(0);
    const [divierte, setDivierte] = useState(0);
    const [sorprende, setSorprende] = useState(0);

    const [comentario, setComentario] = useState("");
    const [comentarios, setComentarios] = useState([]); // Lista de comentarios
    const [error, setError] = useState("");

    const handleComentar = () => {
        if (!comentario.trim()) {
        setError("El comentario no puede estar vacío");
        return;
        }

        setComentarios([...comentarios, comentario]); // Agrega el nuevo comentario a la lista
        setComentario("");
        setError("");
    };

    return (
        <div className='container-card'>
            <img className='image'
                src="https://infozport.com/wp-content/uploads/2022/12/Argentina-Campeon.jpg"
                alt="Post"
            />
            <div className="content">
                <p className='Title-Post'>¡¡¡¡Argentina Campeona Del Mundo!!!! De Qatar al Mundo.</p>

                {/* Reacciones */}
                <div className='container-button'>
                    <button onClick={() => setLikes(likes + 1)}>❤️ {likes}</button>
                    <button onClick={() => setDivierte(divierte + 1)}>😂 {divierte}</button>
                    <button onClick={() => setSorprende(sorprende + 1)}>😲 {sorprende}</button>
                </div>

                {/* Formulario */}
                <div className='container-form'>
                    <input
                        type="text"
                        placeholder="Comparte tu comentario"
                        value={comentario}
                        onChange={(e) => setComentario(e.target.value)}
                    />
                    <button onClick={handleComentar}>Comentar</button>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                </div>

                {/* Lista de comentarios */}
                <div className='Container-Comentarios'>
                    {comentarios.map((c, index) => (
                    <p key={index}>{c}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card