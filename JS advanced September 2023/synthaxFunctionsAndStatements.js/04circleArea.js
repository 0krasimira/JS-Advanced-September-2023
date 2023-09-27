function circleArea (input) {

    
    if (typeof input === 'number') {
        let radius = Number(input)
        
        let pie = Math.PI
        
        let area = (radius * radius * pie)
        
        console.log(area.toFixed(2))
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`)
    }

}

circleArea (5)
console.log('-------')
circleArea('name')