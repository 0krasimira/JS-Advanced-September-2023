function diagonalSums (matrix) {

    let result1arr = []
    let result2arr = []
    for (let i = 0; i < matrix.length; i++) {

        result1arr.push(matrix[i][i])
        result2arr.push(matrix[i][matrix.length - 1 - i])
    }

    let result1 = 0
    for (let el of result1arr) {
        result1 += el
    }

    let result2 = 0
    for (let el of result2arr) {
        result2 += el
    }

    let finalArr = [result1, result2]

    console.log(finalArr.join(' '))
}

diagonalSums ([[20, 40],[10, 60]]) 
console.log('---')
diagonalSums ([[3, 5, 17],[-1, 7, 14], [1, -8, 89]])