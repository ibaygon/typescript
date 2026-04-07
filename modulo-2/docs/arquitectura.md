# Módulo 2 Arquitectura de acceso a datos

## Modelo de datos

He definido dos entidades principales:

-Estudiante
He usado "interface" para "estudiantes" y "asignatura" porque representan entidades de dominio extensibles. Los "id" son "readonly" para mostrar su inmutabilidad.

-Asignatura
Entidad que representa una materia universitaria. También se usa "interface" por su naturaleza jerárquica y extensible.

## EstadoMatricula

La unión "estado-matricula" da tres estados válidos:
"ACTIVA", "SUSPENDIDA" y "FINALIZADA". Cada uno tiene una propiedad "tipo" literal que permite a TypeScript estrechar el tipo en un switch y garantizar que todos los casos están cubiertos.

## GenerarReporte
La funcion "generarReporte" recibe un "estado-matricula" y usa un switch y garantiza exhaustividad mediante never

## ObtenerRecurso<T>

"obtenerRecurso<T>" devuelve "Promise<RespuestaAPI<T>>". El genérico "T permite reutilizar el mismo cliente para distintos tipos de datos sin perder tipado fuerte. "RespuestaAPI<T>" abstrae la forma de las respuestas de red (éxito, datos, error) separándola del contenido concreto.
