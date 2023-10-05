function squareOfStars(n) {

    
    let res = ''
    if (n !== 'number') {
        n === 5
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            res += '* '


        }
        res += '\n'
    }
    console.log(res)
}

squareOfStars(1)
console.log('-----')
squareOfStars(2)
console.log('-----')
squareOfStars(5)
console.log('-----')
squareOfStars(7)