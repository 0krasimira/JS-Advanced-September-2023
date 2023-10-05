function largestNumber(n1, n2, n3) {

    let arr = []
    arr.push(n1)
    arr.push(n2)
    arr.push(n3)

    

     let sorted = arr.sort((a, b) => a - b)
     let largestNum = sorted.pop()

     console.log(`The largest number is ${largestNum}.`)
}

largestNumber (5, -3, 16)
console.log('--------')
largestNumber(-3, -5, -22.5)