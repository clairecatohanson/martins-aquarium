const database = {
    fish: [
        {
            imgSrc: 'images/fish1-betta.jpg',
            species: 'Betta splendens (a.k.a. Siamese Fighting Fish)',
            length: '5',
            name: 'Billy',
            harvestLocation: 'central Thailand',
            food: 'brine shrimp'
        },
        {
            imgSrc: 'images/fish2-goldfish.jpg',
            species: 'Carassius auratus (a.k.a. Goldfish)',
            length: '7',
            name: 'Greg',
            harvestLocation: 'China',
            food: 'crustaceans and insects'
        },
        {
            imgSrc: 'images/fish3-angelfish.jpg',
            species: 'Platax scalaris (a.k.a. Angelfish)',
            length: '3',
            name: 'Allan',
            harvestLocation: 'Amazon Rainforest',
            food: 'brine shrimp'
        }
    ],
    tips: [
        {
            id: 1,
            title: 'Keeping your tank clean',
            description: 'Be sure to clean your tank once every week to ensure your fish have a pleasant environment.'
        },
        {
            id: 2,
            title: 'Choosing the correct water salinity',
            description: 'Talk to your local aquarium expert to determine the optimal salinity for all the species in your tank. Test the water conditions frequently using a salinity monitor and adjust as needed. Having the correct salinity will help all of your fish thrive in their new home.'
        },
        {
            id: 3,
            title: 'Maintaining the optimal water temperature',
            description: 'Determine the correct water temperature for all the species in your aquarium. Install a sterilized thermometer into your aquarium and check the temperature regularly. If any of your species have conflicting environmental requirements, you may have to expand the number of aquariums that you maintain to ensure all species have optimal living conditions.'
        }
    ],
    locations: [
        {
            title: 'Central Thailand',
            imgSrc: '../images/location-thailand.jpeg'
        },
        {
            title: 'China',
            imgSrc: '../images/location-china.jpeg'
        },
        {
            title: 'Amazon Rainforest',
            imgSrc: '../images/location-amazonrainforest.jpg'
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getTips = () => {
    return database.tips.map(tip => ({...tip}))
}

export const getLocations = () => {
    return database.locations.map(location => ({...location}))
}

export const mostHolyFish = () => {
    const holyFish = []
    for (const fish of database.fish) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }
    return holyFish
}

export const soldierFish = () => {
    const soldiers = []
    for (const fish of database.fish) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    const regularFish = []
    for (const fish of database.fish) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            regularFish.push(fish)
        }
    }
    return regularFish
}