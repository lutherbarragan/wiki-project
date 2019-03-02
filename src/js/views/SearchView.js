import { elements } from "./base";

export const getInput = () => {
  if(elements.searchInput.value.length > 2) {
    return elements.searchInput.value
  } else {
    alert("write at least 3 characters!")
    return null
  }
}

export const clearPreviousResults = () => {
  elements.searchInput.value = ""
  elements.resultInformation.innerHTML = ""
  elements.resultContainer.innerHTML = ""
}


export const clearLoader = () => {
  elements.resultContainer.innerHTML = ""
}

export const renderLoader = () => {
  const loader = `
  <div class="backdrop"></div>
  <img 
    class="loader-image" 
    src="img/loader.png" 
    alt="" 
    width="120" 
    height="120"
  >
  `
  elements.resultContainer.innerHTML = loader
}

export const renderResultInformation = (numberOfResults, searchQuery) => {
  const info = `
    <span class="number-of-results">${numberOfResults}</span>
      results for 
    <span class="searched-string">"${searchQuery}"</span>
  `
  elements.resultInformation.innerHTML = info
}

const renderTypes = (id, types) => {
  types.forEach(type => {
    const typeTemp = `<button class="${type.type.name} btnType">${type.type.name} </button>`
    document.getElementById(`types-${id}`).insertAdjacentHTML("beforeend", typeTemp);
  })
}

export const renderResultsCards = (resArr) => {
  resArr.forEach(res => {
    const resCard = `
    <div class="result-card" id="${res.id}" data-toggle="modal" data-target="#PokemonModal">
      <img class="${res.name}" src="${res.sprites.front_default}">
      <h6>${res.name.replace("-", " ")}</h6>
      <div id="types-${res.id}" class="divTypes">
      
      </div>
    </div>
    `

    elements.resultContainer.insertAdjacentHTML("beforeend", resCard);
    renderTypes(res.id, res.types)  
  })
}

export const renderNotFound = () => {
  const template = `<img src="img/pokemon not found.png" />`
  elements.resultContainer.insertAdjacentHTML("beforeend", template)
}