function timeToWalk (stepsCount, footLengthInMetres, speedKmPerHr) {

    let fullDistanceInMetres = stepsCount * footLengthInMetres
    let speedMperS = speedKmPerHr / 3.6

    totalTimeInSec = fullDistanceInMetres / speedMperS
    let breaksCount = Math.floor(fullDistanceInMetres / 500)

    let totalNeededTime = totalTimeInSec + (breaksCount * 60)
    let minutes = Math.floor(totalNeededTime / 60)
    let hours = Math.floor(totalNeededTime / 3600)
    let seconds = Math.round(totalNeededTime - (minutes * 60))
    // console.log(`${hours}:${minutes}:${seconds}`)
    
    let hrsToPrint = hours < 10 ? `0${hours}` : `${hours}`
    let minsToPrint = (minutes % 60) + breaksCount
    minsToPrint = minutes < 10 ? `0${minutes}` : `${minutes}`
    let secondsToPrint = seconds < 10 ? `0${seconds}` : `${seconds}`
    
    console.log(`${hrsToPrint}:${minsToPrint}:${secondsToPrint}`)
}

timeToWalk (4000, 0.60, 5)
console.log('-----')
timeToWalk(2564, 0.70, 5.5)
