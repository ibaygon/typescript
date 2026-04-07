# Funciones matematicas (Módulo 1)

Este documento describe las funciones implementadas en el proyecto del Módulo 1.  
Las funciones están escritas originalmente en TypeScript y compiladas a JavaScript dentro de la carpeta `dist/`.


##  "calcularMedia(datos: number[]): number | null"

## Descripción
Calcula la media aritmética de un conjunto de números.

## Parámetros
- "datos": array de números.

### Comportamiento
- Si el array está vacío → devuelve "null".
- Si contiene valores → devuelve la media aritmética.

### Implementación (versión compilada)

```js
export function calcularMedia(datos) {
    if (datos.length === 0)
        return null;
    const suma = datos.reduce((acc, n) => acc + n, 0);
    return suma / datos.length;
}
