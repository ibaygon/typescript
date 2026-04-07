import { generarReporte } from "./domain/types/estado-matricula.js";
import { obtenerRecurso } from "./services/api-client.js";
async function main() {
    const estado = {
        tipo: "ACTIVA",
        asignaturas: []
    };
    console.log(generarReporte(estado));
    const respuesta = await obtenerRecurso("/ping");
    console.log(respuesta);
}
main();
