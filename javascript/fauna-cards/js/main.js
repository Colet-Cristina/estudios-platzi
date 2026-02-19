"use strict";

// Creamos array para todos los animales
const animals = [
  {
    name: `Lince Ibérico`,
    habitat: `Doñana y Sierra Morena`,
    status: `En peligro de extinción`,
    family: `felino`,
    image: `lince.png`,
  },
  {
    name: `Gato Montés`,
    habitat: `Bosques y matorrales de la Península`,
    status: `Interés especial (amenazado por hibridación)`,
    family: `felino`,
    image: `gato.png`,
  },
  {
    name: `Lobo Ibérico`,
    habitat: `Sierra de la Culebra y Galicia`,
    status: `En expansión controlada`,
    family: `canido`,
    image: `lobo.png`,
  },
  {
    name: `Águila Imperial`,
    habitat: `Montes de Toledo`,
    status: `Vulnerable`,
    family: `ave`,
    image: `aguila.png`,
  },
  {
    name: `Quebrantahuesos`,
    habitat: `Pirineos y Picos de Europa`,
    status: `En peligro de extinción`,
    family: `ave`,
    image: `gyp.png`,
  },

  {
    name: `Oso Pardo`,
    habitat: `Cordillera Cantábrica y Pirineos`,
    status: `En peligro de extinción`,
    family: `ursido`,
    image: `oso.png`,
  },
];
const subtitle = `Fauna Ibérica`;
const textSubtitle = `Especies Protegidas`;

// Selección del contenedor de html
const app = document.querySelector(`#app`);

if (app) {
  let htmlContent = `<h2 class="subtitle">${subtitle}</h2>`;
  htmlContent += `<p class="text-subtitle js_textSubtitle">${textSubtitle}</p>`;

  // Recorremos el array para generar las tarjetas
  animals.forEach((animal) => {
    // Nombre en mayúsculas para el título
    let displayTitle = animal.name.toUpperCase();

    htmlContent += `
      <section class="card">
        <h3 class="card-title js_cardTitle">${displayTitle}</h3>
        <img src="./images/${animal.image}" alt="${animal.name}" class="card-img">
        <p class="card-description js_cardDescription">
          ${animal.name}, ${animal.family} que habita en ${animal.habitat}.
        </p>
        <p><strong>${animal.status}</strong></p>
      </section>
    `;
  });

  app.innerHTML = htmlContent;

  console.log(`¡Se han cargado ${animals.length} animales!`);
}
