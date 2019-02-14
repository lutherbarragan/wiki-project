import Axios from "axios";

const state = {

};

const init = async () => {
  state.DATA = await Axios("https://pokeapi.co/api/v2/pokemon/?limit=964").then(data => data.data.results)
  console.log(state.DATA)
}

window.addEventListener("load", init)