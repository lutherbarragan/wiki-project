import {elements} from "./base"

export const setData = (pokemon) => {
    console.log(pokemon);

    let name = pokemon.name.split("");
        name[0] = name[0].toUpperCase();
        name = name.join("");

    elements.modalTitle.textContent = name.replace("-", " ");
    elements.modalID.textContent = pokemon.id;
    setTypes(pokemon.types);

    elements.modalSpecies.textContent = pokemon.speciesData.genera[2].genus

}

export const clearData = () => {
    elements.modalTitle.textContent = "";
    elements.carousel.innerHTML = "";
    elements.carouselIndicators.innerHTML = "";
    elements.carouselSideControls.innerHTML = "";
    
    elements.modalID.textContent = "";
    elements.modalTypes.innerHTML = "";
    elements.modalSpecies.textContent = "";
}

export const imageCarousel = (array) => {
  let i = 0
  array.forEach(sprite => {
    let title;

    if(!sprite.includes("shiny") && !sprite.includes("back") && !sprite.includes("female")) {
      title = "Normal"
      
    } else if(!sprite.includes("shiny") && sprite.includes("back") && !sprite.includes("female")) {
      title = "Normal Back"
      
    } else if(sprite.includes("shiny") && !sprite.includes("back") && !sprite.includes("female")) {
      title = "Shiny"
     
    }else if(sprite.includes("shiny") && sprite.includes("back") && !sprite.includes("female")) {
      title = "Shiny Back"
     
    }else if(!sprite.includes("shiny") && !sprite.includes("back") && sprite.includes("female")) {
      title = "Female"
        
    }else if(sprite.includes("shiny") && !sprite.includes("back") && sprite.includes("female")) {
      title = "Female Shiny"
     
    }

    let carouselBody = `
    <div class="carousel-item">
      <div class="carousel-caption">
        <h5 class="module-sprite-title">${title}</h5>
      </div>
      <img src="${sprite}" class="modal-sprites" alt="TITLE">
    </div>
    `

    let carouselIndicatorsMarkup = `
    <li data-target="#carouselIndicators" data-slide-to="${i}"></li>
    `

    i++

    elements.carousel.insertAdjacentHTML("beforeend", carouselBody)
    elements.carouselIndicators.insertAdjacentHTML("beforeend", carouselIndicatorsMarkup)
  })

  
  elements.carousel.firstElementChild.classList.add("active")
  elements.carouselIndicators.firstElementChild.classList.add("active")

  if(array.length > 1) {
    elements.carouselSideControls.insertAdjacentHTML("beforeend",
   `<a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>

    <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  `)
  }

}

// SET TYPES
const setTypes = (types) => {
    types.forEach(type => {
        const typeMarkup = `<button class="${type.type.name} tag-button">${type.type.name}</button>`


        elements.modalTypes.insertAdjacentHTML('beforeend', typeMarkup)
    })



}