import {elements} from "./base"

export const setData = (pokemon) => {
  let name = pokemon.name.split("")
    name[0] = name[0].toUpperCase()
    name = name.join("")

  elements.modalTitle.textContent = name.replace("-", " ");
}