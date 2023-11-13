import { getLocations } from "../database.js";

export const locationList = () => {
    const locationsList = getLocations()

    let htmlString = '<h2 class="section__header">Fish Harvest Locations</h2>'

    for (const location of locationsList) {
        htmlString += `
        <div class="location">
        <img class="location__img" src="./images/${location.imgSrc}" alt="picture of ${location.title}" width="300px">
        <h3 class="location__header">${location.title}</h3>
        </div>
        `
    }
    htmlString += '</section>'
    return htmlString
}