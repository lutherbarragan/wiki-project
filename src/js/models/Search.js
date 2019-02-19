export default class Search {
  constructor(searchQuery) {
    this.searchQuery = searchQuery,
    this.results = []
  }

  getResults(array, searchQuery) {
    array.forEach(pokemon => {
      if(pokemon.name.includes(searchQuery)) {
        this.results.push(pokemon.name)
      }
    })
  }


}