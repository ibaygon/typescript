export async function obtenerRecurso(url) {
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
        throw new Error("Error al obtener recurso");
    }
    return respuesta.json();
}
