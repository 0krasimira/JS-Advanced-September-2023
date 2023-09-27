function stringLength (input1, input2, input3) {

    let overallLength = input1.length + input2.length + input3.length
    console.log(overallLength)

    let itemsCount = 3

    let mean = Math.floor(overallLength / itemsCount)
    console.log(mean)
}

stringLength ('chocolate', 'ice cream', 'cake')
console.log('--------')
stringLength ('pasta', '5', '22.3')