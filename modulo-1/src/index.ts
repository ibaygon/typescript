// src/index.ts
import { calcularMedia, calcularMediana, filtrarAtipicos } from "./math-utils.js";


const datos = [10, 20, 30, 1000];
const datosVacios: number[] = [];
const limite = 100;

console.log("Datos:", datos);

// Media
const media = calcularMedia(datos);
const mediaVacia = calcularMedia(datosVacios);
console.log("Media:", media);
console.log("Media (array vacío):", mediaVacia);

// Mediana
const mediana = calcularMediana(datos);
const medianaVacia = calcularMediana(datosVacios);
console.log("Mediana:", mediana);
console.log("Mediana (array vacío):", medianaVacia);

// Filtrar atípicos
const filtrados = filtrarAtipicos(datos, limite);
console.log(`Filtrados con límite ${limite}:`, filtrados);
