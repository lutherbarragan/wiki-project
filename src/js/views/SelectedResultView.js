import {elements} from "./base"

export const setData = (pokemon) => {
  elements.modalTitle.textContent = pokemon.name.replace("-", " ");
}