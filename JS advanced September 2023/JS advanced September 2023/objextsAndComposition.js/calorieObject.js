function calorieObject(arr) {


    let myObj = {}
    for (let i = 0; i < arr.length; i += 2) {
        let key = arr[i]
        let value = Number(arr[i + 1])
        myObj[key] = value
    }
return myObj
    
}

console.log(calorieObject(['Yoghurt', '48', 'Rise', '138',

    'Apple', '52']))