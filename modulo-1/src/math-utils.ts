export function calcularMedia(datos: number[]): number | null {
  if (datos.length === 0) return null;
  const suma = datos.reduce((acc, n) => acc + n, 0);
  return suma / datos.length;
}

export function calcularMediana(datos: number[]): number | null {
  if (datos.length === 0) return null;

  const ordenados = [...datos].sort((a, b) => a - b);
  const mitad = Math.floor(ordenados.length / 2);

  if (ordenados.length % 2 === 0) {
    const a = ordenados[mitad - 1]!;
    const b = ordenados[mitad]!;
    return (a + b) / 2;
  } else {
    return ordenados[mitad]!;
  }
}

export function filtrarAtipicos(datos: number[], limite: number): number[] {
  return datos.filter((n) => Math.abs(n) <= limite);
}
