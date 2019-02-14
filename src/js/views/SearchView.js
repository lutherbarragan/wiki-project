import { elements } from "./base";

export const getInput = () => {
  if(elements.searchInput.value.length > 0) {
    return elements.searchInput.value
  } else {
    return false
  }
}