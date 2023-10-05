function roadRadar(speed, areaType) {

    let limit = 0
    let status = ''
    let difference = 0

    switch (areaType) {
        case 'city':
        limit = 50
        if (limit >= speed) {
            console.log(`Driving ${speed} km/h in a ${limit} zone`)
        } else {
            difference = speed - limit
            if (difference <= 20) {
                status = 'speeding'
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            } else if (difference > 20 && difference <= 40) {
                status = 'excessive speeding'
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            } else if (difference > 40) {
                status = 'reckless driving'
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            }
           
        }
            break;

        case 'residential':
        limit = 20
        if (limit >= speed) {
            console.log(`Driving ${speed} km/h in a ${limit} zone`)
        } else {
            difference = speed - limit
            if (difference <= 20) {
                status = 'speeding'
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            } else if (difference > 20 && difference <= 40) {
                status = 'excessive speeding'
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            } else if (difference > 40) {
                status = 'reckless driving'
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            }
        }
            break;

        case 'interstate':
        limit = 90
        if (limit >= speed) {
            console.log(`Driving ${speed} km/h in a ${limit} zone`)
        } else {
            difference = speed - limit
            if (difference <= 20) {
                status = 'speeding'
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            } else if (difference > 20 && difference <= 40) {
                status = 'excessive speeding'
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            } else if (difference > 40) {
                status = 'reckless driving'
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            }
        }
            break;

        case 'motorway':
        limit = 130
        if (limit >= speed) {
            console.log(`Driving ${speed} km/h in a ${limit} zone`)
        } else {
            difference = speed - limit
            if (difference <= 20) {
                status = 'speeding'
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            } else if (difference > 20 && difference <= 40) {
                status = 'excessive speeding'
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            } else if (difference > 40) {
                status = 'reckless driving'
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            }
            break;

    }
}

}

roadRadar(40, 'city')
console.log('---')
roadRadar(21, 'residential')
console.log('---')
roadRadar(120, 'interstate')
console.log('---')
roadRadar(200, 'motorway')
console.log('---')