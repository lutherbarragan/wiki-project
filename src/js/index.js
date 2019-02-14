import Axios from "axios";

import { elements } from "./views/base"

const state = {

};

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault()
  console.log(elements.searchInput.value)
})




const init = async () => {
  state.DATA = await Axios("https://pokeapi.co/api/v2/pokemon/?limit=964").then(data => data.data.results)
  console.log(state.DATA)
}

window.addEventListener("load", init)