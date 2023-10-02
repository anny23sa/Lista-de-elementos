
import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Buscador from './components/Buscador';
import Alert from './components/Alert';
import colaboradoresData from './data/colaboradores';

const App = () => {
  const [colaboradores, setColaboradores] = useState(colaboradoresData);
  const [alerta, setAlerta] = useState({ mensaje: '', tipo: '' });

  const agregarColaborador = (nuevoColaborador) => {
    // Generar un nuevo ID para el colaborador
    const nuevoID = colaboradores.length + 1;
    const colaboradorConID = { id: nuevoID, ...nuevoColaborador };
    // Agregar el nuevo colaborador a la lista
    setColaboradores([...colaboradores, colaboradorConID]);
    // Mostrar mensaje de éxito
    setAlerta({ mensaje: 'Colaborador agregado con éxito', tipo: 'success' });
  };

  const eliminarColaborador = (id) => {
    // Filtrar los colaboradores para eliminar el que coincide con el ID
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    // Actualizar la lista de colaboradores
    setColaboradores(nuevosColaboradores);
    // Mostrar mensaje de éxito
    setAlerta({ mensaje: 'Colaborador eliminado con éxito', tipo: 'success' });
  };

  const buscarColaboradores = (terminoBusqueda) => {
    // Filtrar los colaboradores por el término de búsqueda
    const colaboradoresFiltrados = colaboradoresData.filter((colaborador) => {
      // Puedes definir tu propia lógica de búsqueda aquí
      return (
        colaborador.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        colaborador.correo.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        colaborador.cargo.toLowerCase().includes(terminoBusqueda.toLowerCase())
      );
    });
    // Actualizar la lista de colaboradores
    setColaboradores(colaboradoresFiltrados);
  };

  return (
    <div className="container">
      <h1>Administración de Colaboradores</h1>
      <Formulario onAgregar={agregarColaborador} />
      <Alert mensaje={alerta.mensaje} tipo={alerta.tipo} />
      <Buscador onBuscar={buscarColaboradores} />
      <Listado colaboradores={colaboradores} eliminarColaborador={eliminarColaborador} />
    </div>
  );
};

export default App;

/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/
