import {elements} from "./base"

export const setData = (pokemon) => {
  let name = pokemon.name.split("")
    name[0] = name[0].toUpperCase()
    name = name.join("")

  elements.modalTitle.textContent = name.replace("-", " ");
}

export const clearData = () => {
  elements.modalTitle.textContent = "";
  elements.carousel.innerHTML = "";
  elements.carouselIndicators.innerHTML = "";
}

export const imageCarousel = (array) => {
  let i = 0
  array.forEach(sprite => {
    let carouselBody = `
    <div class="carousel-item">
      <div class="carousel-caption">
        <h5 class="module-sprite-title">TITLE</h5>
      </div><img src="${sprite}" class="modal-sprites" alt="TITLE">
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