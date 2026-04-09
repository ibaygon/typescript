import { useState } from "react";
import { DataTable } from "./components/DataTable";

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

const usuariosIniciales: Usuario[] = [
  { id: 1, nombre: "Pietro", email: "pietro@example.com" },
  { id: 2, nombre: "Ana", email: "ana@example.com" },
];

function App() {
  const [usuarios] = useState<Usuario[]>(usuariosIniciales);

  // Estado de edición usando Partial<T>
  const [edicion, setEdicion] = useState<Partial<Usuario>>({});

  return (
    <div style={{ padding: 20 }}>
      <h1>Tabla de Usuarios</h1>

      <DataTable<Usuario>
        datos={usuarios}
        columnas={[
          { clave: "id", titulo: "ID" },
          { clave: "nombre", titulo: "Nombre" },
          { clave: "email", titulo: "Email" },
        ]}
      />

      <h2>Edición temporal (Partial&lt;Usuario&gt;)</h2>
      <pre>{JSON.stringify(edicion, null, 2)}</pre>

      <button
        onClick={() => setEdicion({ nombre: "Nuevo nombre temporal" })}
        style={{ marginTop: 10 }}
      >
        Simular edición
      </button>
    </div>
  );
}

export default App;
