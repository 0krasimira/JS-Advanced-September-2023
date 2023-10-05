function sumOfNumbersNtoM (m, n) {
    let mNum = Number(m)
    let nNum = Number(n)
    let result = 0

    for (let i = mNum; i <= nNum; i++) {
        result += i
    }

    console.log(result)
}

sumOfNumbersNtoM ('1', '5')
console.log('---------')
sumOfNumbersNtoM('-8', '20')