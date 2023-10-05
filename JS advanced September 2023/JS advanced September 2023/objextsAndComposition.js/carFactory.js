function carFactory(data) {

    wheels = []
let result = {
    model: data.model,
    wheels
    
}

if (data.power <= 90) {
    result.engine = {
        power: 90,
        volume: 1800
    }
    
} else if (data.power > 90 && data.power <= 120) {
    result.engine = {
        power: 120,
        volume: 2400
    }
} else {
    result.engine = {
        power: 200,
        volume: 3500
    }
}


if (data.carriage == 'hatchback') {
    result.carriage = {
        type: 'hatchback',
        color: data.color
    }
} else if (data.carriage == 'coupe') {
    result.carriage = {
        type: 'coupe',
        color: data.color
    }
}


if (data.wheelsize % 2 !== 0) {
    for (let i = 0; i < 4; i++) {
        wheels.push(data.wheelsize)
       result.wheels = wheels
    }
       
} else {
    for (let i = 0; i < 4; i++) {
        wheels.push(data.wheelsize - 1)
        result.wheels = wheels
    }
    
}

// {model, power, color, carriage, wheelsize}
return result

}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}))
console.log('-----')
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
})