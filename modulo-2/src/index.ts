import { generarReporte, MatriculaActiva } from "./domain/types/estado-matricula.js";
import { obtenerRecurso } from "./services/api-client.js";

async function main() {
  const estado: MatriculaActiva = {
    tipo: "ACTIVA",
    asignaturas: []
  };

  console.log(generarReporte(estado));

  const respuesta = await obtenerRecurso<{ mensaje: string }>("/ping");
  console.log(respuesta);
}

main();

