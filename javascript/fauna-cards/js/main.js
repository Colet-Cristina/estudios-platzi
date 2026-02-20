"use strict";

// SECCIÓN DE QUERY-SELECTOR
// Éstos son los elementos que nos traemos de la página HTML y usamos en el código
const app = document.querySelector(`#app`);

// SECCIÓN DE DATOS
// Variables globales que almacenan la información principal de la aplicación y se usan por todo el fichero.
const subtitle = `Fauna Ibérica`;
const textSubtitle = `Especies Protegidas`;

// Creamos array para los animales
const animals = [
  {
    commonName: `Lince Ibérico`,
    scientificName: `lynx pardinus`,
    habitat: `Doñana y Sierra Morena`,
    status: `En peligro de extinción`,
    family: `Felino`,
    image: `lince.png`,
    population: 2100,
  },
  {
    commonName: `Gato Montés`,
    scientificName: `felis silvestris`,
    habitat: `Bosques y matorrales de la Península`,
    status: `Interés especial (amenazado por hibridación)`,
    family: `Felino`,
    image: `gato.png`,
    population: 5000,
  },
  {
    commonName: `Lobo Ibérico`,
    scientificName: `canis lupus signatus`,
    habitat: `Sierra de la Culebra y Galicia`,
    status: `En expansión controlada`,
    family: `Canido`,
    image: `lobo.png`,
    population: 2500,
  },
  {
    commonName: `Águila Imperial`,
    scientificName: `aquila adalberti`,
    habitat: `el centro y sur de España principalmente`,
    status: `Vulnerable`,
    family: `Ave`,
    image: `aguila.png`,
    population: 800,
  },
  {
    commonName: `Quebrantahuesos`,
    scientificName: `gypaetus barbatus`,
    habitat: `Pirineos y Picos de Europa`,
    status: `En peligro de extinción`,
    family: `Ave`,
    image: `gyp.png`,
    population: 1000,
  },
  {
    commonName: `Buitre Negro`,
    scientificName: `aegypius monachus`,
    habitat: `Monfragüe y Sierra de San Pedro`,
    status: `Vulnerable`,
    family: `Ave`,
    image: `monachus.png`,
    population: 2500,
  },

  {
    commonName: `Oso Pardo`,
    scientificName: `ursus arctos`,
    habitat: `Cordillera Cantábrica y Pirineos`,
    status: `En peligro de extinción`,
    family: `Ursido`,
    image: `oso.png`,
    population: 400,
  },
];

// Mapeo de colores
const statusStyles = {
  "En peligro de extinción": "#a52222",
  Vulnerable: "#1d5072",
};

if (app) {
  let htmlContent = "";

  // Recorremos el array para generar las tarjetas
  animals.forEach((animal) => {
    // Nombre en mayúsculas para el título
    const displayTitle = animal.commonName.toUpperCase();

    // .charAt(0) busca la primera letra y .toUpperCase() la convierte en mayúsculas .slice(1) para que no corte la fease
    const scientificFormat =
      animal.scientificName.charAt(0).toUpperCase() +
      animal.scientificName.slice(1);

    // 3. Creamos el string de estilo con interpolación.
    const textColor = statusStyles[animal.status] || `#382920`;
    const statusStyle = `color: ${textColor}`;

    htmlContent += `
      <section class="card">
        <h3 class="card-title js_cardTitle">${displayTitle}</h3>
        <p class="card-scientific"><i>${scientificFormat}</i></p> 
        <img src="./images/${animal.image}" alt="${animal.commonName}" class="card-img">
        <p class="card-description js_cardDescription">
          ${animal.family} que habita en ${animal.habitat}.
        </p>
        <p style="${statusStyle}"><strong>${animal.status}</strong></p>
      </section>
    `;
  });

  app.innerHTML = htmlContent;

  console.log(`¡Se han cargado ${animals.length} animales!`);
}
