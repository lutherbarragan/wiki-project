import { elements } from "./views/base"
import Axios from "axios";
// M O D E L S
import Search from "./models/Search";
// V I E W S
import * as SearchView from "./views/SearchView"


const state = {

};

const searchControl = () => {
  //Get search query
  let searchQuery = SearchView.getInput()
  
  //Create new model in state;
  if(searchQuery) {
    state.search = new Search(searchQuery);
    console.log(state.search)

  } else {
    console.log(null)
  }



}



elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  searchControl();
})

const init = async () => {
  state.DATA = await Axios("https://pokeapi.co/api/v2/pokemon/?limit=964").then(data => data.data.results)
  console.log(state.DATA)
}

// window.addEventListener("load", init)