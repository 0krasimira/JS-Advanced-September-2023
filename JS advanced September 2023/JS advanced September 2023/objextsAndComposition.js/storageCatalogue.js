function storageCatalogue(arr) {

    let res = {}
for (let line of arr) {
    let [product, price] = line.split(' : ')
    price = Number(price)
    res[product] = price
}
let sorted = Object.entries(res)

sorted.sort((a,b) => a[0].localeCompare(b[0]))


let lettersArr = []
for (const el of sorted) {
    if (el[0][0].charCodeAt() >= 97 && el[0][0].charCodeAt() <= 122 || el[0][0].charCodeAt() >= 65 && el[0][0].charCodeAt() <= 90) {
        if(!lettersArr.includes(el[0][0])) {
            lettersArr.push(el[0][0])
            console.log(el[0][0])
            
        }
        console.log(`  ${el[0]}: ${el[1]}`)
    }
    
}


}

storageCatalogue(['Appricot : 20.4', 
'Fridge : 1500', 
'TV : 1499', 
'Deodorant : 10', 
'Boiler : 300', 
'Apple : 1.25', 
'Anti-Bug Spray : 15', 
'T-Shirt : 10'])