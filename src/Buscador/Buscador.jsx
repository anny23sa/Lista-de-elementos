import React, { useState } from 'react';

const Buscador = ({ onBuscar }) => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

  const handleInputChange = (e) => {
    setTerminoBusqueda(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Llamar a la función de búsqueda con el término de búsqueda
    onBuscar(terminoBusqueda);
  };

  return (
    <div>
      <h2>Buscar Colaborador</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar..."
          value={terminoBusqueda}
          onChange={handleInputChange}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default Buscador;