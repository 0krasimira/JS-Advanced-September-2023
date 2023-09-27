function negativePositiveNumbers (input) {

    let resultArr = []
    for (let el of input) {
        if(el < 0) {
            resultArr.unshift(el)
        } else {
            resultArr.push(el)
        }
    }

for (const el of resultArr) {
    console.log(el)
}
}

negativePositiveNumbers ([7, -2, 8, 9])

