import React, { useState } from 'react';

const Formulario = ({ onAgregar }) => {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoColaborador({ ...nuevoColaborador, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar que los campos no estén vacíos
    if (!nuevoColaborador.nombre || !nuevoColaborador.correo || !nuevoColaborador.edad || !nuevoColaborador.cargo || !nuevoColaborador.telefono) {
      // Mostrar mensaje de error
      // ...
    } else {
      // Agregar el nuevo colaborador a la lista
      onAgregar(nuevoColaborador);
      // Limpiar el formulario
      setNuevoColaborador({
        nombre: '',
        correo: '',
        edad: '',
        cargo: '',
        telefono: '',
      });
    }
  };

  return (
    <div>
      <h2>Agregar Colaborador</h2>
      <form onSubmit={handleSubmit}>
        {/* Campos del formulario aquí */}
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default Formulario;