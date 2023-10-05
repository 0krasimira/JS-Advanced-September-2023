function greatestCommonDivisor (n1, n2) {


    n1 = Math.abs(n1)
    n2 = Math.abs(n2)
    let t = 0

    while(n2) {
         t = n2;
        n2 = n1 % n2;
        n1 = t;
      }

console.log(t)
}

greatestCommonDivisor (15, 5)
console.log('---------')
greatestCommonDivisor(2154, 458)