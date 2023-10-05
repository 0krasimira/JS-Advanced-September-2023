function cityRecord (name, population, treasury) {

    let myObj = {
        'name' : name,
        'population' : population,
        'treasury' : treasury
    }

    return myObj

}

console.log(cityRecord ('Tortuga',
7000,
15000))
console.log('---')
cityRecord ('Santo Domingo',
12000,
23500)