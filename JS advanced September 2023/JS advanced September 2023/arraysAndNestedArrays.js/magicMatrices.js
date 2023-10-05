function magicMatrices(matrix) {

let first = 0
let second = 0
let third = 0

let firstIndex = 0
let secondIndex = matrix[0].length - 1
let thirdIndex = matrix[0].length - 2

matrix.forEach(element => {
    first += element[firstIndex]
    second += element[secondIndex]
    third += element[thirdIndex]
});

if (first == second && second == third) {
    console.log('true')
} else {
    console.log('false')
}

}

magicMatrices([
            [4, 5, 6], 
            [6, 5, 4], 
            [5, 5, 5]])
console.log('---')
magicMatrices([
            [11, 32, 45], 
            [21, 0, 1], 
            [21, 1, 1]])
console.log('---')
magicMatrices([
            [1, 0, 0], 
            [0, 0, 1], 
            [0, 1, 0]])