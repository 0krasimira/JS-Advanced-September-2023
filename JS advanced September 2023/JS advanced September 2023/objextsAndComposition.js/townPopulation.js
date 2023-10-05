function townPopulationF (arr) {

    let myObj = {}

    for (let el of arr) {
        let [townName, townPopulation] = el.split(' <-> ')
        townPopulation = Number(townPopulation)
        
        
        if(myObj[townName] != undefined) {
        townPopulation += myObj[townName]
        }

        myObj[townName] = townPopulation
    }

    
    for (let el in myObj) {
        console.log(`${el} : ${myObj[el]}`)
        
    }

}

// townPopulationF (['Sofia <-> 1200000',
// 'Montana <-> 20000',
// 'New York <-> 10000000',
// 'Washington <-> 2345000',
// 'Las Vegas <-> 1000000'])
// console.log('---')
townPopulationF(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])