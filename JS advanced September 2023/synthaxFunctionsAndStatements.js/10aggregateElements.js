function aggregateElements (arr) {

    let sum = 0;
    let inverse = 0
    let concat = ''

    for (const el of arr) {
        
        sum += el
        inverse += 1/el
        concat += el
    }
    
    console.log(sum)
    console.log(inverse)
    console.log(concat)

}

aggregateElements ([1, 2, 3])
console.log('-----')
aggregateElements([2, 4, 8, 16])