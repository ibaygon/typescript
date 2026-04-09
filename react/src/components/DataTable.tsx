
export interface Columna<T> {
  clave: keyof T;
  titulo: string;
}

interface DataTableProps<T> {
  datos: T[];
  columnas: Columna<T>[];
}

export function DataTable<T>({ datos, columnas }: DataTableProps<T>) {
  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          {columnas.map((col) => (
            <th
              key={String(col.clave)}
              style={{ border: "1px solid black", padding: "8px" }}
            >
              {col.titulo}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {datos.map((fila, i) => (
          <tr key={i}>
            {columnas.map((col) => (
              <td
                key={String(col.clave)}
                style={{ border: "1px solid black", padding: "8px" }}
              >
                {String(fila[col.clave])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
