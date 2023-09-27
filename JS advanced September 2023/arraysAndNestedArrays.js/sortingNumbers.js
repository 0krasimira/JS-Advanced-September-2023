function sortingNumbers (arr) {

    arr = arr.sort((a, b) => a - b)

    
    for(let i = 0; i < arr.length; i+=2) {
       let el = arr.pop()
       arr.splice(i+1, 0, el);
    }
    return arr
}





console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))