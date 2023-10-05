function previousDay (year, month, day) {

    let curDate = new Date (year, month - 1, day)
    curDate.setDate(curDate.getDate() - 1)
    
    console.log(`${curDate.getFullYear()}-${curDate.getMonth() + 1}-${curDate.getDate()}`)
    

}

previousDay (2016, 9, 30)
console.log('--------')
previousDay (2015, 5, 10)
console.log('--------')
previousDay (2021, 4, 21)
console.log('--------')
previousDay (2014, 11, 9)