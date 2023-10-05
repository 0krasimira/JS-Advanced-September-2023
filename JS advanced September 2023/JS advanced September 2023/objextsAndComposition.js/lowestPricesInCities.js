function lowestPricesInCities(arr) {

    let result = {}
   
    
    for (let el of arr) {
        let [town, product, price] = el.split(' | ')
        price = Number(price)
        
       if(!result.hasOwnProperty(product)) {
        result[product] = {}
       }
       
       if (result[product]['price'] === undefined || result[product]['price'] > price) {
        result[product]['town'] = town
        result[product]['price'] = price
       }
    }

    

    for (const [keys, values] of Object.entries(result)) {
        console.log(`${keys} -> ${values.price} (${values.town})`)
    }
    

}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])