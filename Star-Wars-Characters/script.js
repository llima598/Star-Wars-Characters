const apiUrl = "https://swapi.info/api/people";

let currentPage = 1;
const charactersPerPage = 10;
let allCharacters = [];

window.addEventListener("load", loadCharacters);

document.getElementById("previous-button").addEventListener("click", previousPage);
document.getElementById("next-button").addEventListener("click", nextPage);
document.getElementById("modal").addEventListener("click", hideModal);

document.getElementById("modal-content").addEventListener("click", (event) => {
  event.stopPropagation();
});

async function loadCharacters() {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = '<p class="loading" role="status">Carregando personagens...</p>';

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Erro ao carregar personagens");
    }

    allCharacters = await response.json();
    showPage(currentPage);
  } catch (error) {
    console.error(error);
    mainContent.innerHTML =
      '<p class="error-message" role="alert">Não foi possível carregar os personagens. Tente novamente.</p>';
  }
}

function showPage(page) {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = "";

  const start = (page - 1) * charactersPerPage;
  const charactersOnPage = allCharacters.slice(
    start,
    start + charactersPerPage
  );

  charactersOnPage.forEach((character) => {
    const card = document.createElement("button");
    const characterId = character.url.split("/").pop();

    card.className = "cards";
    card.type = "button";
    card.setAttribute("aria-label", `Ver detalhes de ${character.name}`);
    card.style.backgroundImage = `url("https://raw.githubusercontent.com/vieraboschkova/swapi-gallery/main/static/assets/img/people/${characterId}.jpg")`;

    const characterNameBG = document.createElement("div");
    characterNameBG.className = "character-name-bg";

    const characterName = document.createElement("span");
    characterName.className = "character-name";
    characterName.innerText = character.name;

    characterNameBG.appendChild(characterName);
    card.appendChild(characterNameBG);
    card.addEventListener("click", () => showCharacterDetails(character, characterId));

    mainContent.appendChild(card);
  });

  updatePaginationButtons();
}

function showCharacterDetails(character, characterId) {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");

  modal.style.visibility = "visible";
  modal.setAttribute("aria-hidden", "false");
  modalContent.innerHTML = "";

  const characterImage = document.createElement("div");
  characterImage.style.backgroundImage = `url("https://raw.githubusercontent.com/vieraboschkova/swapi-gallery/main/static/assets/img/people/${characterId}.jpg")`;
  characterImage.className = "character-image";
  characterImage.setAttribute("role", "img");
  characterImage.setAttribute("aria-label", `Imagem de ${character.name}`);

  const details = [
    `Nome: ${character.name}`,
    `Altura: ${convertHeight(character.height)} m`,
    `Peso: ${convertMass(character.mass)}`,
    `Cor dos olhos: ${convertEyeColor(character.eye_color)}`,
    `Nascimento: ${convertBirthYear(character.birth_year)}`,
  ];

  modalContent.appendChild(characterImage);

  details.forEach((detail) => {
    const element = document.createElement("span");
    element.className = "character-details";
    element.innerText = detail;
    modalContent.appendChild(element);
  });
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

  previousButton.style.visibility = currentPage === 1 ? "hidden" : "visible";
  nextButton.style.visibility = currentPage === totalPages ? "hidden" : "visible";
}

function hideModal() {
  const modal = document.getElementById("modal");
  modal.style.visibility = "hidden";
  modal.setAttribute("aria-hidden", "true");
}

function convertEyeColor(eyeColor) {
  const colors = {
    blue: "azul",
    brown: "castanho",
    green: "verde",
    yellow: "amarelo",
    black: "preto",
    pink: "rosa",
    red: "vermelho",
    orange: "laranja",
    hazel: "avelã",
    unknown: "desconhecida",
  };

  return colors[eyeColor.toLowerCase()] || eyeColor;
}

function convertHeight(height) {
  if (height === "unknown") {
    return "desconhecida";
  }

  return (Number(height) / 100).toFixed(2);
}

function convertMass(mass) {
  if (mass === "unknown") {
    return "desconhecido";
  }

  return `${mass} kg`;
}

function convertBirthYear(birthYear) {
  if (birthYear === "unknown") {
    return "desconhecido";
  }

  return birthYear;
}
