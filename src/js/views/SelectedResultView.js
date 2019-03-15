import {elements} from "./base"

export const setData = (pokemon) => {
    console.log(pokemon);

    let name = pokemon.name.split("");
        name[0] = name[0].toUpperCase();
        name = name.join("");
    elements.modalTitle.textContent = name.replace("-", " ");

    elements.modalID.textContent = pokemon.id;
    setTypes(pokemon.types);

    elements.modalHeight.textContent = `${pokemon.height / 10}m`
    elements.modalWeight.textContent = `${pokemon.weight / 10}kg`

    elements.modalBaseExp.textContent = pokemon.base_experience

    //BASE STATS
    elements.modalHpTag.textContent = pokemon.stats[5].base_stat
    elements.modalHpBar.style.cssText = `width: ${(pokemon.stats[5].base_stat * .40)}%`;
 
    elements.modalAttackTag.textContent = pokemon.stats[4].base_stat
    elements.modalAttackBar.style.cssText = `width: ${(pokemon.stats[4].base_stat * .40)}%`;
 
    elements.modalDefenseTag.textContent = pokemon.stats[3].base_stat
    elements.modalDefenseBar.style.cssText = `width: ${(pokemon.stats[3].base_stat * .40)}%`;
 
    elements.modalSpAtkTag.textContent = pokemon.stats[2].base_stat
    elements.modalSpAtkBar.style.cssText = `width: ${(pokemon.stats[2].base_stat * .40)}%`;
 
    elements.modalSpDefTag.textContent = pokemon.stats[1].base_stat
    elements.modalSpDefBar.style.cssText = `width: ${(pokemon.stats[1].base_stat * .40)}%`;
 
    elements.modalSpeedTag.textContent = pokemon.stats[0].base_stat
    elements.modalSpeedBar.style.cssText = `width: ${(pokemon.stats[0].base_stat * .40)}%`;
 

    //SPECIES DATA
    elements.modalSpecies.textContent = pokemon.speciesData.genera[2].genus
    elements.modalGeneration.textContent = pokemon.speciesData.generation.name;
    elements.modalColor.textContent = pokemon.speciesData.color.name
    elements.modalCatchRate.textContent = pokemon.speciesData.capture_rate
    elements.modalHappiness.textContent = pokemon.speciesData.base_happiness
    // Habitat
    if(pokemon.speciesData.habitat === null) {
        elements.modalHabitat.textContent = `${pokemon.speciesData.habitat}`
    } else {
        elements.modalHabitat.textContent = pokemon.speciesData.habitat.name
    }
    elements.modalGrowthRate.textContent = pokemon.speciesData.growth_rate.name
    // egg_groups
    elements.modalEggGroups.textContent = pokemon.speciesData.egg_groups.map(egg => egg.name).join(", ")
    //gender rates
    elements.modalMale.textContent = `${getGenderMaleRates(pokemon.speciesData.gender_rate)}% male`
    elements.modalFemale.textContent = `${getGenderFemaleRates(pokemon.speciesData.gender_rate)}% female`
    //egg cycles
    elements.modalEggCycles.innerHTML = eggCyclesSteps(pokemon.speciesData.hatch_counter)




    //moves
    pokemon.moves.forEach(move => {
        elements.modalMoves.insertAdjacentHTML("beforeend", `<div class="move">${move.move.name}</div>`)
    })

}

export const clearData = () => {
    elements.modalTitle.textContent = "";
    elements.carousel.innerHTML = "";
    elements.carouselIndicators.innerHTML = "";
    elements.carouselSideControls.innerHTML = "";
    
    elements.modalID.textContent = "";
    elements.modalTypes.innerHTML = "";
    elements.modalSpecies.textContent = "";
    elements.modalGeneration.textContent = "";
    elements.modalHeight.textContent = "";
    elements.modalWeight.textContent = "";
    elements.modalColor.textContent = "";
    elements.modalHabitat.textContent = "";
    elements.modalCatchRate.textContent = "";
    elements.modalHappiness.textContent = "";
    elements.modalBaseExp.textContent = "";
    elements.modalGrowthRate.textContent = "";
    elements.modalEggGroups.textContent = "";
    elements.modalMale.textContent = "";
    elements.modalFemale.textContent = "";
    elements.modalEggCycles.textContent = "";
    elements.modalMoves.innerHTML = "";

    //BASE STATS
    elements.modalHpTag.textContent = "";
    elements.modalHpBar.style.cssText = "";

    elements.modalAttackTag.textContent = "";
    elements.modalAttackBar.style.cssText = "";

    elements.modalDefenseTag.textContent = "";
    elements.modalDefenseBar.style.cssText = "";

    elements.modalSpAtkTag.textContent = "";
    elements.modalSpAtkBar.style.cssText = "";

    elements.modalSpDefTag.textContent = "";
    elements.modalSpDefBar.style.cssText = "";

    elements.modalSpeedTag.textContent = "";
    elements.modalSpeedBar.style.cssText = "";

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

const getGenderMaleRates = (gRate) => {
    let percentage = (100 / 8);
    return (100 - (gRate * percentage))
}

const getGenderFemaleRates = (gRate) => {
    let percentage = (100 / 8);
    return (gRate * percentage);
}

const eggCyclesSteps = (cycles) => {
    return `20 <span class="steps tag-steps">(${Math.round(cycles * 246.76)} - ${Math.round(cycles * 257)} steps)</span>`
}