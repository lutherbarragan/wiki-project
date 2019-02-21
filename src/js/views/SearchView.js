import { elements } from "./base";

export const getInput = () => {
  if(elements.searchInput.value.length > 2) {
    return elements.searchInput.value
  } else {
    alert("write at least 3 characters!")
    return null
  }
}

export const renderLoader = () => {
  const loader = `
  <div class="backdrop"></div>
  <img 
    class="loader-image" 
    src="https://purepng.com/public/uploads/large/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-1701527825865sl5vr.png" 
    alt="" 
    width="120" 
    height="120"
  >
  `
  elements.resultBody.innerHTML = loader
}

export const clearInputValue = () => {
  elements.searchInput.value = ""
}

export const clearLoader = () => {
  elements.resultBody.innerHTML = ""
}

export const renderResultInformation = (numberOfResults, searchQuery) => {

  const info = `
    <span class="number-of-results">${numberOfResults}</span>
      results for 
    <span class="searched-string">"${searchQuery}"</span>
  `
  elements.resultInformation.innerHTML = info
}

export const clearResultInformation = () => {
  elements.resultInformation.innerHTML = ""
}