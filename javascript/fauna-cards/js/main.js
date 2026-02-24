"use strict";

// SECCIÓN DE QUERY-SELECTOR ========================================

const app = document.querySelector("#app");

// Filtros de texto y select
const inputName = document.querySelector(`.js_searchName`);
const selectFamily = document.querySelector(`.js_searchFamily`);
const selectStatus = document.querySelector(`.js_searchStatus`);

// Filtros de checkbox
const checkMammal = document.querySelector(`.js_checkMammal`);
const checkBird = document.querySelector(`.js_checkBird`);
const checkAmphibian = document.querySelector(`.js_checkAmphibian`);

// Botón de reset
const resetBtn = document.querySelector(`.js_resetBtn`);

// SECCIÓN DE DATOS  ========================================
// Variables globales que almacenan la información principal de la aplicación y se usan por todo el fichero.
const subtitle = `Fauna Ibérica`;
const textSubtitle = `Especies Protegidas`;

const animals = [
  {
    commonName: `Lince Ibérico`,
    scientificName: `lynx pardinus`,
    habitat: `Doñana y Sierra Morena`,
    status: `En peligro de extinción`,
    family: `Félido`,
    image: `lince.png`,
    type: `mamifero`,
  },
  {
    commonName: `Gato Montés`,
    scientificName: `felis silvestris`,
    habitat: `Bosques y matorrales de la Península`,
    status: `Interés especial (amenazado por hibridación)`,
    family: `Félido`,
    image: `gato.png`,
    type: `mamifero`,
  },
  {
    commonName: `Lobo Ibérico`,
    scientificName: `canis lupus signatus`,
    habitat: `Sierra de la Culebra y Galicia`,
    status: `En expansión controlada`,
    family: `Cánido`,
    image: `lobo.png`,
    type: `mamifero`,
  },
  {
    commonName: `Águila Imperial`,
    scientificName: `aquila adalberti`,
    habitat: `Centro y sur de España`,
    status: `Vulnerable`,
    family: `Accipítrido`,
    image: `aguila.png`,
    type: `ave`,
  },
  {
    commonName: `Quebrantahuesos`,
    scientificName: `gypaetus barbatus`,
    habitat: `Pirineos y Picos de Europa`,
    status: `En peligro de extinción`,
    family: `Accipítrido`,
    image: `gyp.png`,
    type: `ave`,
  },
  {
    commonName: `Buitre Negro`,
    scientificName: `aegypius monachus`,
    habitat: `Monfragüe, Sierra de San Pedro, Sierra de Guadarrama, Cabañeros y el Valle de Iruelas`,
    status: `Vulnerable`,
    family: `Accipítrido`,
    image: `monachus.png`,
    type: `ave`,
  },

  {
    commonName: `Cigüeña Negra`,
    scientificName: `ciconia nigra`,
    habitat: `Sierras de Extremadura, Castilla-La Mancha y Castilla y León`,
    status: `Vulnerable`,
    family: `Ciconiido`,
    image: `ciconia.png`,
    type: `ave`,
  },

  {
    commonName: `Malvasía Cabeciblanca`,
    scientificName: `oxyura leucocephala`,
    habitat: `Humedales del sur y levante`,
    status: `En peligro de extinción`,
    family: `Anátido`,
    image: `malvasia.png`,
    type: `ave`,
  },

  {
    commonName: `Oso Pardo`,
    scientificName: `ursus arctos`,
    habitat: `Cordillera Cantábrica y Pirineos`,
    status: `En peligro de extinción`,
    family: `Úrsido`,
    image: `oso.png`,
    type: `mamifero`,
  },

  {
    commonName: `Visón Europeo`,
    scientificName: `mustela lutreola`,
    habitat: `Ríos del norte de España (Ebro y afluentes)`,
    status: `En peligro crítico`,
    family: `Mustélido`,
    image: `vison.png`,
    type: `mamifero`,
  },

  {
    commonName: `Desmán Ibérico`,
    scientificName: `galemys pyrenaicus`,
    habitat: `Ríos limpios de montaña (norte y centro)`,
    status: `Vulnerable`,
    family: `Tálpido`,
    image: `desman.png`,
    type: `mamifero`,
  },
  {
    commonName: `Tritón Jaspeado`,
    scientificName: `triturus marmoratus`,
    habitat: `Charcas y estanques de la mitad norte`,
    status: `Interés especial (amenazado por pérdida de hábitat)`,
    family: `Salamándrido`,
    image: `jaspe.png`,
    type: `anfibio`,
  },
];

// SECCIÓN DE FUNCIONES

//  Función para pintar las tarjetas.
//  Recibe el array

const renderAnimals = (data) => {
  let htmlContent = "";

  data.forEach((animal) => {
    const displayTitle = animal.commonName.toUpperCase();
    const scientificFormat =
      animal.scientificName.charAt(0).toUpperCase() +
      animal.scientificName.slice(1);

    let textColor = "#382920";
    if (
      animal.status === "En peligro de extinción" ||
      animal.status === "En peligro crítico"
    ) {
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
        <p class="card-description js_cardDescription"> 
          <strong>Población principal:</strong> ${animal.habitat}.
        </p>
        <p style="${statusStyle}">${animal.status}</p>
      </section>
    `;
  });

  app.innerHTML =
    htmlContent ||
    `<p class="no-results">No se han encontrado especies que coincidan con los filtros.</p>`;
};

//  Función que unifica toda la lógica de filtrado

const applyFilters = () => {
  const searchName = inputName.value.toLowerCase();
  const searchFamily = selectFamily.value;
  const searchStatus = selectStatus.value;

  const isMammal = checkMammal.checked;
  const isBird = checkBird.checked;
  const isAmphibian = checkAmphibian.checked;

  const filteredAnimals = animals.filter((animal) => {
    // Filtro Nombre
    const matchName = animal.commonName.toLowerCase().includes(searchName);

    // Filtro Familia
    const matchFamily =
      searchFamily === "all" || animal.family === searchFamily;

    // Filtro Estado
    const matchStatus =
      searchStatus === "all" || animal.status === searchStatus;

    // Filtro Checkbox
    let matchType = true;
    if (isMammal || isBird || isAmphibian) {
      matchType =
        (isMammal && animal.type === "mamifero") ||
        (isBird && animal.type === "ave") ||
        (isAmphibian && animal.type === "anfibio");
    }

    return matchName && matchFamily && matchStatus && matchType;
  });

  renderAnimals(filteredAnimals);
};
// SECCIÓN DE FUNCIONES DE EVENTOS
const handleInputFilter = (event) => {
  applyFilters();
};

const handleReset = (event) => {
  event.preventDefault();
  // Reseteamos el formulario
  inputName.value = "";
  selectFamily.value = "all";
  selectStatus.value = "all";
  checkMammal.checked = false;
  checkBird.checked = false;
  checkAmphibian.checked = false;
  // Repintamos todo
  renderAnimals(animals);
};
// SECCIÓN DE EVENTOS
inputName.addEventListener("input", handleInputFilter);
selectFamily.addEventListener("change", handleInputFilter);
selectStatus.addEventListener("change", handleInputFilter);

[checkMammal, checkBird, checkAmphibian].forEach((checkbox) => {
  checkbox.addEventListener("change", handleInputFilter);
});

if (resetBtn) {
  resetBtn.addEventListener("click", handleReset);
}

// SECCIÓN DE ACCIONES AL CARGAR LA PÁGINA
renderAnimals(animals);
console.log(`¡Se han cargado ${animals.length} animales!`);
