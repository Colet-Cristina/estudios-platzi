"use strict";

// 1. Definimos el nombre del animal (String)
let animalName = `Lince Ibérico`;

// 2. Analizamos su nombre (Length & Access)
// Queremos saber cuántas letras tiene y cuál es la última

let nameLength = animalName.length;
let lastLetter = animalName[nameLength - 1];

// 3. Interpolación con Backticks
let conservation = `en peligro de extinción`;
let animalFact = `El ${animalName} es un felino que está ${conservation}.`;

// 4. Transformación a mayúsculas (Uppercase)
let title = animalName.toUpperCase();

// --- CONSOLA ---
console.log(`Animal:`, title);
console.log(`El nombre tiene ${nameLength} caracteres.`);
console.log(`La última letra es la: ${lastLetter}`);
console.log(`Dato curioso:`, animalFact);

// 1. Hábitat
let lynxHabitat = `Doñana y Sierra Morena`;

// 2. Comprobamos si incluye "Pirineos"
// Usamos includes() que devuelve true o false
let isPirineos = lynxHabitat.includes(`Pirineos`);

// 3. Calculamos la longitud
let habitatLength = lynxHabitat.length;

// 4. Mostramos todo usando interpolación
console.log(`¿El hábitat incluye los Pirineos?: ${isPirineos}`);
console.log(`El texto del hábitat tiene ${habitatLength} caracteres.`);

// ------------------------------------------------------------------------------

// 1. Definimos el nombre completo
let birdName = `Quebrantahuesos`;

// 2. Tipo de ave
let birdType = `ave rapaz carroñera`;

// 2. Extraemos "huesos" usando .slice()
// Empezamos en la posición 9 hasta el final
let birdNickname = birdName.slice(9);

// 3. Hábitat
let boneHabitat = `Pirineos`;

// 4. Comprobamos si incluye "Pirineos"
let bonePirineos = boneHabitat.includes(`Pirineos`);

// . Mostramos el resultado con estilo (usando backticks siempre)
console.log(`El nombre oficial es: ${birdName}`);
console.log(`Su "apodo" extraído es: ${birdNickname}`);
console.log(`¿El hábitat incluye los Pirineos?: ${bonePirineos}`);
console.log(
  `El ${birdName} es un tipo de ${birdType} que habita en ${boneHabitat}`,
);
