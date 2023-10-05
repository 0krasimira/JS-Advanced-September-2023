function addAndRemoveElements (input) {

    let arr = []
    for (let i = 0; i < input.length; i++) {
        let command = input[i]
        let el = i + 1
        if (command == 'add') {
            arr.push(el)
        } else if (command == 'remove') {
            arr.pop(el)
            
        } 
    }
    if (arr.length <= 0) {
        console.log('Empty')
    } else {
    console.log(arr.join('\n'))
    }

}

addAndRemoveElements (['add',
'add',
'add',
'add'])
console.log('---')
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add'])
console.log('--')
addAndRemoveElements(['remove', 'remove', 'remove'])