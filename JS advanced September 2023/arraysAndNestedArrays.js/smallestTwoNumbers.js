function smallestTwoNumbers (input) {

    let resultArr = []

    input.sort((a, b )=> a - b)
    
    for (let i = 0; i < 2; i++) {
        let numToPrint = input[i]
        resultArr.push(numToPrint)
    }
console.log(resultArr.join(' '))
}

smallestTwoNumbers ([30, 15, 50, 5])