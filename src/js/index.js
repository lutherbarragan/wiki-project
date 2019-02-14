import Axios from "axios";

import * as SearchView from "./views/SearchView"

import { elements } from "./views/base"

const state = {

};

const searchControl = () => {
  //Get search query
  let query = SearchView.getInput()
  console.log(query)
}



elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  searchControl();
})

const init = async () => {
  state.DATA = await Axios("https://pokeapi.co/api/v2/pokemon/?limit=964").then(data => data.data.results)
  console.log(state.DATA)
}

window.addEventListener("load", init)