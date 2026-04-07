export function obtenerRecurso(endpoint) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const respuesta = {
                ok: true,
                datos: null
            };
            resolve(respuesta);
        }, 500);
    });
}
