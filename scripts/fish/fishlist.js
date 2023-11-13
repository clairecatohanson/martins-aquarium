import { getFish, mostHolyFish, soldierFish, nonHolyFish } from '../database.js'

export const fishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Invoke filtering functions to get lists of fish with length, 3, 5, and not (3 or 5)
    const holy = mostHolyFish()
    const regular = soldierFish()
    const nonholy = nonHolyFish()

    // Create an array of arrays in the order: holy, regular, nonholy
    const orderedFish = []
    orderedFish.push(holy)
    orderedFish.push(regular)
    orderedFish.push(nonholy)

    // Initialize HTML string for the .fishes section
    let htmlString = '<h2 class="section__header">Fish Collection</h2>'

    // Create innerHTML for each fish, in the correct order as specified in orderedFish[]
    for (const fishArray of orderedFish) {
        for (const fish of fishArray) {
            htmlString += `
            <div class="fish">
            <img class="fish__img" src="${fish.imgSrc}" alt="picture of a ${fish.species} fish">
            <h3 class="fish__species">${fish.species}</h3>
            <ul class="fish__details">
            <li>This fish is named ${fish.name}</li><li>It's length is ${fish.length} inches</li><li>It was harvested in ${fish.harvestLocation}</li><li>It's diet consists of ${fish.food}</li>
            </ul>
            </div>
            `
        }
    }

    // Close the innerHTML string
    htmlString += '</section>'

    // Return the full innerHTML string
    return htmlString
}

