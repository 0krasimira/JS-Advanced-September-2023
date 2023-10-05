function equalNeighbours(matrix) {

    let counter = 0;
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        for (let j = 0; j < row.length; j++) {
            let column = row[j];
 
            if (i !== matrix.length - 1) {
                if (column === row[j + 1]) {
                    counter++;
                }
                if (column === matrix[i + 1][j]) {
                    counter++;
                }
            }
            else if (column === row[j + 1] || column === matrix[i][j + 1]) {
                counter++;
            }
        }
    }
    console.log(counter);
}
equalNeighbours(
    [
        ['2', '3', '4', '7', '0'],
        ['4', '0', '5', '3', '4'],
        ['2', '3', '5', '4', '2'],
        ['9', '8', '7', '5', '4']])
console.log('---')
equalNeighbours([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']])