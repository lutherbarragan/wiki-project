import { elements } from "./views/base"
import axios from "axios";
// M O D E L S
import Search from "./models/Search";
// V I E W S
import * as SearchView from "./views/SearchView"

/*----------------------------------------------------------------------------------------*/
const state = {};

const searchControl = () => {
	//Get search query
	let searchQuery = SearchView.getInput()

	//Create new model in state (if there is a valid searchQuery)
	if(searchQuery) {
		//Clear DOM for results
			//clear input
			SearchView.clearInputValue()
			//clear result info
			SearchView.clearResultInformation()
			//clear results

		//render loader
		SearchView.renderLoader()

		//Create search model inside state
		state.search = new Search(searchQuery);
		
		//Look for pokemons in state.DATA
		state.search.getResults(state.DATA, state.search.searchQuery)
		console.log(state.search)    
		//Prepare Dom to Render new Results
		setTimeout(() => {
			// Clear Loader
			SearchView.clearLoader() 

			if(state.search.numOfResults > 0) {
				//re-order
				state.search.reOrder();

				console.log(state.search.results)

				//update result information in DOM
				SearchView.renderResultInformation(state.search.results.length, state.search.searchQuery)

				//render result list
				SearchView.renderResultsCards(state.search.results)
			} else {
				//update result information in DOM
				SearchView.renderResultInformation(state.search.results.length, state.search.searchQuery)

				//render "NOT FOUND"
				SearchView.renderNotFound();
			}
				
		}, 1600)

	}

}


//Search input event listener
elements.searchForm.addEventListener("submit", e => {
	e.preventDefault();
	searchControl();
})

//Get basic Data & save it to state
const init = async () => {
	state.DATA = await axios("https://pokeapi.co/api/v2/pokemon/?limit=964").then(data => data.data.results)
	console.log(state.DATA)
}

window.addEventListener("load", init)