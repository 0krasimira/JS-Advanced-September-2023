function cookingByNumbers(startingPoint, op1, op2, op3, op4, op5) {

    startingPoint = Number(startingPoint)
    let num = startingPoint
    
    let list = []
    list.push(op1)
    list.push(op2)
    list.push(op3)
    list.push(op4)
    list.push(op5)


    for (let i = 0; i < list.length; i++) {
        let operation = list[i]

        switch (operation) {
            case 'dice':
            num = Math.sqrt(num)
                break;
            case 'spice':
                num += 1
                break;
            case 'chop':
                num /= 2
                break;
            case 'bake':
                num *= 3
                break;
            case 'fillet':
                num -= num * 0.2
                break;

        }
        console.log(num)
    }

}

// cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
console.log('---')
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')