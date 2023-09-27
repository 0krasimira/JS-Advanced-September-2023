function evenPositionElements (input) {

    let result = []
    
    for (let i = 0; i < input.length; i++) {
        let el = input[i]
    
        if (i % 2 == 0) {
            result.push(el)
        }
    }
    
    console.log(result.join(' '))
    

}

evenPositionElements (['20', '30', '40', '50', '60'])