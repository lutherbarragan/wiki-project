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
    //Clear DOM for results
        //clear input
        //clear result info
        //clear results

    //render loader

    //Create search model inside state
    state.search = new Search(searchQuery);
    
    //Look for pokemons in state.DATA
    state.search.getResults(state.DATA, state.search.searchQuery)    

    //Prepare Dom to Render new Results
      //Clear Loader

    // if(results were found)
        //update result information in DOM
        SearchView.renderResultInformation(state.search.results.length, state.search.searchQuery)
        // render result list
            
    // else 
        // render "NOT FOUND"


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

window.addEventListener("load", init)