function extractSequence (arr) {

    let newArr = [arr[0]]
    

for (let i = 0; i < arr.length; i++) {
    let curEl = arr[i]
    let nextEl = arr[i + 1]

    // if (isNaN(nextEl)) {
    //     return newArr;
    // }
    
    if (nextEl >= curEl) {
        newArr.push(nextEl)
    }

}
return newArr
}

console.log(extractSequence ([1, 3, 8, 4, 10, 12, 3, 2, 24]))
    console.log('---')
    extractSequence ([1, 2, 3, 4])
    console.log('---')
    extractSequence([20, 3, 2, 15, 6, 1])