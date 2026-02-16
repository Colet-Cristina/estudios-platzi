🌲 Prácticas de JavaScript: Fauna Ibérica
Este repositorio contiene ejercicios de programación con JavaScript, centrados en la manipulación de cadenas de texto (Strings), variables y el uso de la propiedad .length.

📋 Conceptos Practicados
En este proyecto he aplicado los siguientes conceptos:

Variables let

Interpolación: Inserción de variables dentro de strings usando la sintaxis ${variable}.

Manipulación de Strings:

**Manipulación de Strings:**

- `.length`: Para contar caracteres.
- `.slice()`: Para extraer subcadenas.
- `.toUpperCase()`: Para transformar textos a mayúsculas (por ejemplo, para títulos).
- `.includes()`: Para buscar palabras dentro de otras.

Ejemplos de Código
Extracción de Substrings
Para obtener una parte específica de una palabra, como en el caso de nuestro animal:

```JS
let birdName = `Quebrantahuesos`;
let birdNickname = birdName.slice(9); // Resultado: `huesos`
```

**Interpolación Dinámica**

Construcción de frases complejas de forma limpia:

```JS
let animalName = `Lince Ibérico`;
let conservation = `en peligro de extinción`;
let animalFact = `El ${animalName} es un felino que está ${conservation}.`;
```

🛠️ Cómo ejecutar las prácticas

1. Abre el archivo index.html en tu navegador.
2. Presiona F12 y abre la pestaña Console para ver los resultados de los ejercicios.
