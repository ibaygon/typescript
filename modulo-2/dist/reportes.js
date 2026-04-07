export function generarReporte(m) {
    switch (m.estado.tipo) {
        case "pendiente":
            return "La matrícula está pendiente de revisión.";
        case "aprobada":
            return `Matrícula aprobada el ${m.estado.fecha}.`;
        case "rechazada":
            return `Matrícula rechazada. Motivo: ${m.estado.motivo}.`;
        default:
            const _exhaustivo = m.estado;
            return _exhaustivo;
    }
}
