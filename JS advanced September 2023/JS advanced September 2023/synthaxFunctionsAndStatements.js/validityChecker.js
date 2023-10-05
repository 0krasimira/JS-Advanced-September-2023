function validityChecker(x1, y1, x2, y2) {

    let xDistance = x1 - x2
    let yDistance = y1 - y2
    let combinedDistance = Math.sqrt(xDistance**2 + yDistance**2)

    // let isValid = true

    let comparisons = []

    comparisons.push(`{${x1}, ${y1}} to {0, 0}`)
    comparisons.push(`{${x2}, ${y2}} to {0, 0}`)
    comparisons.push(`{${x1}, ${y1}} to {${x2}, ${y2}}`)



    for (let el of comparisons) {
        switch (el) {
            case `{${x1}, ${y1}} to {0, 0}`:
                if(Number.isInteger(yDistance)) {
                    console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
                } else {
                    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
                }
                break;

            case `{${x2}, ${y2}} to {0, 0}`:
                if(Number.isInteger(xDistance)) {
                    console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
                } else {
                    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
                }
                break;

            case `{${x1}, ${y1}} to {${x2}, ${y2}}`:
                if(Number.isInteger(combinedDistance)) {
                    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
                } else {
                    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
                }
                break;

        }
    }

    // if(Number.isInteger(distance)) {
    //     console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    // } else {
    //     console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    // }

}
validityChecker(3, 0, 0, 4)
console.log('-----')
validityChecker(2, 1, 1, 1)