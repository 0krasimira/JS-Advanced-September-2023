function biggestElement (matrix) {

    let arr = []

    for (let el of matrix) {
        el.sort((a, b) => b - a)
        for (let num of el) {
            arr.push(num)
        }
        
    }

    let sorted = arr.sort((a, b) => b - a)
    let numToPrint = sorted.shift()
    return numToPrint
}

console.log(biggestElement ([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]))