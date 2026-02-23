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
    family: `Félido`,
    image: `lince.png`,
    population: 2100,
  },
  {
    commonName: `Gato Montés`,
    scientificName: `felis silvestris`,
    habitat: `Bosques y matorrales de la Península`,
    status: `Interés especial (amenazado por hibridación)`,
    family: `Félido`,
    image: `gato.png`,
    population: 5000,
  },
  {
    commonName: `Lobo Ibérico`,
    scientificName: `canis lupus signatus`,
    habitat: `Sierra de la Culebra y Galicia`,
    status: `En expansión controlada`,
    family: `Cánido`,
    image: `lobo.png`,
    population: 2500,
  },
  {
    commonName: `Águila Imperial`,
    scientificName: `aquila adalberti`,
    habitat: `Centro y sur de España`,
    status: `Vulnerable`,
    family: `Accipítrido`,
    image: `aguila.png`,
    population: 800,
  },
  {
    commonName: `Quebrantahuesos`,
    scientificName: `gypaetus barbatus`,
    habitat: `Pirineos y Picos de Europa`,
    status: `En peligro de extinción`,
    family: `Accipítrido`,
    image: `gyp.png`,
    population: 1000,
  },
  {
    commonName: `Buitre Negro`,
    scientificName: `aegypius monachus`,
    habitat: `Monfragüe, Sierra de San Pedro, Sierra de Guadarrama, Cabañeros y el Valle de Iruelas`,
    status: `Vulnerable`,
    family: `Accipítrido`,
    image: `monachus.png`,
    population: 2500,
  },

  {
    commonName: `Cigüeña Negra`,
    scientificName: `ciconia nigra`,
    habitat: `Sierras de Extremadura, Castilla-La Mancha y Castilla y León`,
    status: `Vulnerable`,
    family: `Ciconiido`,
    image: `ciconia.png`,
    population: 350,
  },

  {
    commonName: `Malvasía Cabeciblanca`,
    scientificName: `oxyura leucocephala`,
    habitat: `Humedales del sur y levante`,
    status: `En peligro de extinción`,
    family: `Anátido`,
    image: `malvasia.png`,
    population: 2500,
  },

  {
    commonName: `Oso Pardo`,
    scientificName: `ursus arctos`,
    habitat: `Cordillera Cantábrica y Pirineos`,
    status: `En peligro de extinción`,
    family: `Úrsido`,
    image: `oso.png`,
    population: 400,
  },

  {
    commonName: `Visón Europeo`,
    scientificName: `mustela lutreola`,
    habitat: `Ríos del norte de España (Ebro y afluentes)`,
    status: `En peligro crítico`,
    family: `Mustélido`,
    image: `vison.png`,
    population: 500,
  },

  {
    commonName: `Desmán Ibérico`,
    scientificName: `galemys pyrenaicus`,
    habitat: `Ríos limpios de montaña (norte y centro)`,
    status: `Vulnerable`,
    family: `Tálpido`,
    image: `desman.png`,
    population: 0, // Población muy fragmentada y difícil de censar
  },
  {
    commonName: `Tritón Jaspeado`,
    scientificName: `triturus marmoratus`,
    habitat: `Charcas y estanques de la mitad norte`,
    status: `Interés especial (amenazado por pérdida de hábitat)`,
    family: `Salamándrido`,
    image: `jaspe.png`,
    population: 10000,
  },
];

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

    // Mapeo de colores
    // const statusStyles = {
    //   "En peligro de extinción": "#a52222",
    //   Vulnerable: "#d4b83a",
    // };
    //  Creamos el string de estilo con interpolación.
    // const textColor = statusStyles[animal.status] || `#382920`;
    // const statusStyle = `color: ${textColor}`;

    // Lògica de color con  IF/ELSE
    let textColor = "#382920";

    if (animal.status === "En peligro de extinción") {
      textColor = "#a52222";
    } else if (animal.status === "Vulnerable") {
      textColor = "#d4b83a";
    }
    const statusStyle = `color: ${textColor}; font-weight: bold;`;

    htmlContent += `
      <section class="card">
        <h3 class="card-title js_cardTitle">${displayTitle}</h3>
        <p class="card-scientific"><i>${scientificFormat}</i></p> 
        <img src="./images/${animal.image}" alt="${animal.commonName}" class="card-img js_cardImg">
        <p class="card-category js_cardCategory"> ${animal.family} </p>
        <p class="card-description js_cardDescription"> <strong>Población principal:</strong> ${animal.habitat}.
        </p>
        <p style="${statusStyle}">${animal.status}</p>
      </section>
    `;
  });

  app.innerHTML = htmlContent;

  console.log(`¡Se han cargado ${animals.length} animales!`);
}
