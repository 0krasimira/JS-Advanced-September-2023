function daysInAMonth (month, year) {

    let days = 0;
    let date = new Date(year, month, days)
    let daysCount = date.getDate()
    console.log(daysCount)

}

daysInAMonth (1, 2012)
console.log('-----')
daysInAMonth(2, 2021)