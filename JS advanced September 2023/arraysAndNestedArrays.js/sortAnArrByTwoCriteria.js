function sortAnArrByTwoCriteria (arr) {

    
    let twoCriteria = (a, b) => a.length - b.length || a.localeCompare(b)
    arr.sort(twoCriteria)
    console.log(arr.join('\n'))
}

sortAnArrByTwoCriteria (['alpha', 'beta', 'gamma'])
console.log('---')
sortAnArrByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
console.log('---')
sortAnArrByTwoCriteria (['test', 'Deny', 'omen', 'Default'])