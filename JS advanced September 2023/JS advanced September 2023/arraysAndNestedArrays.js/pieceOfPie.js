function pieceOfPie (arr, target1, target2) {

  

    let slicedd = arr.slice(arr.indexOf(target1), arr.indexOf(target2) + 1)
    
    return slicedd
}

console.log(pieceOfPie (['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'))