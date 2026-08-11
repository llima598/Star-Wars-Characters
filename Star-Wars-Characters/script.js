const apiUrl = "https://swapi.info/api/people";

let currentPage = 1;
const charactersPerPage = 10;
let allCharacters = [];

window.onload = async () => {
  try {
    await loadCharacters();
  } catch (error) {
    console.error(error);
    alert("Erro ao carregar cards");
  }
};

async function loadCharacters() {
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error("Erro ao carregar personagens");
  }

  allCharacters = await response.json();

  showPage(currentPage);
}

function showPage(page) {
  const mainContent = document.getElementById("main-content");

  // Limpa os cards da página anterior
  mainContent.innerHTML = "";

  // Define os 10 personagens da página atual
  const start = (page - 1) * charactersPerPage;
  const charactersOnPage = allCharacters.slice(
    start,
    start + charactersPerPage
  );

  charactersOnPage.forEach((character) => {
    console.log(character)
    const card = document.createElement("div");
    const characterId = character.url.split("/").pop();

    card.className = "cards";

    card.style.backgroundImage = `
      url("https://raw.githubusercontent.com/vieraboschkova/swapi-gallery/main/static/assets/img/people/${characterId}.jpg")
    `;

    const characterNameBG = document.createElement("div");
    characterNameBG.className = "character-name-bg";

    const characterName = document.createElement("span");
    characterName.className = "character-name";
    characterName.innerText = character.name;

    characterNameBG.appendChild(characterName);
    card.appendChild(characterNameBG);

    card.onclick = () => {
        const modal =document.getElementById("modal")
        modal.style.visibility ="visible"

        const modalContent = document.getElementById("modal-content")
        modalContent.innerHTML = ''

        const characterImage = document.createElement("div")
        characterImage.style.backgroundImage =
        `url("https://raw.githubusercontent.com/vieraboschkova/swapi-gallery/main/static/assets/img/people/${characterId}.jpg")`
        characterImage.className = "character-image"

        const name = document.createElement("span")
        name.className = "character-details"
        name.innerText = `Nome: ${character.name}`

        const characterHeight = document.createElement("span")
        characterHeight.className = "character-details"
        characterHeight.innerText = `Altura: ${convertHeigth(character.height)}`

        const mass = document.createElement("span")
        mass.className = "character-details"
        mass.innerText = `Peso: ${convertMass(character.mass)}`

        const eyeColor = document.createElement("span")
        eyeColor.className = "character-details"
        eyeColor.innerText = `Cor dos olhos: ${convertEyeColor(character.eye_color)}`

        const birthYear = document.createElement("span")
        birthYear.className = "character-details"
        birthYear.innerText = `Nascimento: ${convertBirthYear(character.birth_year)}`

        modalContent.appendChild(characterImage)
        modalContent.appendChild(name)
        modalContent.appendChild(characterHeight)
        modalContent.appendChild(mass)
        modalContent.appendChild(eyeColor)
        modalContent.appendChild(birthYear)
    }

    mainContent.appendChild(card);
  });

  updatePaginationButtons();
}

function nextPage() {
  const totalPages = Math.ceil(allCharacters.length / charactersPerPage);

  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
}

function previousPage() {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
}

function updatePaginationButtons() {
  const previousButton = document.getElementById("previous-button");
  const nextButton = document.getElementById("next-button");

  const totalPages = Math.ceil(allCharacters.length / charactersPerPage);

  previousButton.style.visibility =
    currentPage === 1 ? "hidden" : "visible";

  nextButton.style.visibility =
    currentPage === totalPages ? "hidden" : "visible";
}

function hideModal(){
    const modal = document.getElementById("modal")
    modal.style.visibility = "hidden"
}

function convertEyeColor(eyeColor) {
    const cores = {
        blue: "azul",
        brown: "castanho",
        green: "verde",
        yellow: "amarelo",
        black: "preto",
        pink: "rosa",
        red: "vermelho",
        orange: "laranja",
        hazel: "avela",
        unknown: "desconhecida"
     };

     return cores[eyeColor.toLowerCase()] || eyeColor;
}

function convertHeigth(height) {
    if (height === "unknown"){
        return "deconhecida"
    }

    return (height / 100).toFixed(2);
}

function convertMass(mass){
    if (mass === "unknown"){
        return "deconhecido"
    }

    return `${mass} kg`
}

function convertBirthYear(birthYear) {
    if (birthYear === "unknown") {
        return "deconhecido"
    }

    return birthYear
}