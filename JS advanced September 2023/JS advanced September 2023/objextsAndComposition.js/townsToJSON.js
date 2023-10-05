function townsToJSON(arr) {

    let headings = arr.shift()
    headings = headings.split(/\'*\s*[\|]\s*\'*/gm)
    headings.shift()
    headings.pop()
    let city = headings.shift()
    let lat = headings.shift()
    let long = headings.shift()

    let res = {}
    let resArr = []

    for (let line of arr) {
        line = line.split(/\'*\s*[\|]\s*\'*/gm)
        line.shift()
        line.pop()
        let latitude = Number(line[1])
        latitude = latitude.toFixed(2)
        let longitude = Number(line[2])
        longitude = longitude.toFixed(2)
        res = {[`${city}`]: line[0],
        [`${lat}`]: Number(latitude),
        [`${long}`]: Number(longitude)
    }

        if(!resArr.includes(res)) {
            resArr.push(res)
        }
    }
        


    console.log(JSON.stringify(resArr))
    

}
townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])
console.log('---------')
townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'])