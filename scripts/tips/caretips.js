import { getTips } from '../database.js'

export const tankCareList = () => {
    const tankCareTips = getTips()

    let htmlString = '<h2 class="aside__header">Fish Tank Care Tips</h2>'

    for (const tip of tankCareTips) {
        htmlString += `
        <div class="tip">
        <h3 class="tip__header">${tip.title}</h3>
        <p class="tip__description">${tip.description}</p>
        </div>
        `
    }
    htmlString += '</aside>'
    return htmlString
}

