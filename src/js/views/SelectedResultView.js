import {elements} from "./base"

export const setData = (pokemon) => {
  let name = pokemon.name.split("")
    name[0] = name[0].toUpperCase()
    name = name.join("")

  elements.modalTitle.textContent = name.replace("-", " ");
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

}