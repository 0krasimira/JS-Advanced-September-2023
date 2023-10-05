function processOddPositions(input) {

    let result = []
    for (let i = 0; i < input.length; i++) {
        if (i % 2 !== 0) {
            result.push(input[i])
        }
    } 
    
    
    
    let sorted = result.reverse().map((x) => x = x * 2)

    return sorted
}

console.log(processOddPositions([10, 15, 20, 25]))