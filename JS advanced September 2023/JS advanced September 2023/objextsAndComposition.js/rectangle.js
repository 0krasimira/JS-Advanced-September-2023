function rectangle(width, height, color) {

    
    function calcArea() {
        let area = Number(width) * Number(height)
        return area
    } calcArea()


    
    return {
        calcArea, 
        width,
        height,
        color: color.replace(color[0], color[0].toUpperCase())

    }
    
}

let rect = rectangle(4, 5, 'red');

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());