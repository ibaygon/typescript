export interface RespuestaAPI<T> {
  ok: boolean;
  datos: T | null;
  error?: string;
}

export function obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const respuesta: RespuestaAPI<T> = {
        ok: true,
        datos: null
      };
      resolve(respuesta);
    }, 500);
  });
}

