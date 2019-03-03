// import axios from axios;

export default class SelectedResult {
  constructor(id, data) {
    this.id = id
    this.data = data
  }

  getSprites() {
    let urls = Object.values(this.data.sprites).filter(cur => cur !== null)
    let normal = [];
    let shiny = [];
    let female = [];
    
    urls.forEach(link => {
      if(!link.includes("shiny") && !link.includes("back") && !link.includes("female")) { // Normal
        normal.push(link)
      } else if(!link.includes("shiny") && link.includes("back") && !link.includes("female")) { // Normal back sprite
        normal.push(link)
      } else if(link.includes("shiny") && !link.includes("back") && !link.includes("female")) { // Shiny sprite
        shiny.push(link)
      }else if(link.includes("shiny") && link.includes("back") && !link.includes("female")) { //Shiny back sprite
        shiny.push(link)
      }else if(!link.includes("shiny") && !link.includes("back") && link.includes("female")) { // Female sprite
        female.push(link)        
      }else if(link.includes("shiny") && !link.includes("back") && link.includes("female")) { // Shiny female sprite
        female.push(link)  
      }
    })
    
    normal.sort(function(a, b){return a.length - b.length})
    shiny.sort(function(a, b){return a.length - b.length})
    female.sort(function(a, b){return a.length - b.length})
    
    normal = normal.concat(shiny, female)

    return normal
  }

}