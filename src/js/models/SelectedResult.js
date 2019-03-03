// import axios from axios;

export default class SelectedResult {
  constructor(id, data) {
    this.id = id
    this.data = data
  }

  getSprites() {
    let urls = Object.values(this.data.sprites).filter(cur => cur !== null)
    return urls
  }

}