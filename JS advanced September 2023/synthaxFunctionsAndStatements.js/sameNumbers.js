function sameNumbers(num) {

    
let numAsStr = num.toString()

let curEl = numAsStr[0]
let result = Number(curEl)
let isTrue = true

for (let i = 1; i < numAsStr.length; i++) {
    let nextEl = numAsStr[i]
    
    if (curEl == nextEl) {
        isTrue = true
        
    } else {
        isTrue = false
    }
    curEl = Number(curEl)
    nextEl = Number(nextEl)
    result += nextEl
}  

if (isTrue) {
    console.log('true')
} else {
    console.log(false)
}
console.log(result)

}

sameNumbers(2222222)
console.log('----------')
sameNumbers(1234)

