import axios from 'axios'

export default class Search {
  constructor(searchQuery) {
    this.searchQuery = searchQuery,
    this.results = []
  }

  getResults(array, searchQuery) {
    array.forEach(pokemon => {
      if(pokemon.name.includes(searchQuery)) {
        axios(pokemon.url)
          .then(res => res.data)
          .then(pokemon => {
            if(pokemon.sprites.front_default){
              this.results.push(pokemon)
            }
          })
      }
    })
  }

  reOrder() {
    this.results.sort(function(a,b) {return (a.name.length > b.name.length) ? 1 : ((b.name.length > a.name.length) ? -1 : 0);} );
  }

}