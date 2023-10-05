function fruit (fruitType, weightInGrams, pricePerKilo ) {

    let weightInKg = weightInGrams / 1000
    
    let neededMoney = pricePerKilo * weightInKg
    console.log(`I need $${(neededMoney).toFixed(2)} to buy ${(weightInKg).toFixed(2)} kilograms ${fruitType}.`)
}

fruit ('orange', 2500, 1.80)
console.log('------')
fruit ('apple', 1563, 2.35)