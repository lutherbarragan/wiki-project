import { elements } from "./views/base"
import axios from "axios";
// M O D E L S
import Search from "./models/Search";
import SelectedResult from "./models/SelectedResult"

// V I E W S
import * as SearchView from "./views/SearchView"
import * as SelectedResultView from './views/SelectedResultView'

/*---------------------------------------------------------------------------------------*/
const state = {};

const searchControl = () => {
	let searchQuery = SearchView.getInput() 	//Get search query

	if(searchQuery) { //start search (if there is a valid searchQuery)
		//Clear DOM for results
			SearchView.clearPreviousResults(); //clear input, result info, results

		SearchView.renderLoader()	//render loader

		state.search = new Search(searchQuery); //Create search model inside state
		
		state.search.getResults(state.DATA, state.search.searchQuery) //Look for pokemons in state.DATA

		//Prepare Dom to Render new Results
		setTimeout(() => {
			SearchView.clearLoader() // Clear Loader

			if(state.search.numOfResults > 0) { // if they are results
				state.search.reOrder(); //re-order
				SearchView.renderResultInformation(state.search.results.length, state.search.searchQuery) //update result information in DOM
				SearchView.renderResultsCards(state.search.results)	//render result list
				
			} else {
				SearchView.renderResultInformation(state.search.results.length, state.search.searchQuery) //update result information in DOM
				SearchView.renderNotFound(); //render "NOT FOUND"
			}	
		}, 5000)

	}
}

const selectedResultControl = (e) => {
	SelectedResultView.clearData()

	if(e.target.closest(".result-element") !== null) {
		const selectedID = e.target.closest(".result-element").id

		state.search.results.forEach(res => {
			if(res.id == selectedID) {
				state.search.selectedResult = new SelectedResult(selectedID, res) // setting the search.selectedPokemon obj = to the clicked pokemon's info
				setTimeout(() => {
                    SelectedResultView.setData(state.search.selectedResult.data);
                }, 1000)
                
				//create Sprite Array
                SelectedResultView.imageCarousel(state.search.selectedResult.getSprites())
                state.search.selectedResult.getSpeciesData(state.search.selectedResult.data.species.url)
			}
		})

		$('#PokemonModal').modal()
	}
}

//Search input event listener
elements.searchForm.addEventListener("submit", e => {
	e.preventDefault();
	searchControl();
})

// Selected result click event listener
elements.resultContainer.addEventListener('click', e => {
	selectedResultControl(e);
})

//Get basic Data & save it to state
const init = async () => {
	state.DATA = await axios("https://pokeapi.co/api/v2/pokemon/?limit=964").then(data => data.data.results)
}

window.addEventListener("load", init)