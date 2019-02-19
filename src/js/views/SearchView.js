import { elements } from "./base";

export const getInput = () => {
  if(elements.searchInput.value.length > 2) {
    alert(elements.searchInput.value)
    return elements.searchInput.value
  } else {
    alert("write at least 3 characters!")
    return null
  }
}