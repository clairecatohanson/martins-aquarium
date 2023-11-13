import { fishList  } from './fish/fishlist.js'
import { tankCareList } from './tips/caretips.js'
import { locationList } from './locations/locationslist.js'

const parentFishHTMLElement = document.querySelector(".fishes")
parentFishHTMLElement.innerHTML = fishList()

const parentTipsHTMLElement = document.querySelector(".tips")
parentTipsHTMLElement.innerHTML = tankCareList()

const parentLocationsHTMLElement = document.querySelector('.locations')
parentLocationsHTMLElement.innerHTML = locationList()