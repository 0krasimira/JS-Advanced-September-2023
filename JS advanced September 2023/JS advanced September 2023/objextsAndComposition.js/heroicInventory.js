function heroicInventory(arr) {

    let result = []
    
    for (let el of arr) {
        let [name, level, items] = el.split(' / ')
        level = Number(level)
        
        let itemsArr = []
        items.split(' ,')
        itemsArr.push(items)
    
        
        

        result.push({name, level, items})
        
    }
    // let item = arr.split(' / ')
    console.log(JSON.stringify(result))

}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])
console.log('----------')
heroicInventory(['Jake / 1000 / Gauss'])