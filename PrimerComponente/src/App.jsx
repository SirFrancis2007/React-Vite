import { useState } from 'react';
import profile from './assets/Profile.jpg'; 

function App() {
  return (
    <Card
      name="Fran García"
      role="Desarrollador Jr."
      foto={profile}
      RedesSociales={['Facebook', 'Instagram', 'GitHub']}
      email="fran@example.com"
    />
  );
}

function Card({ name, role, foto, RedesSociales, email }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{role}</p>
      <img src={foto} alt={name} style={{ width: '150px', borderRadius: '15%' }} />

      <div>
        {RedesSociales.map(red => (
          <h3 key={red}>{red}</h3>
        ))}
      </div>

      <a href={`mailto:${email}`}>Contactar</a>
    </div>
  );
}

export default App;
