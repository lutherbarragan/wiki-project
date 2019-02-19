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
  
  //Create new model in state (if there is a valid searchQuery)
  if(searchQuery) {
    //Create search model inside state
    state.search = new Search(searchQuery);
    console.log(state.search)

    //update result information in DOM
    SearchView.renderResultInformation(state.search.results.length, state.search.searchQuery)

  } else {
    console.log(null)
  }



}


//Search input event listener
elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  searchControl();
})

//Get basic Data & save it to state
const init = async () => {
  state.DATA = await Axios("https://pokeapi.co/api/v2/pokemon/?limit=964").then(data => data.data.results)
  console.log(state.DATA)
}

// window.addEventListener("load", init)