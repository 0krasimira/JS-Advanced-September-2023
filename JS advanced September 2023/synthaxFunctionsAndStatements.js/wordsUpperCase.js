function wordsUpperCase (str) {

    let pattern = /[^a-zA-Z0-9]+/gm

    
    let wordsAsArr = str.split(pattern)
    let result = []
    

    for (let el of wordsAsArr) {
        el = el.toUpperCase()
        result.push(el)
    }

    if(!result[result.length - 1]) {
        result.pop()
    }
    console.log(result.join(', '))
}

wordsUpperCase ('Hi, how are you?')
console.log('---') 
wordsUpperCase('Functions in JS can be nested, i.e. hold other functions')